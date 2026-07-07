export type WorkflowStage = {
  key: string;
  label: string;
  title: string;
  content: string;
};

export type WorkflowEvidence = {
  key: string;
  label: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  type: "screenshot" | "video";
};

export type WorkflowCase = {
  title: string;
  type: string;
  priority: string;
  tools: string[];
  summary: string;
  stages: WorkflowStage[];
  evidence: WorkflowEvidence[];
};

const sharedEvidence = {
  jiraBoard: {
    key: "jira-board",
    label: "Jira",
    title: "Ticket workflow board",
    description:
      "Board view showing simulated support tickets moving through statuses.",
    image: "/assets/work-samples/jira-board-workflow.png",
    alt: "Jira support workflow board screenshot",
    type: "screenshot" as const,
  },
  confluenceGuide: {
    key: "confluence-guide",
    label: "Confluence",
    title: "Troubleshooting guide",
    description:
      "Documentation example used to standardize investigation before escalation.",
    image: "/assets/work-samples/confluence-guide.png",
    alt: "Confluence troubleshooting guide screenshot",
    type: "screenshot" as const,
  },
  postmanCheck: {
    key: "postman-200",
    label: "Postman",
    title: "API response check",
    description:
      "Postman response used to translate API behavior into support notes.",
    image: "/assets/work-samples/postman-200-ok.png",
    alt: "Postman API response screenshot",
    type: "screenshot" as const,
  },
};

export const workflowCases: WorkflowCase[] = [
  {
    title: "Payment completed but account still unpaid",
    type: "Billing / Application Support",
    priority: "High",
    tools: ["Jira", "Postman"],
    summary:
      "Customer completed payment, but account access remains blocked. The handling path checks billing state, account entitlement, and API/resource behavior before escalation.",
    stages: [
      {
        key: "customer-report",
        label: "Customer report",
        title: "Customer reports paid access is still blocked",
        content:
          "Customer says they paid the invoice, but the account still shows unpaid and premium features are unavailable.",
      },
      {
        key: "ticket-priority",
        label: "Ticket + priority",
        title: "Classify as high-priority billing/application issue",
        content:
          "Type: Billing / Application Support. Priority: High because payment was completed but paid access remains blocked.",
      },
      {
        key: "information-needed",
        label: "Information needed",
        title: "Collect identifiers before escalation",
        content:
          "Ask for account email, invoice or payment reference, payment method, payment time, and screenshot of the unpaid account state.",
      },
      {
        key: "investigation",
        label: "Investigation",
        title: "Compare external payment state with internal account state",
        content:
          "Check whether the payment provider shows completed status, compare it with internal billing/account status, and use API checks to separate endpoint availability from missing records.",
      },
      {
        key: "customer-update",
        label: "Customer update",
        title: "Send a clear request for missing details",
        content:
          "Hi, thanks for reporting this. Could you please confirm the account email, invoice/payment reference, approximate payment time, and payment method? This will help us compare the payment provider status with the internal account status.",
      },
      {
        key: "internal-note",
        label: "Internal note",
        title: "Document the working hypothesis",
        content:
          "Customer reports completed payment, but dashboard still shows unpaid. Need to compare provider transaction status, internal billing status, and account entitlement state. Possible delayed sync or failed webhook/API update.",
      },
      {
        key: "outcome",
        label: "Escalation / resolution",
        title: "Escalate with useful context",
        content:
          "Escalate to billing/engineering with account email, payment reference, timestamp, provider status, internal account status, and API check result.",
      },
    ],
    evidence: [sharedEvidence.jiraBoard, sharedEvidence.postmanCheck],
  },
  {
    title: "Login page returns 500 error",
    type: "Incident",
    priority: "High if reproduced",
    tools: ["Jira", "Confluence"],
    summary:
      "Customer cannot log in because the login page returns a server error. The workflow focuses on scope, reproduction, and backend escalation with context.",
    stages: [
      {
        key: "customer-report",
        label: "Customer report",
        title: "Customer is blocked by a server error",
        content:
          "Customer says login fails after submitting email and password, and the page shows a server error.",
      },
      {
        key: "ticket-priority",
        label: "Ticket + priority",
        title: "Classify as incident if reproducible",
        content:
          "Type: Incident. Priority: High if reproduced or affecting multiple users. Medium if impact is still unclear.",
      },
      {
        key: "information-needed",
        label: "Information needed",
        title: "Collect account, browser, and timestamp details",
        content:
          "Ask for account email, exact error message, screenshot, browser/device, timestamp, and whether password reset was attempted.",
      },
      {
        key: "investigation",
        label: "Investigation",
        title: "Reproduce and check scope",
        content:
          "Test the issue in more than one browser, check if it is account-specific or system-wide, and check known incidents or recent deployments.",
      },
      {
        key: "customer-update",
        label: "Customer update",
        title: "Ask for missing reproduction details",
        content:
          "Hi, thanks for reporting this. Could you please send the email address used for login, the exact error message or screenshot, the browser/device used, and the approximate time when this happened?",
      },
      {
        key: "internal-note",
        label: "Internal note",
        title: "Prepare backend handoff",
        content:
          "Customer login fails with 500 error after password submission. Need to confirm scope, reproduce issue, check browser behavior, and collect timestamp for backend log investigation.",
      },
      {
        key: "outcome",
        label: "Escalation / resolution",
        title: "Escalate with reproduction evidence",
        content:
          "Escalate with affected account, timestamp, screenshot, browser/device, reproduction steps, and customer impact.",
      },
    ],
    evidence: [sharedEvidence.jiraBoard, sharedEvidence.confluenceGuide],
  },
  {
    title: "Password reset email not received",
    type: "Account Access",
    priority: "Medium",
    tools: ["Jira", "Confluence"],
    summary:
      "Customer cannot receive password reset email. The handling path confirms account details, email delivery checks, and whether the issue is user-specific or wider.",
    stages: [
      {
        key: "customer-report",
        label: "Customer report",
        title: "Customer cannot receive reset email",
        content:
          "Customer says they tried resetting the password several times but never received the email.",
      },
      {
        key: "ticket-priority",
        label: "Ticket + priority",
        title: "Treat as account access issue",
        content:
          "Type: Account Access. Priority: Medium because the customer is blocked, but the issue may be user-specific and needs more details.",
      },
      {
        key: "information-needed",
        label: "Information needed",
        title: "Confirm email and delivery context",
        content:
          "Ask for account email, time of reset attempts, spam/junk check, whether previous platform emails were received, and whether the account email was changed.",
      },
      {
        key: "investigation",
        label: "Investigation",
        title: "Check reset generation and email delivery",
        content:
          "Confirm whether reset requests are generated, whether emails are delivered, and whether the issue affects one user or multiple users.",
      },
      {
        key: "customer-update",
        label: "Customer update",
        title: "Ask for reset attempt timestamp",
        content:
          "Hi, could you please confirm the email address used for the reset request and check your spam/junk folder? Please also send the approximate time of your latest reset attempt so we can investigate further.",
      },
      {
        key: "internal-note",
        label: "Internal note",
        title: "Document missing information",
        content:
          "Customer reports password reset email not received after multiple attempts. Need account email, reset attempt timestamps, spam/junk confirmation, and email delivery check.",
      },
      {
        key: "outcome",
        label: "Escalation / resolution",
        title: "Resolve or escalate email delivery failure",
        content:
          "Resolve if email is received or escalate if reset email is not generated or not delivered.",
      },
    ],
    evidence: [sharedEvidence.jiraBoard, sharedEvidence.confluenceGuide],
  },
  {
    title: "API returns 401 Unauthorized",
    type: "API Authentication Issue",
    priority: "High if integration is blocked",
    tools: ["Postman", "Jira"],
    summary:
      "Customer integration returns 401 Unauthorized. The workflow checks authentication headers, token validity, credential rotation, and request details.",
    stages: [
      {
        key: "customer-report",
        label: "Customer report",
        title: "Integration fails with 401",
        content:
          "Customer says their integration stopped working and API requests now return 401 Unauthorized.",
      },
      {
        key: "ticket-priority",
        label: "Ticket + priority",
        title: "Prioritize based on production impact",
        content:
          "Priority is High if a production integration is blocked. Lower if it is limited to a test environment.",
      },
      {
        key: "information-needed",
        label: "Information needed",
        title: "Collect request and authentication details",
        content:
          "Ask for endpoint URL, request method, timestamp, token type, recent token rotation, full error response, and Authorization header confirmation.",
      },
      {
        key: "investigation",
        label: "Investigation",
        title: "Check authentication path",
        content:
          "Confirm the Authorization header is included, token is valid and not expired, and credentials were not recently changed.",
      },
      {
        key: "customer-update",
        label: "Customer update",
        title: "Guide the customer toward auth checks",
        content:
          "Hi, a 401 response usually points to missing, expired, or invalid authentication credentials. Could you please confirm whether the Authorization header is being sent and whether the API token was recently changed or rotated?",
      },
      {
        key: "internal-note",
        label: "Internal note",
        title: "Document authentication hypothesis",
        content:
          "API request returns 401 Unauthorized. Need to confirm valid credentials, token expiration, Authorization header, and recent API key rotation.",
      },
      {
        key: "outcome",
        label: "Escalation / resolution",
        title: "Resolve config issue or escalate",
        content:
          "Resolve if authentication configuration is corrected, or escalate if valid credentials still fail.",
      },
    ],
    evidence: [sharedEvidence.postmanCheck],
  },
];

export const dashboardEdgeCases = [
  "Suspicious access request",
  "Chargeback or legal threat",
  "Major login outage",
  "GDPR / data deletion request",
  "Duplicate tickets",
  "Angry customer with low technical severity",
  "403 Forbidden",
  "429 Rate limit",
  "409 Conflict",
  "Intermittent bug",
];
