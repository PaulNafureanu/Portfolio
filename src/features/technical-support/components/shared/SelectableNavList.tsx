type SelectableNavListProps<T> = {
  items: T[];
  activeIndex: number;
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  onSelect: (item: T, index: number) => void;
};

export function SelectableNavList<T>({
  items,
  activeIndex,
  getKey,
  getLabel,
  onSelect,
}: SelectableNavListProps<T>) {
  return (
    <div className="h-full overflow-auto p-3">
      <div className="w-[280px] space-y-3">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={getKey(item)}
              type="button"
              onClick={() => onSelect(item, index)}
              className={[
                "flex w-full items-center gap-3 rounded-xl border p-3 text-left transition",
                isActive
                  ? "border-blue-300 bg-blue-50 text-slate-950"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
              ].join(" ")}
            >
              <span
                className={[
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-500",
                ].join(" ")}
              >
                {index + 1}
              </span>

              <span className="min-w-0 text-sm font-semibold leading-5">
                {getLabel(item)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
