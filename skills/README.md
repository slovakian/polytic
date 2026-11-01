# Skills (maintainers)

> **Retired.** Polytic now lives only in the first-party web app (`docs/adrs/0005`).
> `polytic-party` stays installable from `main` until it's removed alongside the v1
> build. Don't extend it, don't design product behavior around it, and don't add a
> second skill here. The notes below describe how it works until then.

The consumer-facing agent skill for Polytic, installed into Claude, Cursor, or any
skills-compatible agent to get grilled on your politics. It is for users, not dev
tooling.

## Install

|                |                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------- |
| **GitHub**     | [`slovakian/polytic/skills/polytic-party`](https://github.com/slovakian/polytic/tree/main/skills/polytic-party) |
| **Skill name** | `polytic-party` — the product name, not `*-skills`                                                              |

### User install (copy this everywhere)

```bash
npx skills add slovakian/polytic
```

The skills CLI scans `skills/` before `.agents/skills/`, so this installs the source in
`skills/polytic-party/` and nothing else. Keep it the only skill in `skills/`; any other
`SKILL.md` added here appears in every user's install picker.

## Layout

```text
polytic/
└── skills/
    ├── README.md            ← this file (maintainer only)
    ├── package.json         ← workspace package (@polytic/skills)
    ├── src/index.ts         ← install command + name constants for the site
    └── polytic-party/       ← the skill users install
        ├── README.md
        ├── SKILL.md
        └── references/
```

## Shipping changes

Merge to `main`. Users pick up changes on their next `npx skills add` or `npx skills update`.

## Develop locally

```bash
npx skills add ./skills/polytic-party -y
```

From the repo root. Validates `SKILL.md` and refreshes the copy in `.agents/skills/` that
agents working in this repo use.

## Homepage copy-paste preview

The marketing site (`apps/web`) bundles `skills/polytic-party/SKILL.md` at build time for
the copy-paste preview — edit the skill file only; do not duplicate it in the web app.
