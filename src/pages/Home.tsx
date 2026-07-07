import { Link } from "react-router";
import { Badge } from "../components/Badge";

export function Home() {
  return (
    <main>
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge>Technical Support</Badge>
            <Badge>Application Support</Badge>
            <Badge>SaaS Support</Badge>
            <Badge>Support Operations</Badge>
          </div>

          <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
            Paul Nafureanu
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Technical / Application Support candidate with customer service
            experience, technical literacy, and hands-on practice in ticket
            triage, documentation, escalation workflows, and API checks.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/technical-support-workflow-examples"
              className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              View workflow examples
            </Link>

            <a
              href="mailto:paul.nafureanu@gmail.com"
              className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
