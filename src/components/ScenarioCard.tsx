import type { Scenario } from "../data/scenarios";

type ScenarioCardProps = {
  scenario: Scenario;
  index: number;
};

export function ScenarioCard({ scenario, index }: ScenarioCardProps) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 p-6 transition hover:bg-slate-50">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Scenario {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">
            {scenario.title}
          </h3>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {scenario.signal}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
          Open
        </span>
      </summary>

      <div className="border-t border-slate-200 p-6">
        <div className="grid gap-3 text-sm md:grid-cols-4">
          <Meta label="Type" value={scenario.type} />
          <Meta label="Priority" value={scenario.priority} />
          <Meta label="Status path" value={scenario.statusPath} />
          <Meta label="Tools" value={scenario.tools.join(", ")} />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <CaseBlock title="Customer message">
            <p className="text-base leading-7 text-slate-700">
              “{scenario.customerMessage}”
            </p>
          </CaseBlock>

          <CaseBlock title="Priority reasoning">
            <p>{scenario.priorityReasoning}</p>
          </CaseBlock>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <CaseBlock title="Information needed">
            <ul className="space-y-2">
              {scenario.informationNeeded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CaseBlock>

          <CaseBlock title="Investigation steps">
            <ol className="list-decimal space-y-2 pl-5">
              {scenario.investigationSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </CaseBlock>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <CaseBlock title="Customer reply">
            <p>{scenario.customerReply}</p>
          </CaseBlock>

          <CaseBlock title="Internal note">
            <p>{scenario.internalNote}</p>
          </CaseBlock>

          <CaseBlock title="Escalation / resolution">
            <p>{scenario.outcome}</p>
          </CaseBlock>
        </div>
      </div>
    </details>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
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
      <h4 className="text-sm font-semibold text-slate-950">{title}</h4>
      <div className="mt-3 text-sm leading-6 text-slate-600">{children}</div>
    </section>
  );
}
