import { technicalSupportDashboardContent } from "../data/technicalSupportDashboard.content";
import type { WorkflowCase, WorkflowEvidence, WorkflowStage } from "../types";
import { PanelShell } from "./PanelShell";

type ProofPanelProps = {
  activeCase: WorkflowCase;
  activeStage: WorkflowStage;
  onOpenEvidence: (item: WorkflowEvidence) => void;
};

const { proof: panelCopy } = technicalSupportDashboardContent.panels;
const proofCopy = technicalSupportDashboardContent.proof;

export function ProofPanel({
  activeCase,
  activeStage,
  onOpenEvidence,
}: ProofPanelProps) {
  const activeDetail = activeCase.stageDetails[activeStage.key];

  const stageEvidence =
    activeCase.stageEvidence?.[activeStage.key] ?? activeCase.evidence;

  const stageWalkthrough = activeCase.stageWalkthroughs?.[activeStage.key];

  return (
    <PanelShell
      eyebrow={panelCopy.eyebrow}
      title={panelCopy.title}
      description={panelCopy.description}
    >
      <div className="max-h-[calc(100dvh-16rem)] overflow-auto p-4">
        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {activeCase.issueClass}
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            {activeCase.title}
          </h2>

          <div className="mt-4 flex flex-wrap gap-2">
            <Chip>{activeCase.type}</Chip>
            <Chip>{activeCase.priority}</Chip>
            <Chip>{activeCase.tools.join(", ")}</Chip>
          </div>
        </section>

        <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {proofCopy.selectedStageLabel}
          </p>

          <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
            {activeStage.label}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {activeStage.description}
          </p>

          <details className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-950">
              {proofCopy.handlingNoteLabel}
            </summary>

            <div className="mt-4 border-t border-slate-200 pt-4">
              <h4 className="text-base font-semibold text-slate-950">
                {activeDetail.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                {activeDetail.content}
              </p>
            </div>
          </details>
        </section>

        {stageWalkthrough ? (
          <section className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              {proofCopy.walkthroughLabel}
            </p>

            <h3 className="mt-3 text-lg font-semibold text-slate-950">
              {stageWalkthrough.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {stageWalkthrough.description}
            </p>

            <video
              className="mt-4 aspect-video w-full rounded-xl border border-slate-200 bg-slate-950"
              controls
              src={stageWalkthrough.url}
            />
          </section>
        ) : null}

        <section className="mt-4">
          <div className="mb-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              {proofCopy.proofForStageLabel}
            </p>

            <p className="mt-1 text-xs text-slate-500">{proofCopy.proofHint}</p>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {stageEvidence.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => onOpenEvidence(item)}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition hover:border-slate-300 hover:shadow-sm"
              >
                <div className="flex items-center justify-between border-b border-slate-200 p-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                      {item.label}
                    </p>

                    <h3 className="mt-1 text-sm font-semibold text-slate-950">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="h-56 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </PanelShell>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}
