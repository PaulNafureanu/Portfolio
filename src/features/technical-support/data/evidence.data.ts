import type { WorkflowEvidence } from "../types/evidence.types";

export const workflowEvidence = {
  jiraBoard: {
    key: "jira-board",
    label: "Jira",
    title: "Ticket workflow board",
    description:
      "Board view showing simulated support tickets moving through statuses.",
    image: "/assets/work-samples/jira-board-workflow.png",
    alt: "Jira support workflow board screenshot",
    type: "screenshot",
  },

  confluenceGuide: {
    key: "confluence-guide",
    label: "Confluence",
    title: "Troubleshooting guide",
    description:
      "Documentation example used to standardize investigation before escalation.",
    image: "/assets/work-samples/confluence-guide.png",
    alt: "Confluence troubleshooting guide screenshot",
    type: "screenshot",
  },

  postmanCheck: {
    key: "postman-200",
    label: "Postman",
    title: "API response check",
    description:
      "Postman response used to translate API behavior into support notes.",
    image: "/assets/work-samples/postman-200-ok.png",
    alt: "Postman API response screenshot",
    type: "screenshot",
  },

  freshdeskCustomerReport: {
    key: "case01-freshdesk-customer-report",
    label: "",
    title: "Freshdesk",
    description: "",
    image: "/assets/work-samples/case01_stage01_freshdesk_customer-report.png",
    alt: "Freshdesk ticket showing the initial customer report.",
    type: "screenshot",
  },
} satisfies Record<string, WorkflowEvidence>;
