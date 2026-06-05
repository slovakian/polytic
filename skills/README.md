# Skills (maintainers)

Consumer-facing agent skills for Polytik. These are **for everyone** — not dev tooling. Users install them into Claude, Cursor, or any skills-compatible agent to get grilled on their politics.

## Public repo

| | |
| --- | --- |
| **GitHub** | [`slovakian/polytik-party`](https://github.com/slovakian/polytik-party) |
| **Why this name** | Product name, not `*-skills`. One repo = one thing people want. No `--skill` flag for users. |
| **Monorepo path** | `skills/polytik-party/` → becomes the **root** of the public repo |

### User install (copy this everywhere)

```bash
npx skills add slovakian/polytik-party
```

## Monorepo layout

```text
polytik/                         ← private app monorepo
└── skills/
    ├── README.md                ← this file (maintainer only, not published)
    └── polytik-party/           ← subtree → public repo root
        ├── README.md            ← public landing (published)
        ├── SKILL.md
        └── references/
```

## Publish with git subtree

The private monorepo is the **source of truth**. The public repo is a read-only mirror of `skills/polytik-party/`.

### One-time setup

```bash
# 1. Create empty public repo on GitHub: slovakian/polytik-party

# 2. Add remote (from polytik monorepo root)
git remote add polytik-party git@github.com:slovakian/polytik-party.git

# 3. First publish (after skills/polytik-party/ is committed)
git subtree push --prefix=skills/polytik-party polytik-party main
```

If `subtree push` fails on an empty remote, bootstrap once:

```bash
git subtree split --prefix=skills/polytik-party -b publish/polytik-party
git push polytik-party publish/polytik-party:main
git branch -D publish/polytik-party
```

### Routine publish

After committing skill changes:

```bash
bun run skills:publish
```

Or:

```bash
git subtree push --prefix=skills/polytik-party polytik-party main
```

### Pull public hotfixes back (rare)

If you ever edit on GitHub directly:

```bash
git subtree pull --prefix=skills/polytik-party polytik-party main --squash
```

## Develop locally

```bash
npx skills add ./skills/polytik-party -y
```

From monorepo root. Validates `SKILL.md` before you publish.

## Homepage copy-paste preview

The marketing site (`apps/web`) bundles `skills/polytik-party/SKILL.md` at build time for
the copy-paste preview — edit the skill file only; do not duplicate it in the web app.

## Adding a second consumer skill later

Two clean options:

1. **New product repo** — e.g. `slovakian/polytik-compare` (keep one install = one product)
2. **Umbrella repo** — e.g. `slovakian/polytik` with `skills/party/`, `skills/compare/` and `npx skills add slovakian/polytik --skill party` (only when you have multiple skills worth bundling)

For v1, one repo per product is simpler for normal people.
