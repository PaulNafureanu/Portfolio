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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-[92vw] max-w-[1600px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
              {item.label}
            </p>

            <p className="text-sm font-semibold text-slate-950">{item.title}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Close
          </button>
        </div>

        <div className="min-h-0 flex-1 bg-white p-3">
          <img
            src={item.image}
            alt={item.alt}
            className="mx-auto h-full max-h-[82vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
