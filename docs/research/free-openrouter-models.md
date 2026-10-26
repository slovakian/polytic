# Free OpenRouter models for v1's grill: tool calling, limits, data policy, and hedging

> **Research ticket:** [Survey free OpenRouter models for tool calling, rate limits, and political hedging](https://github.com/slovakian/polytic/issues/31)
> **Feeds:** the model pool in `apps/web/src/lib/models.ts`, the ADR-0004 disclosure text, and the
> still-open rate-limiting and abuse design (ADR-0003, `docs/architecture.md`).
> **Builds on:** ADR-0003 (models via OpenRouter, curated pool), ADR-0004 (privacy and disclosure),
> ADR-0009 (v1 is the anonymous first visit), `docs/principles.md` §1 (Clinical Agnosticism).
> **Snapshot date:** 2026-10-26. Every live figure below (model list, parameters, uptime, status) was
> read from OpenRouter's public API on that day. Free-model lineups change week to week, so treat
> them as a snapshot and re-run the [method](#method) before relying on them.

## TL;DR (plain English)

- **The app's default model has already gone.** `minimax/minimax-m3.1-flash:free`, the default in
  `apps/web/src/lib/models.ts` (added 2026-10-20), was listed on OpenRouter on 2026-10-19. By
  2026-10-26 it had **no free endpoints left** and is no longer in the model list. Its paid version
  remains. Free models can disappear within a week, so the pool has to be checked automatically rather
  than set by hand.
- **There are 17 `:free` text models right now. 16 of them accept tools, but only 9 let us force a
  tool call** (`tool_choice: required`/named function). Only 5 advertise strict JSON-schema
  `structured_outputs`. One model in the current pool (Nemotron 3.5 Super VL) was degraded at snapshot time, and two other
  NVIDIA free models were down.
- **Rate limits are the binding constraint, not model quality.** Free models are capped **per account**
  at **20 requests/minute** and **50 requests/day** (1,000/day once the account has bought ≥10
  credits, all time). OpenRouter says extra keys or accounts **do not** raise this. At roughly 15–30
  model calls per grill (10–12 turns plus tool round-trips), 1,000/day supports only **about 35–65
  complete first visits a day**, and 20/min supports only a handful of people grilling at once.
- **Data policy: most free endpoints may use prompts to improve their models.** OpenRouter itself
  stores no prompts by default. But Google says Gemma on the Gemini API is free-tier only and
  "used to improve our products," and that human reviewers may read it. NVIDIA's free endpoints log
  use "to improve NVIDIA products and services". Thinking Machines' free tier may train on prompts.
  Only one free model in the list (`xingchen-agi/xing4.0-29b-a4b:free`, served by Phala) is on
  OpenRouter's zero-data-retention list. ADR-0004's "some of which may log it" understates this:
  **most of the useful pool may log and train on the conversation.**
- **Hedging and refusal vary widely between free models.** On SpeechMap's US "hard" set (2,120
  requests to write about contested political topics), Gemma 4 31B completes **85%**, while
  Nemotron 3 Ultra (in the current pool, described as "more thorough") completes **48%** and only
  **20% with reasoning on**. The wider literature agrees that chat-tuned LLMs lean left of centre on
  average, and that asking them to be neutral helps but does not remove it.
- **Suggested shortlist:** primary **Gemma 4 31B** (`google/gemma-4-31b-it:free`). Fallbacks are
  **Gemma 4 26B A4B** and **Nemotron 3.5 Lightning** (non-reasoning mode), then `openrouter/free` as a
  last resort. Drop MiniMax M3.1 Flash (gone) and demote Nemotron 3 Ultra (it refuses the most).
  Every pick needs a live tool-calling and hedging check before it is locked in. **No live test was
  run for this survey** (no API key was available in the worktree).

---

## Contents

1. [Method](#method)
2. [What the grill needs from a model](#what-the-grill-needs-from-a-model)
3. [The free-model landscape (snapshot)](#the-free-model-landscape-snapshot)
4. [Comparison table](#comparison-table)
5. [Rate limits and quotas](#rate-limits-and-quotas)
6. [Availability and churn](#availability-and-churn)
7. [Data policy and the ADR-0004 disclosure](#data-policy-and-the-adr-0004-disclosure)
8. [Political skew and RLHF hedging](#political-skew-and-rlhf-hedging)
9. [Recommended shortlist](#recommended-shortlist)
10. [Risks](#risks)
11. [Open questions for later tickets](#open-questions-for-later-tickets)
12. [Sources](#sources)

---

## Method

**Sources, in order of trust.**

1. **OpenRouter's live public API**, fetched 2026-10-26:
   - `GET https://openrouter.ai/api/v1/models` (467 models) filtered to ids ending `:free`, plus the
     `openrouter/free` router. From it: `supported_parameters`, `context_length`,
     `top_provider.max_completion_tokens`, `created`, `expiration_date`, modality.
   - `GET https://openrouter.ai/api/v1/models/<id>/endpoints` per free model. From it: serving
     provider, quantization, `status`, `uptime_last_30m`/`uptime_last_1d`, and `supports_tool_choice`
     (which of `none`/`auto`/`required`/named function each endpoint honours).
   - `GET https://openrouter.ai/api/v1/providers` for each provider's privacy-policy and terms URLs.
   - `GET https://openrouter.ai/api/v1/endpoints/zdr`: OpenRouter's list of zero-data-retention
     endpoints, 1,076 entries.
2. **OpenRouter documentation** (`/docs/*.md`, fetched 2026-10-26): Limits, Free Variant, Free Models
   Router, Model Fallbacks, Auto Exacto, Provider Logging, Data Collection, ZDR, Provider Routing,
   and the Guardrails API reference.
3. **Provider terms**, read in full where they mattered: Gemini API Additional Terms (updated
   2026-04-28), Gemini API pricing page, NVIDIA API Trial Terms of Service (PDF dated 2025-10-07), TML
   Free Research API Tier Privacy Notice (updated 2026-08-20).
4. **SpeechMap raw data** ([`xlr8harder/speechmap-data`](https://github.com/xlr8harder/speechmap-data),
   last pushed 2026-10-14). We computed compliance rates ourselves from the per-model `analysis/`
   files rather than reading them off the site.
5. **Peer-reviewed and lab-published political-bias research** (see [Political skew](#political-skew-and-rlhf-hedging)).

**Not done:** a live tool-calling or hedging test. No `OPENROUTER_API_KEY` was in the environment or in
any `.env` file in the worktree (only `.env.schema` files exist), so every tool-calling claim below is
**advertised capability**, not observed reliability. OpenRouter publishes a per-endpoint "Tool Call Error
Rate", but only on the model page's Performance tab (client-rendered), not in the public API, so we
could not read it.

## What the grill needs from a model

From `docs/architecture.md` ("Code enforces structure, the model does the talking") and
`docs/grilling-protocol.md`, the grill model must:

- **Call tools reliably.** The model proposes phase transitions and records Beliefs and Tensions
  through control tools, and guards in code decide. It is best if we can **force** a tool call
  (`tool_choice: "required"` or a named function) at the turns where the protocol requires one,
  not just hope for one (`auto`).
- **Produce structured output** for the Result (Labels, narrative, Tensions, Closest Thinkers, every
  Dimension). Either tools-with-a-schema or `response_format`/`structured_outputs` can do this.
  Strict JSON-schema enforcement (`structured_outputs`) is safer on small models.
- **Hold a long, coherent conversation** of 10–12 turns plus a second round, with a large system
  prompt (taxonomy and label library). Context of 128K or more is comfortable.
- **Not hedge, lecture or refuse** on contested and heterodox views (Clinical Agnosticism). This is
  the hardest property to buy, and the system prompt can only partly fix it.

## The free-model landscape (snapshot)

On 2026-10-26 OpenRouter listed **17 `:free` text-output models** plus the `openrouter/free` router.
(Two `google/lyria-3-*-preview` music models also have zero prices, but they are not chat models.)

**Not suitable for the grill, and why:**

- `nvidia/nemotron-3.5-content-safety:free`: a 4B guard (moderation) classifier, not a chat model.
- `liquid/lfm-2.5-2.6b:free`: 2.6B parameters, 8K maximum output. Too small for the grill.
- Coding-agent models: `cohere/north-mini-code:free`, `poolside/laguna-s-2.1:free`,
  `poolside/laguna-xs-2.1:free`, `recursive/flint-v1.0:free`. They are tuned for code, and Poolside's
  two free variants **expire 2026-10-31** (`expiration_date` in the API).
- `dots-studio/dots-3-note-preview:free`: a preview that **expires 2026-12-31**. It cannot force a tool
  call (`tool_choice` supports only `none`/`auto`).
- `thinkingmachines/inkling:free` and `inkling-small:free`: accept `tools` but honour **no**
  `tool_choice` mode at all. They are also on a "Free Research API Tier" that may train on prompts.
- `nvidia/nemotron-3-super-120b-a12b:free` (status −5, 0% uptime over 1 day) and
  `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free` (status −5, 21% over 1 day): **down** at
  snapshot time.

That leaves the candidates in the table below.

## Comparison table

Keys: **Tools** = `tools` in `supported_parameters`. **Force** = endpoint honours `tool_choice:
"required"` and a named function. **Schema** = `structured_outputs` (strict JSON schema).
**JSON** = `response_format`. **Up 1d** = `uptime_last_1d`. **SpeechMap** = share of the 2,120 US-hard
requests fully completed (C), hedged/evasive (E), or denied (D); "+R" = with reasoning on. Higher C
means less refusal and hedging. All rows are single-provider: no free model has more than one serving
endpoint.

| Model (`:free`)                     | In pool now?      | Context / max out | Tools    | Force          | Schema   | JSON     | Provider (quant.)     | Up 1d / status                           | Data policy (see below)                                                 | SpeechMap C / E / D                                                      | Notes                                                                                                                                                |
| ----------------------------------- | ----------------- | ----------------- | -------- | -------------- | -------- | -------- | --------------------- | ---------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `google/gemma-4-31b-it`             | no                | 262K / 32K        | yes      | yes            | no       | yes      | Google AI Studio      | 100% / ok                                | Google free tier: used to improve products; human review possible       | **84.8 / 0.6 / 14.6**; +R 82.3 / 0.9 / 16.8                              | Dense 31B, optional reasoning. Listed since 2026-04-02 (7 months).                                                                                   |
| `google/gemma-4-26b-a4b-it`         | yes               | 262K / 32K        | yes      | yes            | no       | yes      | Google AI Studio      | 100% / ok                                | as above                                                                | 76.3 / 0.4 / 23.3; +R **86.6** / 0.8 / 12.7                              | MoE, 3.8B active, fast. Listed since 2026-04-03. Same provider as the 31B, so outages are correlated.                                                |
| `nvidia/nemotron-3.5-lightning`     | yes               | 1M / 65K          | yes      | yes            | no       | no       | NVIDIA (nvfp4)        | 100% / ok                                | NVIDIA trial: logged to improve products; trial-only, no production use | **75.0** / 1.7 / 23.3; +R 42.4 / 3.0 / 54.7                              | 30B MoE, 3B active. Refuses far more with reasoning on.                                                                                              |
| `nvidia/nemotron-3-ultra-550b-a55b` | yes               | 1M / 65K          | yes      | yes            | no       | no       | NVIDIA                | 100% / ok                                | NVIDIA trial (as above)                                                 | 47.7 / 1.6 / 50.7; +R **19.5** / 1.0 / 79.5                              | Largest free model. Most refusals of any candidate, especially with reasoning on.                                                                    |
| `nvidia/nemotron-3.5-super-vl`      | yes               | 1M / 131K         | yes      | yes            | **yes**  | yes      | NVIDIA                | **84% / degraded (−2)**; 73% last 30 min | NVIDIA trial (as above)                                                 | not measured (Nemotron 3 Super 120B, its predecessor: 42.5 / 2.7 / 54.8) | Listed 2026-10-15. The only NVIDIA free model with strict schemas. Unstable at snapshot time.                                                        |
| `xingchen-agi/xing4.0-29b-a4b`      | no                | 262K / 236K       | yes      | no (auto only) | **yes**  | yes      | Phala                 | 99.9% / ok                               | **ZDR** (on OpenRouter's ZDR list)                                      | not measured                                                             | China Telecom (TeleAI). Listed 2026-10-16 (10 days). The only free ZDR candidate.                                                                    |
| `minimax/minimax-m3.1-flash`        | **yes (default)** | —                 | —        | —              | —        | —        | **no free endpoints** | gone                                     | —                                                                       | not measured (MiniMax M3: 27.0 / 4.8 / 68.2; +R 50.5 / 5.0 / 44.5)       | Free variant listed 2026-10-19 and gone by 2026-10-26. Paid variant remains.                                                                         |
| `openrouter/free` (router)          | no                | 200K              | filtered | filtered       | filtered | filtered | random free model     | n/a                                      | **whatever model it picks**                                             | n/a                                                                      | Picks a free model at random that supports the request's features. Useful only as a last resort, because voice and hedging change from turn to turn. |

**Reference points (not free):** on the same SpeechMap set, Grok 4.1 Fast (thinking) completes 95.7%
and Claude Sonnet 4.5 (thinking) 31.4% (20.2% evasive). SpeechMap's numbers measure willingness to
_write_ content, not even-handedness, so a low score does not mean "partisan". See the caveats below.

## Rate limits and quotas

From OpenRouter's [Limits](https://openrouter.ai/docs/api/reference/limits) page (fetched 2026-10-26):

| Credits purchased (all time) | Free-model requests / minute | Free-model requests / day |
| ---------------------------- | ---------------------------- | ------------------------- |
| fewer than 10                | 20                           | 50                        |
| at least 10                  | 20                           | 1,000                     |

- **Account-wide, not per key.** "Making additional accounts or API keys will not affect your rate
  limits, as we govern capacity globally." `GET /api/v1/key` returns a single
  `free_model_daily_requests {used, limit, remaining}` counter that covers all free models, so **the
  daily cap is shared across every `:free` model**. The page also says "we do however have different
  rate limits for different models, so you can share the load that way". Whether the 20/min cap is
  per model or per account is **not stated**; see [Open questions](#open-questions-for-later-tickets).
- **The higher tier starts one credit below the threshold**, to absorb top-up fees. It depends on
  credits purchased all time, not on the current balance. A **negative** balance can return 402 errors
  even on free models.
- **Upstream 429s are separate.** A free endpoint's provider can also rate-limit or run out of
  capacity, and that capacity is shared with every OpenRouter user of that free model. These errors
  carry `error.metadata.provider_code`. Since every free model has one provider, there is no
  same-model provider to fail over to. Only **model** fallbacks help.
- **Successful responses carry no `X-RateLimit-*` headers.** Only OpenRouter's own 429s do. To track
  quota before hitting it, poll `GET /api/v1/key`. A rate limit hit mid-stream arrives as an SSE
  chunk with `finish_reason: "error"`, not as an HTTP 429.
- **Fallbacks:** the `models` array tries the next model on rate limit, downtime or moderation
  refusal. A paid model in that list **is billed**. `openrouter/free` falls back only to free models.
  OpenRouter does not document whether each fallback attempt counts against the free-model daily cap.

**What this means for v1.** A grill is about 10–12 user turns. Each turn is at least one model call,
and more when the model calls tools (each tool result goes back for another completion), plus a Result
generation call and a possible second round. Assuming 15–30 calls per complete visit:

- **50/day (no credits bought): 2–3 complete visits a day.** Enough for development only.
- **1,000/day (≥10 credits bought): about 35–65 complete visits a day**, for the whole site.
- **20/min:** about one call every 3 seconds across all users. At one call every 20–40 seconds per
  active user, that is roughly **10–20 people grilling at the same moment** before 429s.

The roadmap's "light limits so no one exhausts the shared free quotas" is therefore the central
design problem, not a detail. Free models alone cannot serve a public launch that gets any traffic.

## Availability and churn

- **Lineup age.** Of the 17 free text models, **10 were added in the last 4 months** (7 in the last 3) and 3 in the last
  2 weeks (`recursive/flint-v1.0`, `xingchen-agi/xing4.0`, `nvidia/nemotron-3.5-super-vl`). The oldest
  is Nemotron 3 Super (2026-03-11), and it was down at snapshot time.
- **Observed disappearance.** MiniMax M3.1 Flash's free variant lasted **under a week** (listed
  2026-10-19; zero endpoints and delisted by 2026-10-26). The model id still resolves on the endpoints
  API with an empty `endpoints` array, so a request to it fails rather than silently routing elsewhere.
- **Announced expiry.** Some free variants carry an `expiration_date`: Poolside Laguna S/XS 2.1 on
  2026-10-31, Dots 3 Note Preview on 2026-12-31. The pool code should read this field.
- **Status at snapshot.** Nemotron 3 Super (status −5, 0% uptime over 1 day) and Nemotron 3 Nano Omni
  (−5, 21%) were down. Nemotron 3.5 Super VL was degraded (−2, 84% over 1 day). Every other candidate
  showed about 100%. These are single readings, not a time series.
- **Most stable so far:** the two **Gemma 4** free variants (7 months listed, 100% uptime at
  snapshot) and **Nemotron 3 Ultra** (about 5 months).
- **Single provider everywhere.** No free model has a second serving endpoint, so a provider outage
  is a model outage. Google (2 Gemma models) and NVIDIA (5 models) each serve several candidates, so
  outages are correlated within each family. A fallback chain should alternate providers.
- **Code constraint.** `apps/web/src/routes/api/chat.ts` notes that TanStack AI's OpenRouter adapter
  "only accepts fallback ids from its bundled model catalog". Any new free model must therefore be in
  the adapter's catalog (or registered with `createModel`) before it can be a fallback.

## Data policy and the ADR-0004 disclosure

**What OpenRouter itself does** ([Data Collection](https://openrouter.ai/docs/guides/privacy/data-collection),
[ZDR](https://openrouter.ai/docs/guides/features/zdr)):

- OpenRouter **does not store prompts or responses** unless the account opts in to private logging or
  to "OpenRouter use of inputs/outputs" (1% discount). Both are **off by default**. It stores request
  metadata: token counts, latency and so on.
- It samples "a small number of prompts" for **anonymous categorization**. If the account has not
  opted in, the categorization is not linked to the account, and the categorizing model runs under
  zero data retention.
- It records a data policy for each endpoint. If a provider's policy is unclear, it **assumes the
  endpoint retains and trains**.
- **Account and guardrail toggles** (Guardrails API): `enable_free_model_training` ("allows free
  endpoints that train on request data"), **`enable_free_model_publication`** ("allows free endpoints
  that **publish** prompts"), `enable_paid_model_training`, and `enforce_zdr`. Per request,
  `provider.data_collection: "deny"` or `provider.zdr: true` restricts routing to compliant endpoints.
  Turning off free-model training will remove most free endpoints from routing.

**What each free provider says it does with prompts:**

| Provider (free models)                                   | What the provider's own terms say                                                                                                                                                                                                                                                                                                                                                                                                                                                | Source                                                                                                                                                                                                                                         |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Google AI Studio** (Gemma 4 31B, 26B)                  | Gemma 4 on the Gemini API has a **free tier only**; paid is "Not available". Free tier: "Used to improve our products: Yes". Unpaid Services terms: Google "uses the content you submit … and any generated responses to provide, improve, and develop" its products and ML; "human reviewers may read, annotate, and process your API input and output"; "Do not submit sensitive, confidential, or personal information to the Unpaid Services."                               | [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing); [Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms) (updated 2026-04-28)                                                                                |
| **NVIDIA** (all Nemotron free)                           | OpenRouter's model page for the free endpoint says: "Your use is logged for security purposes and to improve NVIDIA products and services … not linked to your identity or any persistent identifier." The Trial ToS §3.3 lists collecting "User Content and Generated Content to improve NVIDIA products and services, including AI models". §1.2 grants access "for limited trial purposes only and **without use … in production**". §2.6 says do not submit "personal data". | [OpenRouter model page](https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free); [NVIDIA API Trial ToS](https://assets.ngc.nvidia.com/products/api-catalog/legal/NVIDIA%20API%20Trial%20Terms%20of%20Service.pdf) (PDF dated 2025-10-07) |
| **Thinking Machines** (Inkling, Inkling Small)           | "We may use Prompts and Outputs to improve our services, including by training, fine-tuning, or otherwise improving the Company Models." Retention: "as long as reasonably necessary".                                                                                                                                                                                                                                                                                           | [TML Free Research API Tier Privacy Notice](https://thinkingmachines.ai/legal/tml-free-research-api-tier-privacy-notice.pdf) (updated 2026-08-20)                                                                                              |
| **Phala** (Xing 4.0)                                     | On OpenRouter's zero-data-retention endpoint list.                                                                                                                                                                                                                                                                                                                                                                                                                               | [`/api/v1/endpoints/zdr`](https://openrouter.ai/api/v1/endpoints/zdr)                                                                                                                                                                          |
| Others (Cohere, Poolside, Liquid, AtlasCloud, Recursive) | Not shortlisted; terms not read. Links are in `/api/v1/providers`.                                                                                                                                                                                                                                                                                                                                                                                                               | —                                                                                                                                                                                                                                              |

OpenRouter notes that an endpoint's policy can differ from the provider's default, through special
agreements. The per-endpoint flags (trains / retains / publishes) are visible to a signed-in account
(`GET /api/v1/models/user` applies the account's privacy settings) but not in the public API. **Confirm
them with the production key before writing the disclosure.**

**Facts the ADR-0004 disclosure must reflect** (if the shortlist below is adopted):

1. Polytic does not store the conversation, and OpenRouter does not store it either (with
   logging and data sharing left off on our account).
2. The conversation **is sent to Google or NVIDIA**, depending on which model answers. Both say they
   **may use it to improve their products and AI models**, and Google says **human reviewers may read
   it**.
3. Both providers' terms ask users **not to submit personal or sensitive data**. Political beliefs
   are sensitive data in many jurisdictions (for example GDPR Art. 9), so the disclosure should tell
   people not to include identifying details.
4. "Some of which may log it" is **too weak** for this pool. The rule "never claim more privacy than
   the pool provides" points to something like "is sent to third-party AI providers that may keep it
   and use it to improve their models".
5. A future "private mode" (ADR-0004, considered options) currently has **exactly one free candidate**
   (Xing 4.0 on Phala), and it is unevaluated. Realistically, private mode means cheap paid ZDR
   endpoints.

## Political skew and RLHF hedging

### General findings (apply to all candidates)

- **Chat-tuned LLMs lean left of centre on average.** Rozado (2024, _PLOS ONE_) gave 11 political
  orientation tests to 24 conversational LLMs. Most scored left of centre, but the five base
  (pre-chat-tuning) models did not. The bias seems to come in with fine-tuning, and modest supervised
  fine-tuning can move it.
- **Users perceive the same slant, and asking for neutrality helps.** Westwood, Grimmer & Hall (2025,
  Stanford GSB WP 4262): nearly all of 24 LLMs were perceived as significantly left-leaning, including
  by many Democrats. **Prompting models to be neutral** made responses more ambivalent, users rated
  them more neutral, and Republicans became somewhat more willing to use the models. This supports the
  system-prompt approach, and also shows its limit: more ambivalence is itself a form of hedging.
- **Forced-choice compass tests are unstable.** Röttger et al. (ACL 2024) showed that Political
  Compass results change with how they are prompted, and that open-ended answers differ from
  multiple-choice ones. Per-model "compass positions" are weak evidence. Behaviour in the actual
  conversation is what matters.
- **Lab evals measure the behaviours we care about.** OpenAI (Oct 2025) scores five axes: user
  invalidation, user escalation, personal political expression, asymmetric coverage, and political
  refusals. Anthropic's open-sourced paired-prompt even-handedness eval (Nov 2025; 1,350 prompt pairs,
  150 topics) reported Gemini 2.5 Pro 97%, Grok 4 96%, Claude Opus 4.1 95%, Claude Sonnet 4.5 94%,
  GPT-5 89%, and **Llama 4 66%**. That last figure is a reminder that open-weight models can score far
  worse than frontier ones. **None of our free candidates were in either eval.** Anthropic's eval is
  open source, so we could run it ourselves (see Open questions).
- **Over-refusal is a known, measurable failure.** XSTest (Röttger et al., NAACL 2024) measures
  refusals of safe prompts. Its findings match Polytic's "safety whataboutism" concern.

### Model-specific evidence (SpeechMap)

SpeechMap sends 2,120 US "hard" requests (persuasive essays, satire and arguments on contested topics
in 22 domains, from governance and economics to race, gender, religion and immigration) and has an
LLM judge grade each answer COMPLETE, EVASIVE or DENIAL. We counted the judgments in each model's
`analysis/compliance_us_hard_<model>.jsonl` file. Collection dates: Gemma 4 April 2026, Nemotron 3
Ultra June 2026, Nemotron 3.5 Lightning August 2026. Several were collected through the `:free`
endpoints themselves.

| Model                                  | Complete | Evasive | Denial  |
| -------------------------------------- | -------- | ------- | ------- |
| Gemma 4 31B                            | 84.8%    | 0.6%    | 14.6%   |
| Gemma 4 31B + reasoning                | 82.3%    | 0.9%    | 16.8%   |
| Gemma 4 26B A4B                        | 76.3%    | 0.4%    | 23.3%   |
| Gemma 4 26B A4B + reasoning            | 86.6%    | 0.8%    | 12.7%   |
| Nemotron 3.5 Lightning                 | 75.0%    | 1.7%    | 23.3%   |
| Nemotron 3.5 Lightning + reasoning     | 42.4%    | 3.0%    | 54.7%   |
| Nemotron 3 Ultra 550B                  | 47.7%    | 1.6%    | 50.7%   |
| Nemotron 3 Ultra 550B + reasoning      | 19.5%    | 1.0%    | 79.5%   |
| Nemotron 3 Super 120B                  | 42.5%    | 2.7%    | 54.8%   |
| Nemotron 3 Nano Omni + reasoning       | 35.7%    | 2.7%    | 61.6%   |
| Inkling Small                          | 36.9%    | 4.2%    | 58.9%   |
| MiniMax M3 (predecessor of M3.1 Flash) | 27.0%    | 4.8%    | 68.2%   |
| _Ref: Grok 4.1 Fast (thinking)_        | _95.7%_  | _0.0%_  | _4.3%_  |
| _Ref: Claude Sonnet 4.5 (thinking)_    | _31.4%_  | _20.2%_ | _48.3%_ |

**How to read this (caveats):**

- SpeechMap measures **willingness to produce** contested content, not even-handedness. The grill
  never asks a model to write advocacy. It asks the model to interview, steelman and probe
  coherence. The score is a **proxy** for the "zero exclusion" and "no squeamishness" parts of
  Clinical Agnosticism, not for neutrality. A model that writes everything could still be lopsided.
- The question set has no left/right tag, so these numbers say nothing about **asymmetry** (refusing
  one side more than the other). That needs a paired eval such as Anthropic's or OpenAI's.
- Judges differ across files (Grok 4.1 Fast variants and GPT-5.6), so small differences between
  models are not meaningful. Large ones (85% vs 20%) are.
- **Turning reasoning on made NVIDIA models refuse much more** (Lightning 75% → 42%, Ultra 48% → 20%)
  but did not affect Gemma. The grill should run Nemotron models with reasoning **off**, or test both.
- **Xing 4.0** (China Telecom) and **Nemotron 3.5 Super VL** have no SpeechMap data. Xing comes from a PRC lab, and
  SpeechMap runs separate China-criticism sets because topic-specific censorship is a known concern for
  such models. Xing should be checked on those sets before it is used for anything.

## Recommended shortlist

The shortlist ranks on advertised tool forcing, stability, provider diversity and low refusal. It
assumes the grill's structured output goes through **tool calls with schemas** (which every pick
supports, and which OpenRouter validates and reports as Tool Call Error Rate) rather than
`structured_outputs`, which neither Gemma nor Lightning offers.

| Role                 | Model                                                | Why                                                                                                                                     | Trade-offs                                                                                                                                                            |
| -------------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Primary**          | `google/gemma-4-31b-it:free`                         | Forces tool calls; JSON mode; 262K context; 7 months listed and 100% up; lowest refusal of any free candidate (85%, almost no evasion). | Google free-tier data terms (training, human review). Max output 32K. Dense 31B, so slower than the MoE options. Not in the current pool.                             |
| **Fallback 1**       | `nvidia/nemotron-3.5-lightning:free` (reasoning off) | **Different provider** from the primary; forces tool calls; 1M context; 100% up; 75% complete with reasoning off.                       | NVIDIA trial terms (logged to improve products; "not in production"). No JSON or schema mode. Only listed since 2026-08-11.                                           |
| **Fallback 2**       | `google/gemma-4-26b-a4b-it:free`                     | Same strengths as the primary, and faster.                                                                                              | Same provider as the primary, so it does not help when Google AI Studio is down or throttled. Use it as a "fast" alternative.                                         |
| **Last resort**      | `openrouter/free`                                    | Always routes to _some_ free model that supports tools.                                                                                 | Random model each call: inconsistent voice, unknown hedging, unknown data policy. Mark these sessions and consider ending the grill gracefully instead.               |
| Demote               | `nvidia/nemotron-3-ultra-550b-a55b:free`             | Largest free model, stable.                                                                                                             | Refuses half of SpeechMap's set (four in five with reasoning). The opposite of Clinical Agnosticism. Keep only if a live eval shows the system prompt overcomes this. |
| Watch                | `nvidia/nemotron-3.5-super-vl:free`                  | The only NVIDIA free model with strict `structured_outputs`.                                                                            | Degraded at snapshot time; 11 days old; no hedging data.                                                                                                              |
| Watch (private mode) | `xingchen-agi/xing4.0-29b-a4b:free`                  | The only free ZDR endpoint; strict schemas; 236K max output.                                                                            | 10 days old; cannot force tool calls; no hedging data; possible PRC-topic censorship.                                                                                 |
| Remove               | `minimax/minimax-m3.1-flash:free`                    | —                                                                                                                                       | Free endpoints are gone. It is still the app's `DEFAULT_CHAT_MODEL`.                                                                                                  |

None of these picks fixes the capacity problem in [Rate limits](#rate-limits-and-quotas). ADR-0003
already allows "very cheap" models in the pool, and a cheap paid tier behind the free models is
probably what keeps a public v1 up. That is a decision for a later ticket, not this one.

## Risks

1. **Quota exhaustion under any real traffic.** At about 35–65 complete visits a day on one account,
   one shared post could use up the day's quota within minutes. The 20/min cap means a handful of
   concurrent users already hit 429s. Mid-stream 429s arrive as SSE errors, which the chat UI must
   handle.
2. **Pool churn.** Free models disappear without notice (MiniMax M3.1 Flash: under a week) or on a
   published `expiration_date`. A hand-written pool goes stale, as the current default already has.
3. **Correlated outages.** One provider per free model, and two providers (Google, NVIDIA) cover the
   whole shortlist.
4. **Provider terms vs. production use.** NVIDIA's Trial ToS forbids production use and personal
   data. Google's Unpaid terms say not to send sensitive or personal information. A public political
   interview arguably runs against both. We have not established whether OpenRouter's agreements
   override these terms for its free endpoints.
5. **Disclosure drift.** ADR-0004's current wording claims less collection than the shortlist
   actually involves, and every pool change can change the truth of the disclosure.
6. **Behaviour drift by model.** Hedging differs about fourfold between candidates, and between
   reasoning on and off. A fallback that switches models mid-grill also changes how direct the
   grill is.
7. **Advertised ≠ reliable tool calling.** `supported_parameters` says a parameter is accepted, not
   that small free models use tools well. Nothing here was tested live.

## Open questions for later tickets

1. **Live eval harness.** With the production key, run each shortlisted model through (a) a scripted
   grill with forced tool calls, recording tool-call error rate, schema validity and turn latency;
   (b) Anthropic's open-source paired-prompt even-handedness eval, or a Polytic-specific paired set
   covering left, right and heterodox positions, with reasoning on and off.
2. **Is the 20/min cap per model or per account?** Do fallback attempts in a `models` array each count
   against the 1,000/day cap? Test with `GET /api/v1/key` before and after.
3. **Actual per-endpoint data flags** (trains / retains / publishes) for the shortlist, read via
   `GET /api/v1/models/user` with our account's settings. Set `enable_free_model_publication: false`
   on the production key's guardrail in any case.
4. **Does OpenRouter's agreement with NVIDIA or Google change the trial/unpaid terms** for traffic
   through OpenRouter's free endpoints? Ask OpenRouter support. The answer decides risk 4 and the
   disclosure wording.
5. **Capacity strategy** (ADR-0003's open item): per-visitor turn caps, a waiting room or queue, a
   cheap paid fallback tier, and whether to buy the ≥10 credits now (needed for 1,000/day).
6. **Automatic pool hygiene.** Read `/api/v1/models` and `/endpoints` on a schedule (or at startup),
   drop models with no endpoints, a bad status or a near `expiration_date`, and alert when the pool
   falls below N healthy models from at least two providers.
7. **TanStack adapter catalog.** Make sure every pool model, including new free ids, can be used as a
   fallback despite the adapter's bundled-catalog restriction.
8. **Reasoning mode policy.** Should the grill run Nemotron models with reasoning off, given the large
   increase in refusals with it on?

## Sources

All accessed 2026-10-26 unless noted.

**OpenRouter (primary)**

- Models API: <https://openrouter.ai/api/v1/models>; per-model endpoints:
  `https://openrouter.ai/api/v1/models/<id>/endpoints`; providers:
  <https://openrouter.ai/api/v1/providers>; ZDR endpoints: <https://openrouter.ai/api/v1/endpoints/zdr>
- Limits: <https://openrouter.ai/docs/api/reference/limits>
- Free variant: <https://openrouter.ai/docs/guides/routing/model-variants/free>
- Free Models Router: <https://openrouter.ai/docs/guides/routing/routers/free-router>
- Model fallbacks: <https://openrouter.ai/docs/guides/routing/model-fallbacks>
- Auto Exacto (tool-call error rate definition): <https://openrouter.ai/docs/guides/routing/auto-exacto>
- Provider logging: <https://openrouter.ai/docs/guides/privacy/provider-logging>
- Data collection: <https://openrouter.ai/docs/guides/privacy/data-collection>
- Zero data retention: <https://openrouter.ai/docs/guides/features/zdr>
- Provider routing (`data_collection`): <https://openrouter.ai/docs/guides/routing/provider-selection>
- Guardrails API (`enable_free_model_training`, `enable_free_model_publication`):
  <https://openrouter.ai/docs/api/api-reference/guardrails/create-a-guardrail>
- Nemotron 3 Ultra free model page (NVIDIA logging notice): <https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b:free>

**Provider terms**

- Google, Gemini API Additional Terms of Service (updated 2026-04-28): <https://ai.google.dev/gemini-api/terms>
- Google, Gemini API pricing (Gemma 4 free tier only; "Used to improve our products"): <https://ai.google.dev/gemini-api/docs/pricing>
- NVIDIA, API Trial Terms of Service (PDF, 2025-10-07): <https://assets.ngc.nvidia.com/products/api-catalog/legal/NVIDIA%20API%20Trial%20Terms%20of%20Service.pdf>
- Thinking Machines, Free Research API Tier Privacy Notice (updated 2026-08-20): <https://thinkingmachines.ai/legal/tml-free-research-api-tier-privacy-notice.pdf>

**Political bias and hedging**

- SpeechMap raw data (compliance judgments, us_hard set; repo last pushed 2026-10-14): <https://github.com/xlr8harder/speechmap-data>; site: <https://speechmap.ai/>
- Rozado, D. (2024). The political preferences of LLMs. _PLOS ONE_ 19(7): e0306621. <https://doi.org/10.1371/journal.pone.0306621>
- Westwood, S. J., Grimmer, J., & Hall, A. B. (2025). Measuring perceived slant in large language models through user evaluations. Stanford GSB Working Paper 4262. <https://www.gsb.stanford.edu/faculty-research/working-papers/measuring-perceived-slant-large-language-models-through-user>
- Röttger, P., et al. (2024). Political Compass or Spinning Arrow? Towards more meaningful evaluations for values and opinions in large language models. _ACL 2024_. <https://arxiv.org/abs/2402.16786>
- Röttger, P., et al. (2024). XSTest: A test suite for identifying exaggerated safety behaviours in large language models. _NAACL 2024_. <https://arxiv.org/abs/2308.01263>
- Anthropic (2025-11). Measuring political even-handedness in Claude (open-source eval). <https://www.anthropic.com/news/political-even-handedness>
- OpenAI (2025-10-09). Defining and evaluating political bias in LLMs. <https://openai.com/index/defining-and-evaluating-political-bias-in-llms/>

**Repo**

- Current pool and fallbacks: `apps/web/src/lib/models.ts`, `apps/web/src/routes/api/chat.ts`
