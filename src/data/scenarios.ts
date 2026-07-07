export type Scenario = {
  title: string;
  type: string;
  priority: string;
  statusPath: string;
  tools: string[];
  signal: string;
  customerMessage: string;
  priorityReasoning: string;
  informationNeeded: string[];
  investigationSteps: string[];
  customerReply: string;
  internalNote: string;
  outcome: string;
};

export const scenarios: Scenario[] = [
  {
    title: "Payment completed but account still unpaid",
    type: "Billing / Application Support",
    priority: "High",
    statusPath: "To Do → In Progress → Escalated",
    tools: ["Jira", "Postman"],
    signal: "API-aware billing investigation and escalation handoff.",
    customerMessage:
      "Hi, I paid my invoice today, but my account still says unpaid and I can’t access premium features.",
    priorityReasoning:
      "High priority because the customer completed payment but remains blocked from paid functionality. The issue affects access, revenue, and customer trust.",
    informationNeeded: [
      "Account email",
      "Invoice ID or payment reference",
      "Approximate payment time",
      "Payment method",
      "Screenshot of unpaid account status",
    ],
    investigationSteps: [
      "Confirm customer account and invoice reference.",
      "Check whether payment provider shows completed status.",
      "Compare provider status with internal billing/account status.",
      "Use Postman-style API checks to distinguish endpoint availability from missing records.",
      "Escalate if provider status and internal account state do not match.",
    ],
    customerReply:
      "Hi, thanks for reporting this. I’ll check this for you. Could you please confirm the account email, invoice/payment reference, approximate payment time, and payment method? This will help us compare the payment provider status with the internal account status.",
    internalNote:
      "Customer reports completed payment, but dashboard still shows unpaid. Need to compare payment provider transaction status, internal billing status, and account entitlement state. Possible delayed sync or failed webhook/API update.",
    outcome:
      "Escalate to billing/engineering with account email, payment reference, timestamp, provider status, internal account status, and API check result.",
  },
  {
    title: "Login page returns 500 error",
    type: "Incident",
    priority: "High if reproduced",
    statusPath: "To Do → In Progress → Escalated",
    tools: ["Jira", "Confluence"],
    signal: "Incident triage, reproduction steps, and backend escalation.",
    customerMessage:
      "I can’t log in. After I enter my email and password, the page shows a server error.",
    priorityReasoning:
      "High if the issue is reproduced or affects multiple users. Medium if the report is still unclear and impact is unknown.",
    informationNeeded: [
      "Account email",
      "Exact error message",
      "Screenshot",
      "Browser and device",
      "Timestamp",
      "Whether password reset was attempted",
    ],
    investigationSteps: [
      "Confirm account and timestamp.",
      "Check whether the issue is account-specific or system-wide.",
      "Test in more than one browser.",
      "Check known incidents or recent deployments.",
      "Escalate if the server error is reproduced.",
    ],
    customerReply:
      "Hi, thanks for reporting this. Could you please send the email address used for login, the exact error message or screenshot, the browser/device used, and the approximate time when this happened?",
    internalNote:
      "Customer login fails with 500 error after password submission. Need to confirm scope, reproduce issue, check browser behavior, and collect timestamp for backend log investigation.",
    outcome:
      "Escalate with reproduction steps, affected account, browser/device, timestamp, screenshot, and customer impact.",
  },
  {
    title: "Password reset email not received",
    type: "Account Access",
    priority: "Medium",
    statusPath: "To Do → Waiting for Customer → In Progress → Resolved",
    tools: ["Jira", "Confluence"],
    signal: "Customer questioning and Waiting for Customer workflow.",
    customerMessage:
      "Hi, I tried to reset my password three times but I never received the reset email.",
    priorityReasoning:
      "Medium priority because the customer is blocked from access, but the issue may be user-specific and requires more information before escalation.",
    informationNeeded: [
      "Account email",
      "Time of reset attempts",
      "Spam/junk folder checked",
      "Whether previous platform emails were received",
      "Whether account email was recently changed",
    ],
    investigationSteps: [
      "Confirm the email address used.",
      "Ask customer to check spam/junk folder.",
      "Check whether reset request was generated.",
      "Check whether email delivery issue is user-specific or wider.",
      "Resolve or escalate to email/platform team if delivery failure is confirmed.",
    ],
    customerReply:
      "Hi, could you please confirm the email address used for the reset request and check your spam/junk folder? Please also send the approximate time of your latest reset attempt so we can investigate further.",
    internalNote:
      "Customer reports password reset email not received after multiple attempts. Need to confirm account email, timestamp of reset attempts, spam/junk check, and whether previous platform emails were received.",
    outcome:
      "Resolve if the customer receives the email or escalate if the reset email is not generated or delivered.",
  },
  {
    title: "User requests account access",
    type: "Service Request",
    priority: "Medium / Low",
    statusPath: "To Do → Waiting for Approval → In Progress → Resolved",
    tools: ["Jira"],
    signal: "Approval and permission discipline.",
    customerMessage:
      "Hi, a new employee needs access to the reporting dashboard.",
    priorityReasoning:
      "Usually medium or low because nothing is broken. The main risk is granting access without approval or correct permission level.",
    informationNeeded: [
      "User email",
      "Department/team",
      "Requested role",
      "Manager approval",
      "Required permission level",
      "Start date",
    ],
    investigationSteps: [
      "Confirm the request is a service request, not an incident.",
      "Collect required user and role information.",
      "Verify manager or system owner approval.",
      "Provision access only after approval.",
      "Document what access was granted.",
    ],
    customerReply:
      "Hi, please send the user email, required role, department, start date, and manager approval. Once confirmed, we can proceed with the access request.",
    internalNote:
      "Access request received for new user. Need manager approval and required permission level before provisioning. Do not grant access until approval and role are confirmed.",
    outcome:
      "Resolve after access is granted and documented, or keep Waiting for Approval until approval is received.",
  },
  {
    title: "Export button fails in Firefox",
    type: "Bug / Browser-specific Issue",
    priority: "Medium",
    statusPath: "To Do → In Progress → Waiting for Customer / Escalated",
    tools: ["Jira", "Browser testing"],
    signal: "Reproduction and compatibility testing.",
    customerMessage:
      "The export button doesn’t work when I try to download my report. Nothing happens.",
    priorityReasoning:
      "Medium priority because the feature is impaired, but impact depends on whether a workaround exists in another browser.",
    informationNeeded: [
      "Browser and version",
      "Operating system",
      "Report type",
      "Steps to reproduce",
      "Expected vs actual result",
      "Whether it works in Chrome",
    ],
    investigationSteps: [
      "Collect browser/version and report type.",
      "Test the same action in Firefox.",
      "Test the same action in Chrome.",
      "Check whether issue is browser-specific.",
      "Escalate with reproduction steps and console error if confirmed.",
    ],
    customerReply:
      "Hi, could you please confirm your Firefox version, operating system, report type, and whether the export works in another browser such as Chrome?",
    internalNote:
      "Customer reports export button does not work in Firefox. Need browser version, report type, and reproduction steps. Test same action in Chrome and Firefox to confirm whether issue is browser-specific.",
    outcome:
      "Escalate as browser-specific bug if reproduced, or request more evidence if not reproducible.",
  },
  {
    title: "API returns 401 Unauthorized",
    type: "API Authentication Issue",
    priority: "High if production integration is blocked",
    statusPath: "To Do → In Progress → Waiting for Customer / Resolved",
    tools: ["Postman", "Jira"],
    signal: "Token and authentication troubleshooting.",
    customerMessage:
      "Our integration stopped working. API requests now return 401 Unauthorized.",
    priorityReasoning:
      "High if a production integration is blocked. Lower if the issue is limited to a test environment or incomplete request details.",
    informationNeeded: [
      "Endpoint URL",
      "Request method",
      "Timestamp",
      "API key/token type",
      "Recent token rotation",
      "Full error response",
      "Authorization header confirmation",
    ],
    investigationSteps: [
      "Confirm request endpoint and method.",
      "Check whether authentication header is included.",
      "Confirm token is valid and not expired.",
      "Ask whether API credentials were recently changed.",
      "Test request in Postman if credentials or test data are available.",
    ],
    customerReply:
      "Hi, a 401 response usually points to missing, expired, or invalid authentication credentials. Could you please confirm whether the Authorization header is being sent and whether the API token was recently changed or rotated?",
    internalNote:
      "API request returns 401 Unauthorized. Need to confirm whether valid authentication credentials are being sent, whether token expired, and whether API key was recently rotated.",
    outcome:
      "Resolve if authentication configuration is corrected, or escalate if valid credentials still fail.",
  },
  {
    title: "API returns 404 Not Found",
    type: "API Resource Lookup Issue",
    priority: "Medium",
    statusPath: "To Do → In Progress → Waiting for Customer / Escalated",
    tools: ["Postman", "Jira"],
    signal: "Resource ID, workspace, and permission validation.",
    customerMessage:
      "We are trying to fetch a customer record, but the API returns 404.",
    priorityReasoning:
      "Medium priority because the API may be reachable while the requested resource is missing, incorrect, or outside the customer’s access scope.",
    informationNeeded: [
      "Endpoint URL",
      "Resource/customer ID",
      "Request method",
      "Account/workspace",
      "Permissions",
      "Timestamp",
      "Whether the record exists in the UI",
    ],
    investigationSteps: [
      "Confirm endpoint and resource ID.",
      "Check whether the API itself is reachable.",
      "Verify whether the record exists in the correct workspace/account.",
      "Check permissions and access scope.",
      "Escalate if the record exists but API still returns 404.",
    ],
    customerReply:
      "Hi, could you please confirm the endpoint URL, customer/resource ID, workspace/account, and whether the same record is visible in the UI?",
    internalNote:
      "API is reachable but requested resource returns 404. Need to verify customer/resource ID, account/workspace context, user permissions, and whether the record exists internally.",
    outcome:
      "Resolve if ID/workspace is incorrect, or escalate if a valid record cannot be retrieved.",
  },
  {
    title: "Dashboard loads slowly",
    type: "Performance Issue",
    priority: "Medium / High depending on scope",
    statusPath: "To Do → In Progress → Waiting for Customer / Escalated",
    tools: ["Jira", "Browser checks"],
    signal: "Scope and impact investigation.",
    customerMessage:
      "The dashboard is extremely slow today. It takes almost a minute to load.",
    priorityReasoning:
      "Priority depends on scope. One user may be medium. Multiple users, core pages, or business-critical workflows may raise it to high.",
    informationNeeded: [
      "Affected page",
      "Time of issue",
      "Browser/device",
      "Network type",
      "Number of affected users",
      "Screenshot/video",
      "Whether refresh or another browser helps",
    ],
    investigationSteps: [
      "Determine whether one user or multiple users are affected.",
      "Check whether one page or the whole app is slow.",
      "Ask about browser/device/network.",
      "Check known incidents and recent deployments.",
      "Escalate if multiple users or core pages are affected.",
    ],
    customerReply:
      "Hi, could you please confirm which dashboard/page is slow, when it started, your browser/device, and whether other users on your team are affected too?",
    internalNote:
      "Customer reports slow dashboard loading. Need to determine scope: one user vs multiple users, one browser vs all browsers, one page vs full application.",
    outcome:
      "Escalate if system-wide performance issue is suspected; otherwise continue collecting user/browser/network evidence.",
  },
  {
    title: "CRM integration stopped syncing",
    type: "Integration Issue",
    priority: "High if business workflow is blocked",
    statusPath: "To Do → In Progress → Escalated",
    tools: ["Jira", "Postman", "Logs"],
    signal: "Webhook, API, and log-oriented investigation.",
    customerMessage: "Our CRM integration stopped syncing new leads yesterday.",
    priorityReasoning:
      "High if the integration blocks sales/customer operations. Medium if sync delay is limited, has a workaround, or affects test data only.",
    informationNeeded: [
      "Integration name",
      "Last successful sync time",
      "Failed record examples",
      "Webhook endpoint",
      "Error message/status code",
      "Recent configuration changes",
      "API credential changes",
    ],
    investigationSteps: [
      "Confirm integration and last successful sync.",
      "Collect failed examples and timestamps.",
      "Check whether credentials or endpoint changed.",
      "Check webhook/API response status if available.",
      "Escalate with logs and failed record examples.",
    ],
    customerReply:
      "Hi, could you please send the integration name, the last successful sync time, one or two failed record examples, and whether any API credentials or CRM settings changed recently?",
    internalNote:
      "Customer reports CRM integration stopped syncing new leads. Need to check webhook delivery logs, API response status, recent credential changes, and whether failed records are being retried.",
    outcome:
      "Escalate with failed examples, timestamps, response codes, and configuration-change history.",
  },
  {
    title: "Bug report cannot be reproduced",
    type: "Bug Investigation",
    priority: "Medium / High if data loss is credible",
    statusPath:
      "To Do → Waiting for Customer → In Progress → Escalated / Closed",
    tools: ["Jira", "Confluence"],
    signal: "Evidence collection and non-dismissive communication.",
    customerMessage:
      "Your app randomly deletes my notes. It happened twice but I don’t know exactly when.",
    priorityReasoning:
      "Medium when details are missing. High if there is credible evidence of data loss or multiple affected users.",
    informationNeeded: [
      "Affected note name or ID",
      "Approximate timestamp",
      "Actions taken before issue",
      "Browser/device",
      "User account",
      "Whether another user had access",
      "Screenshots or screen recording",
    ],
    investigationSteps: [
      "Acknowledge concern without dismissing the report.",
      "Collect affected record details and timeframe.",
      "Ask for steps before the issue happened.",
      "Check whether other users or autosave could be involved.",
      "Escalate if credible data-loss evidence is collected.",
    ],
    customerReply:
      "Hi, thanks for reporting this. I understand this is concerning. Could you please send the affected note name or ID, approximate time it happened, actions taken before it disappeared, browser/device used, and whether anyone else had access to the same note?",
    internalNote:
      "Customer reports intermittent note deletion but no exact timestamp or reproduction steps yet. Need affected record ID, timeframe, account, browser/device, and possible shared editing context before escalation.",
    outcome:
      "Escalate if evidence supports possible data loss; otherwise document as not reproducible with requested follow-up information.",
  },
];

export const edgeCases = [
  "Suspicious access request",
  "Customer threatens chargeback or legal action",
  "Major outage: many users cannot log in",
  "GDPR / data deletion request",
  "Duplicate tickets from same customer",
  "Angry customer with low technical severity",
  "403 Forbidden on admin action",
  "429 Too Many Requests / rate limit",
  "409 Conflict during update",
  "Intermittent bug: works sometimes",
];
