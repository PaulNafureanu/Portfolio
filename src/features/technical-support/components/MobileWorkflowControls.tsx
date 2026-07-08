import { dashboardContent } from "../data/dashboard.data";
import type { WorkflowCase } from "../types/case.types";
import type { WorkflowStage, WorkflowStageKey } from "../types/stage.types";

type MobileWorkflowControlsProps = {
  cases: WorkflowCase[];
  stages: WorkflowStage[];
  activeCaseIndex: number;
  activeStageKey: WorkflowStageKey;
  onSelectCase: (index: number) => void;
  onSelectStage: (key: WorkflowStageKey) => void;
};

const { cases: casesCopy, workflow: workflowCopy } = dashboardContent.panels;

export function MobileWorkflowControls({
  cases,
  stages,
  activeCaseIndex,
  activeStageKey,
  onSelectCase,
  onSelectStage,
}: MobileWorkflowControlsProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid gap-3 p-3 md:grid-cols-2">
        <label className="block rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {casesCopy.eyebrow}
          </span>

          <select
            value={activeCaseIndex}
            onChange={(event) => onSelectCase(Number(event.target.value))}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          >
            {cases.map((item, index) => (
              <option key={item.id} value={index}>
                {String(index + 1).padStart(2, "0")} · {item.issueClass}
              </option>
            ))}
          </select>
        </label>

        <label className="block rounded-2xl border border-slate-200 bg-slate-50 p-3">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {workflowCopy.eyebrow}
          </span>

          <select
            value={activeStageKey}
            onChange={(event) =>
              onSelectStage(event.target.value as WorkflowStageKey)
            }
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
          >
            {stages.map((stage, index) => (
              <option key={stage.key} value={stage.key}>
                {String(index + 1).padStart(2, "0")} · {stage.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
