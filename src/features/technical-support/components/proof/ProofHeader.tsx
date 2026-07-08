import type { WorkflowCase } from "../../types/case.types";

type ProofHeaderProps = {
  activeCase: WorkflowCase;
  activeCaseIndex: number;
  activeStageIndex: number;
  onGoPrevious: () => void;
  onGoNext: () => void;
  canGoPrevious: boolean;
  canGoNext: boolean;
};

export default function ProofHeader({
  activeCase,
  activeCaseIndex,
  activeStageIndex,
  onGoPrevious,
  onGoNext,
  canGoPrevious,
  canGoNext,
}: ProofHeaderProps) {
  const previousButtonClassName =
    "inline-flex h-8 min-w-14 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none";

  const nextButtonClassName =
    "inline-flex h-8 min-w-14 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 px-3 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-white disabled:text-slate-400 disabled:shadow-none";

  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {activeCase.issueClass}
          </p>

          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
            {activeCase.title}
          </h2>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-2 sm:flex-row sm:items-center lg:flex-col lg:items-end">
          <p className="w-fit rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700">
            Case {String(activeCaseIndex + 1).padStart(2, "0")} · Stage{" "}
            {String(activeStageIndex + 1).padStart(2, "0")}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onGoPrevious}
              disabled={!canGoPrevious}
              className={previousButtonClassName}
              aria-label="Go to previous workflow step"
            >
              Prev
            </button>

            <button
              type="button"
              onClick={onGoNext}
              disabled={!canGoNext}
              className={nextButtonClassName}
              aria-label="Go to next workflow step"
            >
              Next
            </button>
          </div>
        </div>
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
