import { Button } from "@polytic/ui/components/button";
import { cn } from "@polytic/ui/lib/utils";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FlameIcon,
  PlusCircleIcon,
  RotateCcwIcon,
  SlidersHorizontalIcon,
  SparklesIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import type { PrototypeVariant } from "./types";
import type { useGrillingSession } from "./use-grilling-session";

const VARIANTS: Array<{ key: PrototypeVariant; label: string; desc: string }> = [
  {
    key: "A",
    label: "A: Floating Shelf & Stepper",
    desc: "Controls float above input; pagination via top breadcrumb stepper",
  },
  {
    key: "B",
    label: "B: In-Flow Triage & Folios",
    desc: "Controls embedded in message stream; turn-fold accordion chapters",
  },
  {
    key: "C",
    label: "C: Diagnostic Cockpit",
    desc: "Stage navigator sidebar + floating triage HUD drawer + Result tab",
  },
];

interface PrototypeSwitcherProps {
  currentVariant: PrototypeVariant;
  onVariantChange: (variant: PrototypeVariant) => void;
  session: ReturnType<typeof useGrillingSession>;
}

export function PrototypeSwitcher({
  currentVariant,
  onVariantChange,
  session,
}: PrototypeSwitcherProps) {
  const [showSimMenu, setShowSimMenu] = useState(false);

  const currentIndex = VARIANTS.findIndex((v) => v.key === currentVariant);
  const currentInfo = VARIANTS[currentIndex] ?? VARIANTS[0];

  const cyclePrev = () => {
    const prevIdx = (currentIndex - 1 + VARIANTS.length) % VARIANTS.length;
    onVariantChange(VARIANTS[prevIdx].key);
  };

  const cycleNext = () => {
    const nextIdx = (currentIndex + 1) % VARIANTS.length;
    onVariantChange(VARIANTS[nextIdx].key);
  };

  // Keyboard navigation: ArrowLeft / ArrowRight cycles variants when not in input/textarea
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;

      const isInput =
        activeEl instanceof HTMLInputElement ||
        activeEl instanceof HTMLTextAreaElement ||
        (activeEl instanceof HTMLElement && activeEl.isContentEditable);

      if (isInput) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        cyclePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        cycleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Don't render in production
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <aside
      aria-label="Prototype switcher"
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      {/* Simulation Helper Panel */}
      {showSimMenu && (
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border/80 bg-background/95 p-2 shadow-2xl backdrop-blur-md text-xs animate-in slide-in-from-bottom-2 duration-200">
          <span className="font-mono text-[10px] uppercase text-muted-foreground px-2">
            Simulate Tools:
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              session.createNewChapter();
              setShowSimMenu(false);
            }}
            className="font-serif text-xs gap-1.5 h-7"
          >
            <PlusCircleIcon className="size-3 text-emerald-500" />
            <span>Next Chapter (paginate_flow)</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              session.triageTension("unresolved");
              session.jumpToActive();
              setShowSimMenu(false);
            }}
            className="font-serif text-xs gap-1.5 h-7"
          >
            <FlameIcon className="size-3 text-amber-500" />
            <span>Surface Tension</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              session.setShowResultOverlay(true);
              setShowSimMenu(false);
            }}
            className="font-serif text-xs gap-1.5 h-7"
          >
            <SparklesIcon className="size-3 text-amber-400" />
            <span>Reveal Result</span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              session.resetAll();
              setShowSimMenu(false);
            }}
            className="font-serif text-xs gap-1 h-7 text-muted-foreground hover:text-foreground"
          >
            <RotateCcwIcon className="size-3" />
            <span>Reset</span>
          </Button>
        </div>
      )}

      {/* Main Floating Pill */}
      <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/95 px-3 py-1.5 shadow-2xl backdrop-blur-md ring-1 ring-black/10 dark:ring-white/10">
        <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          Prototype
        </span>

        <button
          onClick={cyclePrev}
          aria-label="Previous UI variant"
          className="flex size-6 items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeftIcon className="size-4" />
        </button>

        <div className="flex items-center gap-1.5 px-1 font-serif text-xs">
          <span className="font-semibold text-foreground">{currentInfo.label}</span>
          <span className="hidden md:inline-block text-[11px] text-muted-foreground/80">
            · {currentInfo.desc}
          </span>
        </div>

        <button
          onClick={cycleNext}
          aria-label="Next UI variant"
          className="flex size-6 items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronRightIcon className="size-4" />
        </button>

        <div className="h-4 w-px bg-border/60 mx-0.5" />

        <button
          onClick={() => setShowSimMenu(!showSimMenu)}
          aria-label="Toggle simulation tools"
          className={cn(
            "flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-mono transition-colors",
            showSimMenu
              ? "bg-foreground text-background font-semibold"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          <SlidersHorizontalIcon className="size-3" />
          <span>Simulate</span>
        </button>
      </div>
    </aside>
  );
}
