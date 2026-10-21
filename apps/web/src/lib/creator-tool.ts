import { toolDefinition } from "@tanstack/ai";
import { z } from "zod";

import { type CreatorCategory, getCreatorFacts } from "./creator-facts";

export const creatorCategorySchema = z
  .enum(["all", "overview", "polytic_party", "projects", "philosophy", "interests", "contact"])
  .default("all")
  .describe("The specific category of facts about Jason Procka to retrieve.");

export const CREATOR_TOOL_NAME = "get_creator_info";
export const CREATOR_TOOL_LABEL = "creator info";

export const creatorTool = toolDefinition({
  name: CREATOR_TOOL_NAME,
  description:
    "Retrieve verified, plain, static facts about Jason Procka (the creator of Polytic Party and Pauly). Includes his background, role, software projects, reasons for creating Polytic Party, philosophy on politics and human creativity, hobbies, and public contact information.",
  metadata: {
    label: CREATOR_TOOL_LABEL,
  },
  inputSchema: z.object({
    category: creatorCategorySchema,
  }),
}).server(async ({ category }: { category?: CreatorCategory } = {}) => {
  return getCreatorFacts(category ?? "all");
});
