import Image from "next/image";
import type { Project } from "@/content/projects";

type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectFeatureProps = {
  project: Project;
  image: ProjectImage;
  statusLabel: string;
};

export function ProjectFeature({ project, image, statusLabel }: ProjectFeatureProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-karmda/30 bg-surface">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 1152px, 100vw"
        className="h-auto w-full"
        priority
      />
      <div className="flex flex-col gap-4 p-8 lg:p-10">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-1 w-10 rounded-full bg-karmda" />
          <span className="text-xs font-semibold uppercase tracking-wide text-karmda">
            Produit RELAIS
          </span>
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-2xl font-semibold text-relais-navy sm:text-3xl">
            {project.name}
          </h2>
          <span className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
            {statusLabel}
          </span>
        </div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          {project.category}
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-muted">{project.summary}</p>
      </div>
    </div>
  );
}
