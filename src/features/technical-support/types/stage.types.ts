export type WorkflowStageKey =
  | "customer-report"
  | "freshdesk-triage"
  | "information-needed"
  | "technical-investigation"
  | "jira-escalation"
  | "customer-update"
  | "resolution-documentation";

export type WorkflowStage = {
  key: WorkflowStageKey;
  label: string;
};
