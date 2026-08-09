import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Section variant="default">
        <Container>
          <SectionHeading
            eyebrow="Design system — aperçu temporaire"
            title="Fondations visuelles RELAIS"
            description="Cette page vérifie les tokens de couleur, la typographie et les primitives de mise en page avant la construction du site public."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary">Bouton primaire</Button>
            <Button variant="secondary">Bouton secondaire</Button>
            <Button variant="ghost">Bouton ghost</Button>
            <Button variant="primary" href="/">
              Lien stylé bouton
            </Button>
          </div>
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <SectionHeading title="Section blanche" align="center" />
          <p className="mx-auto mt-4 max-w-xl text-center text-muted">
            Texte courant en gris atténué sur fond blanc — vérification de la
            lisibilité du corps de texte.
          </p>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <SectionHeading title="Section neutre douce" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-md border border-border bg-surface p-6">
              <p className="text-sm font-medium uppercase tracking-wide text-karmda">
                KARMDA
              </p>
              <p className="mt-2 text-sm text-muted">Accent produit — or restreint.</p>
            </div>
            <div className="rounded-md border border-border bg-surface p-6">
              <p className="text-sm font-medium uppercase tracking-wide text-lokari">
                Lokari
              </p>
              <p className="mt-2 text-sm text-muted">Accent produit — sarcelle.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="navy">
        <Container>
          <SectionHeading
            title="Section navy"
            description="Vérification du contraste et de la lisibilité sur fond RELAIS navy."
          />
          <div className="mt-6 flex gap-4">
            <Button variant="secondary">Bouton sur navy</Button>
            <Button variant="ghost" className="border-white/30 text-white hover:bg-white/10">
              Ghost sur navy
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
