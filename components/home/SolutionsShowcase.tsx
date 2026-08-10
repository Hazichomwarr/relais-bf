import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  karmdaSolution,
  servicesNumeriquesSolution,
  lokariSolution,
  digitalServiceCategories,
  type SolutionAccent,
  type SolutionStatus,
} from "@/content/solutions";
import { cn } from "@/lib/cn";

const accentBarClasses: Record<SolutionAccent, string> = {
  karmda: "bg-karmda",
  relais: "bg-relais-emerald",
  lokari: "bg-lokari",
};

export function SolutionsShowcase() {
  return (
    <Section variant="soft" id="solutions">
      <Container>
        <SectionHeading
          eyebrow="Nos solutions"
          title="Des outils conçus pour des besoins réels."
          description="De la gestion scolaire aux solutions sur mesure, RELAIS développe des outils numériques pensés pour simplifier le travail et accompagner la croissance des organisations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-lg border border-border bg-surface p-8 lg:p-10">
            <SolutionHeader
              accent={karmdaSolution.accent}
              name={karmdaSolution.name}
              status={karmdaSolution.status}
              statusLabel={karmdaSolution.statusLabel}
            />
            <p className="mt-4 text-base leading-relaxed text-muted">
              {karmdaSolution.description}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {karmdaSolution.benefits.slice(0, 4).map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-karmda"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-surface p-8 lg:p-10">
            <SolutionHeader
              accent={servicesNumeriquesSolution.accent}
              name={servicesNumeriquesSolution.name}
              status={servicesNumeriquesSolution.status}
              statusLabel={servicesNumeriquesSolution.statusLabel}
            />
            <p className="mt-4 text-base leading-relaxed text-muted">
              {servicesNumeriquesSolution.description}
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {digitalServiceCategories.map((category) => (
                <li key={category.title} className="border-t border-border pt-3">
                  <p className="text-sm font-semibold text-relais-navy">{category.title}</p>
                  <p className="mt-1 text-sm text-muted">{category.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 rounded-lg border border-dashed border-lokari/40 bg-surface/60 p-8 lg:flex-row lg:items-start lg:gap-10 lg:p-10">
          <div className="lg:w-1/3 lg:shrink-0">
            <SolutionHeader
              accent={lokariSolution.accent}
              name={lokariSolution.name}
              status={lokariSolution.status}
              statusLabel={lokariSolution.statusLabel}
            />
          </div>
          <div className="flex-1">
            <p className="text-base leading-relaxed text-muted">{lokariSolution.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {lokariSolution.audience.slice(0, 3).map((audience) => (
                <li
                  key={audience}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-14 text-center text-sm font-medium text-muted">
          Une même exigence : des outils simples, utiles et durables.
        </p>
      </Container>
    </Section>
  );
}

type SolutionHeaderProps = {
  accent: SolutionAccent;
  name: string;
  status: SolutionStatus;
  statusLabel: string;
};

function SolutionHeader({ accent, name, status, statusLabel }: SolutionHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <span
          aria-hidden="true"
          className={cn("inline-block h-1 w-10 rounded-full", accentBarClasses[accent])}
        />
        <h3 className="mt-4 text-2xl font-semibold text-relais-navy">{name}</h3>
      </div>
      <span
        className={cn(
          "shrink-0 text-xs font-semibold uppercase tracking-wide",
          status === "available" ? "text-relais-emerald" : "text-muted"
        )}
      >
        {statusLabel}
      </span>
    </div>
  );
}
