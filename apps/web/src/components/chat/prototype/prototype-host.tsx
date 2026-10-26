import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

import { chatStore } from "../chat-context";
import { PrototypeSwitcher } from "./prototype-switcher";
import type { PrototypeVariant } from "./types";
import { useGrillingSession } from "./use-grilling-session";
import { VariantA } from "./variant-a";
import { VariantB } from "./variant-b";
import { VariantC } from "./variant-c";

interface PrototypeHostProps {
  initialVariant?: PrototypeVariant;
}

export function PrototypeHost({ initialVariant = "A" }: PrototypeHostProps) {
  const navigate = useNavigate();
  const session = useGrillingSession();

  // Keep header reset button connected to session reset
  useEffect(() => {
    chatStore.setActions({
      canReset: true,
      busy: false,
      reset: session.resetAll,
    });

    return () => {
      chatStore.setActions({
        canReset: false,
        busy: false,
        reset: () => {},
      });
    };
  }, [session.resetAll]);

  const handleVariantChange = (nextVariant: PrototypeVariant) => {
    // SAFETY: TanStack Router expects search params for the home route.
    void navigate({
      to: "/",
      search: { variant: nextVariant } as any,
      replace: true,
    });
  };

  return (
    <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
      {initialVariant === "B" ? (
        <VariantB session={session} />
      ) : initialVariant === "C" ? (
        <VariantC session={session} />
      ) : (
        <VariantA session={session} />
      )}

      <PrototypeSwitcher
        currentVariant={initialVariant}
        onVariantChange={handleVariantChange}
        session={session}
      />
    </div>
  );
}
