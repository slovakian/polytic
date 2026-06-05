import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";

// The grilling skill, mirrored from skills/polytik-party/SKILL.md (also published to
// the public mirror). Kept inline so this page is fully static and self-contained.
const skillSource = `---
...
95:`;

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

const REPO = "slovakian/polytik-party";
const REPO_URL = `https://github.com/${REPO}`;

const RUNNERS = [
... // omitted for brevity
] as const;

const SKILL_ARG = `skills add ${REPO}`;

async function copyText(text: string) {
  // implementation omitted
}

function useCopied() {
  // implementation omitted
}

function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  // implementation omitted
}

function InstallCard() {
  // implementation omitted
}

function SkillBlock() {
  // implementation omitted
}

function HomeComponent() {
  return (
    <main className="min-h-svh px-6 py-16 sm:py-24">
      <div className="fixed top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      <div className="mx-auto flex max-w-2xl flex-col gap-12">
        {/* Wordmark + thesis */}
        <header className="flex flex-col gap-5">
          <h1 className="font-heading text-6xl leading-none tracking-tight text-foreground sm:text-7xl">
            <span className="rainbow-text">Poly</span>tik
          </h1>
          <p className="text-balance text-xl text-foreground sm:text-2xl">
            Figure out where you stand.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Political compasses and left-right labels miss a lot. Polytik is a guided
            conversation about your views. You get questions, some pushback, and a summary
            at the end.
          </p>
        </header>

        {/* What it is */}
        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl text-foreground">A skill, not a site</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Polytik is a <strong className="font-medium text-foreground">grilling
            skill</strong> you install in an AI agent like Claude or Cursor. The agent
            asks about your politics, notes where your answers conflict, and writes up
            where you seem to land. It does not argue for a side.
          </p>
          <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <span aria-hidden="true" className="select-none text-foreground/40">·</span>
              <span>
                <strong className="font-medium text-foreground">Non-partisan.</strong> The
                agent does not share or push its own politics.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="select-none text-foreground/40">·</span>
              <span>
                <strong className="font-medium text-foreground">Descriptive.</strong> It
                explains your views. It does not rate them.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="select-none text-foreground/40">·</span>
              <span>
                <strong className="font-medium text-foreground">More than a quiz.</strong>{" "}
                It follows what you say instead of fixed categories.
              </span>
            </li>
          </ul>
        </section>

        {/* Install */}
        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl text-foreground">Install it</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Run the command below, then ask your agent to{" "}
            <em className="text-foreground font-italic">grill you on your politics</em>.
          </p>
          <InstallCard />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Or open the full prompt below and paste it into any agent.
          </p>
          <SkillBlock />
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-2 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="w-fit text-foreground underline-offset-4 hover:underline"
          >
            {REPO} on GitHub →
          </a>
          <p>Non-partisan. Open source.</p>
        </footer>
      </div>
    </main>
  );
}
