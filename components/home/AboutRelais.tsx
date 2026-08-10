import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyStory, mission, vision, founder } from "@/content/company";

export function AboutRelais() {
  return (
    <Section variant="white" id="qui-sommes-nous">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Qui sommes-nous ?"
              title="Une entreprise née d'une conviction simple."
              description="La technologie doit simplifier le travail, pas le compliquer."
            />
            <div className="flex flex-col gap-4">
              {companyStory.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-xl text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
                Notre mission
              </span>
              <p className="mt-3 text-xl font-medium leading-relaxed text-relais-navy">
                {mission}
              </p>
            </div>
            <div className="border-t border-border pt-10">
              <span className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
                Notre vision
              </span>
              <p className="mt-3 text-xl font-medium leading-relaxed text-relais-navy">
                {vision}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-12 lg:mt-20 lg:pt-16">
          <div className="border-l-2 border-relais-emerald pl-6 sm:pl-8">
            <span className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
              Fondateur
            </span>
            <h3 className="mt-2 text-2xl font-semibold text-relais-navy">{founder.name}</h3>
            <p className="text-sm font-medium text-muted">{founder.role}</p>
            <div className="mt-4 flex flex-col gap-4">
              {founder.paragraphs.map((paragraph) => (
                <p key={paragraph} className="max-w-2xl text-base leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
