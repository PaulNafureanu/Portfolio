import type { WorkflowStage } from "../types/stage.types";

export const stages: WorkflowStage[] = [
  {
    key: "customer-report",
    label: "Customer report",
  },
  {
    key: "freshdesk-triage",
    label: "Freshdesk triage",
  },
  {
    key: "information-needed",
    label: "Information needed",
  },
  {
    key: "technical-investigation",
    label: "Technical investigation",
  },
  {
    key: "jira-escalation",
    label: "Jira escalation",
  },
  {
    key: "customer-update",
    label: "Customer update",
  },
  {
    key: "resolution-documentation",
    label: "Resolution + docs",
  },
];
