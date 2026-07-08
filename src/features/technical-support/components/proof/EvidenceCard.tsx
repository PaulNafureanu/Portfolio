import type {
  OnOpenEvidenceFn,
  WorkflowEvidence,
} from "../../types/evidence.types";

type EvidenceCardProps = {
  evidence: WorkflowEvidence;
  onOpenEvidence: OnOpenEvidenceFn;
  className?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
};

export default function EvidenceCard({
  evidence,
  onOpenEvidence,
  className = "",
  imageContainerClassName = "h-56",
  imageClassName = "object-cover object-top",
}: EvidenceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpenEvidence(evidence)}
      className={`w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition hover:border-slate-300 hover:shadow-sm ${className}`}
    >
      <div className="border-b border-slate-200 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
          {evidence.label}
        </p>

        {evidence.title ? (
          <h3 className="mt-1 text-sm font-semibold text-slate-950">
            {evidence.title}
          </h3>
        ) : null}

        {evidence.description ? (
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
            {evidence.description}
          </p>
        ) : null}
      </div>

      <div className={`overflow-hidden bg-white ${imageContainerClassName}`}>
        <img
          src={evidence.image}
          alt={evidence.alt}
          className={`h-full w-full ${imageClassName}`}
        />
      </div>
    </button>
  );
}
