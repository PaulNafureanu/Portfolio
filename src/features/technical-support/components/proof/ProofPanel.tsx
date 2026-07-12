import { workflowEvidence } from "../../data/evidence.data";
import type { WorkflowCase } from "../../types/case.types";
import type { OnOpenEvidenceFn } from "../../types/evidence.types";
import type { WorkflowStage } from "../../types/stage.types";
import EvidenceCard from "./EvidenceCard";
import ProofHeader from "./ProofHeader";

type ProofPanelProps = {
  activeCase: WorkflowCase;
  activeStage: WorkflowStage;
  activeCaseIndex: number;
  activeStageIndex: number;
  onOpenEvidence: OnOpenEvidenceFn;
  onGoPrevious: () => void;
  onGoNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
};

const { freshdeskCustomerReport } = workflowEvidence;

function getStageRecord(activeStage: WorkflowStage) {
  switch (activeStage.key) {
    case "customer-report":
      return {
        label: "Customer message",
        actor: "Demo Customer",
        body: "Hi, I paid my invoice yesterday, but my account still says unpaid and I can’t access the premium features. This is really frustrating because I need the account active today for work. Can you fix this ASAP?",
      };

    case "freshdesk-triage":
      return {
        label: "Support reply",
        actor: "Support Agent",
        body: "Hi Maria,\n\nThanks for contacting us. I’ll check this for you.\n\nTo compare the payment status with the account access state, could you please send the account email, invoice number or payment reference, payment method, approximate payment time, and whether you already tried refreshing the app or signing out and back in?\n\nOnce I have those details, I’ll verify the payment and account status.\n\nPaul",
      };

    case "information-needed":
      return {
        label: "Customer details received",
        actor: "Demo Customer",
        body: "Hi Paul,\n\nThanks for checking. I already refreshed the app and also signed out and back in, but it still shows unpaid and I still don’t have premium access.\n\nAccount email: demo.customer@example.com\nInvoice: INV-2048\nPayment method: card\nPayment date: yesterday around 18:30\n\nMaria",
      };

    case "technical-investigation":
      return {
        label: "Investigation note",
        actor: "Internal Note",
        body: "Customer provided account email, invoice ID, payment method, payment time, and confirmed refresh/sign-out did not fix the issue.\n\nNext checks:\n- Verify invoice status\n- Verify payment capture\n- Check account billing/access state\n- Check entitlement sync logs\n- Determine whether this is payment failure, entitlement delay, or failed backend sync",
      };

    case "jira-escalation":
      return {
        label: "Escalation note",
        actor: "Jira",
        body: "Created engineering follow-up to investigate why the billing-to-entitlement sync failed after a paid invoice and did not auto-retry.",
      };

    case "customer-update":
      return {
        label: "Customer update",
        actor: "Support Agent",
        body: "Hi Maria,\n\nI confirmed that your payment was successful and the invoice is marked as paid.\n\nThe issue was that the payment status had not synced correctly to your account access, so the app was still showing the account as unpaid.\n\nI’ve now re-synced the account, and premium access should be active. Please refresh the app, or sign out and back in, then let me know if the premium features are available on your end.\n\nPaul",
      };

    case "resolution-documentation":
      return {
        label: "Resolution",
        actor: "Demo Customer",
        body: "Hi Paul,\n\nI refreshed the app and premium access is working now. Thank you for fixing it quickly.\n\nMaria",
      };

    default:
      return {
        label: activeStage.label,
        actor: "Internal Note",
        body: "Workflow record for the selected stage.",
      };
  }
}

export function ProofPanel({
  activeCase,
  activeStage,
  activeCaseIndex,
  activeStageIndex,
  onOpenEvidence,
  onGoPrevious,
  onGoNext,
  canGoPrevious,
  canGoNext,
}: ProofPanelProps) {
  const stageRecord = getStageRecord(activeStage);
  const showFreshdeskEvidence = activeStage.key === "customer-report";

  return (
    <main className="min-w-0 flex-1 bg-white xl:overflow-hidden">
      <div className="p-4 xl:h-full xl:overflow-auto xl:p-5">
        <ProofHeader
          activeCase={activeCase}
          activeCaseIndex={activeCaseIndex}
          activeStageIndex={activeStageIndex}
          onGoPrevious={onGoPrevious}
          onGoNext={onGoNext}
          canGoPrevious={canGoPrevious}
          canGoNext={canGoNext}
        />

        <section className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {stageRecord.label}
          </p>

          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">
              {stageRecord.actor}
            </p>

            <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-700">
              {stageRecord.body}
            </p>
          </div>
        </section>

        {showFreshdeskEvidence ? (
          <section className="mt-4 w-full max-w-[440px]">
            <EvidenceCard
              evidence={freshdeskCustomerReport}
              onOpenEvidence={onOpenEvidence}
              imageContainerClassName="h-44 sm:h-52 xl:h-[220px]"
              imageClassName="object-contain object-top"
            />
          </section>
        ) : null}
      </div>
    </main>
  );
}
