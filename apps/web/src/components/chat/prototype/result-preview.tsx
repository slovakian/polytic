import { Button } from "@polytic/ui/components/button";
import {
  ArrowLeftIcon,
  BookOpenIcon,
  CompassIcon,
  DownloadIcon,
  FlameIcon,
  RotateCcwIcon,
  ScaleIcon,
  SparklesIcon,
  SwordsIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

import type { WorldviewResult } from "./types";

interface ResultPreviewProps {
  result: WorldviewResult;
  onClose: () => void;
  onContinueGrilling: (topic: string) => void;
}

export function ResultPreview({ result, onClose, onContinueGrilling }: ResultPreviewProps) {
  const [showAllDimensions, setShowAllDimensions] = useState(false);
  const [copiedImageNotice, setCopiedImageNotice] = useState(false);

  const displayedDimensions = showAllDimensions
    ? result.dimensions
    : result.dimensions.slice(0, 5);

  const handleSaveImage = () => {
    setCopiedImageNotice(true);
    setTimeout(() => setCopiedImageNotice(false), 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background/98 backdrop-blur-xl animate-in fade-in-0 duration-300">
      {/* Sticky top action bar */}
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border/40 bg-background/90 px-4 py-3 backdrop-blur-md sm:px-8">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="font-serif gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeftIcon className="size-4" />
            Back to Chat
          </Button>
          <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-muted-foreground/80 font-mono">
            First-Pass Checkpoint · 11 Turns
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSaveImage}
            className="font-serif gap-2 text-xs"
          >
            <DownloadIcon className="size-3.5" />
            {copiedImageNotice ? "Image Saved (Mock)" : "Save as image"}
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Close"
          >
            <XIcon className="size-4" />
          </Button>
        </div>
      </div>

      {/* Main card body - phone first, screenshot worthy */}
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-4 py-8 sm:px-6 sm:py-12">
        {/* Header Hero */}
        <div className="flex flex-col items-center text-center gap-3 animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20">
            <CompassIcon className="size-6" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500 font-semibold">
            <SparklesIcon className="size-3.5" />
            Your Political Map
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Non-Domination & Decentralist Autonomy
          </h1>
          <p className="font-serif max-w-lg text-sm sm:text-base leading-relaxed text-muted-foreground">
            A high-resolution synthesis of your core rules, internal fault lines, and closest historical thinkers.
          </p>
        </div>

        {/* Labels Section */}
        <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/60 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Anchored Political Labels
            </span>
            <span className="text-xs text-muted-foreground">Source: Polytic Label Library</span>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {result.labels.map((label) => (
              <div
                key={label.name}
                className="flex flex-col gap-1 rounded-xl border border-border/80 bg-background/80 p-3.5 flex-1 min-w-[200px]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif font-bold text-base text-foreground">
                    {label.name}
                  </span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    {label.type} · {label.confidence}
                  </span>
                </div>
                <p className="font-serif text-xs text-muted-foreground leading-relaxed">
                  {label.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Synthesis */}
        <div className="flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/60 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <BookOpenIcon className="size-3.5" />
            Synthesis Narrative
          </div>
          <p className="font-serif text-base sm:text-lg leading-relaxed text-foreground">
            {result.narrative}
          </p>
        </div>

        {/* Tensions Section */}
        <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <ScaleIcon className="size-3.5 text-amber-500" />
              Identified Value Tensions
            </div>
            <span className="text-[11px] text-muted-foreground font-mono">1 Active Collision</span>
          </div>
          <div className="flex flex-col gap-3">
            {result.tensions.map((tension) => (
              <div
                key={tension.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-border/70 bg-background/60 p-3.5"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-semibold text-sm text-foreground">
                      {tension.title}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${
                        tension.state === "Torn"
                          ? "bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {tension.state}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-serif">
                    <span>{tension.poleA}</span>
                    <span className="text-muted-foreground/40">vs</span>
                    <span>{tension.poleB}</span>
                  </div>
                </div>

                {tension.state === "Torn" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onContinueGrilling(`Tension: ${tension.title}`)}
                    className="font-serif shrink-0 gap-1 text-xs hover:bg-amber-500/10 hover:text-amber-500"
                  >
                    <FlameIcon className="size-3 text-amber-500" />
                    Deepen Tension →
                  </Button>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Closest Thinkers Section */}
        <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              <SwordsIcon className="size-3.5 text-blue-500" />
              Closest Thinkers & Reference Figures
            </div>
            <span className="text-[11px] text-muted-foreground font-mono">Hand-Encoded Catalog</span>
          </div>

          <div className="flex flex-col gap-4">
            {result.closestThinkers.map((thinker) => (
              <div
                key={thinker.name}
                className="flex flex-col gap-2 rounded-xl border border-border/80 bg-background/80 p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-base text-foreground">
                      {thinker.name}
                    </h3>
                    <span className="text-xs text-muted-foreground font-mono">
                      {thinker.era}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-lg font-bold text-emerald-500">
                      {thinker.match}%
                    </span>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      Alignment
                    </div>
                  </div>
                </div>

                <div className="mt-1 flex flex-col gap-1.5 border-t border-border/50 pt-2 text-xs font-serif leading-relaxed">
                  <div className="text-muted-foreground">
                    <strong className="text-foreground font-semibold">Where you align:</strong>{" "}
                    {thinker.alignment}
                  </div>
                  <div className="text-amber-700 dark:text-amber-300">
                    <strong className="font-semibold">#1 Divergence:</strong> {thinker.divergence}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Dimension Breakdown */}
        <div className="flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/60 p-5 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Full Dimension Breakdown (Ordered by Pull)
            </span>
            <span className="text-[11px] text-muted-foreground font-mono">
              {result.dimensions.length} Total Dimensions
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {displayedDimensions.map((dim) => {
              const isNotAsked = dim.status === "Not asked";

              return (
                <div
                  key={dim.name}
                  className={`flex flex-col gap-1.5 rounded-xl border border-border/60 bg-background/70 p-3.5 transition-opacity ${
                    isNotAsked ? "opacity-55 hover:opacity-100" : "opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-serif font-semibold text-foreground">
                      {dim.name}
                    </span>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider ${
                        dim.status === "Settled"
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : dim.status === "Torn"
                            ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                            : dim.status === "Thin"
                              ? "bg-secondary text-muted-foreground"
                              : "bg-muted/50 text-muted-foreground/80"
                      }`}
                    >
                      {dim.status}
                    </span>
                  </div>

                  {/* Dual-pole visual spectrum */}
                  <div className="flex items-center justify-between text-[11px] font-serif text-muted-foreground">
                    <span>{dim.poleA}</span>
                    <span>{dim.poleB}</span>
                  </div>

                  <div className="relative h-2 w-full rounded-full bg-secondary/80 overflow-hidden">
                    {!isNotAsked ? (
                      <div
                        className="absolute top-0 bottom-0 w-3 rounded-full bg-foreground shadow-sm -translate-x-1/2"
                        style={{
                          left: `${((dim.position + 100) / 200) * 100}%`,
                        }}
                      />
                    ) : (
                      <div className="h-full w-full bg-muted/40" />
                    )}
                  </div>

                  {isNotAsked ? (
                    <div className="pt-1 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onContinueGrilling(`Dimension: ${dim.name}`)}
                        className="font-serif text-xs gap-1 text-muted-foreground hover:text-foreground h-7 px-2"
                      >
                        <SwordsIcon className="size-3" />
                        Grill me on this in Round 2 →
                      </Button>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAllDimensions(!showAllDimensions)}
            className="font-serif text-xs text-muted-foreground hover:text-foreground self-center"
          >
            {showAllDimensions
              ? "Show fewer dimensions"
              : `View remaining ${result.dimensions.length - 5} dimensions (including unasked)`}
          </Button>
        </div>

        {/* Payoff Footer CTA */}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 text-center">
          <div className="flex flex-col gap-1 max-w-md">
            <h3 className="font-serif font-bold text-lg text-foreground">
              Want higher resolution?
            </h3>
            <p className="font-serif text-sm text-muted-foreground leading-relaxed">
              Continue into Round 2 to resolve active tensions, probe unasked dimensions, and sharpen your thinker alignment.
            </p>
          </div>
          <Button
            onClick={() => onContinueGrilling("Environmental Protection & Technological Risk")}
            className="font-serif gap-2 px-6"
          >
            <RotateCcwIcon className="size-4" />
            Continue Grilling (Round 2)
          </Button>
        </div>
      </div>
    </div>
  );
}
