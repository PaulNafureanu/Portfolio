import type { WorkflowCase } from "../../types/case.types";
import Chip from "./Chip";

export default function ProofHeader({
  activeCase,
}: {
  activeCase: WorkflowCase;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
        {activeCase.issueClass}
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {activeCase.title}
      </h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {activeCase.tools.map((tool) => (
          <Chip>{tool}</Chip>
        ))}
      </div>
    </section>
  );
}
