import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { karmdaSolution } from "@/content/solutions";

export function KarmdaSection() {
  return (
    <Section variant="soft" id="karmda">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-medium uppercase tracking-wide text-karmda">
                  Produit RELAIS
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
                  {karmdaSolution.statusLabel}
                </span>
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-relais-navy sm:text-4xl">
                {karmdaSolution.name}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {karmdaSolution.description}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Pour qui ?
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {karmdaSolution.audience.map((item) => (
                    <li key={item} className="text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Ce que KARMDA apporte
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {karmdaSolution.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-karmda"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button href="/#contact" variant="primary" className="self-start">
              Parler à RELAIS
            </Button>
          </div>

          <div className="overflow-hidden rounded-lg border border-karmda/30 bg-surface">
            <Image
              src="/images/projects/karmda.png"
              alt="Interface de gestion scolaire KARMDA"
              width={2560}
              height={1068}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
