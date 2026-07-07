import type { WorkflowCase } from "../workflowDashboard";
import { PanelShell } from "./PanelShell";

type CaseListProps = {
  cases: WorkflowCase[];
  activeCaseIndex: number;
  onSelectCase: (index: number) => void;
};

export function CaseList({
  cases,
  activeCaseIndex,
  onSelectCase,
}: CaseListProps) {
  return (
    <PanelShell
      eyebrow="Cases"
      title="Support cases"
      description="Choose one scenario."
    >
      <div className="max-h-[calc(100dvh-16rem)] overflow-auto p-3">
        {cases.map((item, index) => {
          const isActive = index === activeCaseIndex;

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => onSelectCase(index)}
              className={[
                "mb-3 w-full rounded-xl border p-4 text-left transition last:mb-0",
                isActive
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-white text-slate-950 hover:bg-slate-50",
              ].join(" ")}
            >
              <p
                className={[
                  "text-xs font-semibold uppercase tracking-[0.16em]",
                  isActive ? "text-blue-300" : "text-blue-600",
                ].join(" ")}
              >
                Case {String(index + 1).padStart(2, "0")}
              </p>

              <p
                className={[
                  "mt-3 text-xs font-semibold uppercase tracking-[0.14em]",
                  isActive ? "text-slate-300" : "text-slate-500",
                ].join(" ")}
              >
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
