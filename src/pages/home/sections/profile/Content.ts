export type ProfileContent = {
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

export const SWEProfile: ProfileContent = {
  eyebrow: "Full-Stack Software Engineer",
  name: "Paul-Andrei Nafureanu",
  roleLine: "I design and build production-ready applications and systems.",
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

export const homeContent = SWEProfile;
