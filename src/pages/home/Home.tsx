import { Link } from "react-router";
import { homeContent } from "./homeContent";
import TechStack from "./techstack/TechStack";

export function Home() {
  return (
    <section className="h-full min-h-0 w-full min-w-0 overflow-x-hidden px-3 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-12 xl:overflow-y-auto xl:px-16 2xl:px-24">
      <div
        className="
          mx-auto
          grid
          h-full
          min-h-0
          w-full
          min-w-0
          max-w-[1800px]
          grid-cols-1
          gap-10
          2xl:grid-cols-3
          2xl:items-start
          2xl:gap-16
        "
      >
        <div className="min-w-0 max-w-2xl lg:col-span-1 2xl:self-start 2xl:top-1/4">
          <p className="mb-4 max-w-full wrap-break-words text-[0.625rem] font-semibold uppercase leading-5 tracking-[0.18em] text-blue-600 sm:mb-5 sm:text-xs sm:tracking-[0.24em]">
            {homeContent.eyebrow}
          </p>

          <h1 className="max-w-4xl wrap-break-words text-[clamp(2.15rem,10.5vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-slate-950">
            {homeContent.name}
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-800 sm:mt-6 sm:text-base sm:leading-7 xl:text-lg xl:leading-8">
            {homeContent.roleLine}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-700 sm:mt-5 sm:text-lg sm:leading-8 xl:text-xl xl:leading-9">
            {homeContent.headline}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {homeContent.supporting}
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8">
            <Link
              to={homeContent.primaryCta.href}
              className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-[420px]:w-auto"
            >
              {homeContent.primaryCta.label}
            </Link>

            <a
              href={homeContent.secondaryCta.href}
              className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-[420px]:w-auto"
            >
              {homeContent.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="min-h-0 min-w-0 2xl:col-span-2 2xl:h-full">
          <TechStack />
        </div>
      </div>
    </section>
  );
}
