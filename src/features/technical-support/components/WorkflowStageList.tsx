import { dashboardContent } from "../data/dashboard.data";
import type { WorkflowStage, WorkflowStageKey } from "../types/stage.types";
import { PanelShell } from "./shared/PanelShell";

type WorkflowStageListProps = {
  stages: WorkflowStage[];
  activeStageKey: WorkflowStageKey;
  onSelectStage: (key: WorkflowStageKey) => void;
};

const { workflow: panelCopy } = dashboardContent.panels;

export function WorkflowStageList({
  stages,
  activeStageKey,
  onSelectStage,
}: WorkflowStageListProps) {
  return (
    <PanelShell
      eyebrow={panelCopy.eyebrow}
      title={panelCopy.title}
      description={panelCopy.description}
    >
      <div className="h-full overflow-auto p-3">
        {stages.map((stage, index) => {
          const isActive = stage.key === activeStageKey;

          return (
            <button
              key={stage.key}
              type="button"
              onClick={() => onSelectStage(stage.key)}
              className={[
                "mb-3 flex w-full items-center gap-3 rounded-xl border p-3 text-left transition last:mb-0",
                isActive
                  ? "border-blue-300 bg-blue-50 text-slate-950"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-500",
                ].join(" ")}
              >
                {index + 1}
              </span>

              <span className="text-sm font-semibold">{stage.label}</span>
            </button>
          );
        })}
      </div>
    </PanelShell>
  );
}
