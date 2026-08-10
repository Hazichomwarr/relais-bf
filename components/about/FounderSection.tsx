import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { founder } from "@/content/company";

export function FounderSection() {
  return (
    <Section variant="white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
              Fondateur
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-relais-navy sm:text-3xl">
              {founder.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-muted">{founder.role}</p>
          </div>
          <div className="flex flex-col gap-4 border-l-2 border-relais-emerald pl-6 sm:pl-8">
            {founder.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-2xl text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
