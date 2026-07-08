import type { WorkflowStage } from "../types";

export const technicalSupportWorkflowStages: WorkflowStage[] = [
  {
    key: "customer-report",
    label: "Customer report",
    description: "Clarify what the user says is broken, blocked, or unclear.",
  },
  {
    key: "ticket-priority",
    label: "Ticket + priority",
    description:
      "Create the ticket, classify the issue, and set urgency from impact.",
  },
  {
    key: "information-needed",
    label: "Information needed",
    description:
      "Collect account IDs, timestamps, screenshots, environment, and scope.",
  },
  {
    key: "investigation",
    label: "Investigation",
    description:
      "Reproduce, compare expected vs actual behavior, and check likely causes.",
  },
  {
    key: "customer-update",
    label: "Customer update",
    description: "Send a clear update or ask for useful missing details.",
  },
  {
    key: "internal-note",
    label: "Internal note",
    description:
      "Document what was checked, what was found, and what remains unknown.",
  },
  {
    key: "outcome",
    label: "Resolution / escalation",
    description:
      "Resolve the case or escalate with enough context for the next team.",
  },
];
