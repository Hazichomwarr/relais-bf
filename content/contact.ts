export type ContactChannel = {
  label: string;
  value: string;
  href: string;
};

export const contactChannels: readonly ContactChannel[] = [
  {
    label: "Site web",
    value: "www.relaisbf.com",
    href: "https://www.relaisbf.com",
  },
  {
    label: "Email",
    value: "contact@relaisbf.com",
    href: "mailto:batchiy4@gmail.com",
  },
  {
    label: "Téléphone",
    value: "+226 75 77 28 83",
    href: "tel:+22675772883",
  },
  {
    label: "WhatsApp",
    value: "+226 75 77 28 83",
    href: "https://wa.me/22675772883",
  },
];

export type ContactIntro = {
  title: string;
  description: string;
};

export const contactIntro = {
  title: "Parlons de votre projet",
  description:
    "Expliquez-nous votre besoin. Nous vous aiderons à identifier la solution numérique la plus adaptée à votre activité.",
} satisfies ContactIntro;

export const projectInterestOptions: readonly string[] = [
  "KARMDA",
  "Site internet",
  "Logiciel métier",
  "Application ou plateforme web",
  "Automatisation",
  "Lokari",
  "Autre besoin",
];
