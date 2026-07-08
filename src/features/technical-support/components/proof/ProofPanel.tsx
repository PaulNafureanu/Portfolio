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
const { jiraBoard, confluenceGuide, postmanCheck } = workflowEvidence;

export function ProofPanel({
  activeCase,
  activeStage,
  activeCaseIndex,
  activeStageIndex,
  onOpenEvidence,
}: ProofPanelProps) {
  const stageEvidence = [jiraBoard, confluenceGuide, postmanCheck];

  return (
    <PanelShell
      eyebrow={panelCopy.eyebrow}
      title={panelCopy.title}
      description={panelCopy.description}
    >
      <div className="h-full overflow-auto p-4">
        <ProofHeader
          activeCase={activeCase}
          activeCaseIndex={activeCaseIndex}
          activeStageIndex={activeStageIndex}
        />

        <section className="mt-4">
          <div className="grid gap-4 xl:grid-cols-2">
            {stageEvidence.map((evidence) => (
              <EvidenceCard
                key={evidence.key}
                evidence={evidence}
                onOpenEvidence={onOpenEvidence}
              />
            ))}
          </div>
        </section>
      </div>
    </PanelShell>
  );
}
