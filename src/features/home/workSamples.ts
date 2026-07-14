export type WorkSample = {
  key: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const case01Image = (filename: string): string =>
  `/assets/work-samples/case01/${filename}`;

export const workSamples: WorkSample[] = [
  {
    key: "freshdesk",
    label: "Freshdesk",
    title: "Ticket communication and ownership",
    description:
      "Clear customer updates, internal documentation, status management, and resolution follow-up.",
    image: case01Image("case-01-stage-05-customer-progress-update.png"),
    alt: "Freshdesk support ticket showing a customer progress update and customer acknowledgement.",
  },
  {
    key: "jira",
    label: "Jira",
    title: "Incident tracking and escalation",
    description:
      "Structured incidents with impact, priority, technical evidence, identifiers, and escalation context.",
    image: case01Image("case-01-stage-06-jira-escalation.png"),
    alt: "Jira incident showing customer impact, expected and actual behavior, technical identifiers, and investigation findings.",
  },
  {
    key: "postman",
    label: "Postman",
    title: "API troubleshooting",
    description:
      "Reproducing failures, comparing system states, inspecting responses, and validating remediation.",
    image: case01Image("case-01-stage-04-sync-failure-root-cause.png"),
    alt: "Postman response showing a failed entitlement synchronization event, HTTP 502 error, and exhausted retries.",
  },
  {
    key: "devtools",
    label: "DevTools",
    title: "Browser issue isolation",
    description:
      "Inspecting network activity, console errors, request headers, storage, and browser-specific behavior.",
    image: case01Image("case-01-stage-04-devtools-network-failure.png"),
    alt: "Browser developer tools showing a failed entitlement activation request and HTTP 502 response.",
  },
  {
    key: "sql",
    label: "SQL",
    title: "Application data validation",
    description:
      "Verifying account, payment, subscription, entitlement, and application records during investigations.",
    image: case01Image("case-01-stage-04-sql-entitlement-mismatch.png"),
    alt: "SQL query results showing a paid active subscription with an inactive premium entitlement.",
  },
  {
    key: "confluence",
    label: "Confluence",
    title: "Knowledge base documentation",
    description:
      "Reusable guidance covering symptoms, investigation steps, remediation, verification, and escalation criteria.",
    image: case01Image("case-01-stage-07-confluence-billing-sync-runbook.png"),
    alt: "Confluence troubleshooting runbook for payments that do not activate premium access.",
  },
];
