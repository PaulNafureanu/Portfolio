type ImageModalItem = {
  label: string;
  title: string;
  image: string;
  alt: string;
};

type ImageModalProps = {
  item: ImageModalItem;
  onClose: () => void;
};

export function ImageModal({ item, onClose }: ImageModalProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="max-h-[94vh] w-[94vw] max-w-[1680px] overflow-hidden rounded-2xl border border-slate-700 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              {item.label}
            </p>

            <p className="text-sm font-semibold text-slate-950">{item.title}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Close
          </button>
        </div>

        <div className="max-h-[86vh] overflow-auto bg-slate-100 p-3">
          <img
            src={item.image}
            alt={item.alt}
            className="mx-auto h-auto w-full rounded-lg border border-slate-200 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
