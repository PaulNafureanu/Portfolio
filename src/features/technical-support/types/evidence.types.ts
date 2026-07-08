export type WorkflowEvidence = {
  key: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  type: "screenshot" | "video";
};

export type OnOpenEvidenceFn = (item: WorkflowEvidence) => void;
