import { createFileRoute } from "@tanstack/react-router";

import { Chat } from "@/components/chat/chat";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <main className="flex min-h-0 flex-col">
      <Chat />
    </main>
  );
}
