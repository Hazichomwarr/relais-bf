import Image from "next/image";
import { lokariSolution } from "@/content/solutions";

export function LokariPreview() {
  return (
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
        <div className="flex flex-col gap-4 p-8 lg:p-12">
          <span className="text-sm font-medium uppercase tracking-wide text-lokari">
            Ce que nous construisons ensuite
          </span>
          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="text-2xl font-semibold text-relais-navy sm:text-3xl">
              {lokariSolution.name}
            </h2>
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              {lokariSolution.statusLabel}
            </span>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {lokariSolution.description}
          </p>
        </div>
      </div>
    </div>
  );
}
