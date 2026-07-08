import { dashboardContent } from "../data/dashboard.data";

const { header } = dashboardContent;

export function DashboardHeader() {
  return (
    <header className="px-1 py-2">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
        {header.eyebrow}
      </p>

      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="max-w-5xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
            {header.title}
          </h1>

          <p className="mt-4 max-w-4xl text-sm leading-6 text-slate-600 md:text-base">
            {header.description}
          </p>
        </div>

        <div className="w-fit shrink-0 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-950">
          {header.note}
        </div>
      </div>
    </header>
  );
}
