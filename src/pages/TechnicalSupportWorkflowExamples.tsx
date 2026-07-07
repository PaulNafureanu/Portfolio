import { Badge } from "../components/Badge";
import { ScenarioCard } from "../components/ScenarioCard";
import { Section } from "../components/Section";
import { WorkflowStrip } from "../components/WorkflowStrip";
import { edgeCases, scenarios } from "../data/scenarios";

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
            Simulated Technical, Application, and SaaS Support workflows showing
            how common customer issues can be triaged, documented, investigated,
            communicated, and escalated.
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
        description="Ten realistic scenarios used to practice Technical Support, Application Support, SaaS Support, and Support Operations workflows."
      >
        <div className="grid gap-4">
          {scenarios.map((scenario, index) => (
            <ScenarioCard
              key={scenario.title}
              scenario={scenario}
              index={index}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Edge cases"
        title="Additional judgment scenarios"
        description="Less frequent but important cases used to practice security awareness, escalation discipline, and calm handling of unclear or sensitive issues."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {edgeCases.map((edgeCase) => (
            <div
              key={edgeCase}
              className="rounded-xl border border-slate-200 bg-white p-4 text-sm font-medium leading-6 text-slate-700 shadow-sm"
            >
              {edgeCase}
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-slate-200 bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            Recruiter summary
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight">
            This page makes my support workflow visible before an interview.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            It shows how I structure unclear issues, ask for missing
            information, document investigation steps, communicate with
            customers, and decide when to resolve or escalate.
          </p>
        </div>
      </section>
    </main>
  );
}
