import { useMemo, useState } from "react";
import { ImageModal } from "../../components/ImageModal";
import { CaseList } from "./components/CaseList";
import { DashboardHeader } from "./components/DashboardHeader";
import { MobileWorkflowControls } from "./components/MobileWorkflowControls";
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

  const canGoPrevious = activeCaseIndex > 0 || activeStageIndex > 0;

  const canGoNext =
    activeCaseIndex < workflowCases.length - 1 ||
    activeStageIndex < workflowStages.length - 1;

  function handleGoPrevious() {
    if (activeStageIndex > 0) {
      setActiveStageKey(workflowStages[activeStageIndex - 1].key);
      return;
    }

    if (activeCaseIndex > 0) {
      setActiveCaseIndex(activeCaseIndex - 1);
      setActiveStageKey(workflowStages[workflowStages.length - 1].key);
    }
  }

  function handleGoNext() {
    if (activeStageIndex < workflowStages.length - 1) {
      setActiveStageKey(workflowStages[activeStageIndex + 1].key);
      return;
    }

    if (activeCaseIndex < workflowCases.length - 1) {
      setActiveCaseIndex(activeCaseIndex + 1);
      setActiveStageKey(workflowStages[0].key);
    }
  }

  return (
    <>
      <section className="min-h-[calc(100dvh-3.5rem)] overflow-y-auto px-4 py-4 md:px-6 xl:flex xl:h-full xl:min-h-0 xl:flex-col xl:overflow-hidden xl:px-8 xl:pt-5 xl:pb-10">
        <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-4 xl:min-h-0 xl:flex-1 xl:gap-5">
          <DashboardHeader />

          <div className="flex flex-col gap-3 xl:hidden">
            <MobileWorkflowControls
              cases={workflowCases}
              stages={workflowStages}
              activeCaseIndex={activeCaseIndex}
              activeStageKey={activeStageKey}
              onSelectCase={setActiveCaseIndex}
              onSelectStage={setActiveStageKey}
            />

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <ProofPanel
                activeCase={activeCase}
                activeStage={activeStage}
                activeCaseIndex={activeCaseIndex}
                activeStageIndex={activeStageIndex}
                onOpenEvidence={setModalItem}
                onGoPrevious={handleGoPrevious}
                onGoNext={handleGoNext}
                canGoPrevious={canGoPrevious}
                canGoNext={canGoNext}
              />
            </div>
          </div>

          <div className="hidden min-h-0 flex-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm xl:flex">
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
              onGoPrevious={handleGoPrevious}
              onGoNext={handleGoNext}
              canGoPrevious={canGoPrevious}
              canGoNext={canGoNext}
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
