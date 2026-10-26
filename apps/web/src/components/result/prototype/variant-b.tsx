import { Button } from "@polytic/ui/components/button";
import {
  ArrowLeftIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CompassIcon,
  DownloadIcon,
  LayersIcon,
  RotateCcwIcon,
  SwordsIcon,
  ZapIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { exportResultAsImage } from "./image-exporter";
import type { WorldviewResult } from "./types";

interface VariantProps {
  result: WorldviewResult;
  onContinueGrilling: (topic: string) => void;
  onBackToChat: () => void;
  revealKey: number;
}

export function VariantB({ result, onContinueGrilling, onBackToChat, revealKey }: VariantProps) {
  const [dealtCardCount, setDealtCardCount] = useState<number>(0);
  const [dimFilter, setDimFilter] = useState<"All" | "Settled" | "Torn" | "Unasked">("All");
  const [showAllDimensions, setShowAllDimensions] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [drilldownNotice, setDrilldownNotice] = useState<string | null>(null);

  // Card Dealing reveal sequence
  useEffect(() => {
    setDealtCardCount(0);

    const timers = [
      setTimeout(() => setDealtCardCount(1), 100), // Card 1: Identity Bento
      setTimeout(() => setDealtCardCount(2), 400), // Card 2: Thinkers Bento
      setTimeout(() => setDealtCardCount(3), 700), // Card 3: Tensions Bento
      setTimeout(() => setDealtCardCount(4), 1000), // Card 4: Dimensions Bento
    ];

    return () => timers.forEach(clearTimeout);
  }, [revealKey, result.personaKey]);

  const handleExport = async () => {
    setIsExporting(true);

    try {
      await exportResultAsImage(result);
    } finally {
      setIsExporting(false);
    }
  };

  const handleDrilldown = (topic: string) => {
    setDrilldownNotice(topic);
    setTimeout(() => {
      onContinueGrilling(topic);
    }, 600);
  };

  // Filtered dimensions
  const filteredDimensions = result.dimensions.filter((d) => {
    if (dimFilter === "Settled") {
      return d.status === "Settled" && d.coverage !== "Not asked";
    }

    if (dimFilter === "Torn") {
      return d.status === "Torn";
    }

    if (dimFilter === "Unasked") {
      return d.coverage === "Not asked";
    }

    return true;
  });

  const displayedDimensions = showAllDimensions
    ? filteredDimensions
    : filteredDimensions.slice(0, 5);

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground pb-32">
      {/* Top Glass Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/50 bg-background/80 px-4 py-3 backdrop-blur-md sm:px-8">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBackToChat}
            className="gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeftIcon className="size-4" />
            Grill Chat
          </Button>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <LayersIcon className="size-3.5 text-indigo-500" />
            Dossier View · Turn {result.turnCount}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            disabled={isExporting}
            className="gap-2 text-xs shadow-sm"
          >
            <DownloadIcon className="size-3.5" />
            {isExporting ? "Capturing…" : "Save as image"}
          </Button>
        </div>
      </header>

      {/* Drilldown Notice */}
      {drilldownNotice ? (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-indigo-600 text-white px-5 py-2.5 shadow-xl text-xs font-mono uppercase tracking-wider animate-in fade-in-0 duration-200">
          <SwordsIcon className="size-4 animate-bounce" />
          <span>Entering Round 2 on {drilldownNotice}…</span>
        </div>
      ) : null}

      {/* Bento Grid Layout (Phone First 1-Col -> Tablet/Desktop 2-Col) */}
      <main className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 flex flex-col gap-6">
        {/* Card 1: Identity & Labels Bento Card */}
        <section
          className={`group relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-secondary/30 p-6 sm:p-8 shadow-md transition-all duration-500 ${
            dealtCardCount >= 1
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-8"
          }`}
        >
          {/* Subtle multi-hue gradient glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-60 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 size-60 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-mono font-medium text-foreground">
                <CompassIcon className="size-3.5 text-amber-500" />
                <span>POLYTIC DOSSIER</span>
              </div>
              <span className="text-xs font-mono text-muted-foreground">
                First-Pass Checkpoint · {result.sessionDuration}
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                {result.headline}
              </h1>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
                {result.narrative}
              </p>
            </div>

            {/* Labels Chips */}
            <div className="mt-2 flex flex-wrap gap-2">
              {result.labels.map((label, idx) => {
                const colorVariants = [
                  "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
                  "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
                  "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                  "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
                ];

                const badgeColor = colorVariants[idx % colorVariants.length];

                return (
                  <div
                    key={label.name}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-medium shadow-2xs ${badgeColor}`}
                  >
                    <span className="font-bold">{label.name}</span>
                    <span className="text-[10px] font-mono opacity-80 uppercase">
                      [{label.type}]
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2-Column Split for Thinkers & Tensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 2: Closest Thinkers Card */}
          <section
            className={`flex flex-col gap-4 rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-500 ${
              dealtCardCount >= 2
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpenIcon className="size-4 text-emerald-500" />
                <h2 className="font-bold text-base text-foreground">Closest Thinkers</h2>
              </div>
              <span className="text-xs font-mono text-muted-foreground">Top 3</span>
            </div>

            <div className="flex flex-col gap-3">
              {result.thinkers.map((thinker) => (
                <div
                  key={thinker.name}
                  className="group relative flex flex-col gap-1.5 rounded-2xl border border-border/60 bg-background/60 p-3.5 hover:border-border transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-foreground">{thinker.name}</span>
                    <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {thinker.alignment}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {thinker.matchReason}
                  </p>
                  <div className="mt-1 rounded-lg bg-secondary/60 p-2 text-[11px] leading-tight text-foreground/80">
                    <span className="font-mono uppercase text-[9px] text-amber-500 font-bold block">
                      Divergence: {thinker.divergence.dimension}
                    </span>
                    {thinker.divergence.description}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Card 3: Key Tensions Card */}
          <section
            className={`flex flex-col gap-4 rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-500 ${
              dealtCardCount >= 3
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ZapIcon className="size-4 text-amber-500" />
                <h2 className="font-bold text-base text-foreground">Key Tensions</h2>
              </div>
              <span className="text-xs font-mono text-muted-foreground">Fault Lines</span>
            </div>

            <div className="flex flex-col gap-3">
              {result.tensions.map((tension) => {
                const isReconciled = tension.status === "Reconciled";
                const isUnresolved = tension.status === "Unresolved";

                return (
                  <div
                    key={tension.id}
                    className={`flex flex-col gap-2 rounded-2xl border p-3.5 transition-colors ${
                      isReconciled
                        ? "border-emerald-500/20 bg-emerald-500/[0.03]"
                        : isUnresolved
                          ? "border-amber-500/30 bg-amber-500/[0.04]"
                          : "border-border/60 bg-background/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-bold text-xs text-foreground leading-snug">
                        {tension.title}
                      </span>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-mono uppercase font-semibold ${
                          isReconciled
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                            : isUnresolved
                              ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                              : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {tension.status}
                      </span>
                    </div>

                    {tension.bridge ? (
                      <p className="text-xs text-muted-foreground italic leading-snug">
                        "{tension.bridge}"
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground leading-snug">
                        {tension.aiStressTest}
                      </p>
                    )}

                    {isUnresolved ? (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDrilldown(`Tension: ${tension.title}`)}
                        className="self-end text-xs font-mono h-6 px-2 text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 gap-1"
                      >
                        <SwordsIcon className="size-3" />
                        Resolve in Round 2 →
                      </Button>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Card 4: Dimension Matrix Card */}
        <section
          className={`flex flex-col gap-4 rounded-3xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm transition-all duration-500 ${
            dealtCardCount >= 4
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-bold text-lg text-foreground">Dimension Matrix</h2>
              <p className="text-xs text-muted-foreground">
                Ordered by Pull magnitude · Thin marked · Not asked faded
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 rounded-xl bg-secondary/80 p-1">
              {(["All", "Settled", "Torn", "Unasked"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setDimFilter(tab)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                    dimFilter === tab
                      ? "bg-background text-foreground shadow-2xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            {displayedDimensions.map((dim) => {
              const isNotAsked = dim.coverage === "Not asked";
              const isThin = dim.coverage === "Thin";

              return (
                <div
                  key={dim.id}
                  className={`flex flex-col gap-2 rounded-2xl border border-border/60 p-4 transition-all ${
                    isNotAsked
                      ? "bg-secondary/20 opacity-55 hover:opacity-100"
                      : "bg-background/80 opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-foreground">{dim.name}</span>
                    <div className="flex items-center gap-1.5 font-mono text-[10px]">
                      {isThin ? (
                        <span className="rounded bg-amber-500/15 px-1.5 py-0.5 text-amber-600 dark:text-amber-400">
                          THIN
                        </span>
                      ) : null}
                      <span
                        className={`rounded px-1.5 py-0.5 font-semibold uppercase ${
                          dim.status === "Settled"
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                            : dim.status === "Torn"
                              ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                              : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {dim.status}
                      </span>
                    </div>
                  </div>

                  {/* Dual-pole spectrum bar */}
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>{dim.poleA}</span>
                    <span>{dim.poleB}</span>
                  </div>

                  <div className="relative h-2 w-full rounded-full bg-secondary overflow-hidden">
                    {!isNotAsked ? (
                      <div
                        className="absolute top-0 bottom-0 w-3 -translate-x-1/2 rounded-full bg-foreground shadow-sm"
                        style={{
                          left: `${((dim.position + 100) / 200) * 100}%`,
                        }}
                      />
                    ) : (
                      <div className="h-full w-full bg-muted/40" />
                    )}
                  </div>

                  {isNotAsked ? (
                    <div className="flex justify-end pt-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDrilldown(`Dimension: ${dim.name}`)}
                        className="h-6 px-2 text-xs font-mono text-muted-foreground hover:text-foreground gap-1"
                      >
                        <SwordsIcon className="size-3" />
                        Grill in Round 2 →
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
            className="self-center text-xs text-muted-foreground hover:text-foreground gap-1"
          >
            {showAllDimensions ? (
              <>
                <ChevronUpIcon className="size-3.5" />
                Collapse list
              </>
            ) : (
              <>
                <ChevronDownIcon className="size-3.5" />
                View all {filteredDimensions.length} axes
              </>
            )}
          </Button>
        </section>

        {/* Round 2 CTA */}
        <section className="flex flex-col items-center gap-3 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-6 text-center">
          <h3 className="font-bold text-base text-foreground">Ready for higher resolution?</h3>
          <p className="max-w-md text-xs text-muted-foreground">
            Jump into Round 2 to probe remaining unasked axes and resolve open tensions.
          </p>
          <Button
            onClick={() => handleDrilldown("Round 2 General Deep Dive")}
            className="gap-2 bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <RotateCcwIcon className="size-4" />
            Launch Round 2 Grilling
          </Button>
        </section>
      </main>
    </div>
  );
}
