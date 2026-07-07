import { Link } from "react-router";
import { Badge } from "../components/Badge";

const profileBlocks = [
  {
    label: "About",
    text: "Technical / Application Support candidate focused on structured issue handling, clear communication, and reliable execution.",
  },
  {
    label: "Background",
    text: "Customer support, regulated banking procedures, data/document validation, operations, and technical account support.",
  },
  {
    label: "Target roles",
    text: "Technical Support, Application Support, SaaS Support, IT Service Desk, and Support Operations.",
  },
  {
    label: "Extra",
    text: "I build small software prototypes to better understand user flows, APIs, errors, databases, and product behavior from the support side.",
  },
];

const links = [
  {
    label: "Email",
    value: "paul.nafureanu@gmail.com",
    href: "mailto:paul.nafureanu@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/paulnafureanu",
    href: "https://www.linkedin.com/in/paulnafureanu",
  },
  {
    label: "GitHub",
    value: "github.com/PaulNafureanu",
    href: "https://github.com/PaulNafureanu",
  },
  {
    label: "CV",
    value: "Download PDF",
    href: "/cv.pdf",
  },
];

const evidenceCards = [
  {
    label: "Jira",
    title: "Ticket workflow",
    image: "/assets/work-samples/jira-board-workflow.png",
  },
  {
    label: "Confluence",
    title: "Troubleshooting guide",
    image: "/assets/work-samples/confluence-guide.png",
  },
  {
    label: "Postman",
    title: "API check",
    image: "/assets/work-samples/postman-200-ok.png",
  },
];

export function Home() {
  return (
    <main>
      <section className="min-h-[calc(100vh-3.5rem)] px-5 py-12 md:px-8 lg:px-12 xl:px-20">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge>Technical Support</Badge>
              <Badge>Application Support</Badge>
              <Badge>SaaS Support</Badge>
              <Badge>IT Service Desk</Badge>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              Paul-Andrei Nafureanu
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I help users by turning unclear issues into structured tickets,
              following procedures, documenting cases, communicating clearly,
              and escalating with useful context.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {profileBlocks.map((block) => (
                <article
                  key={block.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {block.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {block.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/technical-support-workflow-examples"
                className="rounded-md bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                View workflow examples
              </Link>

              <a
                href="/cv.pdf"
                className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Download CV
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Work sample
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                Support workflows made visible.
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Evidence from simulated Jira, Confluence, and Postman support
                workflows.
              </p>
            </div>

            <div className="mt-4 grid gap-4">
              {evidenceCards.map((card) => (
                <article
                  key={card.label}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                        {card.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-950">
                        {card.title}
                      </p>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                  </div>

                  <div className="h-32 overflow-hidden bg-slate-100 md:h-40">
                    <img
                      src={card.image}
                      alt={`${card.label} ${card.title}`}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-5 py-16 md:px-8 lg:px-12 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Contact and links
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-slate-950">
              Direct links for screening and follow-up.
            </h2>
          </div>

          <div className="grid gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col justify-between gap-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 hover:bg-white sm:flex-row sm:items-center"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {link.label}
                </span>
                <span className="text-sm font-medium text-slate-950">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
