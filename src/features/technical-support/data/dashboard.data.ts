export const dashboardContent = {
  header: {
    eyebrow: "Support Operations Lab",
    title: "Technical Support Workflow Examples",
    description:
      "A proof dashboard showing how I handle simulated SaaS support cases from customer intake to triage, technical investigation, customer update, Jira escalation, and documentation.",
    note: "Simulated cases · No client data",
    stackLabel: "Support stack used",
    stack: [
      "Freshdesk",
      "Jira / JSM",
      "Confluence",
      "Postman",
      "SQL",
      "Browser DevTools / HAR",
      "Logs",
      "Auth / access",
      "ITSM vocabulary",
    ],
    guide:
      "How to use: Select a case, choose a workflow step, then open the related evidence screenshots.",
  },

  panels: {
    cases: {
      eyebrow: "Cases",
      title: "Support cases",
      description: "Select a simulated support scenario.",
    },
    workflow: {
      eyebrow: "Workflow",
      title: "Handling path",
      description: "Follow the case from intake to resolution.",
    },
    proof: {
      eyebrow: "Proof",
      title: "Case evidence",
      description: "Review notes, checks, and related artifacts.",
    },
  },
};
