import type { WorkflowCase } from "../types/case.types";

export const workflowCases: WorkflowCase[] = [
  {
    id: "paid-account-still-unpaid",
    title: "Paid account still shows unpaid",
    brief:
      "Payment is confirmed, but premium access remains blocked because billing state did not sync to entitlement state.",
    issueClass: "Billing sync",
    tools: ["Freshdesk", "Jira", "Postman", "SQL", "Logs", "Confluence"],
  },
  {
    id: "login-fails-500",
    title: "Login fails with 500 error",
    brief:
      "User cannot log in after submitting credentials; browser DevTools shows the login request returning a server error.",
    issueClass: "Login incident",
    tools: ["Freshdesk", "Jira", "Browser DevTools", "HAR", "Logs"],
  },
  {
    id: "password-reset-email-not-received",
    title: "Password reset email not received",
    brief:
      "User is blocked from account recovery because reset emails are not arriving or cannot be verified as delivered.",
    issueClass: "Account access",
    tools: ["Freshdesk", "Jira", "Logs", "Confluence"],
  },
  {
    id: "api-401-unauthorized",
    title: "API returns 401 Unauthorized",
    brief:
      "Integration request is rejected because authentication is missing, expired, invalid, or misconfigured.",
    issueClass: "API authentication",
    tools: ["Freshdesk", "Postman", "Jira", "Auth / access", "Logs"],
  },
  {
    id: "api-404-resource-not-found",
    title: "API returns 404 Not Found",
    brief:
      "API is reachable, but a requested resource cannot be found because of ID, workspace, permission, or path mismatch.",
    issueClass: "API resource lookup",
    tools: ["Freshdesk", "Postman", "Jira", "SQL", "Logs"],
  },
  {
    id: "export-fails-firefox",
    title: "Export fails in Firefox",
    brief:
      "Report export fails in one browser, requiring reproduction, browser comparison, DevTools evidence, and workaround handling.",
    issueClass: "Browser-specific bug",
    tools: ["Freshdesk", "Jira", "Browser DevTools", "HAR", "Confluence"],
  },
  {
    id: "dashboard-loads-slowly",
    title: "Dashboard loads slowly",
    brief:
      "Customer reports slow loading; investigation focuses on scope, browser/network context, timing, and possible degradation.",
    issueClass: "Performance issue",
    tools: ["Freshdesk", "Jira", "Browser DevTools", "HAR", "Logs"],
  },
  {
    id: "crm-sync-stopped",
    title: "CRM integration stopped syncing",
    brief:
      "Records stopped syncing between systems, requiring failed examples, last successful sync, API/webhook checks, and escalation context.",
    issueClass: "Integration sync",
    tools: ["Freshdesk", "Jira", "Postman", "Logs", "SQL"],
  },
  {
    id: "new-user-access-request",
    title: "New user needs dashboard access",
    brief:
      "A standard access request requiring user details, approval, role selection, permission check, and documented provisioning.",
    issueClass: "Access request",
    tools: [
      "Freshdesk",
      "Jira",
      "Auth / access",
      "ITSM vocabulary",
      "Confluence",
    ],
  },
  {
    id: "bug-not-reproducible",
    title: "Reported bug is not reproducible",
    brief:
      "Customer reports a serious issue, but support needs timestamps, affected records, steps, environment, and evidence before escalation.",
    issueClass: "Unclear bug report",
    tools: ["Freshdesk", "Jira", "Browser DevTools", "Logs", "Confluence"],
  },
];
