type PanelShellProps = {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  hideHeader?: boolean;
  headerAction?: React.ReactNode;
};

export function PanelShell({
  eyebrow,
  title,
  children,
  className = "",
  hideHeader = false,
  headerAction,
}: PanelShellProps) {
  return (
    <section
      className={`flex min-h-0 flex-col overflow-hidden bg-white ${className}`}
    >
      {!hideHeader ? (
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-slate-200 p-4">
          <div>
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                {eyebrow}
              </p>
            ) : null}

            {title ? (
              <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
                {title}
              </h2>
            ) : null}
          </div>

          {headerAction ? <div className="shrink-0">{headerAction}</div> : null}
        </div>
      ) : null}

      <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
    </section>
  );
}
