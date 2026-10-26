import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { PrototypeHost } from "@/components/result/prototype/prototype-host";

const searchSchema = z.object({
  variant: z.enum(["A", "B", "C"]).default("A").catch("A"),
  persona: z
    .enum(["left-libertarian", "communitarian", "techno-pragmatist"])
    .default("left-libertarian")
    .catch("left-libertarian"),
});

export const Route = createFileRoute("/result")({
  validateSearch: (search) => searchSchema.parse(search),
  component: ResultPageComponent,
});

function ResultPageComponent() {
  const search = Route.useSearch();

  return (
    <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto">
      <PrototypeHost initialVariant={search.variant} initialPersona={search.persona} />
    </main>
  );
}
