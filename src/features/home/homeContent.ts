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
  eyebrow: "APPLICATION SUPPORT",
  name: "Paul-Andrei Nafureanu",
  roleLine:
    "Application Support Specialist focused on SaaS troubleshooting, incident coordination, and customer communication.",
  supporting:
    "I structure customer-reported issues into clear investigations, actionable escalations, and documented resolution paths.",
  headline: "",
  primaryCta: {
    label: "View case library",
    href: "/support-cases",
  },
  secondaryCta: {
    label: "Download CV",
    href: "/Paul Andrei Nafureanu Resume.pdf",
  },
};

export const homeContent = supportHomeContent;
