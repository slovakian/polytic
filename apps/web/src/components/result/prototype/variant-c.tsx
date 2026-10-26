import { Button } from "@polytic/ui/components/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemSeparator,
  ItemTitle,
} from "@polytic/ui/components/item";
import { Separator } from "@polytic/ui/components/separator";
import {
  ArrowLeftIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CompassIcon,
  DownloadIcon,
  ScaleIcon,
  SparklesIcon,
  SwordsIcon,
  UserIcon,
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

  // Sequential reveal animation
  useEffect(() => {
    setRevealedPhase(0);

    const t1 = setTimeout(() => setRevealedPhase(1), 100); // 1. Headline & 2. Narrative
    const t2 = setTimeout(() => setRevealedPhase(2), 350); // 3. Labels
    const t3 = setTimeout(() => setRevealedPhase(3), 650); // 4. Closest Thinkers
    const t4 = setTimeout(() => setRevealedPhase(4), 950); // 5. 2D X-Y Axis Plot
    const t5 = setTimeout(() => setRevealedPhase(5), 1250); // 6. Dimensions, 7. Tensions, 8. Round 2

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
    <div className="relative min-h-screen w-full bg-background text-foreground pb-36 font-serif">
      {/* Clean Utility Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/40 bg-background/90 px-4 py-3 backdrop-blur-md sm:px-8 font-sans">
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
            Result Synthesis · {result.turnCount} Turns
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            disabled={isExporting}
            className="gap-2 text-xs border-border/80 shadow-2xs font-sans"
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

      <main className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 flex flex-col gap-10">
        {/* 1. Major Headline & 2. Detailed Narrative */}
        <section
          className={`flex flex-col gap-3 transition-all duration-500 ${
            revealedPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest font-sans">
            <CompassIcon className="size-3.5 text-amber-500" />
            <span>High-Resolution Political Map · {result.sessionDuration}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight">
            {result.headline}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-1">
            {result.narrative}
          </p>
        </section>

        <Separator />

        {/* 3. Anchored Political Labels (Vertically stacked using shadcn Item default variant) */}
        <section
          className={`flex flex-col gap-3 transition-all duration-500 ${
            revealedPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between font-sans">
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
              Anchored Political Labels
            </h2>
            <span className="text-xs text-muted-foreground">Source: Polytic Library</span>
          </div>

          <ItemGroup className="gap-2">
            {result.labels.map((label, idx) => (
              <div key={label.name} className="flex flex-col">
                <Item variant="default" size="default" className="px-0 py-2.5">
                  <ItemContent>
                    <ItemHeader>
                      <ItemTitle className="text-base font-bold text-foreground gap-2.5 font-serif">
                        {label.name}
                        <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-normal font-sans">
                          {label.type}
                        </span>
                      </ItemTitle>
                    </ItemHeader>
                    <ItemDescription className="text-sm text-muted-foreground leading-relaxed font-serif line-clamp-none">
                      {label.description}
                    </ItemDescription>
                  </ItemContent>
                </Item>

                {idx < result.labels.length - 1 ? (
                  <ItemSeparator className="my-1 border-border/40" />
                ) : null}
              </div>
            ))}
          </ItemGroup>
        </section>

        <Separator />

        {/* 4. Closest Thinkers (Vertically listed with portrait placeholders and separators) */}
        <section
          className={`flex flex-col gap-6 transition-all duration-500 ${
            revealedPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between font-sans">
            <div className="flex items-center gap-2">
              <BookOpenIcon className="size-4 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                Closest Reference Thinkers
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              Reference Catalog Alignment
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {result.thinkers.map((thinker, idx) => (
              <div key={thinker.name} className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  {/* Portrait Placeholder Image */}
                  <div className="size-14 sm:size-16 rounded-2xl bg-secondary/70 border border-border/70 flex flex-col items-center justify-center shrink-0 text-muted-foreground shadow-2xs font-sans">
                    <UserIcon className="size-6 text-muted-foreground/60" />
                    <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground/80 mt-0.5">
                      Portrait
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-1.5">
                    <div className="flex items-baseline justify-between font-sans">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-foreground font-serif">
                          {thinker.name}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                          ({thinker.era})
                        </span>
                      </div>
                      <span className="rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-semibold px-2.5 py-0.5 border border-emerald-500/20">
                        {thinker.alignment}% match
                      </span>
                    </div>

                    <div className="text-xs font-sans text-muted-foreground italic">
                      Tradition: {thinker.lineage}
                    </div>

                    <p className="text-sm text-foreground/90 leading-relaxed font-serif pt-1">
                      <strong>Shared ground:</strong> {thinker.matchReason}
                    </p>

                    {/* Point of Divergence note */}
                    <div className="mt-1.5 rounded-xl bg-amber-500/8 border border-amber-500/20 p-3 text-xs text-foreground/85 leading-relaxed font-sans">
                      <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-amber-700 dark:text-amber-400 block mb-0.5">
                        #1 Divergence · {thinker.divergence.dimension}
                      </span>
                      {thinker.divergence.description}
                    </div>
                  </div>
                </div>

                {idx < result.thinkers.length - 1 ? (
                  <Separator className="mt-2 border-border/50" />
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 5. 2D X-Y Axis Comparison Plot (Clean Cartesian plane, no card enclosure) */}
        <section
          className={`flex flex-col gap-4 transition-all duration-500 ${
            revealedPhase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 font-sans">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                2D Worldview Comparison Plot
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Cartesian coordinates plotting your stance against closest reference thinkers.
              </p>
            </div>

            {/* Axis Pairing Toggle */}
            <div className="flex items-center gap-1 rounded-lg border border-border/70 bg-secondary/50 p-0.5 text-xs font-mono">
              <button
                onClick={() => setAxisMode("divergence-alignment")}
                className={`rounded px-2.5 py-1 text-[11px] transition-colors ${
                  axisMode === "divergence-alignment"
                    ? "bg-background text-foreground shadow-2xs font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Shared vs Divergence (Recommended)
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

          <div className="text-[11px] font-mono text-muted-foreground bg-secondary/30 rounded-lg px-3 py-1.5 border border-border/40 flex items-center justify-between font-sans">
            <span>
              <strong>X-Axis:</strong> {axisConfig.xAxisName}
            </span>
            <span>
              <strong>Y-Axis:</strong> {axisConfig.yAxisName}
            </span>
          </div>

          {/* Clean Cartesian 2D Plot Plane */}
          <div className="relative aspect-[16/10] w-full rounded-2xl border border-border/80 bg-card/40 flex items-center justify-center overflow-hidden font-sans">
            <svg className="w-full h-full p-8" viewBox="-120 -100 240 200">
              {/* Cartesian Grid lines */}
              <defs>
                <pattern id="cartesianGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-border/30"
                  />
                </pattern>
              </defs>
              <rect x="-105" y="-85" width="210" height="170" fill="url(#cartesianGrid)" />

              {/* Primary Axes */}
              <line x1="-105" y1="0" x2="105" y2="0" stroke="currentColor" strokeWidth="1.5" className="text-border/80" />
              <line x1="0" y1="-85" x2="0" y2="85" stroke="currentColor" strokeWidth="1.5" className="text-border/80" />

              {/* Center origin */}
              <circle cx="0" cy="0" r="2" fill="currentColor" className="text-muted-foreground/60" />

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
                  <circle cx="0" cy="0" r="5" fill={t.alignColor} fillOpacity="0.25" stroke={t.alignColor} strokeWidth="1.5" />
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

              {/* User Stance Marker */}
              <g transform={`translate(${axisConfig.userX}, ${-axisConfig.userY})`}>
                <circle cx="0" cy="0" r="9" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2" />
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

        <Separator />

        {/* 6. Dimension Spectrum Breakdown (Clean vertical list, not heavy boxed cards) */}
        <section
          className={`flex flex-col gap-4 transition-all duration-500 ${
            revealedPhase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between font-sans">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                Dimension Spectrum Breakdown
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Ordered by Pull magnitude · Thin marked · Not asked faded and last
              </p>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              {result.dimensions.length} Total
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {displayedDimensions.map((dim) => {
              const isNotAsked = dim.coverage === "Not asked";
              const isThin = dim.coverage === "Thin";

              return (
                <div
                  key={dim.id}
                  className={`flex flex-col gap-2 rounded-xl p-3 transition-colors ${
                    isNotAsked
                      ? "bg-secondary/15 opacity-55 hover:opacity-100"
                      : "bg-secondary/35 opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-sans">
                    <span className="font-bold text-foreground font-serif">{dim.name}</span>
                    <div className="flex items-center gap-1.5 font-mono text-[10px]">
                      {isThin ? (
                        <span className="rounded bg-amber-500/15 text-amber-700 dark:text-amber-400 px-1.5 py-0.5">
                          THIN
                        </span>
                      ) : null}
                      <span
                        className={`rounded px-1.5 py-0.5 uppercase ${
                          dim.status === "Settled"
                            ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold"
                            : dim.status === "Torn"
                              ? "bg-amber-500/20 text-amber-700 dark:text-amber-400 font-bold"
                              : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {dim.status}
                      </span>
                    </div>
                  </div>

                  {/* Dual-pole spectrum bar */}
                  <div className="flex justify-between text-[11px] text-muted-foreground font-sans">
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
                        className="h-6 px-2 text-xs font-sans text-muted-foreground hover:text-foreground gap-1"
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
            className="self-center text-xs font-sans text-muted-foreground hover:text-foreground"
          >
            {showAllDimensions ? (
              <>
                <ChevronUpIcon className="size-3.5 mr-1" />
                Collapse list
              </>
            ) : (
              <>
                <ChevronDownIcon className="size-3.5 mr-1" />
                View all {result.dimensions.length} dimensions
              </>
            )}
          </Button>
        </section>

        <Separator />

        {/* 7. Surfaced Tensions & Bridges */}
        <section
          className={`flex flex-col gap-5 transition-all duration-500 ${
            revealedPhase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between font-sans">
            <div className="flex items-center gap-2">
              <ScaleIcon className="size-4 text-amber-500" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
                Surfaced Tensions & Bridges
              </h2>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              Internal Fault Lines
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {result.tensions.map((tension, idx) => (
              <div key={tension.id} className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-base text-foreground font-serif">
                    {tension.title}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-mono font-semibold uppercase font-sans ${
                      tension.status === "Reconciled"
                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                        : tension.status === "Unresolved"
                          ? "bg-amber-500/20 text-amber-700 dark:text-amber-400"
                          : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {tension.status}
                  </span>
                </div>

                {tension.bridge ? (
                  <p className="text-sm text-foreground/85 italic leading-relaxed font-serif">
                    "{tension.bridge}"
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed font-serif">
                    {tension.aiStressTest}
                  </p>
                )}

                {tension.status === "Unresolved" ? (
                  <div className="flex justify-end pt-1 font-sans">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDrilldown(`Tension: ${tension.title}`)}
                      className="h-7 px-2.5 text-xs text-amber-700 dark:text-amber-400 hover:bg-amber-500/10 gap-1.5"
                    >
                      <SwordsIcon className="size-3.5" />
                      Probe in Round 2 →
                    </Button>
                  </div>
                ) : null}

                {idx < result.tensions.length - 1 ? (
                  <Separator className="mt-2 border-border/40" />
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* 8. Unexplored Axes Available for Next Round */}
        <section
          className={`flex flex-col gap-3 transition-all duration-500 font-sans ${
            revealedPhase >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
              Unexplored Axes Available for Round 2
            </h3>
            <span className="text-xs font-mono text-muted-foreground">
              {unaskedDimensions.length} Remaining
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {unaskedDimensions.map((u) => (
              <button
                key={u.id}
                onClick={() => handleDrilldown(`Dimension: ${u.name}`)}
                className="rounded-lg border border-border/70 bg-secondary/40 hover:bg-secondary px-3 py-1.5 text-xs text-foreground transition-colors flex items-center gap-1.5 font-mono shadow-2xs"
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
