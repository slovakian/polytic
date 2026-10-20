---
status: accepted
---

# Privacy: no server-side transcripts, honest disclosure

Political beliefs are sensitive, and Polytic only works if people across the whole
spectrum trust it. In v1 **we store no grilling transcripts on our servers.** The session
lives in the user's browser (so a refresh doesn't lose it) and passes through our server
only to reach the model.

Because the model pool (ADR-0003) includes free endpoints that may log or train on
prompts, we **disclose this plainly** before the user starts: we don't store the
conversation, but it is sent to third-party AI models, some of which may log it.

The rule: **never claim more privacy than the current model pool actually provides.** If
the pool or storage changes, the disclosure changes with it.

## Considered options

- **Only providers that don't collect data.** Rejected for v1 because it excludes most
  free models. A user-selectable **"private mode"** that restricts selection to
  no-training providers is noted as a likely later option.
- **Anonymous server-side storage to improve the grill.** Rejected for v1. Server-side
  storage arrives with login and explicit consent, alongside profiles.
