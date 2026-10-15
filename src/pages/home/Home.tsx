import TechStack from "./sections/techstack/TechStack";
import { About } from "./sections/home/About";

export function Home() {
  return (
    <div>
      <section
        id="home"
        className="h-full min-h-0 w-full min-w-0 overflow-x-hidden px-3 py-8 sm:px-6 sm:py-10 md:px-10 lg:px-12 xl:overflow-y-auto xl:px-16 2xl:px-24"
      >
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
          <About />

          <div className="min-h-0 min-w-0 2xl:col-span-2 2xl:h-full">
            <TechStack />
          </div>
        </div>
      </section>
    </div>
  );
}
