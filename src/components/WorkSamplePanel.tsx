import { useState } from "react";
import { workSamples } from "../data/workSamples";

export function WorkSamplePanel() {
  const [activeKey, setActiveKey] = useState(workSamples[0].key);

  const activeSample =
    workSamples.find((sample) => sample.key === activeKey) ?? workSamples[0];

  return (
    <aside className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
      <div className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white">
        <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50">
          {workSamples.map((sample) => {
            const isActive = sample.key === activeKey;

            return (
              <button
                key={sample.key}
                type="button"
                onClick={() => setActiveKey(sample.key)}
                className={[
                  "border-r border-slate-200 px-4 py-3 text-left text-sm font-medium transition last:border-r-0",
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

        <div className="p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            Work sample
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            {activeSample.title}
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            {activeSample.description}
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <div className="flex items-center gap-1.5 border-b border-slate-200 bg-white px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="ml-3 text-xs font-medium text-slate-500">
                {activeSample.label} preview
              </span>
            </div>

            <div className="relative h-[310px] overflow-hidden bg-slate-100 md:h-[420px]">
              <img
                src={activeSample.image}
                alt={activeSample.alt}
                className="h-full w-full object-cover object-top"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/90 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
