import { z } from "zod";

export const compactionStartedSchema = z.object({
  before: z.number().optional(),
  messagesBefore: z.number().optional(),
  maxTokens: z.number().optional(),
  strategyKey: z.string().optional(),
  reason: z.string().optional(),
});

export const compactionStateSchema = z.object({
  before: z.number().optional(),
  after: z.number().optional(),
  messagesBefore: z.number().optional(),
  messagesAfter: z.number().optional(),
  maxTokens: z.number().optional(),
  strategyKey: z.string().optional(),
});

export const compactionEndedSchema = z.object({
  after: z.number().optional(),
  messagesAfter: z.number().optional(),
  durationMs: z.number().optional(),
  strategyKey: z.string().optional(),
  reason: z.string().optional(),
});

export type CompactionStartedEvent = z.infer<typeof compactionStartedSchema>;

export type CompactionStateEvent = z.infer<typeof compactionStateSchema>;

export type CompactionEndedEvent = z.infer<typeof compactionEndedSchema>;
