import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CompanyStory } from "@/components/about/CompanyStory";
import { ValuesSection } from "@/components/about/ValuesSection";
import { FounderSection } from "@/components/about/FounderSection";
import { FinalCTA } from "@/components/layout/FinalCTA";
import { companyIdentity, mission, vision } from "@/content/company";
import { solutions } from "@/content/solutions";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Qui sommes-nous",
  description:
    "Découvrez l'histoire, la mission, la vision et les valeurs de RELAIS, entreprise burkinabè de logiciels et solutions numériques.",
};

export default function QuiSommesNousPage() {
  return (
    <>
      <Section variant="white">
        <Container>
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-wide text-relais-emerald">
              Qui sommes-nous ?
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-relais-navy md:text-5xl">
              Construire une technologie utile, proche des réalités du terrain.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              RELAIS est une entreprise burkinabè qui conçoit des logiciels et
              des solutions numériques pour aider les entreprises,
              établissements et organisations à mieux travailler.
            </p>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Nom</dt>
              <dd className="mt-1 text-sm font-medium text-relais-navy">{companyIdentity.name}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                Raison sociale
              </dt>
              <dd className="mt-1 text-sm font-medium text-relais-navy">
                {companyIdentity.legalName}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Pays</dt>
              <dd className="mt-1 text-sm font-medium text-relais-navy">
                {companyIdentity.country}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Slogan</dt>
              <dd className="mt-1 text-sm font-medium text-relais-navy">
                {companyIdentity.slogan}
              </dd>
            </div>
          </dl>
        </Container>
      </Section>

      <CompanyStory />

      <Section variant="white">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
                Notre mission
              </span>
              <p className="mt-3 text-xl font-medium leading-relaxed text-relais-navy">
                {mission}
              </p>
            </div>
            <div className="border-t border-border pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-16">
              <span className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
                Notre vision
              </span>
              <p className="mt-3 text-xl font-medium leading-relaxed text-relais-navy">
                {vision}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <ValuesSection />
      <FounderSection />

      <Section variant="soft">
        <Container>
          <SectionHeading
            eyebrow="RELAIS aujourd'hui"
            title="Une entreprise déjà active, avec une ambition claire."
          />

          <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-surface">
            {solutions.map((solution) => (
              <div
                key={solution.slug}
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-6 py-4"
              >
                <div>
                  <p className="text-sm font-semibold text-relais-navy">{solution.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{solution.shortDescription}</p>
                </div>
                <span
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wide",
                    solution.status === "available" ? "text-relais-emerald" : "text-muted"
                  )}
                >
                  {solution.statusLabel}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/solutions" variant="primary">
              Découvrir nos solutions
            </Button>
            <Button href="/realisations" variant="ghost">
              Voir nos réalisations
            </Button>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
