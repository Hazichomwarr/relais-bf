import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectFeature } from "@/components/realisations/ProjectFeature";
import { ProjectGridItem } from "@/components/realisations/ProjectGridItem";
import { LokariPreview } from "@/components/realisations/LokariPreview";
import { FinalCTA } from "@/components/layout/FinalCTA";
import { projects, type ProjectStatus } from "@/content/projects";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Découvrez les produits RELAIS et les solutions numériques réalisées pour des entreprises et organisations au Burkina Faso et à l'international.",
};

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

const statusLabels: Record<ProjectStatus, string> = {
  live: "En ligne",
  ongoing: "En cours",
};

export default function RealisationsPage() {
  const karmdaProject = projects.find((project) => project.slug === "karmda")!;
  const clientProjects = projects.filter((project) => project.kind === "client");

  return (
    <>
      <Section variant="white">
        <Container>
          <div className="max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-wide text-relais-emerald">
              Nos réalisations
            </span>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-relais-navy md:text-5xl">
              Des projets concrets, pensés pour des besoins réels.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Produits développés par RELAIS et solutions réalisées pour des
              entreprises et organisations aux besoins différents.
            </p>
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <ProjectFeature
            project={karmdaProject}
            image={projectImages[karmdaProject.slug]}
            statusLabel={statusLabels[karmdaProject.status]}
          />
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <div className="flex flex-col gap-16 lg:gap-24">
            {clientProjects.map((project, index) => (
              <ProjectGridItem
                key={project.slug}
                project={project}
                image={projectImages[project.slug]}
                statusLabel={statusLabels[project.status]}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="soft">
        <Container>
          <LokariPreview />
          <p className="mt-14 text-center text-sm font-medium text-muted">
            Chaque projet commence par un besoin concret. Notre travail
            consiste à construire l&apos;outil qui y répond.
          </p>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
