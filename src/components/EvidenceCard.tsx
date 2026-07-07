import type { EvidenceItem } from "../data/evidence";

type EvidenceCardProps = {
  item: EvidenceItem;
  onOpen: (item: EvidenceItem) => void;
};

export function EvidenceCard({ item, onOpen }: EvidenceCardProps) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:border-slate-300 hover:shadow-md"
    >
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
          {item.label}
        </p>

        <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {item.description}
        </p>
      </div>

      <div className="h-44 overflow-hidden border-t border-slate-200 bg-slate-100">
        <img
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
        />
      </div>
    </button>
  );
}
