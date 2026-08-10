import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type ProjectStatus } from "@/content/projects";
import { lokariSolution } from "@/content/solutions";

type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const projectImages: Record<string, ProjectImage> = {
  karmda: {
    src: "/images/projects/karmda.png",
    alt: "Interface de gestion scolaire KARMDA",
    width: 2560,
    height: 1068,
  },
  "frednes-international-market": {
    src: "/images/projects/frednes.png",
    alt: "Plateforme e-commerce Frednes International Market",
    width: 2694,
    height: 1600,
  },
  "pat-express-shipping": {
    src: "/images/projects/pat-shipping.png",
    alt: "Interface de demande d'expédition Pat Express Shipping",
    width: 2594,
    height: 1790,
  },
  "consulat-burkina-faso-new-jersey": {
    src: "/images/projects/consulate.png",
    alt: "Site du Consulat du Burkina Faso au New Jersey",
    width: 2858,
    height: 1776,
  },
};

const lokariImage: ProjectImage = {
  src: "/images/projects/lokari.png",
  alt: "Aperçu de l'interface Lokari, solution de gestion immobilière en développement",
  width: 3092,
  height: 1760,
};

const statusLabels: Record<ProjectStatus, string> = {
  live: "En ligne",
  ongoing: "En cours",
};

export function ProjectsShowcase() {
  const karmdaProject = projects.find((project) => project.slug === "karmda")!;
  const clientProjects = projects.filter((project) => project.kind === "client");

  return (
    <Section variant="soft">
      <Container>
        <SectionHeading
          eyebrow="Nos réalisations"
          title="Des solutions concrètes, déjà mises en pratique."
          description="Produits RELAIS et projets réalisés pour des organisations aux besoins différents — avec la même exigence de clarté, d'utilité et de qualité."
        />

        <div className="mt-12 overflow-hidden rounded-lg border border-karmda/30 bg-surface">
          <Image
            src={projectImages[karmdaProject.slug].src}
            alt={projectImages[karmdaProject.slug].alt}
            width={projectImages[karmdaProject.slug].width}
            height={projectImages[karmdaProject.slug].height}
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="h-auto w-full"
          />
          <div className="flex flex-col gap-4 p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-1 w-10 rounded-full bg-karmda" />
              <span className="text-xs font-semibold uppercase tracking-wide text-karmda">
                Produit RELAIS
              </span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="text-2xl font-semibold text-relais-navy">{karmdaProject.name}</h3>
              <span className="text-xs font-medium uppercase tracking-wide text-muted">
                {karmdaProject.category}
              </span>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              {karmdaProject.summary}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {clientProjects.map((project) => {
            const image = projectImages[project.slug];
            return (
              <div key={project.slug} className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-md border border-border bg-surface">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
                      Projet client
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {statusLabels[project.status]}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-relais-navy">{project.name}</h3>
                  <p className="mt-1 text-sm text-muted">{project.category}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-dashed border-lokari/40 bg-surface/60">
          <div className="grid gap-0 lg:grid-cols-2 lg:items-center">
            <Image
              src={lokariImage.src}
              alt={lokariImage.alt}
              width={lokariImage.width}
              height={lokariImage.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
            <div className="flex flex-col gap-4 p-8 lg:p-10">
              <span className="text-xs font-semibold uppercase tracking-wide text-lokari">
                Ce que nous construisons ensuite
              </span>
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-2xl font-semibold text-relais-navy">{lokariSolution.name}</h3>
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
      </Container>
    </Section>
  );
}
