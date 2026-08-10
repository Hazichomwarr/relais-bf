import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { companyIdentity } from "@/content/company";

export const metadata: Metadata = {
  title: "Nous contacter",
  description:
    "Contactez RELAIS pour discuter de vos besoins en logiciels, sites internet, plateformes web et solutions numériques au Burkina Faso.",
};

type NeedCategory = {
  title: string;
  description: string;
};

const needCategories: readonly NeedCategory[] = [
  {
    title: "Établissement scolaire",
    description:
      "Vous souhaitez découvrir KARMDA ou moderniser la gestion de votre établissement.",
  },
  {
    title: "Entreprise ou organisation",
    description:
      "Vous avez besoin d'un site, d'une application, d'un logiciel métier ou d'une solution sur mesure.",
  },
  {
    title: "Gestion immobilière",
    description:
      "Vous souhaitez suivre le développement de Lokari ou discuter de besoins liés à la gestion locative.",
  },
  {
    title: "Autre besoin numérique",
    description:
      "Votre besoin ne correspond pas exactement à ces catégories ? Parlons-en.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section variant="white">
        <Container>
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-wide text-relais-emerald">
              Nous contacter
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-relais-navy md:text-5xl">
              Parlons de votre besoin.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Vous avez besoin d&apos;un logiciel, d&apos;un site internet,
              d&apos;une solution numérique ou vous souhaitez en savoir plus
              sur l&apos;un de nos produits ? Échangeons.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <ContactChannels />
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <SectionHeading eyebrow="Par où commencer ?" title="Quel est votre besoin ?" />
          <div className="mt-10 divide-y divide-border rounded-lg border border-border bg-surface">
            {needCategories.map((category, index) => (
              <div key={category.title} className="flex gap-4 px-6 py-5">
                <span className="text-xs font-semibold text-relais-emerald">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-relais-navy">{category.title}</p>
                  <p className="mt-1 text-sm text-muted">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-relais-navy">
                {companyIdentity.legalName}
              </p>
              <p className="mt-1 text-sm text-muted">{companyIdentity.country}</p>
              <p className="mt-1 text-sm text-muted">{companyIdentity.slogan}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/solutions" variant="ghost">
                Découvrir nos solutions
              </Button>
              <Button href="/realisations" variant="ghost">
                Voir nos réalisations
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
