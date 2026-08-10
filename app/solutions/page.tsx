import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { KarmdaSection } from "@/components/solutions/KarmdaSection";
import { ServicesSection } from "@/components/solutions/ServicesSection";
import { LokariSection } from "@/components/solutions/LokariSection";
import { FinalCTA } from "@/components/layout/FinalCTA";

export const metadata: Metadata = {
  title: "Nos solutions",
  description:
    "Découvrez KARMDA, les services numériques RELAIS et Lokari, des solutions conçues pour les entreprises, établissements et organisations au Burkina Faso.",
};

const pageAnchors = [
  { label: "KARMDA", href: "#karmda" },
  { label: "Services numériques", href: "#services-numeriques" },
  { label: "Lokari", href: "#lokari" },
];

export default function SolutionsPage() {
  return (
    <>
      <Section variant="white">
        <Container>
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-wide text-relais-emerald">
              Nos solutions
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-relais-navy md:text-5xl">
              Des outils numériques conçus autour de votre réalité.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              RELAIS développe ses propres logiciels et conçoit des solutions
              sur mesure pour aider les entreprises, établissements et
              organisations à mieux travailler.
            </p>
          </div>

          <nav aria-label="Sections de la page" className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {pageAnchors.map((anchor) => (
              <a
                key={anchor.href}
                href={anchor.href}
                className="text-sm font-medium text-muted transition-colors hover:text-relais-navy"
              >
                {anchor.label}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      <KarmdaSection />
      <ServicesSection />
      <LokariSection />
      <FinalCTA />
    </>
  );
}
