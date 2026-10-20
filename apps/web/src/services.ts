import { type Database, createPrismaClient } from "@polytik/db";

import { ENV } from "./env.server";

export function getDb(): Database {
  return createPrismaClient(ENV);
}
