export function DashboardHeader() {
  return (
    <header className="px-1 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
        Support Operations Lab
      </p>

      <div className="mt-3 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Technical Support Workflow Examples
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
            Select a case, choose a workflow stage, and review the related Jira,
            Confluence, or Postman evidence.
          </p>
        </div>

        <div className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs text-blue-950">
          Simulated cases · No client data
        </div>
      </div>
    </header>
  );
}
