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
    <button
      type="button"
      onClick={() => onOpenEvidence(evidence)}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition hover:border-slate-300 hover:shadow-sm"
    >
      <div className="border-b border-slate-200 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
          {evidence.label}
        </p>

        <h3 className="mt-1 text-sm font-semibold text-slate-950">
          {evidence.title}
        </h3>

        {evidence.description ? (
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
            {evidence.description}
          </p>
        ) : null}
      </div>

      <div className="h-56 overflow-hidden bg-slate-100">
        <img
          src={evidence.image}
          alt={evidence.alt}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </button>
  );
}
