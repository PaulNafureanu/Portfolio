import { Link } from "react-router";
import { homeContent } from "./homeContent";
import { WorkSamplePanel } from "./WorkSamplePanel";

export function Home() {
  return (
    <main>
      <section className="min-h-[calc(100vh-3.5rem)] px-8 py-14 md:px-12 lg:px-20 xl:px-28 2xl:px-36">
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-16 lg:grid-cols-[0.9fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
              {homeContent.eyebrow}
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              {homeContent.name}
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-800">
              {homeContent.roleLine}
            </p>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">
              {homeContent.headline}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {homeContent.supporting}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to={homeContent.primaryCta.href}
                className="cursor-pointer rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {homeContent.primaryCta.label}
              </Link>

              <a
                href={homeContent.secondaryCta.href}
                className="cursor-pointer rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                {homeContent.secondaryCta.label}
              </a>
            </div>
          </div>

          <WorkSamplePanel />
        </div>
      </section>
    </main>
  );
}
