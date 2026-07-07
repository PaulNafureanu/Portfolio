import { useMemo, useState } from "react";
import {
  dashboardEdgeCases,
  workflowCases,
  type WorkflowEvidence,
} from "./workflowDashboard";
import { ImageModal } from "../../components/ImageModal";

export function WorkflowDashboard() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [activeStageKey, setActiveStageKey] = useState(
    workflowCases[0].stages[0].key,
  );
  const [modalItem, setModalItem] = useState<WorkflowEvidence | null>(null);

  const activeCase = workflowCases[activeCaseIndex];

  const activeStage = useMemo(() => {
    return (
      activeCase.stages.find((stage) => stage.key === activeStageKey) ??
      activeCase.stages[0]
    );
  }, [activeCase, activeStageKey]);

  function selectCase(index: number) {
    setActiveCaseIndex(index);
    setActiveStageKey(workflowCases[index].stages[0].key);
  }

  return (
    <>
      <section className="min-h-[calc(100dvh-3.5rem)] px-5 py-6 md:px-8">
        <div className="mx-auto flex h-full max-w-[1800px] flex-col gap-5">
          <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                  Support Operations Lab
                </p>

                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                  Technical Support Workflow Examples
                </h1>

                <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600 md:text-base">
                  A proof-focused support workflow dashboard using simulated
                  Jira, Confluence, and Postman artifacts. Select a case, review
                  the handling stage, then open proof screenshots.
                </p>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-xs leading-5 text-blue-950 lg:max-w-sm">
                Simulated training cases. No client data or production
                incidents.
              </div>
            </div>
          </header>

          <div className="grid flex-1 gap-5 lg:grid-cols-[0.78fr_1fr_1.05fr]">
            <aside className="min-h-0 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <PanelHeader
                eyebrow="Column 1"
                title="Case"
                description="Choose the support scenario."
              />

              <div className="max-h-[calc(100dvh-17rem)] overflow-auto p-3">
                {workflowCases.map((item, index) => {
                  const isActive = index === activeCaseIndex;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => selectCase(index)}
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

                      <h2 className="mt-2 text-base font-semibold leading-6">
                        {item.title}
                      </h2>

                      <p
                        className={[
                          "mt-2 text-xs leading-5",
                          isActive ? "text-slate-300" : "text-slate-500",
                        ].join(" ")}
                      >
                        {item.type} · {item.priority}
                      </p>

                      <p
                        className={[
                          "mt-3 text-xs leading-5",
                          isActive ? "text-slate-300" : "text-slate-600",
                        ].join(" ")}
                      >
                        {item.tools.join(" + ")}
                      </p>
                    </button>
                  );
                })}

                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Edge cases practiced
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {dashboardEdgeCases.slice(0, 6).map((edgeCase) => (
                      <span
                        key={edgeCase}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600"
                      >
                        {edgeCase}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <section className="min-h-0 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <PanelHeader
                eyebrow="Column 2"
                title="Workflow stage"
                description="Select a stage to see what gets done."
              />

              <div className="grid gap-3 border-b border-slate-200 p-3 sm:grid-cols-2">
                {activeCase.stages.map((stage) => {
                  const isActive = stage.key === activeStage.key;

                  return (
                    <button
                      key={stage.key}
                      type="button"
                      onClick={() => setActiveStageKey(stage.key)}
                      className={[
                        "rounded-xl border p-3 text-left text-sm transition",
                        isActive
                          ? "border-blue-300 bg-blue-50 text-slate-950"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      <span className="font-semibold">{stage.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="max-h-[calc(100dvh-23rem)] overflow-auto p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {activeCase.title}
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                  {activeStage.title}
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {activeStage.content}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Meta label="Type" value={activeCase.type} />
                  <Meta label="Priority" value={activeCase.priority} />
                  <Meta label="Tools" value={activeCase.tools.join(", ")} />
                  <Meta label="Scenario" value={activeCase.summary} />
                </div>
              </div>
            </section>

            <section className="min-h-0 rounded-2xl border border-slate-200 bg-white shadow-sm">
              <PanelHeader
                eyebrow="Column 3"
                title="Proof"
                description="Open screenshots connected to the selected case."
              />

              <div className="max-h-[calc(100dvh-17rem)] overflow-auto p-3">
                <div className="mb-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Walkthrough video
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-slate-950">
                    30–60 second overview
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Add a short demo later showing the Jira → Confluence →
                    Postman workflow. For now, screenshots are the primary
                    proof.
                  </p>
                </div>

                <div className="grid gap-3">
                  {activeCase.evidence.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setModalItem(item)}
                      className="overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition hover:border-slate-300 hover:shadow-sm"
                    >
                      <div className="p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                          {item.label}
                        </p>

                        <h3 className="mt-2 text-base font-semibold text-slate-950">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>

                      <div className="h-44 overflow-hidden border-t border-slate-200 bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {modalItem && (
        <ImageModal item={modalItem} onClose={() => setModalItem(null)} />
      )}
    </>
  );
}

function PanelHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-slate-200 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium leading-6 text-slate-900">
        {value}
      </p>
    </div>
  );
}
