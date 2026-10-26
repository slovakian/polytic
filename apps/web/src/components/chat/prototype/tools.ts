import { toolDefinition } from "@tanstack/ai";
import { z } from "zod";

export const PAGINATE_FLOW_TOOL_NAME = "paginate_flow";
export const SURFACE_TENSION_TOOL_NAME = "surface_tension";
export const UNLOCK_RESULT_TOOL_NAME = "unlock_result";

/**
 * Isomorphic tool: The agent calls this tool to transition the grilling flow
 * into a new structured page/chapter.
 */
export const paginateFlowTool = toolDefinition({
  name: PAGINATE_FLOW_TOOL_NAME,
  description:
    "Manually create a fresh page/chapter in the grilling session view when shifting between diagnostic phases or themes. Enables users to page back to review history while only chatting on the active page.",
  metadata: {
    label: "create chapter page",
  },
  inputSchema: z.object({
    chapterNumber: z.number().describe("The chapter index (1-based)"),
    title: z.string().describe("Descriptive title of the new grilling chapter"),
    summary: z.string().optional().describe("Summary of the previous chapter to archive"),
    principleBridge: z.string().optional().describe("The normative principle being tested across the bridge"),
  }),
}).client(async ({ chapterNumber, title, summary, principleBridge }) => {
  return {
    success: true,
    pageCreated: chapterNumber,
    title,
    summary,
    principleBridge,
    timestamp: new Date().toISOString(),
  };
});

/**
 * Isomorphic tool: The agent calls this tool when confronting the user
 * with a live Tension between two of their previous statements.
 */
export const surfaceTensionTool = toolDefinition({
  name: SURFACE_TENSION_TOOL_NAME,
  description:
    "Surface an active tension or contradiction between two of the user's prior statements across dimensions to prompt one-click Tension triage.",
  metadata: {
    label: "surface tension",
  },
  inputSchema: z.object({
    id: z.string(),
    dimension: z.string(),
    statementA: z.string().describe("First prior user stance"),
    statementB: z.string().describe("Second colliding user stance"),
    dilemma: z.string().describe("The surgical question confronting the tension"),
  }),
}).client(async (args) => {
  return {
    tensionId: args.id,
    surfaced: true,
    status: "unresolved",
  };
});

/**
 * Isomorphic tool: The agent calls this tool when sufficient diagnostic evidence
 * (~10-12 turns) has been collected to unlock the Result page.
 */
export const unlockResultTool = toolDefinition({
  name: UNLOCK_RESULT_TOOL_NAME,
  description:
    "Signal that the first-pass grilling protocol is complete and the full political worldview Result page is ready for reveal.",
  metadata: {
    label: "unlock result",
  },
  inputSchema: z.object({
    ready: z.boolean(),
    turnsAnalyzed: z.number(),
    reason: z.string(),
  }),
}).client(async ({ ready, turnsAnalyzed, reason }) => {
  return {
    unlocked: ready,
    turnsAnalyzed,
    reason,
    timestamp: new Date().toISOString(),
  };
});
