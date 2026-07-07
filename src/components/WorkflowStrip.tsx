const steps = [
  "Customer report",
  "Ticket created",
  "Triage",
  "Investigation",
  "Customer update",
  "Internal note",
  "Escalation / resolution",
];

export function WorkflowStrip() {
  return (
    <div className="grid gap-3 md:grid-cols-7">
      {steps.map((step, index) => (
        <div
          key={step}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <p className="mb-2 text-xs font-semibold text-slate-400">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="text-sm font-medium text-slate-900">{step}</p>
        </div>
      ))}
    </div>
  );
}
