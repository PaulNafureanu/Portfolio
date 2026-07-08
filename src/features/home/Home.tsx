import { Link } from "react-router";
import { homeContent } from "./homeContent";
import { WorkSamplePanel } from "./WorkSamplePanel";

export function Home() {
  return (
    <section className="px-4 py-10 sm:px-6 md:px-10 lg:px-16 xl:px-28 2xl:px-36">
      <div className="mx-auto grid w-full max-w-[1800px] items-center gap-10 lg:min-h-[calc(100dvh-9rem)] lg:grid-cols-[0.9fr_0.95fr] lg:gap-16">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
            {homeContent.eyebrow}
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl md:text-6xl xl:text-7xl">
            {homeContent.name}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-800 sm:text-lg sm:leading-8 xl:text-xl xl:leading-9">
            {homeContent.roleLine}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8 xl:text-xl xl:leading-9">
            {homeContent.headline}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {homeContent.supporting}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
  );
}
