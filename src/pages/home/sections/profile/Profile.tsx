import { Link } from "react-router";
import { SWEProfile } from "./Content";

export function Profile() {
  const profile = SWEProfile;

  return (
    <div className="min-w-0 max-w-2xl lg:col-span-1 2xl:self-start 2xl:top-1/4">
      <p className="mb-4 max-w-full wrap-break-words text-[0.625rem] font-semibold uppercase leading-5 tracking-[0.18em] text-blue-600 sm:mb-5 sm:text-xs sm:tracking-[0.24em]">
        {profile.eyebrow}
      </p>

      <h1 className="max-w-4xl wrap-break-words text-[clamp(2.15rem,10.5vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-slate-950">
        {profile.name}
      </h1>

      <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-800 sm:mt-6 sm:text-base sm:leading-7 xl:text-lg xl:leading-8">
        {profile.roleLine}
      </p>

      <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-700 sm:mt-5 sm:text-lg sm:leading-8 xl:text-xl xl:leading-9">
        {profile.headline}
      </p>

      <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{profile.supporting}</p>

      <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8">
        <Link
          to={profile.primaryCta.href}
          className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-[420px]:w-auto"
        >
          {profile.primaryCta.label}
        </Link>

        <a
          href={profile.secondaryCta.href}
          className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-[420px]:w-auto"
        >
          {profile.secondaryCta.label}
        </a>
      </div>
    </div>
  );
}
