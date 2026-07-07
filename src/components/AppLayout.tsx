import { Link, Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="flex h-14 w-full items-center justify-between px-5 md:px-8">
          <Link
            to="/"
            className="text-sm font-semibold tracking-tight text-slate-950"
          >
            Paul-Andrei Nafureanu
          </Link>

          <nav className="flex items-center gap-4 text-xs text-slate-600 md:gap-6">
            <Link
              to="/technical-support-workflow-examples"
              className="hover:text-slate-950"
            >
              Workflow examples
            </Link>
          </nav>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
