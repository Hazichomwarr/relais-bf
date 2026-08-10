import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyStory, positioningStatement } from "@/content/company";

export function CompanyStory() {
  return (
    <Section variant="soft">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-4">
            <SectionHeading eyebrow="Notre histoire" title="Pourquoi RELAIS est né" />
            {companyStory.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-xl text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:pt-14">
            <p className="border-l-2 border-relais-emerald pl-6 text-lg font-medium leading-relaxed text-relais-navy sm:pl-8">
              {positioningStatement}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
