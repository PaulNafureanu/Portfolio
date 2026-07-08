import type { WorkflowCase, WorkflowStageKey } from "../types";
import { technicalSupportEvidence } from "./technicalSupportEvidence.data";

const jira = technicalSupportEvidence.jiraBoard;
const confluence = technicalSupportEvidence.confluenceGuide;
const postman = technicalSupportEvidence.postmanCheck;

const jiraOnly = [jira];
const confluenceOnly = [confluence];
const postmanOnly = [postman];

const jiraConfluence = [jira, confluence];
const jiraPostman = [jira, postman];
const allEvidence = [jira, confluence, postman];

function stageEvidenceByToolSet(
  options: Partial<Record<WorkflowStageKey, typeof allEvidence>>,
) {
  return {
    "customer-report": options["customer-report"] ?? jiraOnly,
    "ticket-priority": options["ticket-priority"] ?? jiraOnly,
    "information-needed": options["information-needed"] ?? confluenceOnly,
    investigation: options.investigation ?? allEvidence,
    "customer-update": options["customer-update"] ?? confluenceOnly,
    "internal-note": options["internal-note"] ?? jiraOnly,
    outcome: options.outcome ?? jiraConfluence,
  };
}

export const technicalSupportCases: WorkflowCase[] = [
  {
    id: "paid-account-still-unpaid",
    title: "Paid account still shows unpaid",
    issueClass: "Billing sync",
    type: "Billing / Application Support",
    priority: "High",
    tools: ["Jira", "Postman"],
    shortDescription: "Payment completed, but paid access remains blocked.",
    summary:
      "A customer completed payment, but the application still shows the account as unpaid. The workflow checks payment state, internal entitlement state, and API/resource behavior before escalation.",
    stageDetails: {
      "customer-report": {
        title: "Clarify the payment/access mismatch",
        content:
          "The customer reports that payment was completed, but the account still shows unpaid and paid features remain unavailable. The first step is to separate payment confirmation from application access state.",
      },
      "ticket-priority": {
        title: "Create a high-priority billing/application ticket",
        content:
          "This is high priority because the customer has paid but cannot use paid functionality. The ticket should clearly state the mismatch: external payment completed, internal account still unpaid.",
      },
      "information-needed": {
        title: "Collect payment and account identifiers",
        content:
          "Collect account email, invoice or payment reference, payment method, approximate payment time, screenshot of the unpaid state, and whether the customer has refreshed or logged out/in.",
      },
      investigation: {
        title: "Compare provider status, account status, and API result",
        content:
          "Check whether the payment provider shows completed status, compare it with internal billing/account status, and use API checks where possible to distinguish endpoint availability from missing or delayed records.",
      },
      "customer-update": {
        title: "Ask for only the details needed to investigate",
        content:
          "Hi, thanks for reporting this. Could you please confirm the account email, invoice/payment reference, approximate payment time, and payment method? This will help us compare the payment provider status with the internal account status.",
      },
      "internal-note": {
        title: "Document the suspected sync failure",
        content:
          "Customer reports completed payment, but dashboard still shows unpaid. Need to compare provider transaction status, internal billing status, and account entitlement state. Possible delayed sync, failed webhook, or entitlement update failure.",
      },
      outcome: {
        title: "Escalate with billing and technical context",
        content:
          "Escalate to billing/engineering with account email, payment reference, timestamp, provider status, internal account status, and API check result. Resolution is confirmed only when account entitlement matches the paid state.",
      },
    },
    evidence: jiraPostman,
    stageEvidence: stageEvidenceByToolSet({
      "customer-report": jiraOnly,
      "ticket-priority": jiraOnly,
      "information-needed": confluenceOnly,
      investigation: postmanOnly,
      "customer-update": confluenceOnly,
      "internal-note": jiraOnly,
      outcome: jiraPostman,
    }),
  },

  {
    id: "login-fails-500",
    title: "Login fails with 500 error",
    issueClass: "Login incident",
    type: "Incident / Application Support",
    priority: "High if reproduced",
    tools: ["Jira", "Confluence"],
    shortDescription:
      "User cannot access the app after submitting credentials.",
    summary:
      "A customer cannot log in because the login page returns a server error. The workflow focuses on impact, reproduction, timestamps, known incidents, and escalation with useful backend context.",
    stageDetails: {
      "customer-report": {
        title: "Confirm the login failure and visible error",
        content:
          "The customer says login fails after entering email and password, and the page returns a 500/server error. The goal is to capture exact timing, account context, and whether the issue repeats.",
      },
      "ticket-priority": {
        title: "Treat as high priority if reproduced or widespread",
        content:
          "A 500 error during login can indicate a backend issue. Priority is high if reproduced, if multiple users are affected, or if the customer is blocked from core access.",
      },
      "information-needed": {
        title: "Collect account, device, browser, and timestamp",
        content:
          "Ask for account email, screenshot, exact error text, browser/device, timestamp, location if relevant, and whether reset password or another browser was attempted.",
      },
      investigation: {
        title: "Reproduce and check scope",
        content:
          "Test login flow where possible, check if the issue is account-specific or system-wide, compare browsers, and check known incidents or recent deployments before escalating.",
      },
      "customer-update": {
        title: "Request reproduction details without overloading the user",
        content:
          "Hi, thanks for reporting this. Could you please send the account email, screenshot or exact error message, browser/device used, and approximate time when this happened?",
      },
      "internal-note": {
        title: "Prepare backend investigation context",
        content:
          "Login fails with 500 after credential submission. Need timestamp, affected account, browser/device, screenshot, and reproduction result. Check recent deployments and incident status.",
      },
      outcome: {
        title: "Escalate with reproducible evidence",
        content:
          "Escalate with account, timestamp, reproduction steps, browser/device, screenshot, and observed scope. Resolve once login succeeds or incident owner confirms remediation.",
      },
    },
    evidence: jiraConfluence,
    stageEvidence: stageEvidenceByToolSet({
      "customer-report": jiraOnly,
      "ticket-priority": jiraOnly,
      "information-needed": confluenceOnly,
      investigation: confluenceOnly,
      "customer-update": confluenceOnly,
      "internal-note": jiraOnly,
      outcome: jiraConfluence,
    }),
  },

  {
    id: "password-reset-email-not-received",
    title: "Password reset email not received",
    issueClass: "Account access",
    type: "Account Access",
    priority: "Medium",
    tools: ["Jira", "Confluence"],
    shortDescription: "User is blocked from account recovery.",
    summary:
      "A customer cannot receive a password reset email. The workflow checks account email, reset generation, spam filtering, delivery state, and whether the issue is isolated or broader.",
    stageDetails: {
      "customer-report": {
        title: "Confirm reset email is not arriving",
        content:
          "The customer reports multiple reset attempts, but no reset email appears. First confirm the email address used and whether the user checked spam/junk folders.",
      },
      "ticket-priority": {
        title: "Classify as account access issue",
        content:
          "This is usually medium priority because the user is blocked, but the issue may be individual email delivery, incorrect email, or a wider reset/email problem.",
      },
      "information-needed": {
        title: "Collect email delivery context",
        content:
          "Ask for account email, reset attempt timestamps, spam/junk check, whether other platform emails arrive, and whether the account email changed recently.",
      },
      investigation: {
        title: "Check reset generation and delivery path",
        content:
          "Confirm whether reset requests are generated, whether emails are delivered, and whether other users are affected. Escalate if reset generation or email delivery fails.",
      },
      "customer-update": {
        title: "Ask for timestamp and basic checks",
        content:
          "Hi, could you please confirm the email address used for the reset request and check your spam/junk folder? Please also send the approximate time of your latest reset attempt.",
      },
      "internal-note": {
        title: "Document account recovery blockers",
        content:
          "Customer reports password reset email not received after multiple attempts. Need account email, reset timestamps, spam/junk confirmation, and email delivery check.",
      },
      outcome: {
        title: "Resolve delivery issue or escalate",
        content:
          "Resolve if the customer receives the reset email or account email was corrected. Escalate if reset emails are not generated or delivery fails despite correct account details.",
      },
    },
    evidence: jiraConfluence,
    stageEvidence: stageEvidenceByToolSet({
      "customer-report": jiraOnly,
      "ticket-priority": jiraOnly,
      "information-needed": confluenceOnly,
      investigation: confluenceOnly,
      "customer-update": confluenceOnly,
      "internal-note": jiraOnly,
      outcome: jiraConfluence,
    }),
  },

  {
    id: "api-401-unauthorized",
    title: "API returns 401 Unauthorized",
    issueClass: "API authentication",
    type: "API Support",
    priority: "High if production integration is blocked",
    tools: ["Postman", "Jira"],
    shortDescription:
      "Integration request fails because authentication is rejected.",
    summary:
      "A customer integration returns 401 Unauthorized. The workflow checks authentication headers, token validity, credential rotation, environment, and whether the issue is configuration or platform-side.",
    stageDetails: {
      "customer-report": {
        title: "Confirm the API failure and impact",
        content:
          "The customer reports that integration requests now return 401 Unauthorized. Confirm whether this affects production, test environment, or one endpoint only.",
      },
      "ticket-priority": {
        title: "Prioritize by integration impact",
        content:
          "Priority is high when a production integration is blocked. Lower priority may apply when the problem is isolated to testing or incomplete credentials.",
      },
      "information-needed": {
        title: "Collect request and auth details",
        content:
          "Ask for endpoint URL, request method, timestamp, environment, token type, recent credential rotation, full response body, and whether the Authorization header is being sent.",
      },
      investigation: {
        title: "Validate authentication path",
        content:
          "Use Postman-style checks to verify endpoint behavior, confirm whether credentials are included, check token expiration/rotation, and compare expected vs actual response.",
      },
      "customer-update": {
        title: "Guide the customer toward useful checks",
        content:
          "Hi, a 401 response usually means the request is missing valid authentication or the token is no longer accepted. Could you confirm whether the Authorization header is being sent and whether the token was recently changed?",
      },
      "internal-note": {
        title: "Document authentication hypothesis",
        content:
          "API request returns 401 Unauthorized. Need to confirm valid credentials, token expiration, Authorization header presence, environment, endpoint, and recent API key rotation.",
      },
      outcome: {
        title: "Resolve configuration or escalate if credentials are valid",
        content:
          "Resolve if authentication configuration is corrected. Escalate if valid credentials still fail and the request details suggest a platform-side issue.",
      },
    },
    evidence: jiraPostman,
    stageEvidence: stageEvidenceByToolSet({
      "customer-report": jiraOnly,
      "ticket-priority": jiraOnly,
      "information-needed": confluenceOnly,
      investigation: postmanOnly,
      "customer-update": confluenceOnly,
      "internal-note": jiraOnly,
      outcome: jiraPostman,
    }),
  },

  {
    id: "api-404-resource-not-found",
    title: "API returns 404 Not Found",
    issueClass: "API resource lookup",
    type: "API Support",
    priority: "Medium",
    tools: ["Postman", "Jira"],
    shortDescription:
      "Endpoint responds, but requested resource cannot be found.",
    summary:
      "A customer can reach the API, but a specific resource returns 404. The workflow checks resource ID, workspace/account context, permissions, endpoint path, and whether the resource exists in the UI.",
    stageDetails: {
      "customer-report": {
        title: "Clarify whether the API or resource is missing",
        content:
          "The customer says an API request returns 404. The key question is whether the endpoint is invalid, the resource ID is wrong, or the resource exists but is inaccessible.",
      },
      "ticket-priority": {
        title: "Classify as API lookup issue",
        content:
          "This is usually medium priority unless it blocks a critical integration. The API may be available while a specific resource is missing or outside scope.",
      },
      "information-needed": {
        title: "Collect endpoint, ID, workspace, and permission details",
        content:
          "Ask for endpoint URL, request method, resource/customer ID, workspace/account, timestamp, permissions, and whether the same record is visible in the UI.",
      },
      investigation: {
        title: "Check resource existence and scope",
        content:
          "Use Postman-style checks to confirm endpoint behavior, verify resource ID format, confirm workspace/account context, and check whether permissions allow access.",
      },
      "customer-update": {
        title: "Ask for resource context",
        content:
          "Hi, could you please confirm the endpoint URL, resource/customer ID, workspace/account, and whether the same record is visible in the UI?",
      },
      "internal-note": {
        title: "Document lookup assumptions",
        content:
          "API is reachable but requested resource returns 404. Need to verify ID, workspace/account context, user permissions, endpoint path, and whether the record exists internally.",
      },
      outcome: {
        title: "Resolve wrong ID/context or escalate valid mismatch",
        content:
          "Resolve if the ID, workspace, or permissions are incorrect. Escalate if the resource exists in the correct account but the API still returns 404.",
      },
    },
    evidence: jiraPostman,
    stageEvidence: stageEvidenceByToolSet({
      "customer-report": jiraOnly,
      "ticket-priority": jiraOnly,
      "information-needed": confluenceOnly,
      investigation: postmanOnly,
      "customer-update": confluenceOnly,
      "internal-note": jiraOnly,
      outcome: jiraPostman,
    }),
  },

  {
    id: "export-fails-firefox",
    title: "Export fails in Firefox",
    issueClass: "Browser-specific bug",
    type: "Bug / Application Support",
    priority: "Medium",
    tools: ["Jira", "Confluence"],
    shortDescription:
      "Report export fails in one browser but may work elsewhere.",
    summary:
      "A customer cannot export a report in Firefox. The workflow checks browser version, reproduction steps, workaround availability, expected vs actual behavior, and whether escalation needs compatibility evidence.",
    stageDetails: {
      "customer-report": {
        title: "Clarify the failed export behavior",
        content:
          "The customer reports that the export button does nothing or fails in Firefox. Confirm whether the issue is specific to one report, user, browser, or device.",
      },
      "ticket-priority": {
        title: "Classify based on impact and workaround",
        content:
          "Usually medium priority because a feature is impaired. Priority may be lower if another browser works, or higher if exporting is business-critical.",
      },
      "information-needed": {
        title: "Collect browser and reproduction details",
        content:
          "Ask for Firefox version, operating system, report type, steps to reproduce, expected result, actual result, and whether Chrome or Edge works.",
      },
      investigation: {
        title: "Compare browser behavior",
        content:
          "Test the same export flow in Firefox and another browser. Document whether the bug is browser-specific and capture any visible error or console clue if available.",
      },
      "customer-update": {
        title: "Confirm workaround while investigation continues",
        content:
          "Hi, could you please confirm your Firefox version, operating system, report type, and whether the export works in another browser such as Chrome?",
      },
      "internal-note": {
        title: "Document compatibility evidence",
        content:
          "Customer reports export failure in Firefox. Need browser version, OS, report type, reproduction steps, and comparison with Chrome/Edge to confirm browser-specific behavior.",
      },
      outcome: {
        title: "Escalate reproducible browser-specific bug",
        content:
          "Escalate if the issue reproduces in Firefox with clear steps and expected vs actual behavior. Include workaround if available.",
      },
    },
    evidence: jiraConfluence,
    stageEvidence: stageEvidenceByToolSet({
      "customer-report": jiraOnly,
      "ticket-priority": jiraOnly,
      "information-needed": confluenceOnly,
      investigation: confluenceOnly,
      "customer-update": confluenceOnly,
      "internal-note": jiraOnly,
      outcome: jiraConfluence,
    }),
  },

  {
    id: "dashboard-loads-slowly",
    title: "Dashboard loads slowly",
    issueClass: "Performance issue",
    type: "Application Support",
    priority: "Medium / High depending on scope",
    tools: ["Jira", "Confluence"],
    shortDescription: "Core page is slow, but scope is still unclear.",
    summary:
      "A customer reports that the dashboard loads slowly. The workflow determines scope, affected users, affected pages, browser/network context, and whether the issue should be escalated as performance degradation.",
    stageDetails: {
      "customer-report": {
        title: "Clarify what slow means",
        content:
          "The customer says the dashboard is slow. Confirm whether it takes seconds or minutes, whether the issue started recently, and which page or workflow is affected.",
      },
      "ticket-priority": {
        title: "Prioritize by scope and business impact",
        content:
          "One affected user may be medium priority. Multiple users, core workflows, or business-critical pages can raise the issue to high priority.",
      },
      "information-needed": {
        title: "Collect scope, environment, and timing",
        content:
          "Ask for affected page, start time, browser/device, network type, number of affected users, screenshot/video, and whether refresh or another browser helps.",
      },
      investigation: {
        title: "Check user-specific vs system-wide behavior",
        content:
          "Determine whether the issue affects one user, one browser, one page, one workspace, or multiple users. Check known incidents and recent deployments.",
      },
      "customer-update": {
        title: "Ask for scope without assuming root cause",
        content:
          "Hi, could you please confirm which dashboard/page is slow, when it started, your browser/device, and whether other users on your team are affected too?",
      },
      "internal-note": {
        title: "Document performance scope",
        content:
          "Customer reports slow dashboard loading. Need to determine scope: one user vs multiple users, one browser vs all browsers, one page vs full application.",
      },
      outcome: {
        title: "Escalate if broader degradation is likely",
        content:
          "Escalate if multiple users or core pages are affected. Continue collecting environment evidence if the issue appears user-specific.",
      },
    },
    evidence: jiraConfluence,
    stageEvidence: stageEvidenceByToolSet({
      "customer-report": jiraOnly,
      "ticket-priority": jiraOnly,
      "information-needed": confluenceOnly,
      investigation: confluenceOnly,
      "customer-update": confluenceOnly,
      "internal-note": jiraOnly,
      outcome: jiraConfluence,
    }),
  },

  {
    id: "crm-sync-stopped",
    title: "CRM integration stopped syncing",
    issueClass: "Integration sync",
    type: "Integration Support",
    priority: "High if business workflow is blocked",
    tools: ["Jira", "Postman"],
    shortDescription: "New records stopped syncing between systems.",
    summary:
      "A customer reports that CRM records stopped syncing. The workflow checks last successful sync, failed examples, credentials, webhook/API status, retry behavior, and configuration changes.",
    stageDetails: {
      "customer-report": {
        title: "Confirm the sync failure and affected records",
        content:
          "The customer reports that new leads or records are no longer syncing. Confirm which integration, when it last worked, and which records failed.",
      },
      "ticket-priority": {
        title: "Prioritize by business workflow impact",
        content:
          "High priority if sales, onboarding, billing, or customer operations are blocked. Medium if the issue is delayed sync with a workaround.",
      },
      "information-needed": {
        title: "Collect sync and configuration evidence",
        content:
          "Ask for integration name, last successful sync time, failed record examples, webhook endpoint if applicable, error/status code, and recent CRM or API credential changes.",
      },
      investigation: {
        title: "Check webhook/API and recent changes",
        content:
          "Use API/log-style evidence where available to check whether requests are sent, whether responses fail, whether credentials changed, and whether failed records are retried.",
      },
      "customer-update": {
        title: "Ask for failed examples and last success time",
        content:
          "Hi, could you please send the integration name, the last successful sync time, one or two failed record examples, and whether any API credentials or CRM settings changed recently?",
      },
      "internal-note": {
        title: "Document sync failure hypothesis",
        content:
          "Customer reports CRM integration stopped syncing new records. Need failed examples, timestamps, last successful sync, API/webhook response codes, and credential/configuration-change history.",
      },
      outcome: {
        title: "Escalate with failed examples and API context",
        content:
          "Escalate with failed record examples, timestamps, response codes, credential-change history, and impact. Resolve when sync resumes and failed records are reconciled.",
      },
    },
    evidence: jiraPostman,
    stageEvidence: stageEvidenceByToolSet({
      "customer-report": jiraOnly,
      "ticket-priority": jiraOnly,
      "information-needed": confluenceOnly,
      investigation: postmanOnly,
      "customer-update": confluenceOnly,
      "internal-note": jiraOnly,
      outcome: jiraPostman,
    }),
  },

  {
    id: "new-user-access-request",
    title: "New user needs dashboard access",
    issueClass: "Access request",
    type: "Service Request",
    priority: "Low / Medium",
    tools: ["Jira", "Confluence"],
    shortDescription:
      "Access is requested, but approval and role are required.",
    summary:
      "A customer requests access for a new user. The workflow separates service request from incident, verifies approval, confirms required role, and documents what access was granted.",
    stageDetails: {
      "customer-report": {
        title: "Confirm this is an access request",
        content:
          "The requester asks for a new user to receive dashboard access. Nothing is broken; the issue is controlled access provisioning.",
      },
      "ticket-priority": {
        title: "Classify as service request",
        content:
          "Usually low or medium priority unless the access is blocking a time-sensitive business process. Main risk is granting access without proper approval.",
      },
      "information-needed": {
        title: "Collect user, role, and approval details",
        content:
          "Ask for user email, department/team, requested role, manager/system-owner approval, required permission level, and start date.",
      },
      investigation: {
        title: "Verify approval and permission level",
        content:
          "Check whether the requester is authorized, whether approval is present, and whether the requested permission level matches the user’s role.",
      },
      "customer-update": {
        title: "Request missing approval details",
        content:
          "Hi, please send the user email, required role, department, start date, and manager approval. Once confirmed, we can proceed with the access request.",
      },
      "internal-note": {
        title: "Document approval requirement",
        content:
          "Access request received for new user. Need manager/system-owner approval and required permission level before provisioning. Do not grant access until approval and role are confirmed.",
      },
      outcome: {
        title: "Provision and document granted access",
        content:
          "Resolve after access is granted and documented. Keep waiting for approval if required approval or role information is missing.",
      },
    },
    evidence: jiraConfluence,
    stageEvidence: stageEvidenceByToolSet({
      "customer-report": jiraOnly,
      "ticket-priority": jiraOnly,
      "information-needed": confluenceOnly,
      investigation: confluenceOnly,
      "customer-update": confluenceOnly,
      "internal-note": jiraOnly,
      outcome: jiraConfluence,
    }),
  },

  {
    id: "bug-not-reproducible",
    title: "Reported bug is not reproducible",
    issueClass: "Unclear bug report",
    type: "Bug Investigation",
    priority: "Medium / High if data loss is credible",
    tools: ["Jira", "Confluence"],
    shortDescription:
      "Customer reports a serious issue, but details are incomplete.",
    summary:
      "A customer reports a bug that cannot yet be reproduced. The workflow avoids dismissing the customer, collects evidence, identifies missing reproduction details, and escalates only when the report is actionable.",
    stageDetails: {
      "customer-report": {
        title: "Acknowledge the issue without dismissing it",
        content:
          "The customer reports a serious issue but cannot provide exact steps or timing. The first goal is to capture what happened without assuming the customer is wrong.",
      },
      "ticket-priority": {
        title: "Prioritize based on risk and evidence",
        content:
          "Medium priority while details are missing. High priority if the report suggests data loss, security risk, or multiple affected users.",
      },
      "information-needed": {
        title: "Collect reproduction and impact details",
        content:
          "Ask for affected record ID, approximate timestamp, actions taken before the issue, browser/device, account, other users involved, screenshots, or screen recording.",
      },
      investigation: {
        title: "Try to reproduce and identify missing evidence",
        content:
          "Test the described flow, check whether shared editing, autosave, permissions, browser state, or recent changes could explain the behavior.",
      },
      "customer-update": {
        title: "Ask for evidence respectfully",
        content:
          "Hi, thanks for reporting this. I understand this is concerning. Could you please send the affected record name or ID, approximate time it happened, actions taken before it occurred, browser/device used, and any screenshot or recording if available?",
      },
      "internal-note": {
        title: "Document why the case is not yet actionable",
        content:
          "Customer reports intermittent issue but no exact timestamp or reproduction steps yet. Need affected record ID, timeframe, account, browser/device, and possible shared editing context before escalation.",
      },
      outcome: {
        title: "Escalate if evidence supports impact",
        content:
          "Escalate if credible evidence supports data loss, security risk, or reproducible behavior. Otherwise document as not reproducible and keep the case waiting for requested information.",
      },
    },
    evidence: jiraConfluence,
    stageEvidence: stageEvidenceByToolSet({
      "customer-report": jiraOnly,
      "ticket-priority": jiraOnly,
      "information-needed": confluenceOnly,
      investigation: confluenceOnly,
      "customer-update": confluenceOnly,
      "internal-note": jiraOnly,
      outcome: jiraConfluence,
    }),
  },
];
