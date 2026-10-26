// @vitest-environment jsdom
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vite-plus/test";

import { INITIAL_CHAPTERS, MOCK_RESULT } from "./mock-data";
import { PrototypeSwitcher } from "./prototype-switcher";
import { ResultPreview } from "./result-preview";
import { VariantA } from "./variant-a";
import { VariantB } from "./variant-b";
import { VariantC } from "./variant-c";

const createMockSession = () => ({
  chapters: INITIAL_CHAPTERS,
  activeChapterIndex: 2,
  viewedChapterIndex: 2,
  currentViewedChapter: INITIAL_CHAPTERS[2],
  isViewingHistory: false,
  isFirstChapter: false,
  isLastChapter: false,
  draft: "",
  setDraft: () => {},
  activeTension: INITIAL_CHAPTERS[2]?.messages.find((m) => m.tension)?.tension ?? null,
  resultUnlocked: true,
  showResultOverlay: false,
  resultData: MOCK_RESULT,
  goToChapter: () => {},
  jumpToActive: () => {},
  sendMessage: () => {},
  triageTension: () => {},
  createNewChapter: () => {},
  setShowResultOverlay: () => {},
  setResultUnlocked: () => {},
  returnToChatWithTopic: () => {},
  resetAll: () => {},
});

test("VariantA renders breadcrumb stepper, active tension, and composer", () => {
  const session = createMockSession();
  // SAFETY: createMockSession provides all required properties for VariantA testing.
  render(<VariantA session={session as any} />);

  expect(screen.getAllByText(/3\. Coherence Test: Speech vs Harm/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Fits, because/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/I'm torn/i).length).toBeGreaterThan(0);
  expect(screen.getByPlaceholderText(/Say what you believe/i)).toBeDefined();
});

test("VariantB renders in-flow tension triage within stream", () => {
  const session = createMockSession();
  // SAFETY: createMockSession provides all required properties for VariantB testing.
  render(<VariantB session={session as any} />);

  expect(screen.getByText(/In-Flow Tension Triage/i)).toBeDefined();
  expect(screen.getAllByText(/Fits, because/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/I'm torn/i).length).toBeGreaterThan(0);
  expect(screen.getByPlaceholderText(/Reply in your own words/i)).toBeDefined();
});

test("VariantC renders stage cockpit switcher and diagnostic tabs", () => {
  const session = createMockSession();
  // SAFETY: createMockSession provides all required properties for VariantC testing.
  render(<VariantC session={session as any} />);

  expect(screen.getByText(/Grilling Stage/i)).toBeDefined();
  expect(screen.getByText(/Result Map/i)).toBeDefined();
  expect(screen.getByText(/1 Active Tension/i)).toBeDefined();
});

test("ResultPreview renders labels, narrative, thinkers, and Round 2 entry points", () => {
  let selectedTopic = "";
  render(
    <ResultPreview
      result={MOCK_RESULT}
      onClose={() => {}}
      onContinueGrilling={(topic) => {
        selectedTopic = topic;
      }}
    />,
  );

  expect(screen.getByText("Non-Domination & Decentralist Autonomy")).toBeDefined();
  expect(screen.getByText("Left-Libertarian")).toBeDefined();
  expect(screen.getByText("John Stuart Mill")).toBeDefined();

  const continueBtn = screen.getByRole("button", { name: /Continue Grilling \(Round 2\)/i });
  expect(continueBtn).toBeDefined();
  fireEvent.click(continueBtn);
  expect(selectedTopic).toBe("Environmental Protection & Technological Risk");
});

test("PrototypeSwitcher renders and cycles variants", () => {
  const session = createMockSession();
  let changedVariant = "";

  // SAFETY: createMockSession provides required properties for switcher testing.
  render(
    <PrototypeSwitcher
      currentVariant="A"
      onVariantChange={(v) => {
        changedVariant = v;
      }}
      session={session as any}
    />,
  );

  const prevBtn = screen.getByRole("button", { name: "Previous UI variant" });
  const nextBtn = screen.getByRole("button", { name: "Next UI variant" });

  fireEvent.click(nextBtn);
  expect(changedVariant).toBe("B");

  fireEvent.click(prevBtn);
  expect(changedVariant).toBe("C");
});
