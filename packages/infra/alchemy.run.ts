import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as Command from "alchemy/Command";
import * as Neon from "alchemy/Neon";
import * as Output from "alchemy/Output";
import * as Config from "effect/Config";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import "varlock/auto-load";

// One Neon project per stage. Migrations need the direct (non-pooled) URL for
// Prisma's advisory locks; the Worker uses the pooled one.
const databaseUrl = Effect.gen(function* () {
  const project = yield* Neon.Project("database", { region: "aws-us-east-1" });
  const directUrl = project.connectionUri.pipe(Output.map(Redacted.make));

  const migrations = yield* Command.Exec("database-migrations", {
    command: "bun run db:deploy",
    cwd: "../../packages/db",
    env: { DATABASE_URL: directUrl, DATABASE_URL_DIRECT: directUrl },
    memo: { include: ["prisma/migrations/**", "prisma/schema/**"] },
  });

  // Reading the migration hash makes the Worker deploy only after migrations apply.
  return Output.all(project.pooledConnectionUri, migrations.hash).pipe(
    Output.map(([pooledUrl]) => Redacted.make(pooledUrl)),
  );
});

export const web = Cloudflare.Website.Vite(
  "web",
  Effect.gen(function* () {
    const stage = yield* Alchemy.Stage;

    return {
      rootDir: "../../apps/web",
      domain: stage === "prod" ? "polytic.party" : undefined,
      compatibility: {
        flags: ["nodejs_compat"],
      },
      env: {
        DATABASE_URL: yield* databaseUrl,
        OPENROUTER_API_KEY: Config.Redacted("OPENROUTER_API_KEY"),
      },
      dev: {
        port: 3001,
      },
    };
  }),
);

export type WebEnv = Cloudflare.InferEnv<typeof web>;

export default Alchemy.Stack(
  "polytic",
  {
    providers: Layer.mergeAll(Cloudflare.providers(), Command.providers(), Neon.providers()),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const webWorker = yield* web;

    return {
      web: webWorker.url,
    };
  }),
);
