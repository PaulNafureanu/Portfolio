import { Link } from "react-router";
import {
  ArrowUpRight,
  ClipboardList,
  Network,
  GitBranch,
  Code2Icon as Code2,
  ShieldCheck,
  Rocket,
  ExternalLink,
  GitBranchIcon as Github,
  PanelsTopLeft,
} from "lucide-react";

const project = {
  name: "Project 1/5 - Demo App",
  type: "Full-stack app",
  description: "A collaborative application for organizing work and keeping teams in sync.",
  screenshot: "https://placehold.co/600x400",
  liveUrl: "https://placehold.co/600x400",
  sourceUrl: "https://placehold.co/600x400",
};

const engineeringSections = [
  {
    number: "01",
    title: "What did it need to do?",
    subtitle: "Requirements · SRS",
    icon: ClipboardList,
    slug: "requirements",
  },
  {
    number: "02",
    title: "How is it designed?",
    subtitle: "Architecture · SDD",
    icon: Network,
    slug: "architecture",
  },
  {
    number: "03",
    title: "Why these decisions?",
    subtitle: "Trade-offs · ADRs",
    icon: GitBranch,
    slug: "decisions",
  },
  {
    number: "04",
    title: "How was it built?",
    subtitle: "Implementation · Code",
    icon: Code2,
    slug: "implementation",
  },
  {
    number: "05",
    title: "How was it tested?",
    subtitle: "Tests · Results",
    icon: ShieldCheck,
    slug: "testing",
  },
  {
    number: "06",
    title: "How does it run?",
    subtitle: "Deployment · Operations",
    icon: Rocket,
    slug: "deployment",
  },
];

const cardStyle =
  "group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export function ProjectShowcase() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6">
        {/* Featured project — entire first row */}
        <div className="col-span-full space-y-5">
          <article className="rounded-2xl border border-slate-200 bg-slate-100 p-5 md:p-6 flex flex-col gap-3 md:flex-row">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Project title and type */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl font-bold md:text-3xl">{project.name}</h2>

                  <span className="rounded-full bg-slate-200 px-3 py-1 text-sm font-medium">{project.type}</span>
                </div>

                {/* Description */}
                <p className="my-5 max-w-[850px] text-base leading-relaxed text-slate-700 mt-10">
                  {project.description}
                </p>
              </div>
              <div>
                {/* <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 my-5">
                  Explore the engineering
                </h3> */}
                {/* Project links */}
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 font-medium text-white hover:bg-slate-700"
                    >
                      <ExternalLink size={17} />
                      Live preview
                    </a>
                  )}

                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 font-medium hover:bg-slate-200"
                    >
                      <Github size={17} />
                      Source code
                    </a>
                  )}
                </div>
              </div>
            </div>
            {/* Screenshot / preview */}
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-slate-200 flex-2">
              {project.screenshot ? (
                <img
                  src={project.screenshot}
                  alt={`${project.name} application screenshot`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-slate-500">
                  <PanelsTopLeft size={40} />
                  <span className="text-center text-sm">Application screenshot / interactive preview</span>
                </div>
              )}
            </div>
          </article>
        </div>

        {/* Six engineering cards */}
        {engineeringSections.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.number} to={`/work/collabboard/${item.slug}`} className={cardStyle}>
              {/* Icon and number */}
              <div className="flex items-center justify-between text-slate-500">
                <Icon size={23} strokeWidth={1.8} />
                <span className="text-sm">{item.number}</span>
              </div>

              {/* Card content */}
              <h4 className="mt-6 text-xl font-semibold leading-snug text-slate-950">{item.title}</h4>

              <p className="mt-3 text-sm text-slate-500">{item.subtitle}</p>

              {/* Bottom arrow */}
              <ArrowUpRight
                size={19}
                className="mt-auto self-end text-slate-400 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-900"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
