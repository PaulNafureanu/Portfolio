import { Link } from "react-router";
import { WorkSamplePanel } from "../components/WorkSamplePanel";

export function Home() {
  return (
    <main>
      <section className="min-h-[calc(100vh-3.5rem)] px-5 py-14 md:px-8 lg:px-12 xl:px-20">
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              Technical / Application / SaaS Support
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              Paul-Andrei Nafureanu
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">
              I turn unclear user issues into structured support work:
              documented tickets, clear customer updates, useful internal notes,
              and escalation with context.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Background across customer support, regulated banking procedures,
              data/document validation, operations, and technical account
              support.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/technical-support-workflow-examples"
                className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View workflow examples
              </Link>

              <a
                href="/cv.pdf"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Download CV
              </a>
            </div>
          </div>

          <WorkSamplePanel />
        </div>
      </section>
    </main>
  );
}
