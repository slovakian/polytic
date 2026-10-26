export type ChapterPhase = "anchor" | "dilemmas" | "subsidiarity" | "tension" | "result" | "round2";

export type TensionStatus = "unresolved" | "fits" | "torn" | "shelved";

export interface GrillingTension {
  id: string;
  dimension: string;
  statementA: string;
  statementB: string;
  dilemma: string;
  status: TensionStatus;
  distinction?: string;
}

export interface GrillingMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  reasoning?: string;
  suggestions?: string[];
  tension?: GrillingTension;
  isCheckpoint?: boolean;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  phase: ChapterPhase;
  summary: string;
  principleBridge?: string;
  messages: GrillingMessage[];
  status: "completed" | "active" | "future";
}

export interface ThinkerAlignment {
  name: string;
  era: string;
  match: number;
  alignment: string;
  divergence: string;
}

export interface PoliticalDimensionScore {
  name: string;
  group: string;
  poleA: string;
  poleB: string;
  position: number; // -100 to 100
  status: "Settled" | "Torn" | "Thin" | "Not asked";
}

export interface WorldviewResult {
  labels: Array<{
    name: string;
    type: "Core" | "Secondary" | "Thin";
    confidence: string;
    summary: string;
  }>;
  narrative: string;
  closestThinkers: ThinkerAlignment[];
  tensions: Array<{
    title: string;
    poleA: string;
    poleB: string;
    state: "Torn" | "Settled" | "Shelved";
  }>;
  dimensions: PoliticalDimensionScore[];
}

export type PrototypeVariant = "A" | "B" | "C";
