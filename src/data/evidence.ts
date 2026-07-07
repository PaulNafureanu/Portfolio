export type EvidenceItem = {
  key: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const evidenceItems: EvidenceItem[] = [
  {
    key: "jira",
    label: "Jira",
    title: "Ticket workflow",
    description:
      "Simulated support ticket board showing status movement, priorities, and escalation flow.",
    image: "/assets/work-samples/jira-board-workflow.png",
    alt: "Jira support workflow board screenshot",
  },
  {
    key: "confluence",
    label: "Confluence",
    title: "Troubleshooting documentation",
    description:
      "Confluence-style guide used to standardize login issue investigation before escalation.",
    image: "/assets/work-samples/confluence-guide.png",
    alt: "Confluence troubleshooting guide screenshot",
  },
  {
    key: "postman",
    label: "Postman",
    title: "API response check",
    description:
      "Postman API check used to inspect response status and translate technical results into support notes.",
    image: "/assets/work-samples/postman-200-ok.png",
    alt: "Postman API response screenshot",
  },
];
