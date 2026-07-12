type ExpandableNavPanelProps = {
  label: string;
  eyebrow: string;
  title: string;
  activeNumber: number;
  children: React.ReactNode;
  expanded: boolean;
};

export function ExpandableNavPanel({
  label,
  eyebrow,
  title,
  activeNumber,
  children,
  expanded,
}: ExpandableNavPanelProps) {
  return (
    <aside
      className={[
        "flex h-full min-h-0 shrink-0 overflow-hidden border-r border-slate-200 bg-white",
        "transition-[width] duration-500 ease-out motion-reduce:transition-none",
        expanded ? "w-[26rem]" : "w-14",
      ].join(" ")}
    >
      <div className="flex w-14 shrink-0 flex-col items-center gap-4 px-2 py-4">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
          {activeNumber}
        </span>

        <span className="rotate-180 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 [writing-mode:vertical-rl]">
          {label}
        </span>
      </div>

      <div
        className={[
          "flex min-h-0 w-[360px] shrink-0 flex-col",
          "transition-opacity delay-100 duration-200 ease-out",
          "motion-reduce:transition-none",
          expanded ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <div className="border-b border-slate-200 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {eyebrow}
          </p>

          <h2 className="mt-2 text-lg font-semibold leading-6 tracking-tight text-slate-950">
            {title}
          </h2>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
      </div>
    </aside>
  );
}
