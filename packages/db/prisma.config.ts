import path from "node:path";

import dotenv from "dotenv";
import { defineConfig, env } from "prisma/config";

dotenv.config({
  path: "../../apps/web/.env",
});

export default defineConfig({
  schema: path.join("prisma", "schema"),
  migrations: {
    path: path.join("prisma", "migrations"),
  },
  datasource: {
    // The Prisma CLI (migrate dev/deploy, db push, studio) must talk to the
    // direct, non-pooled connection — pgbouncer breaks migration advisory
    // locks. The runtime client uses the pooled DATABASE_URL via the Neon
    // adapter (see src/index.ts); this URL is CLI-only.
    url: env("DATABASE_URL_DIRECT"),
  },
});
