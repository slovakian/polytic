import { z } from "zod";

export const CHAT_MODELS = [
  {
    id: "minimax/minimax-m3.1-flash:free",
    name: "MiniMax M3.1 Flash",
    lab: "MiniMax",
    description: "Fast, sharp reasoning. The default.",
  },
  {
    id: "nvidia/nemotron-3-ultra-550b-a55b:free",
    name: "Nemotron 3 Ultra",
    lab: "NVIDIA",
    description: "The largest free model. Slower, more thorough.",
  },
  {
    id: "nvidia/nemotron-3.5-super-vl:free",
    name: "Nemotron 3.5 Super",
    lab: "NVIDIA",
    description: "Balanced depth and speed.",
  },
  {
    id: "nvidia/nemotron-3.5-lightning:free",
    name: "Nemotron 3.5 Lightning",
    lab: "NVIDIA",
    description: "Quick replies.",
  },
  {
    id: "google/gemma-4-26b-a4b-it:free",
    name: "Gemma 4 26B",
    lab: "Google",
    description: "Direct answers without visible reasoning.",
  },
] as const;

export type ChatModelId = (typeof CHAT_MODELS)[number]["id"];

export const DEFAULT_CHAT_MODEL: ChatModelId = "minimax/minimax-m3.1-flash:free";

export const chatModelIdSchema = z.enum(CHAT_MODELS.map((model) => model.id));
