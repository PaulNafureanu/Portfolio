import { dashboardContent } from "../../data/dashboard.content";
import { evidence } from "../../data/evidence.data";
import type { WorkflowCase } from "../../types/case.types";
import type { OnOpenEvidenceFn } from "../../types/evidence.types";
import type { WorkflowStage } from "../../types/stage.types";
import { PanelShell } from "../PanelShell";
import EvidenceCard from "./EvidenceCard";
import ProofHeader from "./ProofHeader";

type ProofPanelProps = {
  activeCase: WorkflowCase;
  activeStage: WorkflowStage;
  onOpenEvidence: OnOpenEvidenceFn;
};

const { proof: panelCopy } = dashboardContent.panels;
const { jiraBoard, confluenceGuide, postmanCheck } = evidence;

export function ProofPanel({
  activeCase,
  activeStage,
  onOpenEvidence,
}: ProofPanelProps) {
  return (
    <PanelShell
      eyebrow={panelCopy.eyebrow}
      title={panelCopy.title}
      description={panelCopy.description}
    >
      <div className="h-full overflow-auto p-4">
        <ProofHeader activeCase={activeCase} />
        <EvidenceCard evidence={jiraBoard} onOpenEvidence={onOpenEvidence} />
        <EvidenceCard evidence={postmanCheck} onOpenEvidence={onOpenEvidence} />
        <EvidenceCard
          evidence={confluenceGuide}
          onOpenEvidence={onOpenEvidence}
        />
      </div>
    </PanelShell>
  );
}
