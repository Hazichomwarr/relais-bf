export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: NavigationItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Nos solutions", href: "/solutions" },
  { label: "Nos réalisations", href: "/#realisations" },
  { label: "Qui sommes-nous", href: "/#qui-sommes-nous" },
  { label: "Contact", href: "/#contact" },
];
