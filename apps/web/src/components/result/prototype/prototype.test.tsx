// @vitest-environment jsdom
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vite-plus/test";

import {
  PERSONA_COMMUNITARIAN,
  PERSONA_LEFT_LIBERTARIAN,
  PERSONA_TECHNO_PRAGMATIST,
} from "./mock-data";
import { PrototypeSwitcher } from "./prototype-switcher";
import { VariantA } from "./variant-a";
import { VariantB } from "./variant-b";
import { VariantC } from "./variant-c";

describe("Result Prototype Variants", () => {
  test("renders Variant A (Editorial Folio) with core sections", () => {
    const handleContinueGrilling = vi.fn();
    const handleBackToChat = vi.fn();

    render(
      <VariantA
        result={PERSONA_LEFT_LIBERTARIAN}
        onContinueGrilling={handleContinueGrilling}
        onBackToChat={handleBackToChat}
        revealKey={1}
      />,
    );

    // Headline and Monogram
    expect(
      screen.getByText("Non-Domination & Decentralist Autonomy"),
    ).toBeDefined();

    // Labels
    expect(screen.getByText("Libertarian Socialist")).toBeDefined();

    // Thinkers
    expect(screen.getByText("Isaiah Berlin")).toBeDefined();
    expect(screen.getByText("Hannah Arendt")).toBeDefined();

    // Tensions
    expect(
      screen.getByText("Civil Libertarianism vs. Collective Environmental Restraint"),
    ).toBeDefined();

    // Dimensions collapsed view
    expect(
      screen.getByText("Liberty: Non-Domination vs. Non-Interference"),
    ).toBeDefined();

    // Expand dimensions button
    const expandBtn = screen.getByRole("button", {
      name: /View remaining 9 dimensions/i,
    });

    fireEvent.click(expandBtn);

    // After expansion, unasked dimension is visible
    expect(
      screen.getByText(
        "Borders & Community: Universal Cosmopolitanism vs. Civic Demarcation",
      ),
    ).toBeDefined();

    // Clicking drilldown on unasked dimension calls handler
    const drilldownButtons = screen.getAllByRole("button", {
      name: /Grill me on this in Round 2 →/i,
    });

    expect(drilldownButtons.length).toBeGreaterThan(0);
  });

  test("renders Variant B (Bento Dossier) with interactive filtering", () => {
    const handleContinueGrilling = vi.fn();
    const handleBackToChat = vi.fn();

    render(
      <VariantB
        result={PERSONA_COMMUNITARIAN}
        onContinueGrilling={handleContinueGrilling}
        onBackToChat={handleBackToChat}
        revealKey={1}
      />,
    );

    expect(
      screen.getByText("Rooted Subsidiarity & Moral Cohesion"),
    ).toBeDefined();
    expect(screen.getByText("Michael Sandel")).toBeDefined();

    // Filter pill check
    const settledTab = screen.getByRole("button", { name: "Settled" });
    fireEvent.click(settledTab);

    expect(
      screen.getAllByText("State Neutrality vs. Perfectionist Cultivation").length,
    ).toBeGreaterThanOrEqual(1);
  });

  test("renders Variant C (Cartesian Plot) with coordinate views", () => {
    const handleContinueGrilling = vi.fn();
    const handleBackToChat = vi.fn();

    render(
      <VariantC
        result={PERSONA_TECHNO_PRAGMATIST}
        onContinueGrilling={handleContinueGrilling}
        onBackToChat={handleBackToChat}
        revealKey={1}
      />,
    );

    expect(
      screen.getByText("State Neutrality & Dynamic Capability"),
    ).toBeDefined();
    expect(screen.getByText("John Rawls")).toBeDefined();

    // Switch axis pairing mode
    const axisToggle = screen.getByRole("button", {
      name: "Top 2 Pulls",
    });

    fireEvent.click(axisToggle);

    expect(
      screen.getByText("2D Worldview Comparison Plot"),
    ).toBeDefined();
  });

  test("allows cycling through variants via PrototypeSwitcher", () => {
    const handleVariantChange = vi.fn();
    const handlePersonaChange = vi.fn();
    const handleReplayReveal = vi.fn();
    const handleSaveImage = vi.fn();

    const { rerender } = render(
      <PrototypeSwitcher
        currentVariant="A"
        onVariantChange={handleVariantChange}
        currentPersona="left-libertarian"
        onPersonaChange={handlePersonaChange}
        onReplayReveal={handleReplayReveal}
        onSaveImage={handleSaveImage}
      />,
    );

    expect(screen.getByText("A: Editorial Folio")).toBeDefined();

    // Click right arrow
    const nextBtn = screen.getByLabelText("Next variant");
    fireEvent.click(nextBtn);
    expect(handleVariantChange).toHaveBeenCalledWith("B");

    // Click replay reveal
    const replayBtn = screen.getByRole("button", { name: /Replay/i });
    fireEvent.click(replayBtn);
    expect(handleReplayReveal).toHaveBeenCalledTimes(1);

    // Rerender with B
    rerender(
      <PrototypeSwitcher
        currentVariant="B"
        onVariantChange={handleVariantChange}
        currentPersona="left-libertarian"
        onPersonaChange={handlePersonaChange}
        onReplayReveal={handleReplayReveal}
        onSaveImage={handleSaveImage}
      />,
    );

    expect(screen.getByText("B: Bento Dossier")).toBeDefined();

    // Rerender with C
    rerender(
      <PrototypeSwitcher
        currentVariant="C"
        onVariantChange={handleVariantChange}
        currentPersona="left-libertarian"
        onPersonaChange={handlePersonaChange}
        onReplayReveal={handleReplayReveal}
        onSaveImage={handleSaveImage}
      />,
    );

    expect(screen.getByText("C: Cartesian Plot")).toBeDefined();
  });
});
