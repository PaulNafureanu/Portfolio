import type { WorkflowCase } from "../../types/case.types";

export default function ProofHeader({
  activeCase,
  activeCaseIndex,
  activeStageIndex,
}: {
  activeCase: WorkflowCase;
  activeCaseIndex: number;
  activeStageIndex: number;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {activeCase.issueClass}
          </p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            {activeCase.title}
          </h2>
        </div>

        <p className="w-fit shrink-0 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700">
          Case {String(activeCaseIndex + 1).padStart(2, "0")} · Stage{" "}
          {String(activeStageIndex + 1).padStart(2, "0")}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {activeCase.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
