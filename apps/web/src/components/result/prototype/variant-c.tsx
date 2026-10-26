import { Button } from "@polytic/ui/components/button";
import {
  ArrowLeftIcon,
  BookOpenIcon,
  DownloadIcon,
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
  revealKey: number;
}

type AxisPairingMode = "divergence-alignment" | "core-pulls";

export function VariantC({
  result,
  onContinueGrilling,
  onBackToChat,
  revealKey,
}: VariantProps) {
  const [revealedPhase, setRevealedPhase] = useState<number>(0);
  const [showAllDimensions, setShowAllDimensions] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [drilldownNotice, setDrilldownNotice] = useState<string | null>(null);
  const [axisMode, setAxisMode] = useState<AxisPairingMode>("divergence-alignment");

  // Clean coordinate reveal sequence
  useEffect(() => {
    setRevealedPhase(0);

    const t1 = setTimeout(() => setRevealedPhase(1), 100); // 1. Headline & 2. Narrative
    const t2 = setTimeout(() => setRevealedPhase(2), 400); // 3. Labels
    const t3 = setTimeout(() => setRevealedPhase(3), 700); // 4. Closest Thinkers
    const t4 = setTimeout(() => setRevealedPhase(4), 1000); // 5. 2D X-Y Axis Plot
    const t5 = setTimeout(() => setRevealedPhase(5), 1300); // 6. Dimensions, 7. Tensions, 8. Round 2

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
    }, 600);
  };

  const unaskedDimensions = result.dimensions.filter((d) => d.coverage === "Not asked");

  const displayedDimensions = showAllDimensions
    ? result.dimensions
    : result.dimensions.slice(0, 5);

  // Axis configuration for 2D plot
  const axisConfig =
    axisMode === "divergence-alignment"
      ? {
          xAxisName: "Primary Shared Axis: Liberty",
          xPoleA: "Non-Domination",
          xPoleB: "Non-Interference",
          yAxisName: "Primary Divergence Axis: Authority & Scale",
          yPoleA: "Centralization",
          yPoleB: "Subsidiarity",
          userX: -55,
          userY: 45,
          thinkers: [
            { name: "I. Berlin", x: -40, y: 30, match: 92, alignColor: "#10b981" },
            { name: "H. Arendt", x: -65, y: 15, match: 86, alignColor: "#10b981" },
            { name: "R. Nozick", x: 65, y: 55, match: 64, alignColor: "#f59e0b" },
          ],
        }
      : {
          xAxisName: "Highest Pull: Liberty (Non-Domination)",
          xPoleA: "Strong Non-Domination",
          xPoleB: "Weak Non-Domination",
          yAxisName: "Second Highest Pull: Epistemics (Pluralism)",
          yPoleA: "Moral Monism",
          yPoleB: "Value Pluralism",
          userX: -70,
          userY: 60,
          thinkers: [
            { name: "I. Berlin", x: -50, y: 65, match: 92, alignColor: "#10b981" },
            { name: "H. Arendt", x: -60, y: 40, match: 86, alignColor: "#10b981" },
            { name: "R. Nozick", x: 20, y: -20, match: 64, alignColor: "#f59e0b" },
          ],
        };

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground pb-32">
      {/* Clean Utility Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/60 bg-background/90 px-4 py-3 backdrop-blur-md sm:px-8">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBackToChat}
            className="gap-1.5 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeftIcon className="size-4" />
            Grilling Chat
          </Button>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <SparklesIcon className="size-3.5 text-amber-500" />
            Constellation View · {result.turnCount} Turns
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            disabled={isExporting}
            className="gap-2 text-xs border-border/80 shadow-2xs"
          >
            <DownloadIcon className="size-3.5 text-amber-500" />
            {isExporting ? "Rendering…" : "Save as image"}
          </Button>
        </div>
      </header>

      {/* Drilldown Notice */}
      {drilldownNotice ? (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 shadow-xl text-xs font-mono uppercase tracking-wider animate-in fade-in-0 duration-200">
          <SwordsIcon className="size-4 animate-bounce text-amber-400" />
          <span>Setting probe coordinates for: {drilldownNotice}…</span>
        </div>
      ) : null}

      <main className="mx-auto max-w-3xl px-4 pt-8 sm:px-6 flex flex-col gap-8">
        {/* 1. Headline & 2. Detailed Narrative */}
        <section
          className={`flex flex-col gap-3 rounded-2xl border border-border/70 bg-card p-6 sm:p-8 shadow-sm transition-all duration-500 ${
            revealedPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-wider">
            <span>Result Verification Checkpoint</span>
            <span>{result.sessionDuration} · 11 Turns</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {result.headline}
          </h1>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-1">
            {result.narrative}
          </p>
        </section>

        {/* 3. Labels */}
        <section
          className={`flex flex-col gap-3 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-500 ${
            revealedPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
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
                className="flex flex-col gap-1 rounded-xl border border-border/80 bg-background/80 p-3.5 flex-1 min-w-[220px]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-sm text-foreground">
                    {label.name}
                  </span>
                  <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    {label.type}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  {label.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Closest Thinkers (swapped ahead of 2D plot) */}
        <section
          className={`flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-500 ${
            revealedPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpenIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
              <h2 className="font-bold text-base text-foreground">
                Closest Reference Thinkers
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              Top 3 Alignment Matches
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {result.thinkers.map((thinker) => (
              <div
                key={thinker.name}
                className="flex flex-col justify-between gap-2.5 rounded-xl border border-border/80 bg-background/80 p-4"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-foreground">
                      {thinker.name}
                    </span>
                    <span className="rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold px-2 py-0.5 border border-emerald-500/20">
                      {thinker.alignment}%
                    </span>
                  </div>
                  <div className="text-[11px] text-muted-foreground font-mono mt-0.5">
                    {thinker.lineage}
                  </div>
                  <p className="text-xs text-foreground/80 mt-2 leading-relaxed">
                    {thinker.matchReason}
                  </p>
                </div>

                <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-2.5 text-[11px] text-amber-700 dark:text-amber-300 leading-snug">
                  <strong className="font-mono text-[9px] uppercase tracking-wider block text-amber-600 dark:text-amber-400 mb-0.5">
                    #1 Divergence ({thinker.divergence.dimension})
                  </strong>
                  {thinker.divergence.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. 2D X-Y Axis Comparison Plot (Cartesian Plane, shadcn-styled) */}
        <section
          className={`flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-500 ${
            revealedPhase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="font-bold text-base text-foreground">
                2D Worldview Comparison Plot
              </h2>
              <p className="text-xs text-muted-foreground">
                Placing your stance alongside closest historical figures on core trade-off axes.
              </p>
            </div>

            {/* Axis Pairing Logic Selector */}
            <div className="flex items-center gap-1 rounded-lg border border-border/60 bg-secondary/60 p-0.5 text-xs font-mono">
              <button
                onClick={() => setAxisMode("divergence-alignment")}
                className={`rounded px-2.5 py-1 text-[11px] transition-colors ${
                  axisMode === "divergence-alignment"
                    ? "bg-background text-foreground shadow-2xs font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Shared vs Divergence
              </button>
              <button
                onClick={() => setAxisMode("core-pulls")}
                className={`rounded px-2.5 py-1 text-[11px] transition-colors ${
                  axisMode === "core-pulls"
                    ? "bg-background text-foreground shadow-2xs font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Top 2 Pulls
              </button>
            </div>
          </div>

          <div className="text-[11px] font-mono text-muted-foreground bg-secondary/30 rounded-lg px-3 py-1.5 border border-border/40 flex items-center justify-between">
            <span>
              <strong>X-Axis:</strong> {axisConfig.xAxisName}
            </span>
            <span>
              <strong>Y-Axis:</strong> {axisConfig.yAxisName}
            </span>
          </div>

          {/* Clean Cartesian 2D Plot Plane */}
          <div className="relative aspect-[16/10] w-full rounded-xl border border-border/80 bg-background/90 flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full p-8" viewBox="-120 -100 240 200">
              {/* Cartesian Grid lines */}
              <defs>
                <pattern id="cartesianGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border/40" />
                </pattern>
              </defs>
              <rect x="-105" y="-85" width="210" height="170" fill="url(#cartesianGrid)" />

              {/* Primary Axes Lines */}
              <line x1="-105" y1="0" x2="105" y2="0" stroke="currentColor" strokeWidth="1.5" className="text-border" />
              <line x1="0" y1="-85" x2="0" y2="85" stroke="currentColor" strokeWidth="1.5" className="text-border" />

              {/* Zero-center marker */}
              <circle cx="0" cy="0" r="2" fill="currentColor" className="text-muted-foreground" />

              {/* Axis Pole Labels */}
              <text x="-105" y="-5" fill="currentColor" fontSize="7" textAnchor="start" fontFamily="ui-monospace, monospace" className="text-muted-foreground">
                ← {axisConfig.xPoleA}
              </text>
              <text x="105" y="-5" fill="currentColor" fontSize="7" textAnchor="end" fontFamily="ui-monospace, monospace" className="text-muted-foreground">
                {axisConfig.xPoleB} →
              </text>
              <text x="5" y="-78" fill="currentColor" fontSize="7" textAnchor="start" fontFamily="ui-monospace, monospace" className="text-muted-foreground">
                ↑ {axisConfig.yPoleB}
              </text>
              <text x="5" y="80" fill="currentColor" fontSize="7" textAnchor="start" fontFamily="ui-monospace, monospace" className="text-muted-foreground">
                ↓ {axisConfig.yPoleA}
              </text>

              {/* Thinker Coordinate Markers */}
              {axisConfig.thinkers.map((t) => (
                <g key={t.name} transform={`translate(${t.x}, ${-t.y})`} className="group cursor-default">
                  <circle cx="0" cy="0" r="5" fill={t.alignColor} fillOpacity="0.2" stroke={t.alignColor} strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="2" fill={t.alignColor} />
                  <text
                    x="8"
                    y="3"
                    fill="currentColor"
                    fontSize="7.5"
                    fontFamily="ui-sans-serif, sans-serif"
                    fontWeight="600"
                    className="text-foreground drop-shadow-xs"
                  >
                    {t.name} ({t.match}%)
                  </text>
                </g>
              ))}

              {/* User Coordinate Stance Marker */}
              <g transform={`translate(${axisConfig.userX}, ${-axisConfig.userY})`}>
                <circle cx="0" cy="0" r="9" fill="#f59e0b" fillOpacity="0.25" stroke="#f59e0b" strokeWidth="2" />
                <circle cx="0" cy="0" r="3.5" fill="#f59e0b" />
                <text
                  x="12"
                  y="3.5"
                  fill="#f59e0b"
                  fontSize="8.5"
                  fontWeight="bold"
                  fontFamily="ui-monospace, monospace"
                >
                  ★ YOU
                </text>
              </g>
            </svg>
          </div>
        </section>

        {/* 6. Dimension Spectrum Breakdown (swapped ahead of Tensions) */}
        <section
          className={`flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-500 ${
            revealedPhase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-base text-foreground">
                Dimension Spectrum Breakdown
              </h2>
              <p className="text-xs text-muted-foreground">
                Ordered by strongest Pull first · Thin marked · Not Asked faded and last
              </p>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              {result.dimensions.length} Total
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {displayedDimensions.map((dim) => {
              const isNotAsked = dim.coverage === "Not asked";
              const isThin = dim.coverage === "Thin";

              return (
                <div
                  key={dim.id}
                  className={`flex flex-col gap-2 rounded-xl border p-3.5 transition-all ${
                    isNotAsked
                      ? "border-border/40 bg-secondary/20 opacity-50 hover:opacity-100"
                      : "border-border/70 bg-background/80 opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-foreground">{dim.name}</span>
                    <div className="flex items-center gap-1.5 font-mono text-[10px]">
                      {isThin ? (
                        <span className="rounded bg-amber-500/15 text-amber-600 dark:text-amber-400 px-1.5 py-0.5">
                          THIN
                        </span>
                      ) : null}
                      <span
                        className={`rounded px-1.5 py-0.5 uppercase ${
                          dim.status === "Settled"
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold"
                            : dim.status === "Torn"
                              ? "bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold"
                              : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {dim.status}
                      </span>
                    </div>
                  </div>

                  {/* Dual-pole labels */}
                  <div className="flex justify-between text-[11px] text-muted-foreground font-mono">
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
            className="self-center text-xs font-mono text-muted-foreground hover:text-foreground"
          >
            {showAllDimensions
              ? "Collapse"
              : `Expand all ${result.dimensions.length} dimensions`}
          </Button>
        </section>

        {/* 7. Surfaced Tensions & Bridges */}
        <section
          className={`flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all duration-500 ${
            revealedPhase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ScaleIcon className="size-4 text-amber-500" />
              <h2 className="font-bold text-base text-foreground">
                Surfaced Tensions & Bridges
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              Internal Fault Lines
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {result.tensions.map((tension) => (
              <div
                key={tension.id}
                className="flex flex-col gap-2 rounded-xl border border-border/70 bg-background/80 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-foreground">
                    {tension.title}
                  </span>
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-mono font-semibold uppercase ${
                      tension.status === "Reconciled"
                        ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                        : tension.status === "Unresolved"
                          ? "bg-amber-500/20 text-amber-600 dark:text-amber-400"
                          : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {tension.status}
                  </span>
                </div>

                {tension.bridge ? (
                  <p className="text-xs text-foreground/85 italic">
                    Bridge: "{tension.bridge}"
                  </p>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    {tension.aiStressTest}
                  </p>
                )}

                {tension.status === "Unresolved" ? (
                  <div className="flex justify-end pt-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDrilldown(`Tension: ${tension.title}`)}
                      className="h-6 px-2 text-xs font-mono text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 gap-1"
                    >
                      <SwordsIcon className="size-3" />
                      Probe in Round 2 →
                    </Button>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* 8. Unexplored Axes Available for Next Round */}
        <section
          className={`flex flex-col gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 shadow-sm transition-all duration-500 ${
            revealedPhase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-foreground">
              Unexplored Axes Available for Next Round:
            </h3>
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400">
              {unaskedDimensions.length} Remaining
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {unaskedDimensions.map((u) => (
              <button
                key={u.id}
                onClick={() => handleDrilldown(`Dimension: ${u.name}`)}
                className="rounded-lg border border-border/80 bg-background/80 hover:bg-background px-3 py-1.5 text-xs text-foreground transition-colors flex items-center gap-1.5 font-mono shadow-2xs"
              >
                <span>+ {u.name.split(":")[0]}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
