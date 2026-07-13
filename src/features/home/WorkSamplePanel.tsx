import { useEffect, useState } from "react";
import { workSamples } from "./workSamples";

export function WorkSamplePanel() {
  const [activeKey, setActiveKey] = useState(workSamples[0].key);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const activeSample =
    workSamples.find((sample) => sample.key === activeKey) ?? workSamples[0];

  useEffect(() => {
    if (!isPreviewOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

  return (
    <>
      <aside className="w-full min-w-0 max-w-[860px] rounded-[1.25rem] border border-slate-200 bg-white p-1.5 shadow-sm sm:rounded-[1.75rem] sm:p-3 lg:justify-self-end">
        <div className="min-w-0 overflow-hidden rounded-[0.95rem] border border-slate-200 bg-white sm:rounded-[1.2rem]">
          <div
            className="grid min-w-0 grid-cols-6 border-b border-slate-200 bg-slate-50 [container-type:inline-size]"
            role="tablist"
            aria-label="Support tool work samples"
          >
            {workSamples.map((sample) => {
              const isActive = sample.key === activeKey;

              return (
                <button
                  key={sample.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="work-sample-panel"
                  title={sample.label}
                  onClick={() => setActiveKey(sample.key)}
                  className={[
                    "min-w-0 cursor-pointer overflow-hidden whitespace-nowrap",
                    "border-r border-slate-200 last:border-r-0",
                    "px-[clamp(0.25rem,1.5cqw,0.75rem)]",
                    "py-[clamp(0.55rem,1.8cqw,0.75rem)]",
                    "text-center text-[clamp(0.55rem,2.25cqw,0.75rem)]",
                    "font-medium leading-none tracking-[-0.015em]",
                    "transition",
                    "focus-visible:relative focus-visible:z-10",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-inset focus-visible:ring-blue-600",
                    isActive
                      ? "bg-white text-slate-950"
                      : "text-slate-500 hover:bg-white hover:text-slate-950",
                  ].join(" ")}
                >
                  {sample.label}
                </button>
              );
            })}
          </div>

          <div
            id="work-sample-panel"
            role="tabpanel"
            className="min-w-0 p-3.5 sm:p-5"
          >
            <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-blue-600 sm:text-xs sm:tracking-[0.22em]">
              SELECTED PROJECT
            </p>

            <h2 className="mt-2.5 break-words text-lg font-semibold leading-snug tracking-tight text-slate-950 sm:mt-3 sm:text-xl md:text-2xl">
              {activeSample.title}
            </h2>

            <p className="mt-2.5 max-w-xl break-words text-xs leading-5 text-slate-600 min-[380px]:text-sm min-[380px]:leading-6 sm:mt-3">
              {activeSample.description}
            </p>

            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="mt-4 block w-full min-w-0 cursor-zoom-in overflow-hidden rounded-xl border border-slate-200 bg-slate-100 text-left transition hover:border-slate-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:mt-5 sm:rounded-2xl"
              aria-label={`Open ${activeSample.label} preview`}
            >
              <div className="flex min-w-0 items-center gap-1.5 border-b border-slate-200 bg-white px-3 py-2.5 sm:px-4 sm:py-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-slate-300 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-slate-300 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 shrink-0 rounded-full bg-slate-300 sm:h-2.5 sm:w-2.5" />
                <span className="ml-1 min-w-0 flex-1 truncate text-[0.625rem] font-medium text-slate-500 sm:ml-3 sm:text-xs">
                  {activeSample.label} preview · click to enlarge
                </span>
              </div>

              <div className="relative aspect-[16/10] w-full min-w-0 overflow-hidden bg-slate-100 sm:aspect-[16/9]">
                <img
                  src={activeSample.image}
                  alt={activeSample.alt}
                  className="h-full w-full object-cover object-top"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/90 to-transparent sm:h-24" />
              </div>
            </button>
          </div>
        </div>
      </aside>

      {isPreviewOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950/80 p-0 backdrop-blur-sm sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeSample.label} preview`}
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="flex h-dvh w-full min-w-0 flex-col overflow-hidden bg-white shadow-2xl sm:max-h-[94dvh] sm:w-[94vw] sm:max-w-[1680px] sm:rounded-2xl sm:border sm:border-slate-700"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-w-0 shrink-0 items-center justify-between gap-3 border-b border-slate-200 px-3 py-3 sm:px-4">
              <div className="min-w-0">
                <p className="truncate text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                  {activeSample.label}
                </p>
                <p className="truncate text-sm font-semibold text-slate-950">
                  {activeSample.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="shrink-0 cursor-pointer rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Close
              </button>
            </div>

            <div className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden bg-slate-100 p-1.5 sm:p-3">
              <img
                src={activeSample.image}
                alt={activeSample.alt}
                className="mx-auto block h-auto max-w-full rounded-md border border-slate-200 bg-white sm:rounded-lg"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
