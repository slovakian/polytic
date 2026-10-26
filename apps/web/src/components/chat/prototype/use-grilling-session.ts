import { useCallback, useState } from "react";

import { INITIAL_CHAPTERS, MOCK_RESULT } from "./mock-data";
import type { Chapter, GrillingMessage, GrillingTension, TensionStatus } from "./types";

export function useGrillingSession() {
  const [chapters, setChapters] = useState<Chapter[]>(INITIAL_CHAPTERS);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(2); // Start on Chapter 3 (Tension) by default for rich evaluation
  const [viewedChapterIndex, setViewedChapterIndex] = useState<number>(2);
  const [draft, setDraft] = useState<string>("");

  const [activeTension, setActiveTension] = useState<GrillingTension | null>(
    INITIAL_CHAPTERS[2]?.messages.find((m) => m.tension)?.tension ?? null,
  );

  const [showResultOverlay, setShowResultOverlay] = useState<boolean>(false);
  const [resultUnlocked, setResultUnlocked] = useState<boolean>(true); // Pre-unlocked for testing reveal, or unlocked on trigger

  const currentViewedChapter = chapters[viewedChapterIndex] ?? chapters[activeChapterIndex];
  const isViewingHistory = viewedChapterIndex !== activeChapterIndex;
  const isLastChapter = viewedChapterIndex === chapters.length - 1;
  const isFirstChapter = viewedChapterIndex === 0;

  // Jump to specific chapter / page
  const goToChapter = useCallback((index: number) => {
    if (index >= 0 && index < chapters.length) {
      setViewedChapterIndex(index);
    }
  }, [chapters.length]);

  const jumpToActive = useCallback(() => {
    setViewedChapterIndex(activeChapterIndex);
  }, [activeChapterIndex]);

  // Send message on active chapter
  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();

      if (!trimmed) return;

      const userMsg: GrillingMessage = {
        id: `usr-${Date.now()}`,
        role: "user",
        content: trimmed,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setChapters((prev) => {
        const next = [...prev];
        const active = next[activeChapterIndex];

        if (active) {
          next[activeChapterIndex] = {
            ...active,
            messages: [...active.messages, userMsg],
          };
        }

        return next;
      });

      setDraft("");

      // Simulated surgical AI probe response if testing in pure UI mode
      setTimeout(() => {
        const assistantMsg: GrillingMessage = {
          id: `asst-${Date.now()}`,
          role: "assistant",
          content:
            "Understood. If you hold that dividing line, how does it stand when applied to institutional power? Suppose a local community votes democratically to restrict property sales to outsiders—does local subsidiarity permit that, or does freedom of movement restrict community sovereignty?",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          reasoning: "Stress-testing boundary between local democratic self-determination and universal freedom of contract/movement.",
          suggestions: [
            "Local community sovereignty overrides outside buyers",
            "Freedom of movement is a universal right that cannot be voted away",
            "I'm genuinely torn on this trade-off",
          ],
        };

        setChapters((prev) => {
          const next = [...prev];
          const active = next[activeChapterIndex];

          if (active) {
            next[activeChapterIndex] = {
              ...active,
              messages: [...active.messages, assistantMsg],
            };
          }

          return next;
        });
      }, 600);
    },
    [activeChapterIndex],
  );

  // Tension Triage
  const triageTension = useCallback(
    (status: TensionStatus, customText?: string) => {
      if (!activeTension) return;

      const updatedTension: GrillingTension = {
        ...activeTension,
        status,
        distinction: customText,
      };

      setActiveTension(updatedTension);

      if (status === "fits") {
        // Prefill input so the user formulates their distinction in their own words (ADR-0007 compliant)
        setDraft("It fits because ");
      } else if (status === "torn") {
        sendMessage("I am genuinely torn on this. Both principles matter to me and I see the real contradiction.");
        setActiveTension(null);
      } else if (status === "shelved") {
        sendMessage("Not now — let's move to the next dilemma and return to this later.");
        setActiveTension(null);
      }
    },
    [activeTension, sendMessage],
  );

  // Create a new page / chapter (simulating isomorphic agent tool `paginate_flow`)
  const createNewChapter = useCallback(
    (title?: string, bridge?: string) => {
      const nextNum = chapters.length + 1;
      const newTitle = title || `${nextNum}. Diagnostic Sweep: Deepening Dimension`;
      const newBridge = bridge || "Testing moral trade-offs in adjacent domain.";

      const newChap: Chapter = {
        id: `chap-${nextNum}`,
        number: nextNum,
        title: newTitle,
        phase: "dilemmas",
        summary: `Exploring new dimension sweep.`,
        principleBridge: newBridge,
        status: "active",
        messages: [
          {
            id: `init-${nextNum}`,
            role: "assistant",
            content: `Beginning Chapter ${nextNum}: ${newTitle}.\n\nLet's test your stance on environmental risk versus technological acceleration. When a new clean-energy technology carries a 1% chance of catastrophic ecological disruption, should development pause under the precautionary principle, or proceed under proactionary adaptation?`,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            reasoning: "Transitioning to Nature & Technology domain. Probing Precaution vs Proaction.",
            suggestions: [
              "Pause development — catastrophic risk cannot be gambled with",
              "Proceed with safeguards — stagnation is more dangerous",
              "Unpack the technological trade-offs",
            ],
          },
        ],
      };

      setChapters((prev) => {
        // SAFETY: Marking previous chapter as explicitly completed status.
        const updated = prev.map((c, i) => (i === activeChapterIndex ? { ...c, status: "completed" as const } : c));

        return [...updated, newChap];
      });

      const newIndex = chapters.length;
      setActiveChapterIndex(newIndex);
      setViewedChapterIndex(newIndex);
      setActiveTension(null);
    },
    [activeChapterIndex, chapters.length],
  );

  // Return from Result back into Grilling chat for another round
  const returnToChatWithTopic = useCallback(
    (topicName: string) => {
      setShowResultOverlay(false);
      createNewChapter(
        `Round 2: ${topicName}`,
        `Investigating unasked dimension or tension: ${topicName}`,
      );
    },
    [createNewChapter],
  );

  const resetAll = useCallback(() => {
    setChapters(INITIAL_CHAPTERS);
    setActiveChapterIndex(2);
    setViewedChapterIndex(2);
    setDraft("");
    setActiveTension(INITIAL_CHAPTERS[2]?.messages.find((m) => m.tension)?.tension ?? null);
    setShowResultOverlay(false);
    setResultUnlocked(true);
  }, []);

  return {
    chapters,
    activeChapterIndex,
    viewedChapterIndex,
    currentViewedChapter,
    isViewingHistory,
    isFirstChapter,
    isLastChapter,
    draft,
    setDraft,
    activeTension,
    resultUnlocked,
    showResultOverlay,
    resultData: MOCK_RESULT,
    goToChapter,
    jumpToActive,
    sendMessage,
    triageTension,
    createNewChapter,
    setShowResultOverlay,
    setResultUnlocked,
    returnToChatWithTopic,
    resetAll,
  };
}
