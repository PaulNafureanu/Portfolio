import type {
  OnOpenEvidenceFn,
  WorkflowEvidence,
} from "../../types/evidence.types";

export default function EvidenceCard({
  evidence,
  onOpenEvidence,
}: {
  evidence: WorkflowEvidence;
  onOpenEvidence: OnOpenEvidenceFn;
}) {
  return (
    <section className="mt-4">
      <div className="grid gap-4 xl:grid-cols-2">
        <button
          key={evidence.key}
          type="button"
          onClick={() => onOpenEvidence(evidence)}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition hover:border-slate-300 hover:shadow-sm"
        >
          <div className="flex items-center justify-between border-b border-slate-200 p-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                {evidence.label}
              </p>

              <h3 className="mt-1 text-sm font-semibold text-slate-950">
                {evidence.title}
              </h3>
            </div>
          </div>

          <div className="h-56 overflow-hidden bg-slate-100">
            <img
              src={evidence.image}
              alt={evidence.alt}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
