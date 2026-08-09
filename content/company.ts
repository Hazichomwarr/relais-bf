export type CompanyIdentity = {
  name: string;
  legalName: string;
  country: string;
  primaryMarket: string;
  slogan: string;
};

export const companyIdentity = {
  name: "RELAIS",
  legalName: "RELAIS SARL",
  country: "Burkina Faso",
  primaryMarket: "Burkina Faso",
  slogan: "Vous avancez quand on prend le relais.",
} satisfies CompanyIdentity;

export const positioningStatement =
  "RELAIS conçoit des logiciels et des solutions numériques qui simplifient le travail des entreprises, établissements et organisations.";

export const mission =
  "Concevoir des solutions numériques utiles, simples et durables qui permettent aux entreprises et organisations africaines de mieux travailler et d'avancer.";

export const vision =
  "Construire des logiciels africains de référence, capables de répondre durablement aux besoins des entreprises, établissements et organisations du continent.";

export type CompanyStory = {
  paragraphs: readonly string[];
};

export const companyStory = {
  paragraphs: [
    "De nombreuses entreprises, établissements et organisations continuent de fonctionner avec du papier, des fichiers Excel dispersés ou des logiciels mal adaptés à leur réalité quotidienne. C'est de ce constat qu'est né RELAIS.",
    "La technologie devrait simplifier le travail, pas le compliquer. Chaque outil numérique conçu par RELAIS part de cette conviction : la simplicité et l'utilité priment sur la complexité.",
    "RELAIS existe pour créer des outils numériques modernes, pratiques et adaptés aux réalités locales, et pour rester présent aux côtés de ses clients bien après la mise en service.",
  ],
} satisfies CompanyStory;

export type CompanyValue = {
  title: string;
  description: string;
};

export const companyValues: readonly CompanyValue[] = [
  {
    title: "Écoute",
    description:
      "Comprendre en profondeur le fonctionnement et les besoins réels de chaque client avant de concevoir une solution.",
  },
  {
    title: "Simplicité",
    description:
      "Privilégier des outils clairs et faciles à utiliser plutôt que des systèmes inutilement complexes.",
  },
  {
    title: "Responsabilité",
    description:
      "Livrer un travail fiable et assumer la qualité de chaque solution mise entre les mains des clients.",
  },
  {
    title: "Qualité",
    description:
      "Soigner la conception, le développement et la fiabilité de chaque produit et service.",
  },
  {
    title: "Proximité",
    description:
      "Rester accessible et à l'écoute des entreprises et organisations avec lesquelles RELAIS travaille.",
  },
  {
    title: "Progrès",
    description:
      "Faire évoluer les solutions dans le temps pour accompagner la croissance des clients.",
  },
  {
    title: "Engagement durable",
    description:
      "Continuer à accompagner les clients après le déploiement, au-delà de la seule livraison d'un projet.",
  },
];

export type Founder = {
  name: string;
  role: string;
  paragraphs: readonly string[];
};

export const founder = {
  name: "Hamza Mare",
  role: "Fondateur de RELAIS",
  paragraphs: [
    "Passionné par le développement logiciel et l'entrepreneuriat, Hamza Mare a créé RELAIS avec l'ambition de construire des solutions numériques adaptées aux réalités des entreprises et organisations africaines.",
    "Cette ambition s'appuie sur une double perspective : une expérience acquise à l'étranger et une connaissance fine des besoins des entreprises et organisations burkinabè. C'est cette combinaison qui guide la volonté de construire, depuis le Burkina Faso, une technologie durable et réellement utile à ses utilisateurs.",
  ],
} satisfies Founder;
