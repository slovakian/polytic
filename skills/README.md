# Skills (maintainers)

Consumer-facing agent skills for Polytic. These are **for everyone** — not dev tooling. Users install them into Claude, Cursor, or any skills-compatible agent to get grilled on their politics.

## Install

|                  |                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| **GitHub**       | [`slovakian/polytic/skills/polytic-party`](https://github.com/slovakian/polytic/tree/main/skills/polytic-party) |
| **Skill name**   | `polytic-party` — the product name, not `*-skills`                                                |

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

## Adding a second consumer skill later

Add it as `skills/<name>/` and switch the install docs to
`npx skills add slovakian/polytic --skill <name>`, since `skills add` will otherwise list
every skill in the folder.
