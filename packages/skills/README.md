# Skills (maintainers)

Consumer-facing agent skills for Polytic. These are **for everyone** — not dev tooling. Users install them into Claude, Cursor, or any skills-compatible agent to get grilled on their politics.

## Public repo

|                   |                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------- |
| **GitHub**        | [`slovakian/polytic-party`](https://github.com/slovakian/polytic-party)                      |
| **Why this name** | Product name, not `*-skills`. One repo = one thing people want. No `--skill` flag for users. |
| **Monorepo path** | `packages/skills/polytic-party/` → becomes the **root** of the public repo                   |

### User install (copy this everywhere)

```bash
npx skills add slovakian/polytic-party
```

## Monorepo layout

```text
polytic/                         ← private app monorepo
└── packages/skills/
    ├── README.md                ← this file (maintainer only, not published)
    ├── package.json             ← workspace package (@polytic/skills)
    └── polytic-party/           ← subtree → public repo root
        ├── README.md            ← public landing (published)
        ├── SKILL.md
        └── references/
```

## Publish with git subtree

The private monorepo is the **source of truth**. The public repo is a read-only mirror of `packages/skills/polytic-party/`.

### One-time setup

```bash
# 1. Create empty public repo on GitHub: slovakian/polytic-party

# 2. Add remote (from polytic monorepo root)
git remote add polytic-party git@github.com:slovakian/polytic-party.git

# 3. First publish (after packages/skills/polytic-party/ is committed)
git subtree push --prefix=packages/skills/polytic-party polytic-party main
```

If `subtree push` fails on an empty remote, bootstrap once:

```bash
git subtree split --prefix=packages/skills/polytic-party -b publish/polytic-party
git push polytic-party publish/polytic-party:main
git branch -D publish/polytic-party
```

### Routine publish

After committing skill changes:

```bash
bun run skills:publish
```

Or:

```bash
git subtree push --prefix=packages/skills/polytic-party polytic-party main
```

### Pull public hotfixes back (rare)

If you ever edit on GitHub directly:

```bash
git subtree pull --prefix=packages/skills/polytic-party polytic-party main --squash
```

## Develop locally

```bash
npx skills add ./packages/skills/polytic-party -y
```

From monorepo root. Validates `SKILL.md` before you publish.

## Homepage copy-paste preview

The marketing site (`apps/web`) bundles `skills/polytic-party/SKILL.md` at build time for
the copy-paste preview — edit the skill file only; do not duplicate it in the web app.

## Adding a second consumer skill later

Two clean options:

1. **New product repo** — e.g. `slovakian/polytic-compare` (keep one install = one product)
2. **Umbrella repo** — e.g. `slovakian/polytic` with `skills/party/`, `skills/compare/` and `npx skills add slovakian/polytic --skill party` (only when you have multiple skills worth bundling)

For v1, one repo per product is simpler for normal people.
