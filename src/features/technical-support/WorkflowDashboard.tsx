import { useMemo, useState } from "react";
import { ImageModal } from "../../components/ImageModal";
import { CaseList } from "./components/CaseList";
import { DashboardHeader } from "./components/DashboardHeader";
import { WorkflowStageList } from "./components/WorkflowStageList";
import { ProofPanel } from "./components/proof/ProofPanel";
import { workflowCases } from "./data/cases.data";
import { workflowStages } from "./data/stage.data";
import type { WorkflowEvidence } from "./types/evidence.types";
import type { WorkflowStageKey } from "./types/stage.types";

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

          <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[320px_320px_minmax(0,1fr)]">
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
