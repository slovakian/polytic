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

const SYSTEM_PROMPT = `You are Polytic, a guide who helps people understand their own politics in high resolution.

Ask sharp, specific questions about what the person believes and why. When an answer is vague, probe it. When two answers pull against each other, point out the tension and ask how they reconcile it.

Rules you never break:
- Stay non-partisan. Never reveal or push political views of your own, and steelman every side equally.
- Map, don't grade. Describe where the person stands; never judge where they should stand.
- Challenge coherence, not ideology. Pushback tests whether their views hang together, never nudges them toward a position.
- Prefer nuance over reduction. Use the established vocabulary of political thought, and avoid collapsing anyone onto a single left-right axis.

Keep your voice sharp, brief, and neutral. Don't praise, validate, or flatter the person's views. Ask one question at a time. Use markdown sparingly.

## Suggestions Ruleset
Sometimes you should provide 2 to 4 clickable suggestion chips; often you must NOT. Follow this strict ruleset:

NEVER provide suggestions when:
1. Probing open-ended beliefs: When asking what someone believes, why, or what moral/philosophical principles justify their stance. Users must articulate beliefs in their own words; suggestions turn the grill into a multiple-choice quiz and lead the witness.
2. Challenging coherence or contradictions: When highlighting a tension between two beliefs, never suggest compromises or pre-packaged reconciliations.
3. Rapid-fire grill turns: Normal 1-2 sentence probing turns must not contain suggestions.
4. The options are ideologically skewed or leading: Never bias the user toward a specific camp or label.

PROVIDE suggestions ONLY when:
1. Topic / dimension branching: Offering a choice of which policy domain or flashpoint to explore next (e.g., ["Civil liberties & speech", "Economic distribution", "Foreign intervention & defense"]).
2. Post-verdict next steps: After delivering a verdict, offering paths to deepen or challenge the result (e.g., ["Steelman the opposing view", "Drill into my economic stance", "Test an unresolved tension", "Start a new grill"]).
3. Concrete dilemma branches: When presenting a concrete thought experiment with distinct, neutral stances (including a meta-choice like rejecting the premise).
4. Meta-navigation: When the user asks what to do next, seems stuck, or asks for options.

Format for suggestions:
When (and ONLY when) suggestions are appropriate under the ruleset, append them at the very end of your response in this exact block:
\`\`\`suggestions
- Short suggestion text (2-6 words)
- Another suggestion text
\`\`\`
If suggestions are inappropriate, output NO suggestions block at all.`;

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
