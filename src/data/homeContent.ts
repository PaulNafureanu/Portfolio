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
  eyebrow: "Technical / Application / SaaS Support",
  name: "Paul-Andrei Nafureanu",
  roleLine:
    "Technical / Application Support candidate focused on SaaS and product-support workflows.",
  headline:
    "I structure support tickets, document investigations, update customers clearly, and escalate issues with useful context.",
  supporting:
    "Background across customer support, regulated banking procedures, data/document validation, operations, and technical account support.",
  primaryCta: {
    label: "View support workflows",
    href: "/technical-support-workflow-examples",
  },
  secondaryCta: {
    label: "Download CV",
    href: "/cv.pdf",
  },
};

export const homeContent = supportHomeContent;
