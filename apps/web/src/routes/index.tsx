import { SKILL_INSTALL_COMMAND, SKILL_NAME } from "@polytic/skills";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <div className="grid gap-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Polytic</h1>
          <p className="text-muted-foreground text-base">
            Understand your own politics in high resolution.
          </p>
        </header>

        <section className="space-y-4 rounded-lg border p-6">
          <h2 className="text-lg font-semibold">Install {SKILL_NAME}</h2>
          <p className="text-muted-foreground text-sm">
            Install the Polytic Party skill in any skills-compatible AI agent:
          </p>
          <pre className="bg-muted overflow-x-auto rounded p-3 font-mono text-sm">
            {SKILL_INSTALL_COMMAND}
          </pre>
        </section>
      </div>
    </div>
  );
}
