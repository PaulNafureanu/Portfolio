import { technicalSupportDashboardContent } from "../data/technicalSupportDashboard.content";
import type { WorkflowCase } from "../types";
import { PanelShell } from "./PanelShell";

type CaseListProps = {
  cases: WorkflowCase[];
  activeCaseIndex: number;
  onSelectCase: (index: number) => void;
};

const { cases: panelCopy } = technicalSupportDashboardContent.panels;

export function CaseList({
  cases,
  activeCaseIndex,
  onSelectCase,
}: CaseListProps) {
  return (
    <PanelShell
      eyebrow={panelCopy.eyebrow}
      title={panelCopy.title}
      description={panelCopy.description}
    >
      <div className="h-full overflow-auto p-3">
        {cases.map((item, index) => {
          const isActive = index === activeCaseIndex;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectCase(index)}
              className={[
                "mb-3 w-full rounded-xl border p-4 text-left transition last:mb-0",
                isActive
                  ? "border-blue-300 bg-blue-50 text-slate-950"
                  : "border-slate-200 bg-white text-slate-950 hover:bg-slate-50",
              ].join(" ")}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                Case {String(index + 1).padStart(2, "0")}
              </p>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                {item.issueClass}
              </p>

              <h3 className="mt-2 text-sm font-semibold leading-5">
                {item.title}
              </h3>
            </button>
          );
        })}
      </div>
    </PanelShell>
  );
}
