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
    title: "Ticket communication and ownership",
    description:
      "Clear customer updates, internal documentation, status management, and resolution follow-up.",
    image: "/assets/work-samples/freshdesk-ticket.png",
    alt: "Freshdesk support ticket showing customer communication and internal notes",
  },
  {
    key: "jira",
    label: "Jira",
    title: "Incident tracking and escalation",
    description:
      "Structured incidents with impact, priority, reproduction steps, evidence, and escalation context.",
    image: "/assets/work-samples/jira-escalation.png",
    alt: "Jira Service Management ticket containing escalation details",
  },
  {
    key: "postman",
    label: "Postman",
    title: "API troubleshooting",
    description:
      "Reproducing failures, inspecting responses, and documenting findings for technical escalation.",
    image: "/assets/work-samples/postman-investigation.png",
    alt: "Postman API request and response used during a support investigation",
  },
  {
    key: "devtools",
    label: "DevTools",
    title: "Browser issue isolation",
    description:
      "Inspecting network activity, console errors, headers, and HAR evidence to isolate failures.",
    image: "/assets/work-samples/devtools-network.png",
    alt: "Browser developer tools network panel showing a failed request",
  },
  {
    key: "sql",
    label: "SQL",
    title: "Application data validation",
    description:
      "Verifying account, payment, entitlement, and application records during investigations.",
    image: "/assets/work-samples/sql-validation.png",
    alt: "SQL query results used to validate application records",
  },
  {
    key: "confluence",
    label: "Confluence",
    title: "Knowledge base documentation",
    description:
      "Reusable guidance covering symptoms, investigation steps, resolution, and escalation criteria.",
    image: "/assets/work-samples/confluence-guide.png",
    alt: "Confluence troubleshooting guide for a recurring support issue",
  },
];
