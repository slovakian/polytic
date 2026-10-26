import { useNavigate, useSearch } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { z } from "zod";

import { exportResultAsImage } from "./image-exporter";
import { MOCK_PERSONAS, PERSONA_LEFT_LIBERTARIAN } from "./mock-data";
import { PrototypeSwitcher, type VariantKey } from "./prototype-switcher";
import { VariantA } from "./variant-a";
import { VariantB } from "./variant-b";
import { VariantC } from "./variant-c";

export const prototypeSearchSchema = z.object({
  variant: z.enum(["A", "B", "C"]).catch("A"),
  persona: z
    .enum(["left-libertarian", "communitarian", "techno-pragmatist"])
    .catch("left-libertarian"),
});

export type PrototypeSearch = z.infer<typeof prototypeSearchSchema>;

export type PersonaKey = PrototypeSearch["persona"];

interface PrototypeHostProps {
  initialVariant?: VariantKey;
  initialPersona?: PersonaKey;
}

export function PrototypeHost({
  initialVariant = "A",
  initialPersona = "left-libertarian",
}: PrototypeHostProps) {
  const navigate = useNavigate();

  // SAFETY: The search object is parsed through a strict fallback schema ensuring shape matches PrototypeSearch.
  const rawSearch = useSearch({ strict: false });
  const parsedSearch = prototypeSearchSchema.parse(rawSearch);

  const activeVariant: VariantKey = parsedSearch.variant ?? initialVariant;
  const activePersona: PersonaKey = parsedSearch.persona ?? initialPersona;

  const [revealKey, setRevealKey] = useState<number>(1);

  const currentResult =
    MOCK_PERSONAS[activePersona] ?? PERSONA_LEFT_LIBERTARIAN;

  const handleVariantChange = useCallback(
    (variant: VariantKey) => {
      navigate({
        to: ".",
        search: (prev: { variant?: VariantKey; persona?: PersonaKey }) => ({
          ...prev,
          variant,
        }),
        replace: true,
      });
    },
    [navigate],
  );

  const handlePersonaChange = useCallback(
    (persona: string) => {
      const parsedPersona = prototypeSearchSchema.shape.persona.parse(persona);

      navigate({
        to: ".",
        search: (prev: { variant?: VariantKey; persona?: PersonaKey }) => ({
          ...prev,
          persona: parsedPersona,
        }),
        replace: true,
      });
    },
    [navigate],
  );

  const handleReplayReveal = useCallback(() => {
    setRevealKey((k) => k + 1);
  }, []);

  const handleSaveImage = useCallback(() => {
    exportResultAsImage(currentResult).catch((err: Error) => {
      console.error("Export failed:", err.message);
    });
  }, [currentResult]);

  const handleContinueGrilling = useCallback(
    (topic: string) => {
      // In v1, unasked dimensions & tensions launch another round in the same tab
      navigate({
        to: "/",
        search: {
          continueTopic: topic,
        },
      });
    },
    [navigate],
  );

  const handleBackToChat = useCallback(() => {
    navigate({ to: "/" });
  }, [navigate]);

  return (
    <div className="relative min-h-screen w-full">
      {/* Active Prototype Variant Rendering */}
      {activeVariant === "A" && (
        <VariantA
          result={currentResult}
          onContinueGrilling={handleContinueGrilling}
          onBackToChat={handleBackToChat}
          revealKey={revealKey}
        />
      )}

      {activeVariant === "B" && (
        <VariantB
          result={currentResult}
          onContinueGrilling={handleContinueGrilling}
          onBackToChat={handleBackToChat}
          revealKey={revealKey}
        />
      )}

      {activeVariant === "C" && (
        <VariantC
          result={currentResult}
          onContinueGrilling={handleContinueGrilling}
          onBackToChat={handleBackToChat}
          revealKey={revealKey}
        />
      )}

      {/* Floating Prototype Switcher Pill */}
      <PrototypeSwitcher
        currentVariant={activeVariant}
        onVariantChange={handleVariantChange}
        currentPersona={activePersona}
        onPersonaChange={handlePersonaChange}
        onReplayReveal={handleReplayReveal}
        onSaveImage={handleSaveImage}
      />
    </div>
  );
}
