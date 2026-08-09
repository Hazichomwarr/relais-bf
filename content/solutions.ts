export type SolutionStatus = "available" | "development";

export type SolutionAccent = "karmda" | "relais" | "lokari";

export type Solution = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  status: SolutionStatus;
  statusLabel: string;
  href: string;
  accent: SolutionAccent;
  audience: readonly string[];
  benefits: readonly string[];
};

export const karmdaSolution = {
  slug: "karmda",
  name: "KARMDA",
  shortDescription: "Une plateforme moderne pour simplifier la gestion scolaire.",
  description:
    "KARMDA est une plateforme numérique qui aide les écoles à gérer leurs opérations administratives et pédagogiques au quotidien. Elle centralise les informations scolaires essentielles et simplifie le suivi des élèves, du personnel et des activités de l'établissement.",
  status: "available",
  statusLabel: "Disponible",
  href: "/solutions/karmda",
  accent: "karmda",
  audience: ["Écoles", "Collèges", "Lycées", "Établissements privés"],
  benefits: [
    "Centraliser les informations scolaires",
    "Simplifier le suivi administratif",
    "Réduire la dépendance au papier et aux fichiers dispersés",
    "Donner une meilleure visibilité aux responsables",
  ],
} satisfies Solution;

export const servicesNumeriquesSolution = {
  slug: "services-numeriques",
  name: "Services numériques",
  shortDescription: "Des outils numériques conçus autour de votre activité.",
  description:
    "RELAIS conçoit des sites internet, des plateformes web, des logiciels métiers et des solutions numériques sur mesure, pensés autour de l'activité et des besoins spécifiques de chaque client.",
  status: "available",
  statusLabel: "Disponible",
  href: "/solutions/services-numeriques",
  accent: "relais",
  audience: ["PME", "Commerces", "Organisations", "Professionnels", "Associations"],
  benefits: [
    "Renforcer votre présence numérique",
    "Digitaliser des opérations manuelles",
    "Créer des outils adaptés à votre activité",
    "Être accompagné après la mise en ligne",
  ],
} satisfies Solution;

export const lokariSolution = {
  slug: "lokari",
  name: "Lokari",
  shortDescription: "Une solution de gestion immobilière pensée pour les propriétaires.",
  description:
    "Lokari est une solution actuellement en développement, conçue pour aider les propriétaires à gérer leurs biens immobiliers : suivi des locataires, organisation des loyers et structuration de la maintenance.",
  status: "development",
  statusLabel: "En développement",
  href: "/solutions/lokari",
  accent: "lokari",
  audience: [
    "Propriétaires",
    "Gestionnaires immobiliers",
    "Diaspora propriétaire de biens au Burkina Faso",
    "Petits portefeuilles immobiliers",
  ],
  benefits: [
    "Centraliser la gestion des biens",
    "Suivre les locations",
    "Mieux organiser les loyers",
    "Structurer le suivi de maintenance",
  ],
} satisfies Solution;

export const solutions: readonly Solution[] = [
  karmdaSolution,
  servicesNumeriquesSolution,
  lokariSolution,
];

export type DigitalServiceCategory = {
  title: string;
  description: string;
};

export const digitalServiceCategories: readonly DigitalServiceCategory[] = [
  {
    title: "Sites internet professionnels",
    description:
      "Des sites vitrines et institutionnels clairs, fiables et représentatifs de votre activité.",
  },
  {
    title: "Applications et plateformes web",
    description:
      "Des plateformes web sur mesure pour gérer des opérations spécifiques à votre organisation.",
  },
  {
    title: "Logiciels métiers",
    description:
      "Des outils adaptés aux processus internes d'une entreprise ou d'une organisation.",
  },
  {
    title: "Automatisation de processus",
    description:
      "La digitalisation de tâches manuelles pour gagner en efficacité et réduire les erreurs.",
  },
  {
    title: "Maintenance et accompagnement",
    description:
      "Un suivi technique après la mise en ligne pour garantir la fiabilité de vos outils dans la durée.",
  },
];
