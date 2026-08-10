import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyValues } from "@/content/company";

export function ValuesSection() {
  return (
    <Section variant="soft">
      <Container>
        <SectionHeading
          eyebrow="Nos valeurs"
          title="Ce qui guide notre travail au quotidien."
        />
        <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {companyValues.map((value, index) => (
            <li key={value.title} className="border-t border-border pt-5">
              <span className="text-xs font-semibold text-relais-emerald">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-semibold text-relais-navy">{value.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{value.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
