export type EpistemicState = "Settled" | "Torn" | "Indifferent" | "Open";

export type CoverageStatus = "Solid" | "Thin" | "Not asked";

export type DimensionLayer = "Foundation" | "Political";

export type LabelType = "Main" | "Area" | "Thin" | "Foundation";

export interface AnchoredLabel {
  name: string;
  type: LabelType;
  confidence: "Strong" | "Moderate" | "Tentative";
  description: string;
  centralDimensions: string[];
}

export interface ClosestThinker {
  name: string;
  era: string;
  alignment: number; // 0 - 100 percentage
  lineage: string;
  matchReason: string;
  divergence: {
    dimension: string;
    description: string;
  };
}

export interface ResultTension {
  id: string;
  title: string;
  status: "Reconciled" | "Unresolved" | "Not yet discussed";
  statedBeliefA: string;
  statedBeliefB: string;
  bridge: string | null;
  aiStressTest: string;
  drilldownDilemma?: string;
}

export interface ResultDimension {
  id: string;
  name: string;
  layer: DimensionLayer;
  poleA: string;
  poleB: string;
  pullA: number; // 0 - 100
  pullB: number; // 0 - 100
  position: number; // -100 (Pole A) to +100 (Pole B)
  status: EpistemicState;
  coverage: CoverageStatus;
  reasons: string;
  evidence: string | null;
}

export interface OffMapBelief {
  title: string;
  reasons: string;
  evidence: string;
  traditionalEcho?: string;
}

export interface WorldviewResult {
  id: string;
  personaKey: string;
  personaName: string;
  headline: string;
  narrative: string;
  turnCount: number;
  sessionDuration: string;
  labels: AnchoredLabel[];
  thinkers: ClosestThinker[];
  tensions: ResultTension[];
  dimensions: ResultDimension[];
  offMapBeliefs: OffMapBelief[];
  unexploredAreas: string[];
}
