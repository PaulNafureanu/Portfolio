import { Badge } from "../components/Badge";
import { Section } from "../components/Section";
import { WorkflowStrip } from "../components/WorkflowStrip";

const demoScenarios = [
  {
    title: "Payment completed but account still unpaid",
    type: "Billing / Application Support",
    priority: "High",
    tools: "Jira, Postman",
    path: "To Do → In Progress → Escalated",
  },
  {
    title: "Login page returns 500 error",
    type: "Incident",
    priority: "High if reproduced",
    tools: "Jira, Confluence",
    path: "To Do → In Progress → Escalated",
  },
  {
    title: "Password reset email not received",
    type: "Account Access",
    priority: "Medium",
    tools: "Jira, Confluence",
    path: "To Do → Waiting for Customer → Resolved",
  },
];

export function TechnicalSupportWorkflowExamples() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Support Operations Lab
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Technical Support Workflow Examples
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            A compact work sample showing how I structure common Technical,
            Application, and SaaS Support issues from first report to resolution
            or escalation.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            <Badge>Jira-style tickets</Badge>
            <Badge>Confluence-style documentation</Badge>
            <Badge>Postman API checks</Badge>
            <Badge>Customer communication</Badge>
            <Badge>Escalation handoff</Badge>
          </div>

          <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-950">
            These examples are simulated for portfolio demonstration and
            training. They do not contain client data or production incidents.
          </div>
        </div>
      </section>

      <Section
        eyebrow="Workflow"
        title="How each issue is handled"
        description="The goal is to make each issue understandable, actionable, and easy to hand off."
      >
        <WorkflowStrip />
      </Section>

      <Section
        eyebrow="Examples"
        title="Common support workflows"
        description="Initial version with three examples. The page will expand to ten common scenarios plus edge cases."
      >
        <div className="grid gap-4">
          {demoScenarios.map((scenario) => (
            <article
              key={scenario.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-slate-950">
                    {scenario.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{scenario.type}</p>
                </div>

                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                  {scenario.priority}
                </span>
              </div>

              <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status path
                  </p>
                  <p className="mt-2 font-medium text-slate-900">
                    {scenario.path}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Tools
                  </p>
                  <p className="mt-2 font-medium text-slate-900">
                    {scenario.tools}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
