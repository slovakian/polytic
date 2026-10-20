import { type Database, createPrismaClient } from "@polytic/db";

import { ENV } from "./env.server";

export function getDb(): Database {
  return createPrismaClient(ENV);
}
