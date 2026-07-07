import { Link } from "react-router";
import { Badge } from "../components/Badge";

const focusAreas = [
  "Technical Support",
  "Application Support",
  "SaaS Support",
  "IT Service Desk",
  "Support Operations",
  "Customer Operations",
];

const supportHabits = [
  "Ticket triage",
  "Clear customer updates",
  "Internal notes",
  "Escalation handoff",
  "Documentation",
  "API checks",
];

export function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {focusAreas.slice(0, 4).map((area) => (
              <Badge key={area}>{area}</Badge>
            ))}
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
            Paul-Andrei Nafureanu
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Technical / Application Support candidate with experience across
            customer support, operations, data validation, and software-support
            workflows.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            I help users by turning unclear issues into structured tickets,
            following procedures, documenting cases, communicating clearly, and
            escalating with useful context.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/technical-support-workflow-examples"
              className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              View workflow examples
            </Link>

            <a
              href="/cv.pdf"
              className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Download CV
            </a>

            <a
              href="mailto:paul.nafureanu@gmail.com"
              className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Contact
            </a>
          </div>
        </div>

        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Profile
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
              Support-focused, technical enough to investigate.
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Practical background across customer-facing support, regulated
              banking procedures, data/document validation, and operational
              execution.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {supportHabits.map((habit) => (
              <div
                key={habit}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <span className="text-sm font-medium text-slate-800">
                  {habit}
                </span>
                <span className="h-2 w-2 rounded-full bg-blue-600" />
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Background
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                Customer support, operations, and technical workflow practice.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                My background combines customer-facing support, regulated
                banking procedures, technical account support, data/document
                validation, and internal operational systems.
              </p>

              <p>
                Across these roles, I developed habits around accuracy, clear
                communication, troubleshooting, documentation, escalation, and
                reliable follow-through under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Featured work sample
          </p>

          <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  Technical Support Workflow Examples
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  A compact work sample showing how I handle common support
                  scenarios: ticket triage, priority reasoning, customer
                  replies, internal notes, escalation handoff, Confluence-style
                  documentation, and Postman API checks.
                </p>

                <Link
                  to="/technical-support-workflow-examples"
                  className="mt-6 inline-flex rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Open workflow examples
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-950">
                  Demonstrates
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Jira-style tickets</Badge>
                  <Badge>Confluence docs</Badge>
                  <Badge>Postman checks</Badge>
                  <Badge>Escalation notes</Badge>
                  <Badge>Customer replies</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
