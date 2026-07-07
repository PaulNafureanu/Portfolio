import { Link, Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-slate-50 text-slate-950">
      <header className="shrink-0 border-b border-slate-200 bg-white">
        <nav className="mx-auto flex h-14 max-w-[1800px] items-center justify-between px-6 md:px-8">
          <Link to="/" className="text-sm font-semibold text-slate-950">
            Paul-Andrei Nafureanu
          </Link>

          <div className="flex items-center gap-5 text-sm">
            <Link to="/" className="text-slate-600 hover:text-slate-950">
              Home
            </Link>

            <Link
              to="/technical-support-workflow-examples"
              className="text-slate-600 hover:text-slate-950"
            >
              Workflows
            </Link>

            <a
              href="mailto:paul.nafureanu@gmail.com"
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 font-medium text-slate-800 hover:bg-slate-50"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="min-h-0 flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
