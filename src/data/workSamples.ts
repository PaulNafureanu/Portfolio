export type WorkSample = {
  key: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const workSamples: WorkSample[] = [
  {
    key: "jira",
    label: "Jira",
    title: "Ticket workflow",
    description:
      "Simulated support tickets showing status movement, priority reasoning, and escalation notes.",
    image: "/assets/work-samples/jira-board-workflow.png",
    alt: "Jira support workflow board screenshot",
  },
  {
    key: "confluence",
    label: "Confluence",
    title: "Troubleshooting documentation",
    description:
      "Confluence-style documentation used to standardize issue investigation before escalation.",
    image: "/assets/work-samples/confluence-guide.png",
    alt: "Confluence troubleshooting guide screenshot",
  },
  {
    key: "postman",
    label: "Postman",
    title: "API response check",
    description:
      "Postman checks used to inspect API responses and translate status codes into support notes.",
    image: "/assets/work-samples/postman-200-ok.png",
    alt: "Postman API response check screenshot",
  },
];
