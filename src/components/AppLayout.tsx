import { Link, Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="font-semibold tracking-tight text-slate-950">
            Paul-Andrei Nafureanu
          </Link>

          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <Link
              to="/technical-support-workflow-examples"
              className="hover:text-slate-950"
            >
              Workflow examples
            </Link>

            <a
              href="mailto:paul.nafureanu@gmail.com"
              className="rounded-md border border-slate-300 px-3 py-1.5 font-medium text-slate-800 hover:bg-slate-50"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <Outlet />
    </div>
  );
}
