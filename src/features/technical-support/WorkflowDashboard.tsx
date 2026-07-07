import { useMemo, useState } from "react";
import { ImageModal } from "../../components/ImageModal";
import { CaseList } from "./components/CaseList";
import { DashboardHeader } from "./components/DashboardHeader";
import { ProofPanel } from "./components/ProofPanel";
import { WorkflowStageList } from "./components/WorkflowStageList";
import { technicalSupportCases } from "./data/technicalSupportCases.data";
import { technicalSupportWorkflowStages } from "./data/technicalSupportWorkflowStages.data";
import type { WorkflowEvidence, WorkflowStageKey } from "./types";

export function WorkflowDashboard() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [activeStageKey, setActiveStageKey] =
    useState<WorkflowStageKey>("customer-report");
  const [modalItem, setModalItem] = useState<WorkflowEvidence | null>(null);

  const activeCase = technicalSupportCases[activeCaseIndex];

  const activeStage = useMemo(() => {
    return (
      technicalSupportWorkflowStages.find(
        (stage) => stage.key === activeStageKey,
      ) ?? technicalSupportWorkflowStages[0]
    );
  }, [activeStageKey]);

  return (
    <>
      <section className="flex h-full flex-col overflow-hidden px-5 pt-5 pb-10 md:px-8">
        <div className="mx-auto flex min-h-0 w-full max-w-[1800px] flex-1 flex-col gap-5">
          <DashboardHeader />

          <div className="grid min-h-0 flex-1 gap-5 lg:grid-cols-[320px_320px_minmax(0,1fr)]">
            <CaseList
              cases={technicalSupportCases}
              activeCaseIndex={activeCaseIndex}
              onSelectCase={setActiveCaseIndex}
            />

            <WorkflowStageList
              stages={technicalSupportWorkflowStages}
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
      </section>

      {modalItem ? (
        <ImageModal item={modalItem} onClose={() => setModalItem(null)} />
      ) : null}
    </>
  );
}
