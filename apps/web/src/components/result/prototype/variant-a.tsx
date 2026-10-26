import { Button } from "@polytic/ui/components/button";
import {
  ArrowLeftIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CompassIcon,
  DownloadIcon,
  RotateCcwIcon,
  ScaleIcon,
  SparklesIcon,
  SwordsIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { exportResultAsImage } from "./image-exporter";
import type { WorldviewResult } from "./types";

interface VariantProps {
  result: WorldviewResult;
  onContinueGrilling: (topic: string) => void;
  onBackToChat: () => void;
  revealKey: number; // triggers replay when incremented
}

export function VariantA({ result, onContinueGrilling, onBackToChat, revealKey }: VariantProps) {
  const [revealedStep, setRevealedStep] = useState<number>(0);
  const [showAllDimensions, setShowAllDimensions] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [drilldownNotice, setDrilldownNotice] = useState<string | null>(null);

  // Animated reveal sequence
  useEffect(() => {
    setRevealedStep(0);
    const t1 = setTimeout(() => setRevealedStep(1), 100); // Stamp & Headline
    const t2 = setTimeout(() => setRevealedStep(2), 500); // Labels & Narrative
    const t3 = setTimeout(() => setRevealedStep(3), 900); // Closest Thinkers
    const t4 = setTimeout(() => setRevealedStep(4), 1300); // Key Tensions
    const t5 = setTimeout(() => setRevealedStep(5), 1700); // Dimensions & Extras

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
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
    }, 700);
  };

  // Grouped / ordered dimensions
  const displayedDimensions = showAllDimensions ? result.dimensions : result.dimensions.slice(0, 5);

  return (
    <div className="relative min-h-screen w-full bg-stone-50/60 dark:bg-stone-950/40 text-stone-900 dark:text-stone-100 font-serif pb-32">
      {/* Top Editorial Utility Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-stone-200/80 dark:border-stone-800 bg-background/90 px-4 py-3 backdrop-blur-md sm:px-8">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBackToChat}
            className="gap-1.5 text-stone-600 dark:text-stone-400 hover:text-foreground font-serif"
          >
            <ArrowLeftIcon className="size-4" />
            Grilling Chat
          </Button>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest font-mono text-stone-500">
            Folio I · First-Pass Checkpoint · {result.turnCount} Turns
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            disabled={isExporting}
            className="gap-2 text-xs font-serif border-stone-300 dark:border-stone-700 bg-card hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            <DownloadIcon className="size-3.5" />
            {isExporting ? "Rendering…" : "Save as image"}
          </Button>
        </div>
      </header>

      {/* Drilldown Transition Toast */}
      {drilldownNotice ? (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-stone-900 text-stone-100 px-5 py-2.5 shadow-xl text-xs font-mono uppercase tracking-wider animate-in fade-in-0 slide-in-from-top-2 duration-200">
          <SwordsIcon className="size-4 text-amber-400 animate-spin" />
          <span>Starting Round 2 probe: {drilldownNotice}…</span>
        </div>
      ) : null}

      {/* Main Editorial Folio Container */}
      <main className="mx-auto max-w-2xl px-4 pt-10 sm:px-6">
        {/* Step 1: Editorial Monogram & Masthead */}
        <section
          className={`flex flex-col items-center text-center gap-4 transition-all duration-700 ${
            revealedStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex size-14 items-center justify-center rounded-full border-2 border-stone-900/15 dark:border-stone-100/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 shadow-sm">
            <CompassIcon className="size-7" />
          </div>

          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
            <SparklesIcon className="size-3.5" />
            Your Political Map
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 dark:text-stone-50 max-w-xl leading-tight">
            {result.headline}
          </h1>

          <div className="flex items-center gap-3 text-xs font-mono text-stone-500 tracking-wider">
            <span>DIAGNOSTIC NO. {result.id.slice(-6).toUpperCase()}</span>
            <span>•</span>
            <span>ELICITATION: SOCRATIC GRILLING</span>
            <span>•</span>
            <span>{result.sessionDuration}</span>
          </div>
        </section>

        {/* Step 2: Main Labels & Narrative Lead */}
        <section
          className={`mt-10 flex flex-col gap-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-card/70 p-6 sm:p-8 shadow-sm backdrop-blur-sm transition-all duration-700 ${
            revealedStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
              Anchored Political Vocabulary
            </span>
            <div className="flex flex-wrap gap-2.5">
              {result.labels.map((label) => (
                <div
                  key={label.name}
                  className="flex flex-col gap-1 rounded-xl border border-stone-300/80 dark:border-stone-700/80 bg-background/90 px-3.5 py-2.5 flex-1 min-w-[200px]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-base text-stone-900 dark:text-stone-100">
                      {label.name}
                    </span>
                    <span className="rounded-full bg-stone-100 dark:bg-stone-800 px-2 py-0.5 text-[10px] font-mono uppercase text-stone-600 dark:text-stone-400">
                      {label.type}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {label.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-stone-200/80 dark:border-stone-800 pt-5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 block mb-2">
              Philosophical Synthesis
            </span>
            <p className="text-base sm:text-lg leading-relaxed text-stone-800 dark:text-stone-200 italic font-serif">
              "{result.narrative}"
            </p>
          </div>
        </section>

        {/* Step 3: Closest Thinkers & Divergence */}
        <section
          className={`mt-10 flex flex-col gap-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-card/70 p-6 sm:p-8 shadow-sm transition-all duration-700 ${
            revealedStep >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-stone-950 dark:text-stone-50">
                Closest Thinkers
              </h2>
              <p className="text-xs text-stone-500 font-sans">
                Matched against the Polytic Reference Catalog on shared principles.
              </p>
            </div>
            <BookOpenIcon className="size-5 text-stone-400" />
          </div>

          <div className="flex flex-col gap-4">
            {result.thinkers.map((thinker) => (
              <div
                key={thinker.name}
                className="flex flex-col gap-2 rounded-xl border border-stone-200 dark:border-stone-800 bg-background/80 p-4"
              >
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-stone-900 dark:text-stone-100">
                      {thinker.name}
                    </span>
                    <span className="text-xs font-mono text-stone-500">({thinker.era})</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                    {thinker.alignment}% alignment
                  </span>
                </div>

                <div className="text-xs font-sans text-stone-500 italic">
                  Tradition: {thinker.lineage}
                </div>

                <p className="text-sm text-stone-700 dark:text-stone-300 leading-snug">
                  <strong className="font-serif">Why you align:</strong> {thinker.matchReason}
                </p>

                {/* Divergence highlight */}
                <div className="mt-1 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs leading-relaxed text-stone-700 dark:text-stone-300">
                  <span className="font-mono font-semibold text-amber-700 dark:text-amber-400 uppercase text-[10px] tracking-wider block mb-0.5">
                    #1 Point of Divergence ({thinker.divergence.dimension}):
                  </span>
                  {thinker.divergence.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step 4: Key Tensions & Fault Lines */}
        <section
          className={`mt-10 flex flex-col gap-5 rounded-2xl border border-stone-200 dark:border-stone-800 bg-card/70 p-6 sm:p-8 shadow-sm transition-all duration-700 ${
            revealedStep >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-stone-950 dark:text-stone-50">Key Tensions</h2>
              <p className="text-xs text-stone-500 font-sans">
                Internal collisions surfaced during grilling — mapped without judgment.
              </p>
            </div>
            <ScaleIcon className="size-5 text-stone-400" />
          </div>

          <div className="flex flex-col gap-4">
            {result.tensions.map((tension) => {
              const isReconciled = tension.status === "Reconciled";
              const isUnresolved = tension.status === "Unresolved";

              return (
                <div
                  key={tension.id}
                  className={`flex flex-col gap-3 rounded-xl border p-4.5 transition-all ${
                    isReconciled
                      ? "border-emerald-500/30 bg-emerald-500/[0.02]"
                      : isUnresolved
                        ? "border-amber-500/35 bg-amber-500/[0.03]"
                        : "border-stone-200 dark:border-stone-800 bg-background/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-bold text-base text-stone-900 dark:text-stone-100">
                      {tension.title}
                    </span>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold border ${
                        isReconciled
                          ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20"
                          : isUnresolved
                            ? "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30"
                            : "bg-stone-100 dark:bg-stone-800 text-stone-500 border-stone-300 dark:border-stone-700"
                      }`}
                    >
                      {tension.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 dark:text-stone-400 font-sans">
                    <div className="rounded-lg bg-background/80 p-2.5 border border-stone-200/80 dark:border-stone-800">
                      <span className="font-mono text-[10px] uppercase text-stone-500 block mb-1">
                        Pillar A
                      </span>
                      {tension.statedBeliefA}
                    </div>
                    <div className="rounded-lg bg-background/80 p-2.5 border border-stone-200/80 dark:border-stone-800">
                      <span className="font-mono text-[10px] uppercase text-stone-500 block mb-1">
                        Pillar B
                      </span>
                      {tension.statedBeliefB}
                    </div>
                  </div>

                  {tension.bridge ? (
                    <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-3 text-xs leading-relaxed text-stone-800 dark:text-stone-200">
                      <strong className="font-mono text-[10px] uppercase text-emerald-700 dark:text-emerald-400 block mb-0.5">
                        Your Bridge (Reconciliation):
                      </strong>
                      "{tension.bridge}"
                    </div>
                  ) : null}

                  {isUnresolved && tension.drilldownDilemma ? (
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-amber-700 dark:text-amber-400 italic">
                        Unresolved trade-off ready for probing.
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDrilldown(`Tension: ${tension.title}`)}
                        className="text-xs font-serif gap-1 text-amber-700 dark:text-amber-400 hover:bg-amber-500/10 h-7 px-2.5"
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
        </section>

        {/* Step 5: Full Dimension Breakdown (Ordered by Pull) */}
        <section
          className={`mt-10 flex flex-col gap-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-card/70 p-6 sm:p-8 shadow-sm transition-all duration-700 ${
            revealedStep >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-stone-950 dark:text-stone-50">
                Dimension Breakdown
              </h2>
              <p className="text-xs text-stone-500 font-sans">
                Ordered strictly by strongest Pull first, Thin marked, Not asked last and faded.
              </p>
            </div>
            <span className="text-xs font-mono text-stone-500">
              {result.dimensions.length} Total Axes
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {displayedDimensions.map((dim) => {
              const isNotAsked = dim.coverage === "Not asked";
              const isThin = dim.coverage === "Thin";
              const isTorn = dim.status === "Torn";
              const isSettled = dim.status === "Settled";

              return (
                <div
                  key={dim.id}
                  className={`flex flex-col gap-2 rounded-xl border p-4 transition-all ${
                    isNotAsked
                      ? "border-dashed border-stone-300 dark:border-stone-800 bg-stone-100/40 dark:bg-stone-900/20 opacity-60 hover:opacity-100"
                      : "border-stone-200 dark:border-stone-800 bg-background/90 opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-stone-900 dark:text-stone-100">
                        {dim.name}
                      </span>
                      <span className="rounded bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 text-[9px] font-mono uppercase text-stone-500">
                        {dim.layer}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isThin ? (
                        <span className="rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 text-[10px] font-mono uppercase border border-amber-500/20">
                          Thin Coverage
                        </span>
                      ) : null}

                      <span
                        className={`rounded px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold ${
                          isSettled
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                            : isTorn
                              ? "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                              : "bg-stone-100 dark:bg-stone-800 text-stone-500"
                        }`}
                      >
                        {dim.status}
                      </span>
                    </div>
                  </div>

                  {/* Dual-Pole labels */}
                  <div className="flex justify-between text-[11px] font-serif text-stone-600 dark:text-stone-400 pt-1">
                    <span>
                      {dim.poleA} {!isNotAsked ? `(Pull: ${dim.pullA})` : ""}
                    </span>
                    <span>
                      {!isNotAsked ? `(Pull: ${dim.pullB}) ` : ""}
                      {dim.poleB}
                    </span>
                  </div>

                  {/* Spectrum Track with Dual Pull Indicators */}
                  <div className="relative h-2.5 w-full rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden">
                    {!isNotAsked ? (
                      <>
                        {/* Center marker */}
                        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-stone-400/50" />
                        {/* Dynamic position pin */}
                        <div
                          className="absolute top-0 bottom-0 w-3 -translate-x-1/2 rounded-full bg-stone-900 dark:bg-stone-100 shadow-md ring-2 ring-background"
                          style={{
                            left: `${((dim.position + 100) / 200) * 100}%`,
                          }}
                        />
                      </>
                    ) : (
                      <div className="h-full w-full bg-stone-200/50 dark:bg-stone-800/50" />
                    )}
                  </div>

                  {/* Reason & Evidence note */}
                  {!isNotAsked && dim.evidence ? (
                    <div className="text-xs text-stone-500 font-sans italic pt-0.5">
                      Evidence: {dim.evidence}
                    </div>
                  ) : null}

                  {/* Round 2 Entry Point for Unasked Dimension */}
                  {isNotAsked ? (
                    <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 dark:border-stone-800/60 mt-1">
                      <span className="text-[11px] font-mono text-stone-500">
                        Unexplored dimension
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDrilldown(`Dimension: ${dim.name}`)}
                        className="text-xs font-serif gap-1 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-stone-100 h-6 px-2"
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
            className="self-center font-serif text-xs gap-1.5 text-stone-600 dark:text-stone-400 hover:text-foreground"
          >
            {showAllDimensions ? (
              <>
                <ChevronUpIcon className="size-3.5" />
                Show fewer dimensions
              </>
            ) : (
              <>
                <ChevronDownIcon className="size-3.5" />
                View remaining {result.dimensions.length - 5} dimensions (including unasked)
              </>
            )}
          </Button>
        </section>

        {/* Step 6: Off-map & Unexplored Extras */}
        {result.offMapBeliefs.length > 0 ? (
          <section className="mt-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-card/40 p-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500 block mb-2">
              Quieter Extras · Off-Map Beliefs
            </span>
            {result.offMapBeliefs.map((omb) => (
              <div key={omb.title} className="flex flex-col gap-1.5">
                <span className="font-bold text-sm text-stone-900 dark:text-stone-100">
                  {omb.title}
                </span>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                  {omb.reasons}
                </p>
                {omb.traditionalEcho ? (
                  <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400">
                    {omb.traditionalEcho}
                  </span>
                ) : null}
              </div>
            ))}
          </section>
        ) : null}

        {/* Round 2 CTA Banner */}
        <section className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6 sm:p-8 text-center flex flex-col items-center gap-4">
          <h3 className="text-xl font-bold text-stone-950 dark:text-stone-50">
            Deepen into Round 2 in this Tab
          </h3>
          <p className="max-w-md text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
            Unasked dimensions and active tensions remain open. Probe deeper to sharpen your
            coverage and update your map.
          </p>
          <Button
            onClick={() => handleDrilldown("Round 2 General Deep Dive")}
            className="font-serif gap-2 bg-stone-900 text-stone-100 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900"
          >
            <RotateCcwIcon className="size-4" />
            Continue Grilling (Round 2)
          </Button>
        </section>
      </main>
    </div>
  );
}
