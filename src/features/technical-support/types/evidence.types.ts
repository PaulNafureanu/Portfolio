export type EvidenceType = "screenshot" | "video";

export interface WorkflowEvidence {
  key: string;
  label: string;
  title: string;

  /**
   * Short explanation used in cards or evidence lists.
   */
  description: string;

  /**
   * Text displayed directly below the enlarged screenshot.
   */
  caption: string;

  image: string;
  alt: string;
  type: EvidenceType;
}

export type OnOpenEvidenceFn = (item: WorkflowEvidence) => void;
