import type { WorkflowCase } from "../../types/case.types";
import Badge from "./Badge";

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
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
          {activeCase.issueClass}
        </p>

        <p className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700">
          Case {String(activeCaseIndex + 1).padStart(2, "0")} · Stage{" "}
          {String(activeStageIndex + 1).padStart(2, "0")}
        </p>
      </div>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {activeCase.title}
      </h2>

      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
        {activeCase.brief}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {activeCase.tools.map((tool) => (
          <Badge key={tool}>{tool}</Badge>
        ))}
      </div>
    </section>
  );
}
