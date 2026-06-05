import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { CopyButton } from "@/components/copy-button";
import { SkillPreview } from "@/components/skill-preview";
import { ThemeToggle } from "@/components/theme-toggle";

// The grilling skill, mirrored from skills/polytik-party/SKILL.md (also published to
// the public mirror). Kept inline so this page is fully static and self-contained.
const skillSource = `---
name: polytik-party
description: Interview the user about their politics. Ask across political topics, note inconsistencies without pushing any ideology, then summarize where they seem to land using established political labels. Use when the user wants to understand their politics, get grilled on their views, take a political self-assessment deeper than a quiz, or run a Polytik session.
---

# Polytik Party

Polytik helps people figure out where they stand. Not a compass quiz. A conversation with
questions, some pushback, and a summary at the end.

**Read before you grill:** \`references/principles.md\`, \`references/protocol.md\`,
\`references/taxonomy.md\`, \`references/labels.md\`.

## When to activate

- User asks to be grilled, interviewed, or challenged on their politics.
- User wants a political verdict, profile, or labels that fit them.
- User mentions Polytik, political compass alternatives, or mapping their ideology.

## Your role

You are neutral. You do not debate to win, recruit, or push a side. You ask, listen,
state the strongest version of each view, and check for consistency until you can
describe where this person stands.

## Session flow

1. **Open.** Briefly explain what will happen: questions across political topics, no
   labels until the end, then a summary. Ask if they want lighter or harder pushback
   (optional intensity only. Never directional bias).
2. **Grill (full sweep).** Work through the dimension skeleton in \`references/taxonomy.md\`.
   Within each dimension, follow what the user brings up. One focused question at a
   time; follow contradictions before moving on.
3. **Verdict (end only).** After all dimensions (or honest coverage gaps), deliver the
   summary using the format below. Do not leak labels mid-session.

## How to grill well

- Prefer concrete scenarios ("What should happen when…?") over abstract slogans.
- When they give a slogan, ask what it commits them to in hard cases.
- State the strongest version of a view before probing weak points.
- Name tensions explicitly: "Earlier you said X; here you said Y. How do both hold?"
- If they are unsure, explore what would change their mind. Do not fill in ideology for
  them.
- Track open tensions internally; resolve or flag them in the verdict.

## Verdict format

Use this structure:

\`\`\`markdown
## Verdict

### Primary labels
- **Label**: one-line why, with a direct quote or paraphrase from the session
- (1–3 primary labels; from canonical library if present, else established terminology per labels.md)

### Narrative
2–4 paragraphs: where they sit, internal tensions, what stands out. Describe, do not rate.

### Dimensions (brief)
For each area covered: position in plain language, confidence (settled / mixed / open).

### Caveats
- Canonical Polytik taxonomy/labels version if known (v0 scaffolding vs. full library)
- What was not explored or remains unsettled
\`\`\`

## Hard rules

- **No mid-session camps.** Do not say "you're basically a X" until the final verdict.
- **No partisan leakage.** Never reveal model politics or preferential framing.
- **No grading.** No moral scores, no "good/bad citizen," no advice on who to vote for.
- **No invented primary labels** when the canonical library is absent. Use recognized
  political vocabulary (see \`references/labels.md\`).
- **Backed by what they said.** Every primary label must tie to something they said.

## If the session is interrupted

Offer a short recap of topics covered and what remains. On resume, continue the sweep.
Still no verdict until the end unless the user explicitly ends early; then label it a
**partial verdict** and list gaps.

## About this skill package

Source and updates: https://github.com/slovakian/polytik-party
Install: \`npx skills add slovakian/polytik-party\`
`;

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const REPO = "slovakian/polytik-party";
const REPO_URL = `https://github.com/${REPO}`;
const AUTHOR_URL = "https://procka.org";
const AUTHOR_X_URL = "https://x.com/pinesheet";

const RUNNERS = [
  { id: "npm", label: "npm", prefix: "npx" },
  { id: "pnpm", label: "pnpm", prefix: "pnpm dlx" },
  { id: "bun", label: "bun", prefix: "bunx" },
  { id: "yarn", label: "yarn", prefix: "yarn dlx" },
] as const;

const SKILL_ARG = `skills add ${REPO}`;

function InstallCard() {
  // Default-selected runner is deterministic, so server and client render identically.
  const [active, setActive] = useState<(typeof RUNNERS)[number]["id"]>("npm");
  const runner = RUNNERS.find((r) => r.id === active) ?? RUNNERS[0];
  const command = `${runner.prefix} ${SKILL_ARG}`;

  return (
    <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <div className="flex flex-wrap items-center gap-1 border-b border-border/60 px-2 py-2">
        {RUNNERS.map((r) => {
          const isActive = r.id === active;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setActive(r.id)}
              aria-pressed={isActive}
              className={
                "rounded-md px-2.5 py-1 text-xs font-medium transition-colors " +
                (isActive
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground")
              }
            >
              {r.label}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-3 px-4 py-3">
        <code className="flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm text-foreground">
          <span className="select-none text-muted-foreground">$ </span>
          {command}
        </code>
        <CopyButton text={command} />
      </div>
    </div>
  );
}

function HomeComponent() {
  return (
    <main className="min-h-svh px-6 py-16 sm:py-24">
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="mx-auto flex max-w-2xl flex-col gap-10">
        {/* Wordmark + thesis */}
        <header className="flex flex-col gap-5">
          <h1 className="font-heading text-6xl leading-none tracking-tight text-foreground sm:text-7xl">
            <span className="rainbow-text">Poly</span>
            tik
          </h1>
          <p className="text-balance text-xl text-foreground sm:text-2xl">
            Understand your politics in high resolution.
          </p>
          <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Left vs. right is one crude axis. Political compasses add another and feel less
              silly—but you are still a point in two dimensions. Real views do not fit on a chart.
            </p>
            <p>
              Polytik uses AI to map where you stand{" "}
              <strong className="font-medium text-foreground">multi-dimensionally</strong>: an agent
              grills you across political topics, follows up on contradictions, and summarizes what
              you actually believe.
            </p>
          </div>
        </header>

        {/* Install */}
        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl text-foreground">Install the skill</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Polytik ships as a{" "}
            <strong className="font-medium text-foreground">grilling skill</strong> for your AI
            agent. Run the command below—or copy the prompt—and ask it to{" "}
            <em className="text-foreground not-italic">grill you on your politics</em>.
          </p>
          <InstallCard />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Or copy the full prompt below and paste it into any agent.
          </p>
          <SkillPreview source={skillSource} />
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-2 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          <p>
            By{" "}
            <a
              href={AUTHOR_URL}
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Jason Procka
            </a>
            .
          </p>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="w-fit text-foreground underline-offset-4 hover:underline"
          >
            {REPO} on GitHub →
          </a>
          <a
            href={AUTHOR_X_URL}
            target="_blank"
            rel="noreferrer"
            className="w-fit text-foreground underline-offset-4 hover:underline"
          >
            @pinesheet on X →
          </a>
        </footer>
      </div>
    </main>
  );
}
