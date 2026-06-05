import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { BuyMeACarousel } from "@/components/buy-me-a-carousel";
import { CopyButton } from "@/components/copy-button";
import { SkillPreview } from "@/components/skill-preview";
import { ThemeToggle } from "@/components/theme-toggle";

// Bundled at build time from skills/polytik-party/SKILL.md (source of truth; also published
// to the public mirror). Copy-paste users get SKILL.md only — reference files ship with
// `npx skills add`.
import skillSource from "../../../../skills/polytik-party/SKILL.md?raw";

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

        <BuyMeACarousel />

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
