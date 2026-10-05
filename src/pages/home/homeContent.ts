export type HomeContent = {
  eyebrow: string;
  name: string;
  roleLine: string;
  headline: string;
  supporting: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export const supportHomeContent: HomeContent = {
  eyebrow: "Full-Stack Software Engineer (Junior / Entry Level)",
  name: "Paul-Andrei Nafureanu",
  roleLine:
    "I design and build production-ready web applications from requirements and architecture through development, testing, and deployment.",
  supporting: "",
  headline: "",
  primaryCta: {
    label: "View Projects",
    href: "/Portfolio",
  },
  secondaryCta: {
    label: "Contact Me",
    href: "/contact",
  },
};

export const homeContent = supportHomeContent;
