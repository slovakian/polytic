import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as Command from "alchemy/Command";
import * as Neon from "alchemy/Neon";
import * as Output from "alchemy/Output";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import "varlock/auto-load";

const managedDatabase = Effect.gen(function* () {
  const database = yield* Neon.Project("database", {});
  const runtimeUrl = database.pooledConnectionUri.pipe(Output.map(Redacted.make));
  const migrationUrl = database.connectionUri.pipe(Output.map(Redacted.make));

  yield* Command.Exec("database-migrations", {
    command: "bun run db:migrate:deploy",
    cwd: "../../packages/db",
    env: { DATABASE_URL: migrationUrl },
    memo: {
      include: ["prisma/migrations/**", "prisma/schema/**"],
    },
  });

  return {
    runtimeEnv: { DATABASE_URL: runtimeUrl },
  };
});

export const databaseEnv = managedDatabase.pipe(Effect.map(({ runtimeEnv }) => runtimeEnv));

export const databaseBindings = {
  DATABASE_URL: databaseEnv.pipe(Effect.map(({ DATABASE_URL }) => DATABASE_URL)),
};

export const databaseProviders = Layer.mergeAll(Command.providers(), Neon.providers());

export const web = Cloudflare.Website.Vite("web", {
  rootDir: "../../apps/web",
  compatibility: {
    flags: ["nodejs_compat"],
  },
  env: {
    ...databaseBindings,
  },
  dev: {
    port: 3001,
  },
});

export type WebEnv = Cloudflare.InferEnv<typeof web>;

export default Alchemy.Stack(
  "polytik",
  {
    providers: Layer.mergeAll(Cloudflare.providers(), databaseProviders),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const webWorker = yield* web;

    return {
      web: webWorker.url,
    };
  }),
);
