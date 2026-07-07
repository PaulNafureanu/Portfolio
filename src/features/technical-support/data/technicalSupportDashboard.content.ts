export const technicalSupportDashboardContent = {
  header: {
    eyebrow: "Support Operations Lab",
    title: "Technical Support Workflow Examples",
    description:
      "A proof dashboard showing how I handle support cases from customer report to triage, investigation, customer update, internal note, and escalation using Jira, Confluence, and Postman-style artifacts.",
    note: "Simulated cases · No client data",
  },

  panels: {
    cases: {
      eyebrow: "Cases",
      title: "Support cases",
      description: "Select one realistic issue.",
    },
    workflow: {
      eyebrow: "Workflow",
      title: "Handling path",
      description: "Same support structure across cases.",
    },
    proof: {
      eyebrow: "Proof",
      title: "Case evidence",
      description: "Stage note and related artifacts.",
    },
  },

  proof: {
    selectedCaseLabel: "Selected case",
    selectedStageLabel: "Selected workflow step",
    handlingNoteLabel: "View support note",
    proofForStageLabel: "Related proof",
    proofHint: "Open a screenshot to inspect the artifact.",
    walkthroughLabel: "Walkthrough video",
  },
};
