import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <Section variant="navy">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Votre entreprise mérite des outils à la hauteur de ses ambitions.
            </h2>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              Parlons de vos besoins et voyons comment RELAIS peut vous aider à
              avancer avec une solution numérique adaptée à votre activité.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:shrink-0">
            <Button href="/contact" variant="secondary">
              Parler à RELAIS
            </Button>
            <Button
              href="/solutions"
              variant="ghost"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Découvrir nos solutions
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
