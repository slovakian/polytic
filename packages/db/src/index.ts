import { env } from "@polytik/env/server";
import { PrismaNeon } from "@prisma/adapter-neon";

import { PrismaClient } from "../prisma/generated/client";

export function createPrismaClient() {
  const adapter = new PrismaNeon({
    connectionString: env.DATABASE_URL,
  });

  return new PrismaClient({ adapter });
}
