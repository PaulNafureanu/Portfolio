import type { WorkflowEvidence } from "../types/evidence.types";

const case01Image = (filename: string): string =>
  `/assets/work-samples/case01/${filename}`;

export const workflowEvidence = {
  jiraBoard: {
    key: "jira-board",
    label: "Jira",
    title: "Ticket workflow board",
    description:
      "Board view showing simulated support tickets moving through statuses.",
    caption:
      "A simulated Jira workflow used to organize application-support cases from intake through resolution.",
    image: "/assets/work-samples/jira-board-workflow.png",
    alt: "Jira board showing support tickets organized by workflow status.",
    type: "screenshot",
  },

  confluenceGuide: {
    key: "confluence-guide",
    label: "Confluence",
    title: "Troubleshooting guide",
    description:
      "Documentation example used to standardize investigation before escalation.",
    caption:
      "A troubleshooting guide documenting a repeatable investigation and escalation process.",
    image: "/assets/work-samples/confluence-guide.png",
    alt: "Confluence page containing a structured troubleshooting guide.",
    type: "screenshot",
  },

  postmanCheck: {
    key: "postman-200",
    label: "Postman",
    title: "API response check",
    description:
      "Postman response used to translate API behavior into support notes.",
    caption:
      "An API request returning a successful response during a simulated support investigation.",
    image: "/assets/work-samples/postman-200-ok.png",
    alt: "Postman request showing a successful API response.",
    type: "screenshot",
  },

  freshdeskCustomerReport: {
    key: "case01-customer-report-and-triage",
    label: "Freshdesk",
    title: "Initial customer report and triage",
    description:
      "Customer reported a successful €49 payment but could not access premium functionality.",
    caption:
      "The incident was classified as high priority after the customer reported that a completed payment had not activated premium access. Business impact, suspected cause, and initial investigation steps were documented.",
    image: case01Image("case-01-stage-01-customer-report-and-triage.png"),
    alt: "Freshdesk ticket showing the customer payment complaint, high priority, billing tags, and initial triage note.",
    type: "screenshot",
  },

  case01CustomerPaymentReference: {
    key: "case01-customer-payment-reference",
    label: "Freshdesk",
    title: "Payment information received",
    description:
      "The customer supplied the transaction reference, amount, payment time, and redacted confirmation.",
    caption:
      "The customer provided transaction TXN-88421, the €49 amount, payment time, and confirmation needed to begin technical verification.",
    image: case01Image("case-01-stage-03-customer-payment-reference.png"),
    alt: "Freshdesk conversation showing the customer providing transaction TXN-88421 and payment details.",
    type: "screenshot",
  },

  case01VerificationPlan: {
    key: "case01-verification-plan",
    label: "Freshdesk",
    title: "Verification plan",
    description:
      "The received evidence was summarized and converted into a structured verification plan.",
    caption:
      "The transaction evidence was recorded internally, followed by a plan to verify the billing record, subscription state, entitlement, and synchronization logs.",
    image: case01Image("case-01-stage-03-verification-plan.png"),
    alt: "Freshdesk private note summarizing payment evidence and listing verification steps.",
    type: "screenshot",
  },

  case01PaymentVerification: {
    key: "case01-payment-verification",
    label: "Postman",
    title: "Successful payment verified",
    description:
      "The billing API confirmed that the reported transaction completed successfully.",
    caption:
      "Transaction TXN-88421 returned 200 OK and matched invoice INV-2048, the affected account, the €49 amount, and a succeeded payment status.",
    image: case01Image("case-01-stage-04-payment-verification.png"),
    alt: "Postman response confirming that transaction TXN-88421 succeeded and matched invoice INV-2048.",
    type: "screenshot",
  },

  case01EntitlementMismatch: {
    key: "case01-entitlement-mismatch",
    label: "Postman",
    title: "Entitlement mismatch identified",
    description:
      "The subscription was paid and active, but premium entitlement remained inactive.",
    caption:
      "The account API showed a valid paid subscription while premiumAccess remained false and the latest entitlement synchronization was marked as failed.",
    image: case01Image("case-01-stage-04-entitlement-mismatch.png"),
    alt: "Postman response showing an active paid subscription with an inactive premium entitlement.",
    type: "screenshot",
  },

  case01SyncFailureRootCause: {
    key: "case01-sync-failure-root-cause",
    label: "Postman",
    title: "Synchronization failure traced",
    description:
      "The failed payment event was traced through the synchronization service.",
    caption:
      "Three entitlement activation attempts failed with HTTP 502 responses. Automated retries were exhausted, leaving the account paid but without premium access.",
    image: case01Image("case-01-stage-04-sync-failure-root-cause.png"),
    alt: "Postman response showing a failed entitlement synchronization event, HTTP 502 error, and exhausted retries.",
    type: "screenshot",
  },

  case01InvestigationFindings: {
    key: "case01-investigation-findings",
    label: "Freshdesk",
    title: "Investigation findings documented",
    description:
      "Billing, subscription, entitlement, and synchronization findings were consolidated into the support ticket.",
    caption:
      "The internal note documented the successful payment, active subscription, inactive entitlement, failed sync event, HTTP 502 response, correlation ID, conclusion, and next actions.",
    image: case01Image("case-01-stage-04-investigation-findings.png"),
    alt: "Freshdesk private note documenting billing verification, subscription status, synchronization failure, and next actions.",
    type: "screenshot",
  },

  case01CustomerProgressUpdate: {
    key: "case01-customer-progress-update",
    label: "Freshdesk",
    title: "Customer progress update",
    description:
      "The verified cause and remediation plan were explained without unnecessary technical detail.",
    caption:
      "The customer was told that the payment was valid, no duplicate payment was required, and premium access would be synchronized manually. A clear update expectation was also provided.",
    image: case01Image("case-01-stage-05-customer-progress-update.png"),
    alt: "Freshdesk conversation showing a customer-facing investigation update and the customer's acknowledgement.",
    type: "screenshot",
  },

  case01JiraEscalation: {
    key: "case01-jira-escalation",
    label: "Jira",
    title: "Structured incident escalation",
    description:
      "The failed entitlement synchronization was documented as a high-priority Jira incident.",
    caption:
      "The Jira incident included customer impact, stable internal identifiers, expected and actual behavior, investigation findings, HTTP 502 evidence, and the related Freshdesk ticket.",
    image: case01Image("case-01-stage-06-jira-escalation.png"),
    alt: "Jira incident describing a paid subscription without premium entitlement and the associated technical findings.",
    type: "screenshot",
  },

  case01JiraRequestedActions: {
    key: "case01-jira-requested-actions",
    label: "Jira",
    title: "Requested remediation actions",
    description:
      "The escalation specified the technical checks and remediation required.",
    caption:
      "Requested actions included reviewing correlated service logs, checking wider impact, restoring the entitlement, investigating the HTTP 502 response, and improving retry handling.",
    image: case01Image("case-01-stage-06-jira-requested-actions.png"),
    alt: "Jira issue section listing the observed failure mechanism, requested actions, and lack of a customer workaround.",
    type: "screenshot",
  },

  case01RemediationRecord: {
    key: "case01-remediation-record",
    label: "Jira",
    title: "Simulated remediation recorded",
    description:
      "The failed event was recorded as replayed and the entitlement as restored.",
    caption:
      "The simulated remediation record documented the temporary entitlement-service failure, manual replay of the failed event, restored premium access, and the requirement to verify the result before closure.",
    image: case01Image("case-01-stage-06-remediation-record.png"),
    alt: "Resolved Jira issue showing simulated remediation, manual event replay, and a request for independent verification.",
    type: "screenshot",
  },

  case01ResolutionUpdate: {
    key: "case01-resolution-update",
    label: "Freshdesk",
    title: "Restoration update",
    description:
      "The restored entitlement was documented before asking the customer to verify access.",
    caption:
      "The account API confirmed that premium access was restored. The customer was asked to sign out, sign back in, and verify the premium features while the ticket remained open.",
    image: case01Image("case-01-stage-07-resolution-update.png"),
    alt: "Freshdesk private resolution-verification note and customer message requesting confirmation of restored access.",
    type: "screenshot",
  },

  case01RestorationVerification: {
    key: "case01-restoration-verification",
    label: "Postman",
    title: "Restoration independently verified",
    description:
      "The account API confirmed that the premium entitlement was active after remediation.",
    caption:
      "The verification request returned 200 OK, premiumAccess true, an active entitlement, and a successful synchronization sourced from the manual replay.",
    image: case01Image("case-01-stage-07-restoration-verification.png"),
    alt: "Postman response showing active premium access and a successful entitlement synchronization after manual replay.",
    type: "screenshot",
  },

  case01CustomerConfirmationAndClosure: {
    key: "case01-customer-confirmation-and-closure",
    label: "Freshdesk",
    title: "Customer confirmation and closure",
    description:
      "The customer confirmed restored access and the ticket was resolved with a complete closure note.",
    caption:
      "After signing out and back in, the customer confirmed that premium features were available. The investigation and remediation were summarized, and the incident was marked Resolved on time.",
    image: case01Image(
      "case-01-stage-07-customer-confirmation-and-closure.png",
    ),
    alt: "Resolved Freshdesk ticket showing customer confirmation and the final resolution summary.",
    type: "screenshot",
  },
} satisfies Record<string, WorkflowEvidence>;

export type WorkflowEvidenceKey = keyof typeof workflowEvidence;

export type CaseStageKey =
  | "customer-report"
  | "ticket-priority"
  | "information-needed"
  | "investigation"
  | "customer-update"
  | "internal-note"
  | "outcome";

export const case01EvidenceByStage = {
  "customer-report": ["freshdeskCustomerReport"],

  "ticket-priority": ["freshdeskCustomerReport"],

  "information-needed": ["case01CustomerPaymentReference"],

  investigation: [
    "case01PaymentVerification",
    "case01EntitlementMismatch",
    "case01SyncFailureRootCause",
    "case01InvestigationFindings",
  ],

  "customer-update": ["case01CustomerProgressUpdate"],

  "internal-note": ["case01JiraEscalation", "case01RemediationRecord"],

  outcome: [
    "case01RestorationVerification",
    "case01CustomerConfirmationAndClosure",
  ],
} as const satisfies Record<CaseStageKey, readonly WorkflowEvidenceKey[]>;

export function resolveWorkflowEvidence(
  keys: readonly WorkflowEvidenceKey[],
): WorkflowEvidence[] {
  return keys.map((key) => workflowEvidence[key]);
}
