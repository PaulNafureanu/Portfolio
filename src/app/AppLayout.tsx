import { Link, Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-slate-50 text-slate-950 xl:flex xl:h-dvh xl:flex-col xl:overflow-hidden">
      <header className="shrink-0 border-b border-slate-200 bg-white">
        <nav className="mx-auto flex w-full max-w-[1800px] flex-col items-stretch gap-3 px-3 py-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between sm:min-h-14 sm:px-6 md:px-8 xl:h-14 xl:flex-nowrap xl:px-10 xl:py-0 2xl:px-12">
          <Link
            to="/"
            className="min-w-0 truncate text-sm font-semibold text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Paul-Andrei Nafureanu
          </Link>

          <div className="flex w-full min-w-0 items-center justify-between gap-2 text-xs min-[420px]:w-auto min-[420px]:justify-start sm:gap-5 sm:text-sm">
            <Link
              to="/"
              className="rounded-sm px-1 py-1 text-slate-600 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Home
            </Link>

            <Link
              to="/support-cases"
              className="rounded-sm px-1 py-1 text-slate-600 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Case Library
            </Link>

            <a
              href="mailto:paulandrei.nafureanu@gmail.com"
              className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-1.5 font-medium text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="min-w-0 flex-1 xl:min-h-0 xl:overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
