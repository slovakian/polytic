import * as Alchemy from "alchemy";
import * as Cloudflare from "alchemy/Cloudflare";
import * as Config from "effect/Config";
import * as Effect from "effect/Effect";
import "varlock/auto-load";

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
        DATABASE_URL: Config.Redacted("DATABASE_URL"),
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
    providers: Cloudflare.providers(),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const webWorker = yield* web;

    return {
      web: webWorker.url,
    };
  }),
);
