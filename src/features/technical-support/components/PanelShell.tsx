type PanelShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

export function PanelShell({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: PanelShellProps) {
  return (
    <section
      className={`min-h-0 rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      <div className="border-b border-slate-200 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
          {title}
        </h2>
        <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
      </div>

      {children}
    </section>
  );
}
