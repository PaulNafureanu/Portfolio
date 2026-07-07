import { useMemo, useState } from "react";
import { scenarios } from "../data/scenarios";
import { evidenceItems, type EvidenceItem } from "../data/evidence";
import { ImageModal } from "./ImageModal";

function getEvidenceForScenario(tools: string[]) {
  return evidenceItems.filter((item) =>
    tools.some((tool) => tool.toLowerCase().includes(item.key)),
  );
}

export function ScenarioDashboard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalItem, setModalItem] = useState<EvidenceItem | null>(null);

  const activeScenario = scenarios[activeIndex];

  const scenarioEvidence = useMemo(
    () => getEvidenceForScenario(activeScenario.tools),
    [activeScenario.tools],
  );

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[0.42fr_1fr]">
        <aside className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <div className="border-b border-slate-200 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              Scenario navigator
            </p>
          </div>

          <div className="max-h-[720px] overflow-auto p-2">
            {scenarios.map((scenario, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={scenario.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "mb-2 w-full cursor-pointer rounded-xl border p-4 text-left transition last:mb-0",
                    isActive
                      ? "border-slate-950 bg-slate-950 text-white"
                      : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                  ].join(" ")}
                >
                  <p
                    className={[
                      "text-xs font-semibold uppercase tracking-[0.16em]",
                      isActive ? "text-blue-300" : "text-blue-600",
                    ].join(" ")}
                  >
                    Scenario {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-5">
                    {scenario.title}
                  </p>

                  <p
                    className={[
                      "mt-2 text-xs leading-5",
                      isActive ? "text-slate-300" : "text-slate-500",
                    ].join(" ")}
                  >
                    {scenario.type}
                  </p>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Selected case
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
              {activeScenario.title}
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              {activeScenario.signal}
            </p>
          </div>

          <div className="grid gap-3 border-b border-slate-200 bg-slate-50 p-6 text-sm md:grid-cols-4">
            <Meta label="Type" value={activeScenario.type} />
            <Meta label="Priority" value={activeScenario.priority} />
            <Meta label="Status path" value={activeScenario.statusPath} />
            <Meta label="Tools" value={activeScenario.tools.join(", ")} />
          </div>

          <div className="p-6">
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <CaseBlock title="Customer report">
                “{activeScenario.customerMessage}”
              </CaseBlock>

              <CaseBlock title="Priority reasoning">
                {activeScenario.priorityReasoning}
              </CaseBlock>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <CaseBlock title="Information I would collect">
                <ul className="space-y-2">
                  {activeScenario.informationNeeded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CaseBlock>

              <CaseBlock title="Example workflow">
                <ol className="list-decimal space-y-2 pl-5">
                  {activeScenario.investigationSteps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </CaseBlock>
            </div>

            {scenarioEvidence.length > 0 && (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    Related evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Screenshots from the lab connected to the tools used in this
                    case.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {scenarioEvidence.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setModalItem(item)}
                      className="cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition hover:border-slate-300 hover:shadow-sm"
                    >
                      <div className="h-28 overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>

                      <div className="p-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-950">
                          {item.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <CaseBlock title="Customer reply">
                {activeScenario.customerReply}
              </CaseBlock>

              <CaseBlock title="Internal note">
                {activeScenario.internalNote}
              </CaseBlock>

              <CaseBlock title="Escalation / resolution">
                {activeScenario.outcome}
              </CaseBlock>
            </div>
          </div>
        </section>
      </div>

      {modalItem && (
        <ImageModal item={modalItem} onClose={() => setModalItem(null)} />
      )}
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 font-medium leading-6 text-slate-900">{value}</p>
    </div>
  );
}

function CaseBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-950">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-600">{children}</div>
    </section>
  );
}
