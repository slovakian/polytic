import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as Command from "alchemy/Command";
import * as GitHub from "alchemy/GitHub";
import * as Neon from "alchemy/Neon";
import * as Output from "alchemy/Output";
import * as Config from "effect/Config";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import "varlock/auto-load";

// One Neon project per stage. Migrations need the direct (non-pooled) URL for
// Prisma's advisory locks; the Worker uses the pooled one.
const database = Effect.gen(function* () {
  const project = yield* Neon.Project("database", { region: "aws-us-east-1" });
  const directUrl = project.connectionUri.pipe(Output.map(Redacted.make));

  const migrations = yield* Command.Exec("database-migrations", {
    command: "bun run db:deploy",
    cwd: "../../packages/db",
    env: {
      // Without clearing it, the child's varlock reuses this process's resolved env
      // and ignores these URLs, migrating whatever database apps/web/.env names.
      __VARLOCK_ENV: "",
      DATABASE_URL: directUrl,
      DATABASE_URL_DIRECT: directUrl,
    },
    memo: { include: ["prisma/migrations/**", "prisma/schema/**"] },
  });

  // Reading the migration hash makes the Worker deploy only after migrations apply.
  const pooledUrl = Output.all(project.pooledConnectionUri, migrations.hash).pipe(
    Output.map(([url]) => Redacted.make(url)),
  );

  return { project, pooledUrl };
});

const website = (databaseUrl: Output.Output<Redacted.Redacted<string>>) =>
  Cloudflare.Website.Vite(
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
          DATABASE_URL: databaseUrl,
          OPENROUTER_API_KEY: Config.Redacted("OPENROUTER_API_KEY"),
        },
        dev: {
          port: 3001,
        },
      };
    }),
  );

export type WebEnv = Cloudflare.InferEnv<ReturnType<typeof website>>;

export default Alchemy.Stack(
  "polytic",
  {
    providers: Layer.mergeAll(
      Cloudflare.providers(),
      Command.providers(),
      GitHub.providers(),
      Neon.providers(),
    ),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const { project, pooledUrl } = yield* database;
    const web = yield* website(pooledUrl);
    const pullRequest = yield* Config.String("PULL_REQUEST").pipe(Config.withDefault(""));

    if (pullRequest !== "") {
      const commit = yield* Config.String("GITHUB_SHA").pipe(Config.withDefault("unknown"));

      yield* GitHub.Comment("preview-comment", {
        owner: "slovakian",
        repository: "polytic",
        issueNumber: Number(pullRequest),
        body: Output.interpolate`
          ## 🌈 Preview is live!

          | | Resource | Link |
          | --- | --- | --- |
          | 🚀 | Website | ${web.url} |
          | ☁️ | Cloudflare Worker \`${web.workerName}\` | [Dashboard](https://dash.cloudflare.com/${web.accountId}/workers/services/view/${web.workerName}/production) |
          | 🐘 | Neon database \`${project.projectName}\` | [Console](https://console.neon.tech/app/projects/${project.projectId}) |

          🔁 Built from \`${commit.slice(0, 7)}\`. Updates on every push. 🧹 Torn down when this PR closes.
        `,
      });
    }

    return {
      web: web.url,
    };
  }),
);
