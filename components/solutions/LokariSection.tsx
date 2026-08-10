import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { lokariSolution } from "@/content/solutions";

export function LokariSection() {
  return (
    <Section variant="soft" id="lokari">
      <Container>
        <div className="overflow-hidden rounded-lg border border-dashed border-lokari/40 bg-surface/60">
          <div className="grid gap-0 lg:grid-cols-2 lg:items-center">
            <Image
              src="/images/projects/lokari.png"
              alt="Aperçu de l'interface Lokari, solution de gestion immobilière en développement"
              width={3092}
              height={1760}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />

            <div className="flex flex-col gap-8 p-8 lg:p-12">
              <div>
                <span className="text-sm font-medium uppercase tracking-wide text-lokari">
                  Ce que nous construisons ensuite
                </span>
                <div className="mt-3 flex flex-wrap items-baseline gap-3">
                  <h2 className="text-3xl font-semibold tracking-tight text-relais-navy sm:text-4xl">
                    {lokariSolution.name}
                  </h2>
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {lokariSolution.statusLabel}
                  </span>
                </div>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                  {lokariSolution.description}
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Pour qui ?
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {lokariSolution.audience.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Ce que Lokari proposera
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {lokariSolution.benefits.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lokari"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-sm font-medium text-muted">
                Suivre l&apos;évolution de Lokari — bientôt disponible.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
