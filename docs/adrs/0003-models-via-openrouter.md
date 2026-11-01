---
status: accepted
---

# Models via OpenRouter, from a curated pool

The chat calls models through **OpenRouter** using TanStack AI's OpenRouter adapter, so
the model is a configuration choice rather than a provider lock-in. We draw from a
**curated pool** of free and very cheap models with reasoning capability, and the app may
select a model from that pool automatically (for availability, rate limits, or cost).
Only models we have deliberately added to the pool are ever used.

We chose cheap and free models over a single premium model to keep a public, login-free
chat affordable. The cost is variable quality and, for some free endpoints, provider-side
logging; the privacy consequence is handled in ADR-0004.

Which models fill which role, and the fallback order, are set in `docs/architecture.md`
(ADR-0010). How the shared free quota is protected, and the curated paid models a
person may run on their own key, are in ADR-0011. We never pay for model calls in v1.
