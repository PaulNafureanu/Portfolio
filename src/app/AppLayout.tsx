import { Link, Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="min-h-dvh bg-slate-50 text-slate-950 xl:flex xl:h-dvh xl:flex-col xl:overflow-hidden">
      <header className="shrink-0 border-b border-slate-200 bg-white">
        <nav className="mx-auto flex min-h-14 max-w-[1800px] flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-8 xl:h-14 xl:flex-nowrap xl:py-0">
          <Link to="/" className="text-sm font-semibold text-slate-950">
            Paul-Andrei Nafureanu
          </Link>

          <div className="flex items-center gap-3 text-xs sm:gap-5 sm:text-sm">
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

      <main className="xl:min-h-0 xl:flex-1 xl:overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
