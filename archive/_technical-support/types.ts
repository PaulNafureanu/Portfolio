export type WorkflowStageKey =
  | "customer-report"
  | "ticket-priority"
  | "information-needed"
  | "investigation"
  | "customer-update"
  | "internal-note"
  | "outcome";

export type WorkflowStage = {
  key: WorkflowStageKey;
  label: string;
  description: string;
};

export type StageDetail = {
  title: string;
  content: string;
};

export type WorkflowEvidence = {
  key: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  type: "screenshot" | "video";
};

export type StageEvidenceMap = Partial<
  Record<WorkflowStageKey, WorkflowEvidence[]>
>;

export type StageWalkthrough = {
  title: string;
  description: string;
  url: string;
};

export type StageWalkthroughMap = Partial<
  Record<WorkflowStageKey, StageWalkthrough>
>;

export type WorkflowCase = {
  id: string;
  title: string;
  issueClass: string;
  type: string;
  priority: string;
  tools: string[];
  shortDescription: string;
  summary: string;
  stageDetails: Record<WorkflowStageKey, StageDetail>;

  /**
   * Fallback evidence shown when the selected stage
   * does not yet have stage-specific artifacts.
   */
  evidence: WorkflowEvidence[];

  /**
   * Future-proofing:
   * each workflow stage can have its own screenshots.
   */
  stageEvidence?: StageEvidenceMap;

  /**
   * Future-proofing:
   * each workflow stage can have its own short walkthrough video.
   */
  stageWalkthroughs?: StageWalkthroughMap;
};
