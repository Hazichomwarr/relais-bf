export type ProjectKind = "product" | "client";

export type ProjectStatus = "live" | "ongoing";

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  kind: ProjectKind;
  status: ProjectStatus;
  href?: string;
  featured: boolean;
};

export const projects = [
  {
    slug: "karmda",
    name: "KARMDA",
    category: "Logiciel de gestion scolaire",
    summary:
      "KARMDA est le logiciel de gestion scolaire conçu par RELAIS pour simplifier le suivi administratif des établissements.",
    kind: "product",
    status: "live",
    featured: true,
  },
  {
    slug: "frednes-international-market",
    name: "Frednes International Market",
    category: "Commerce électronique",
    summary:
      "Une plateforme e-commerce professionnelle conçue pour une activité de vente au détail et en gros.",
    kind: "client",
    status: "live",
    featured: true,
  },
  {
    slug: "pat-express-shipping",
    name: "Pat Express Shipping",
    category: "Logistique",
    summary:
      "Une expérience numérique de demande d'expédition et de suivi de colis entre les États-Unis et le Burkina Faso.",
    kind: "client",
    status: "ongoing",
    featured: true,
  },
  {
    slug: "consulat-burkina-faso-new-jersey",
    name: "Consulat du Burkina Faso au New Jersey",
    category: "Site institutionnel",
    summary:
      "Un site institutionnel bilingue conçu pour faciliter l'accès aux informations et services consulaires.",
    kind: "client",
    status: "live",
    featured: true,
  },
] satisfies readonly Project[];
