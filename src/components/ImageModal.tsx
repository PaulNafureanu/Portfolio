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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[94dvh] w-[94vw] max-w-[1600px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              {item.label}
            </p>

            <p className="truncate text-sm font-semibold text-slate-950">
              {item.title}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Close
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto bg-white p-2 sm:p-3">
          <img
            src={item.image}
            alt={item.alt}
            className="mx-auto h-auto w-full max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
