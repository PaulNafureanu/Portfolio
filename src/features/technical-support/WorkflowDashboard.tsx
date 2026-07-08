import { useMemo, useState } from "react";
import { ImageModal } from "../../components/ImageModal";
import { CaseList } from "./components/CaseList";
import { DashboardHeader } from "./components/DashboardHeader";
import { StageList } from "./components/StageList";
import { ProofPanel } from "./components/proof/ProofPanel";
import { ExpandableNavPanel } from "./components/shared/ExpandableNavPanel";
import { dashboardContent } from "./data/dashboard.data";
import { workflowCases } from "./data/cases.data";
import { workflowStages } from "./data/stage.data";
import type { WorkflowEvidence } from "./types/evidence.types";
import type { WorkflowStageKey } from "./types/stage.types";

const { cases: casesCopy, workflow: workflowCopy } = dashboardContent.panels;

export function WorkflowDashboard() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [activeStageKey, setActiveStageKey] =
    useState<WorkflowStageKey>("customer-report");
  const [modalItem, setModalItem] = useState<WorkflowEvidence | null>(null);

  const activeCase = workflowCases[activeCaseIndex];

  const activeStage = useMemo(() => {
    return (
      workflowStages.find((stage) => stage.key === activeStageKey) ??
      workflowStages[0]
    );
  }, [activeStageKey]);

  const activeStageIndex = useMemo(() => {
    const index = workflowStages.findIndex(
      (stage) => stage.key === activeStageKey,
    );

    return index === -1 ? 0 : index;
  }, [activeStageKey]);

  return (
    <>
      <section className="flex h-full flex-col overflow-hidden px-5 pt-5 pb-10 md:px-8">
        <div className="mx-auto flex min-h-0 w-full max-w-[1800px] flex-1 flex-col gap-5">
          <DashboardHeader />

          <div className="flex min-h-0 flex-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <ExpandableNavPanel
              label="Cases"
              eyebrow={casesCopy.eyebrow}
              title={casesCopy.title}
              activeNumber={activeCaseIndex + 1}
            >
              <CaseList
                cases={workflowCases}
                activeCaseIndex={activeCaseIndex}
                onSelectCase={setActiveCaseIndex}
              />
            </ExpandableNavPanel>

            <ExpandableNavPanel
              label="Workflow"
              eyebrow={workflowCopy.eyebrow}
              title={workflowCopy.title}
              activeNumber={activeStageIndex + 1}
            >
              <StageList
                stages={workflowStages}
                activeStageKey={activeStageKey}
                onSelectStage={setActiveStageKey}
              />
            </ExpandableNavPanel>

            <ProofPanel
              activeCase={activeCase}
              activeStage={activeStage}
              activeCaseIndex={activeCaseIndex}
              activeStageIndex={activeStageIndex}
              onOpenEvidence={setModalItem}
            />
          </div>
        </div>
      </section>

      {modalItem ? (
        <ImageModal item={modalItem} onClose={() => setModalItem(null)} />
      ) : null}
    </>
  );
}
