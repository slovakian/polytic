import {
  chat,
  chatParamsFromRequest,
  createModel,
  extendAdapter,
  toServerSentEventsResponse,
} from "@tanstack/ai";
import { createOpenRouterText } from "@tanstack/ai-openrouter";
import { createFileRoute } from "@tanstack/react-router";

import { ENV } from "@/env.server";
import { CHAT_MODELS, type ChatModelId, DEFAULT_CHAT_MODEL, chatModelIdSchema } from "@/lib/models";
import { SYSTEM_PROMPT } from "@/lib/prompt";

const openRouterText = extendAdapter(
  createOpenRouterText,
  CHAT_MODELS.map((model) => createModel(model.id, ["text"])),
);

// OpenRouter tries these when the chosen model is rate-limited. The adapter only
// accepts fallback ids from its bundled model catalog, so newer pool models can't be listed.
const FALLBACK_MODELS = [
  "nvidia/nemotron-3.5-lightning:free",
  "google/gemma-4-26b-a4b-it:free",
  "nvidia/nemotron-3-ultra-550b-a55b:free",
] as const satisfies ReadonlyArray<ChatModelId>;

export { SYSTEM_PROMPT };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const params = await chatParamsFromRequest(request);

        const model = chatModelIdSchema
          .catch(DEFAULT_CHAT_MODEL)
          .parse(params.forwardedProps.model);

        const fallbacks = FALLBACK_MODELS.filter((candidate) => candidate !== model).slice(0, 2);

        const abortController = new AbortController();

        const stream = chat({
          adapter: openRouterText(model, ENV.OPENROUTER_API_KEY),
          messages: params.messages,
          modelOptions: { models: fallbacks },
          systemPrompts: [SYSTEM_PROMPT],
          threadId: params.threadId,
          runId: params.runId,
          abortController,
        });

        return toServerSentEventsResponse(stream, { abortController });
      },
    },
  },
});
