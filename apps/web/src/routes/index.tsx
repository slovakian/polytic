import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { PrototypeHost } from "@/components/chat/prototype/prototype-host";
import type { PrototypeVariant } from "@/components/chat/prototype/types";

const searchSchema = z.object({
  variant: z.enum(["A", "B", "C"]).catch("A").default("A"),
});

export const Route = createFileRoute("/")({
  validateSearch: searchSchema,
  component: HomeComponent,
});

function HomeComponent() {
  const { variant } = Route.useSearch();

  // SAFETY: searchSchema validates variant to strictly be "A" | "B" | "C".
  return (
    <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      <PrototypeHost initialVariant={variant as PrototypeVariant} />
    </main>
  );
}
