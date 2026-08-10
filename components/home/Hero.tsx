import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { solutions, type SolutionAccent } from "@/content/solutions";
import { cn } from "@/lib/cn";

const accentDotClasses: Record<SolutionAccent, string> = {
  karmda: "bg-karmda",
  relais: "bg-relais-emerald",
  lokari: "bg-lokari",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-relais-emerald/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 -right-16 h-64 w-64 rounded-full bg-relais-navy/5 blur-3xl"
      />

      <Container>
        <div className="relative grid gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
          <div className="flex flex-col items-start gap-6">
            <span className="text-sm font-medium uppercase tracking-wide text-relais-emerald">
              Solutions numériques • Burkina Faso
            </span>

            <h1 className="text-4xl font-semibold tracking-tight text-relais-navy md:text-5xl xl:text-6xl">
              Nous créons les solutions numériques qui font avancer{" "}
              <span className="text-relais-emerald">les entreprises burkinabè</span>.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-muted">
              RELAIS conçoit des logiciels, plateformes et outils numériques
              adaptés aux réalités des entreprises, établissements et
              organisations.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/#solutions" variant="primary">
                Découvrir nos solutions
              </Button>
              <Button href="/#contact" variant="ghost">
                Parler à RELAIS
              </Button>
            </div>
          </div>

          <EcosystemVisual />
        </div>
      </Container>
    </section>
  );
}

function EcosystemVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="rounded-xl border border-relais-emerald/30 bg-surface px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
          RELAIS
        </p>
        <p className="mt-1 text-lg font-semibold text-relais-navy">
          Des outils pour avancer.
        </p>
      </div>

      <div aria-hidden="true" className="mx-auto h-6 w-px bg-border" />

      <div className="divide-y divide-border rounded-xl border border-border bg-surface">
        {solutions.map((solution) => (
          <div
            key={solution.slug}
            className="flex items-start gap-3 px-5 py-4 transition-colors hover:bg-surface-soft"
          >
            <span
              aria-hidden="true"
              className={cn(
                "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                accentDotClasses[solution.accent]
              )}
            />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="text-sm font-semibold text-relais-navy">
                  {solution.name}
                </p>
                <span
                  className={cn(
                    "text-[11px] font-medium uppercase tracking-wide",
                    solution.status === "available"
                      ? "text-relais-emerald"
                      : "text-muted"
                  )}
                >
                  {solution.statusLabel}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted">{solution.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
