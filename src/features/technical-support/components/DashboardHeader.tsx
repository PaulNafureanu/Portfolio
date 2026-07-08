import { dashboardContent } from "../data/dashboard.data";

const { header } = dashboardContent;

export function DashboardHeader() {
  return (
    <header className="px-1 py-2">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
        {header.eyebrow}
      </p>

      <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            {header.title}
          </h1>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600 md:text-base">
            {header.description}
          </p>
        </div>

        <div className="shrink-0 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs text-blue-950">
          {header.note}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        {/* <span className="font-semibold uppercase tracking-[0.18em] text-blue-600">
          {header.stackLabel}
        </span>

        <span className="text-slate-400">:</span> */}

        {/* {header.stack.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-blue-100 bg-white/60 px-3 py-1 font-medium text-blue-900"
          >
            {tool}
          </span>
        ))} */}
      </div>
    </header>
  );
}
