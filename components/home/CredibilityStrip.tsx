import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

type CredibilityItem = {
  title: string;
  description: string;
};

const credibilityItems: readonly CredibilityItem[] = [
  {
    title: "Pensé pour nos réalités",
    description:
      "Des solutions conçues autour des besoins réels des organisations locales.",
  },
  {
    title: "Des outils utiles",
    description: "Nous privilégions la simplicité, la clarté et l'efficacité.",
  },
  {
    title: "Un accompagnement durable",
    description: "Notre travail ne s'arrête pas à la mise en ligne.",
  },
  {
    title: "Nos propres produits",
    description:
      "RELAIS développe également ses propres plateformes logicielles.",
  },
];

export function CredibilityStrip() {
  return (
    <Section variant="white">
      <Container>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {credibilityItems.map((item) => (
            <div key={item.title} className="border-t border-border pt-5">
              <p className="text-base font-semibold text-relais-navy">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
