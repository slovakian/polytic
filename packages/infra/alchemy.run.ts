import alchemy from "alchemy";
import { TanStackStart, Worker } from "alchemy/cloudflare";
import { GitHubComment } from "alchemy/github";
import { CloudflareStateStore } from "alchemy/state";
import { config } from "dotenv";

config({ path: "./.env" });
config({ path: "../../apps/web/.env" });

const PROD_URL = "https://polytik.party";
const LOCAL_URL = "http://localhost:3001";

// Returns the canonical app URL for the given stage.
// Worker.DevUrl is an Alchemy sentinel resolved at deploy-time to the
// worker's own *.workers.dev URL — not a string we can compute here.
function resolveAppUrl(stage: string): string | Worker.DevUrl {
  if (stage === "prod") return PROD_URL;
  if (stage.startsWith("pr-")) return Worker.DevUrl;
  return LOCAL_URL;
}

const app = await alchemy("polytik", {
  stateStore: (scope) => new CloudflareStateStore(scope),
});

const appUrl = resolveAppUrl(app.stage);

export const web = await TanStackStart("web", {
  cwd: "../../apps/web",
  bindings: {
    DATABASE_URL: alchemy.secret.env.DATABASE_URL!,
    BETTER_AUTH_SECRET: alchemy.secret.env.BETTER_AUTH_SECRET!,
    APP_URL: appUrl,
  },
});

console.log(`Web    -> ${web.url}`);

if (process.env.PULL_REQUEST) {
  await GitHubComment("preview-comment", {
    owner: "slovakian",
    repository: "polytik",
    issueNumber: Number(process.env.PULL_REQUEST),
    body: `## Preview deployed

Your changes have been deployed to a preview environment:

**Website:** ${web.url}

Built from commit ${process.env.GITHUB_SHA?.slice(0, 7)}

---
<sub>This comment updates automatically with each push.</sub>`,
  });
}

await app.finalize();
