import { Button } from "@polytic/ui/components/button";
import {
  ArrowLeftIcon,
  BookOpenIcon,
  DownloadIcon,
  RadarIcon,
  ScaleIcon,
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

export function VariantC({ result, onContinueGrilling, onBackToChat, revealKey }: VariantProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "constellation" | "spectrum">("summary");
  const [scanPulse, setScanPulse] = useState(false);
  const [revealedPhase, setRevealedPhase] = useState<number>(0);
  const [showAllDimensions, setShowAllDimensions] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [drilldownNotice, setDrilldownNotice] = useState<string | null>(null);

  // Radar Scan Reveal Sequence
  useEffect(() => {
    setRevealedPhase(0);
    setScanPulse(true);

    const t1 = setTimeout(() => setRevealedPhase(1), 200); // Radar lock
    const t2 = setTimeout(() => setRevealedPhase(2), 600); // Core coordinates
    const t3 = setTimeout(() => setRevealedPhase(3), 1000); // Thinker resonance

    const t4 = setTimeout(() => {
      setRevealedPhase(4);
      setScanPulse(false);
    }, 1400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
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
  const displayedDimensions = showAllDimensions ? result.dimensions : result.dimensions.slice(0, 5);

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-slate-100 font-sans pb-32">
      {/* Top Cockpit Header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-800 bg-slate-950/85 px-4 py-3 backdrop-blur-md sm:px-8">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBackToChat}
            className="gap-1.5 text-slate-400 hover:text-white"
          >
            <ArrowLeftIcon className="size-4" />
            Back to Grill
          </Button>

          <div className="hidden sm:flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-mono text-cyan-400">
            <RadarIcon className={`size-3.5 ${scanPulse ? "animate-spin" : ""}`} />
            <span>CALIBRATION: COMPLETE</span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center rounded-xl border border-slate-800 bg-slate-900 p-0.5 text-xs font-mono">
          <button
            onClick={() => setActiveTab("summary")}
            className={`rounded-lg px-3 py-1 transition-colors ${
              activeTab === "summary"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Summary
          </button>
          <button
            onClick={() => setActiveTab("constellation")}
            className={`rounded-lg px-3 py-1 transition-colors ${
              activeTab === "constellation"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Constellation
          </button>
          <button
            onClick={() => setActiveTab("spectrum")}
            className={`rounded-lg px-3 py-1 transition-colors ${
              activeTab === "spectrum"
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Full Spectrum
          </button>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleExport}
          disabled={isExporting}
          className="gap-2 text-xs border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800"
        >
          <DownloadIcon className="size-3.5 text-cyan-400" />
          {isExporting ? "Rendering…" : "Save as image"}
        </Button>
      </header>

      {/* Drilldown Notice */}
      {drilldownNotice ? (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-cyan-600 text-white px-5 py-2.5 shadow-xl text-xs font-mono uppercase tracking-wider animate-in fade-in-0 duration-200">
          <SwordsIcon className="size-4 animate-bounce" />
          <span>Setting probe coordinates for: {drilldownNotice}…</span>
        </div>
      ) : null}

      <main className="mx-auto max-w-4xl px-4 pt-8 sm:px-6 flex flex-col gap-8">
        {/* Radar Scanning Ring Reveal Overlay (active during reveal) */}
        {scanPulse ? (
          <div className="flex items-center justify-center p-6 text-cyan-400 font-mono text-xs gap-3">
            <span className="animate-pulse">Synthesizing multidimensional worldview matrix…</span>
          </div>
        ) : null}

        {/* Primary Coordinate Header */}
        <section
          className={`flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 ${
            revealedPhase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-cyan-400 animate-ping" />
              <span>STANCE COORDINATE IDENTIFIED</span>
            </div>
            <span>
              ID: {result.id} · {result.turnCount} TURNS COMPLETED
            </span>
          </div>

          <h1 className="text-3xl font-extrabold text-white tracking-tight">{result.headline}</h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {result.narrative}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {result.labels.map((l) => (
              <div
                key={l.name}
                className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs"
              >
                <span className="text-cyan-400 font-bold">{l.name}</span>
                <span className="text-[10px] font-mono text-slate-400">({l.type})</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tab View: Constellation 2D Map */}
        {activeTab === "constellation" ? (
          <section className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-base text-white">
                  2D Thinker & Tension Constellation
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  Axis X: Liberty (Negative vs Positive) · Axis Y: Authority (Decentralized vs
                  Central)
                </p>
              </div>
              <span className="text-xs font-mono text-cyan-400">PROXIMITY RADAR</span>
            </div>

            {/* SVG Constellation Radar */}
            <div className="relative aspect-[16/9] w-full rounded-xl border border-slate-800 bg-slate-950/80 flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full p-8" viewBox="-120 -120 240 240">
                {/* Polar radar circles */}
                <circle cx="0" cy="0" r="100" fill="none" stroke="#1e293b" strokeWidth="1" />
                <circle
                  cx="0"
                  cy="0"
                  r="66"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="33"
                  fill="none"
                  stroke="#1e293b"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />

                {/* Axes */}
                <line x1="-110" y1="0" x2="110" y2="0" stroke="#334155" strokeWidth="1" />
                <line x1="0" y1="-110" x2="0" y2="110" stroke="#334155" strokeWidth="1" />

                {/* Axis labels */}
                <text
                  x="105"
                  y="4"
                  fill="#64748b"
                  fontSize="7"
                  textAnchor="end"
                  fontFamily="monospace"
                >
                  Non-Interference →
                </text>
                <text
                  x="-105"
                  y="4"
                  fill="#64748b"
                  fontSize="7"
                  textAnchor="start"
                  fontFamily="monospace"
                >
                  ← Non-Domination
                </text>
                <text
                  x="0"
                  y="-102"
                  fill="#64748b"
                  fontSize="7"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  Subsidiarity ↑
                </text>
                <text
                  x="0"
                  y="108"
                  fill="#64748b"
                  fontSize="7"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  Centralization ↓
                </text>

                {/* Thinkers relative coordinates */}
                {/* Thinker 1: Berlin */}
                <g transform="translate(-45, -35)">
                  <circle
                    cx="0"
                    cy="0"
                    r="6"
                    fill="#10b981"
                    fillOpacity="0.3"
                    stroke="#10b981"
                    strokeWidth="1.5"
                  />
                  <text x="8" y="3" fill="#e2e8f0" fontSize="8" fontWeight="bold">
                    I. Berlin (92%)
                  </text>
                </g>

                {/* Thinker 2: Arendt */}
                <g transform="translate(-65, -15)">
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#10b981"
                    fillOpacity="0.3"
                    stroke="#10b981"
                    strokeWidth="1.5"
                  />
                  <text x="7" y="3" fill="#e2e8f0" fontSize="8" fontWeight="bold">
                    H. Arendt (86%)
                  </text>
                </g>

                {/* Thinker 3: Nozick */}
                <g transform="translate(60, -50)">
                  <circle
                    cx="0"
                    cy="0"
                    r="5"
                    fill="#f59e0b"
                    fillOpacity="0.3"
                    stroke="#f59e0b"
                    strokeWidth="1.5"
                  />
                  <text x="7" y="3" fill="#e2e8f0" fontSize="8" fontWeight="bold">
                    R. Nozick (64%)
                  </text>
                </g>

                {/* User Coordinate Node */}
                <g transform="translate(-55, -40)" className="animate-pulse">
                  <circle
                    cx="0"
                    cy="0"
                    r="8"
                    fill="#06b6d4"
                    fillOpacity="0.4"
                    stroke="#06b6d4"
                    strokeWidth="2"
                  />
                  <circle cx="0" cy="0" r="3" fill="#ffffff" />
                  <text
                    x="10"
                    y="3"
                    fill="#38bdf8"
                    fontSize="9"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    ★ YOU
                  </text>
                </g>
              </svg>
            </div>
          </section>
        ) : null}

        {/* Tab View: Summary & Key Tensions */}
        {activeTab === "summary" || activeTab === "constellation" ? (
          <>
            {/* Closest Thinkers with Divergence Cards */}
            <section
              className={`flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-500 ${
                revealedPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpenIcon className="size-4 text-emerald-400" />
                  <h2 className="font-bold text-base text-white">Closest Reference Thinkers</h2>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Hand-Encoded Reference Catalog
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {result.thinkers.map((t) => (
                  <div
                    key={t.name}
                    className="flex flex-col justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">{t.name}</span>
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          {t.alignment}%
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">{t.lineage}</div>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">{t.matchReason}</p>
                    </div>

                    <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 p-2.5 text-[11px] text-amber-300/90 leading-snug">
                      <strong className="font-mono text-[9px] uppercase tracking-wider block text-amber-400 mb-0.5">
                        Divergence: {t.divergence.dimension}
                      </strong>
                      {t.divergence.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Tensions Section */}
            <section
              className={`flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-500 ${
                revealedPhase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ScaleIcon className="size-4 text-amber-400" />
                  <h2 className="font-bold text-base text-white">Surfaced Tensions & Bridges</h2>
                </div>
                <span className="text-xs font-mono text-slate-400">Internal Fault Lines</span>
              </div>

              <div className="flex flex-col gap-3">
                {result.tensions.map((tension) => (
                  <div
                    key={tension.id}
                    className="flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white">{tension.title}</span>
                      <span
                        className={`rounded px-2 py-0.5 text-[10px] font-mono font-semibold uppercase ${
                          tension.status === "Reconciled"
                            ? "bg-emerald-500/15 text-emerald-400"
                            : tension.status === "Unresolved"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {tension.status}
                      </span>
                    </div>

                    {tension.bridge ? (
                      <p className="text-xs text-slate-300 italic">Bridge: "{tension.bridge}"</p>
                    ) : (
                      <p className="text-xs text-slate-300">{tension.aiStressTest}</p>
                    )}

                    {tension.status === "Unresolved" ? (
                      <div className="flex justify-end pt-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDrilldown(`Tension: ${tension.title}`)}
                          className="h-6 px-2 text-xs font-mono text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 gap-1"
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
          </>
        ) : null}

        {/* Tab View: Full Spectrum Dimensions */}
        <section
          className={`flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-500 ${
            revealedPhase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-base text-white">Dimension Spectrum Breakdown</h2>
              <p className="text-xs text-slate-400 font-mono">
                Order: Strongest Pull first · Thin Coverage marked · Not Asked faded
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400">
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
                  className={`flex flex-col gap-2 rounded-xl border border-slate-800 p-3.5 transition-all ${
                    isNotAsked
                      ? "bg-slate-950/40 opacity-50 hover:opacity-100"
                      : "bg-slate-950/80 opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-200">{dim.name}</span>
                    <div className="flex items-center gap-1.5 font-mono text-[10px]">
                      {isThin ? (
                        <span className="rounded bg-amber-500/15 text-amber-400 px-1.5 py-0.5">
                          THIN
                        </span>
                      ) : null}
                      <span
                        className={`rounded px-1.5 py-0.5 uppercase ${
                          dim.status === "Settled"
                            ? "bg-emerald-500/15 text-emerald-400 font-bold"
                            : dim.status === "Torn"
                              ? "bg-amber-500/20 text-amber-400 font-bold"
                              : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {dim.status}
                      </span>
                    </div>
                  </div>

                  {/* Dual-pole spectrum bar */}
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>{dim.poleA}</span>
                    <span>{dim.poleB}</span>
                  </div>

                  <div className="relative h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                    {!isNotAsked ? (
                      <div
                        className="absolute top-0 bottom-0 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                        style={{
                          left: `${((dim.position + 100) / 200) * 100}%`,
                        }}
                      />
                    ) : (
                      <div className="h-full w-full bg-slate-800/40" />
                    )}
                  </div>

                  {isNotAsked ? (
                    <div className="flex justify-end pt-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleDrilldown(`Dimension: ${dim.name}`)}
                        className="h-6 px-2 text-xs font-mono text-slate-400 hover:text-white gap-1"
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
            className="self-center text-xs font-mono text-slate-400 hover:text-white"
          >
            {showAllDimensions ? "Collapse" : `Expand all ${result.dimensions.length} dimensions`}
          </Button>
        </section>

        {/* Round 2 Multi-Topic Launcher Drawer */}
        <section className="rounded-2xl border border-cyan-500/20 bg-cyan-950/20 p-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-cyan-300">
              Unexplored Axes Available for Round 2:
            </h3>
            <span className="text-xs font-mono text-cyan-400">
              {unaskedDimensions.length} Remaining
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {unaskedDimensions.map((u) => (
              <button
                key={u.id}
                onClick={() => handleDrilldown(`Dimension: ${u.name}`)}
                className="rounded-lg border border-cyan-500/30 bg-cyan-900/30 px-3 py-1.5 text-xs text-cyan-200 hover:bg-cyan-500/20 transition-colors flex items-center gap-1.5 font-mono"
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
