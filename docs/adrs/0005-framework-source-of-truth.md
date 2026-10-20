---
status: accepted
---

# One source of truth for the framework

The skill and the chat app must run the same framework (protocol rules, dimension
taxonomy, label library), or "Polytic" means different things depending on where you use
it. **For now the skill's references (`skills/polytic-party/references/`) are
canonical**, and the app builds its prompts from them.

Once the taxonomy is authored as real, structured dimensions (`docs/framework.md`), the
source of truth moves to a **shared framework package holding structured data**, and the
skill's markdown is generated from it at publish time. At that point the app needs the
framework as data, not prose. Maintaining two hand-synced copies is ruled out.
