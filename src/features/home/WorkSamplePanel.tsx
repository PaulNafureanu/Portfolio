import { useState } from "react";
import { workSamples } from "./workSamples";

export function WorkSamplePanel() {
  const [activeKey, setActiveKey] = useState(workSamples[0].key);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const activeSample =
    workSamples.find((sample) => sample.key === activeKey) ?? workSamples[0];

  return (
    <>
      <aside className="w-full max-w-[860px] justify-self-end rounded-[1.75rem] border border-slate-200 bg-white p-3 shadow-sm">
        <div className="overflow-hidden rounded-[1.2rem] border border-slate-200 bg-white">
          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50">
            {workSamples.map((sample) => {
              const isActive = sample.key === activeKey;

              return (
                <button
                  key={sample.key}
                  type="button"
                  onClick={() => setActiveKey(sample.key)}
                  className={[
                    "cursor-pointer border-r border-slate-200 px-4 py-3 text-left text-sm font-medium transition last:border-r-0",
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

          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              Work sample
            </p>

            <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">
              {activeSample.title}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              {activeSample.description}
            </p>

            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="mt-5 block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left transition hover:border-slate-300 hover:shadow-sm"
              aria-label={`Open ${activeSample.label} preview`}
            >
              <div className="flex items-center gap-1.5 border-b border-slate-200 bg-white px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                <span className="ml-3 text-xs font-medium text-slate-500">
                  {activeSample.label} preview · click to enlarge
                </span>
              </div>

              <div className="relative h-[270px] overflow-hidden bg-slate-100 md:h-[350px]">
                <img
                  src={activeSample.image}
                  alt={activeSample.alt}
                  className="h-full w-full object-cover object-top"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/90 to-transparent" />
              </div>
            </button>
          </div>
        </div>
      </aside>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="max-h-[94vh] w-[94vw] max-w-[1680px] overflow-hidden rounded-2xl border border-slate-700 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                  {activeSample.label}
                </p>
                <p className="text-sm font-semibold text-slate-950">
                  {activeSample.title}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="cursor-pointer rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            <div className="max-h-[86vh] overflow-auto bg-slate-100 p-3">
              <img
                src={activeSample.image}
                alt={activeSample.alt}
                className="mx-auto h-auto w-full rounded-lg border border-slate-200 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
