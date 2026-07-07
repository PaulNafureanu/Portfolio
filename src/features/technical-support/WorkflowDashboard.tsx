import { useMemo, useState } from "react";
import { ImageModal } from "../../components/ImageModal";
import { DashboardHeader } from "./components/DashboardHeader";
import { CaseList } from "./components/CaseList";
import { ProofPanel } from "./components/ProofPanel";
import { WorkflowStageList } from "./components/WorkflowStageList";
import {
  workflowCases,
  workflowStages,
  type WorkflowEvidence,
  type WorkflowStageKey,
} from "./workflowDashboard";

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

  return (
    <>
      <main className="min-h-[calc(100dvh-3.5rem)] px-5 py-6 md:px-8">
        <div className="mx-auto flex h-full max-w-[1800px] flex-col gap-5">
          <DashboardHeader />

          <div className="grid flex-1 gap-5 lg:grid-cols-[280px_230px_minmax(0,1fr)]">
            <CaseList
              cases={workflowCases}
              activeCaseIndex={activeCaseIndex}
              onSelectCase={setActiveCaseIndex}
            />

            <WorkflowStageList
              stages={workflowStages}
              activeStageKey={activeStageKey}
              onSelectStage={setActiveStageKey}
            />

            <ProofPanel
              activeCase={activeCase}
              activeStage={activeStage}
              onOpenEvidence={setModalItem}
            />
          </div>
        </div>
      </main>

      {modalItem && (
        <ImageModal item={modalItem} onClose={() => setModalItem(null)} />
      )}
    </>
  );
}
