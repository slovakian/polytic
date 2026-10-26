---
status: accepted
---

# First-party web app is the sole delivery surface; framework lives as structured data

Earlier experimentation maintained both an in-app chat and a standalone distributable markdown skill (`skills/polytic-party`). Maintaining both forced the interaction design to accommodate a plain-text prompt runner with no UI controls, no structured state, and no control over the host model's RLHF safety hedging.

As resolved in [Determine the core user experience and interaction mechanics](https://github.com/slovakian/polytic/issues/15):

1. **First-party web app only (`polytic.party`).** We are retiring the standalone distributable agent skill. Polytic lives exclusively in our first-party web application, where we control model orchestration, RLHF de-biasing (**Clinical Agnosticism**), TanStack AI suggestions, and interactive checkpoint **Results**.
2. **Framework as structured source of truth.** The dimension taxonomy and label library live as canonical, structured source-of-truth assets inside the monorepo rather than prose files synced into a skill folder.
