---
status: accepted
---

# Free quota reserved per Session, and bring your own key

v1 runs **only on our free OpenRouter quota**: 1,000 model calls a day, about 33–38
first visits. We never pay for model calls. Limits count **Sessions, not requests**: a
Session that gets in has a full first pass (42 calls) reserved for it, so everyone who
starts reaches their Result. Unused calls go back to the pool when the Result is
built, after 30 minutes idle, or when the person switches to their own key. Each IP gets
one first pass a day, counted by a salted hash that expires within 24 hours, behind an
invisible Turnstile check. Deepening uses only what's left over.

Anyone can **bring their own OpenRouter key** at any time, through "Sign in with
OpenRouter" or by pasting one. The key is held in that tab's memory and passes through
our server for each call. On their own key a person can run the same free models (on
their account's free limits) or pick from a short, curated list of paid models. The
chosen model runs every role. Each listed paid model passes the neutrality test bench
and the structured-output check on every change, and is only routed to providers that
don't store or train on prompts. Details are in `docs/architecture.md`.

We chose this because a public, login-free chat on one free quota has room for only
a few dozen people a day, and the owner can't fund more. Reserving per Session protects
the payoff: running out halfway through a grill means no Result. Bring-your-own-key is
the only way past the daily ceiling that costs us nothing, and it lets people who care
use stronger models without weakening the neutrality guarantee.

## Considered options

- **Paid fallback with a daily spend cap.** Paid Nemotron costs about 1¢ a first visit,
  so a $5/day cap buys roughly 500 more. Rejected: no budget for it.
- **Counting requests instead of Sessions.** Simpler, but people run out mid-grill and
  never see a Result.
- **Better Auth anonymous users as the per-person identity.** Adds a user row per
  visitor on our servers and is no harder to get around than a browser count. Noted as
  the likely way to claim a Session into an account after v1.
- **A visible CAPTCHA up front.** A wall in front of the first visit, against ADR-0009.
- **Bring-your-own-key only once we're full, and any model the person likes.** Rejected
  on both halves: hiding it helps no one, and an untested model breaks the bench rule.
- **Mixing a paid Interviewer with free note-taking.** Cheaper for the person, but it
  multiplies the setups the bench must test and still sends their text to a provider
  that logs it.

## Consequences

The per-IP counter is the one thing derived from a person that our servers hold, so the
disclosure (ADR-0004) must say so, along with the key passing through our server. People
sharing an IP (campuses, carrier-grade NAT) get one free first pass between them. Every
prompt or handbook change re-runs the bench against every listed paid model, which
keeps that list short. Preview and dev deployments share the production key, so they
use mocked models by default.
