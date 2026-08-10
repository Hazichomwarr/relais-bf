import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { servicesNumeriquesSolution, digitalServiceCategories } from "@/content/solutions";

export function ServicesSection() {
  return (
    <Section variant="white" id="services-numeriques">
      <Container>
        <SectionHeading
          eyebrow={servicesNumeriquesSolution.statusLabel}
          title={servicesNumeriquesSolution.name}
          description="Des solutions conçues autour de votre activité."
        />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {servicesNumeriquesSolution.description}
        </p>

        <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {digitalServiceCategories.map((category, index) => (
            <li key={category.title} className="border-t border-border pt-5">
              <span className="text-xs font-semibold text-relais-emerald">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-semibold text-relais-navy">
                {category.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {category.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 border-l-2 border-relais-emerald pl-6 sm:pl-8">
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-relais-navy">
            Votre besoin ne rentre pas dans une case ? Nous pouvons concevoir une
            solution sur mesure autour de votre fonctionnement.
          </p>
        </div>

        <div className="mt-10">
          <Button href="/#contact" variant="primary">
            Discuter de votre projet
          </Button>
        </div>
      </Container>
    </Section>
  );
}
