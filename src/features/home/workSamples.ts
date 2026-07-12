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
    key: "freshdesk",
    label: "Freshdesk",
    title: "Customer ticket handling",
    description:
      "Customer communication, internal notes, investigation updates, status ownership, and resolution.",
    image: "/assets/work-samples/freshdesk-ticket.png",
    alt: "Freshdesk support ticket showing customer communication and internal notes",
  },
  {
    key: "jira",
    label: "Jira",
    title: "Issue tracking and escalation",
    description:
      "Structured tickets with impact, priority, reproduction steps, evidence, and escalation context.",
    image: "/assets/work-samples/jira-escalation.png",
    alt: "Jira Service Management ticket containing escalation details",
  },
  {
    key: "postman",
    label: "Postman",
    title: "API issue investigation",
    description:
      "API requests used to reproduce failures, inspect responses, and document technical findings.",
    image: "/assets/work-samples/postman-investigation.png",
    alt: "Postman API request and response used during a support investigation",
  },
  {
    key: "devtools",
    label: "DevTools",
    title: "Browser troubleshooting",
    description:
      "Network requests, console errors, headers, and HAR evidence used to isolate browser-side issues.",
    image: "/assets/work-samples/devtools-network.png",
    alt: "Browser developer tools network panel showing a failed request",
  },
  {
    key: "sql",
    label: "SQL",
    title: "Data validation",
    description:
      "Basic SQL queries used to verify account, payment, entitlement, and application records.",
    image: "/assets/work-samples/sql-validation.png",
    alt: "SQL query results used to validate application records",
  },
  {
    key: "confluence",
    label: "Confluence",
    title: "Troubleshooting documentation",
    description:
      "Reusable support documentation covering symptoms, investigation steps, resolution, and escalation.",
    image: "/assets/work-samples/confluence-guide.png",
    alt: "Confluence troubleshooting guide for a recurring support issue",
  },
];
