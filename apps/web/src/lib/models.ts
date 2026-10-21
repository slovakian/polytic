import { z } from "zod";

export const CHAT_MODELS = [
  {
    id: "minimax/minimax-m3.1-flash:free",
    name: "MiniMax M3.1 Flash",
    lab: "MiniMax",
    description: "Fast, sharp reasoning. The default.",
    contextLength: 1_000_000,
    maxCompactionTokens: 800_000,
    keepRecentTokens: 400_000,
  },
  {
    id: "nvidia/nemotron-3-ultra-550b-a55b:free",
    name: "Nemotron 3 Ultra",
    lab: "NVIDIA",
    description: "The largest free model. Slower, more thorough.",
    contextLength: 1_000_000,
    maxCompactionTokens: 800_000,
    keepRecentTokens: 400_000,
  },
  {
    id: "nvidia/nemotron-3.5-super-vl:free",
    name: "Nemotron 3.5 Super",
    lab: "NVIDIA",
    description: "Balanced depth and speed.",
    contextLength: 1_000_000,
    maxCompactionTokens: 800_000,
    keepRecentTokens: 400_000,
  },
  {
    id: "nvidia/nemotron-3.5-lightning:free",
    name: "Nemotron 3.5 Lightning",
    lab: "NVIDIA",
    description: "Quick replies.",
    contextLength: 1_000_000,
    maxCompactionTokens: 800_000,
    keepRecentTokens: 400_000,
  },
  {
    id: "google/gemma-4-26b-a4b-it:free",
    name: "Gemma 4 26B",
    lab: "Google",
    description: "Direct answers without visible reasoning.",
    contextLength: 262_144,
    maxCompactionTokens: 200_000,
    keepRecentTokens: 100_000,
  },
] as const;

export type ChatModelId = (typeof CHAT_MODELS)[number]["id"];

export const DEFAULT_CHAT_MODEL: ChatModelId = "minimax/minimax-m3.1-flash:free";

export const chatModelIdSchema = z.enum(CHAT_MODELS.map((model) => model.id));

export function getModelCompactionConfig(modelId: ChatModelId) {
  const model = CHAT_MODELS.find((m) => m.id === modelId);
  const maxTokens = model?.maxCompactionTokens ?? 200_000;
  const keepRecentTokens = model?.keepRecentTokens ?? Math.floor(maxTokens / 2);

  return { maxTokens, keepRecentTokens };
}
