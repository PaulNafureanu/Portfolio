import { dashboardContent } from "../../data/dashboard.data";
import { workflowEvidence } from "../../data/evidence.data";
import type { WorkflowCase } from "../../types/case.types";
import type { OnOpenEvidenceFn } from "../../types/evidence.types";
import type { WorkflowStage } from "../../types/stage.types";
import { PanelShell } from "../shared/PanelShell";
import EvidenceCard from "./EvidenceCard";
import ProofHeader from "./ProofHeader";

type ProofPanelProps = {
  activeCase: WorkflowCase;
  activeStage: WorkflowStage;
  activeCaseIndex: number;
  activeStageIndex: number;
  onOpenEvidence: OnOpenEvidenceFn;
};

const { proof: panelCopy } = dashboardContent.panels;
const { jiraBoard, confluenceGuide, postmanCheck, freshdeskCustomerReport } =
  workflowEvidence;

export function ProofPanel({
  activeCase,
  activeStage,
  activeCaseIndex,
  activeStageIndex,
  onOpenEvidence,
}: ProofPanelProps) {
  const stageEvidence = [jiraBoard, confluenceGuide, postmanCheck];

  return (
    <PanelShell hideHeader eyebrow={panelCopy.eyebrow} title={panelCopy.title}>
      <div className="h-full overflow-auto p-4">
        <ProofHeader
          activeCase={activeCase}
          activeCaseIndex={activeCaseIndex}
          activeStageIndex={activeStageIndex}
        />

        <section className="mt-4 rounded-2xl  border-slate-200 bg-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            Customer message
          </p>

          <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-500">
              Demo Customer
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              Hi, I paid my invoice yesterday, but my account still says unpaid
              and I can’t access the premium features. This is really
              frustrating because I need the account active today for work. Can
              you fix this ASAP?
            </p>
          </div>
        </section>
      </div>
    </PanelShell>
  );
}
