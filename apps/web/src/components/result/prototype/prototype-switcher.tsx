import { Button } from "@polytic/ui/components/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DownloadIcon,
  PlayIcon,
  RotateCcwIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export type VariantKey = "A" | "B" | "C";

interface PrototypeSwitcherProps {
  currentVariant: VariantKey;
  onVariantChange: (variant: VariantKey) => void;
  currentPersona: string;
  onPersonaChange: (persona: string) => void;
  onReplayReveal: () => void;
  onSaveImage: () => void;
}

const VARIANTS: { key: VariantKey; label: string; desc: string }[] = [
  {
    key: "A",
    label: "A: Editorial Folio",
    desc: "E-reader serif aesthetic, vertical broadside, printing-press curtain reveal",
  },
  {
    key: "B",
    label: "B: Bento Dossier",
    desc: "Modular bento tiles, multi-hue accents, card-dealing spring reveal",
  },
  {
    key: "C",
    label: "C: Cartesian Radar",
    desc: "Analytical cockpit, 2D proximity radar, sonar scan reveal",
  },
];

const PERSONAS: { key: string; name: string }[] = [
  { key: "left-libertarian", name: "Left-Libertarian" },
  { key: "communitarian", name: "Communitarian" },
  { key: "techno-pragmatist", name: "Techno-Pragmatist" },
];

export function PrototypeSwitcher({
  currentVariant,
  onVariantChange,
  currentPersona,
  onPersonaChange,
  onReplayReveal,
  onSaveImage,
}: PrototypeSwitcherProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentIndex = VARIANTS.findIndex((v) => v.key === currentVariant);

  const cyclePrev = () => {
    const nextIdx = (currentIndex - 1 + VARIANTS.length) % VARIANTS.length;

    onVariantChange(VARIANTS[nextIdx].key);
  };

  const cycleNext = () => {
    const nextIdx = (currentIndex + 1) % VARIANTS.length;

    onVariantChange(VARIANTS[nextIdx].key);
  };

  // Keyboard shortcut listener: ← and → arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target;

      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        (target instanceof HTMLElement && target.isContentEditable)
      ) {
        return;
      }

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

  const activeVariant = VARIANTS[currentIndex] ?? VARIANTS[0];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2">
      {/* Expanded Tools Tray */}
      {menuOpen ? (
        <div className="flex flex-col gap-2 rounded-2xl border border-stone-300 dark:border-stone-700 bg-background/95 p-3.5 shadow-2xl backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-150 min-w-[280px]">
          <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground uppercase pb-1 border-b border-border/50">
            <span>Prototype Sandbox Controls</span>
            <span>#29</span>
          </div>

          <div className="flex flex-col gap-1.5 pt-1">
            <span className="text-xs font-semibold text-foreground">Switch Mock Persona:</span>
            <div className="grid grid-cols-3 gap-1">
              {PERSONAS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => onPersonaChange(p.key)}
                  className={`rounded-lg py-1 px-2 text-[11px] font-medium transition-all ${
                    currentPersona === p.key
                      ? "bg-amber-500 text-stone-950 font-bold shadow-2xs"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {p.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/50">
            <Button
              variant="outline"
              size="sm"
              onClick={onReplayReveal}
              className="text-xs gap-1.5 flex-1"
            >
              <PlayIcon className="size-3 text-amber-500" />
              Replay Reveal
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onSaveImage}
              className="text-xs gap-1.5 flex-1"
            >
              <DownloadIcon className="size-3 text-emerald-500" />
              Save PNG
            </Button>
          </div>
        </div>
      ) : null}

      {/* Floating Bottom Pill */}
      <div className="flex items-center gap-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-background/90 px-2 py-1.5 shadow-2xl backdrop-blur-xl text-foreground ring-1 ring-black/5 dark:ring-white/10">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={cyclePrev}
          title="Previous variant (← arrow)"
          aria-label="Previous variant"
          className="rounded-full size-7 hover:bg-secondary"
        >
          <ChevronLeftIcon className="size-4" />
        </Button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 px-2.5 py-1 text-xs font-medium hover:bg-secondary/60 rounded-full transition-colors"
        >
          <span className="font-bold text-foreground">
            {activeVariant.label}
          </span>
          <span className="hidden sm:inline-block text-[11px] text-muted-foreground font-mono">
            (press ←/→)
          </span>
          <span className="rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 size-2" />
        </button>

        <Button
          variant="ghost"
          size="icon-sm"
          onClick={cycleNext}
          title="Next variant (→ arrow)"
          aria-label="Next variant"
          className="rounded-full size-7 hover:bg-secondary"
        >
          <ChevronRightIcon className="size-4" />
        </Button>

        <div className="h-4 w-px bg-border/60 mx-0.5" />

        <Button
          variant="ghost"
          size="sm"
          onClick={onReplayReveal}
          className="text-xs h-7 px-2.5 rounded-full text-muted-foreground hover:text-foreground gap-1"
        >
          <RotateCcwIcon className="size-3" />
          <span className="hidden sm:inline">Replay</span>
        </Button>
      </div>
    </div>
  );
}
