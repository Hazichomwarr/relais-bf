import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Project } from "@/content/projects";

type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ProjectGridItemProps = {
  project: Project;
  image: ProjectImage;
  statusLabel: string;
  reverse?: boolean;
};

export function ProjectGridItem({
  project,
  image,
  statusLabel,
  reverse = false,
}: ProjectGridItemProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
      <div
        className={cn(
          "overflow-hidden rounded-md border border-border bg-surface",
          reverse && "lg:order-2"
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </div>
      <div className={cn(reverse && "lg:order-1")}>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-relais-emerald">
            Projet client
          </span>
          <span className="text-xs font-medium text-muted">{statusLabel}</span>
        </div>
        <h2 className="mt-2 text-2xl font-semibold text-relais-navy">{project.name}</h2>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
          {project.category}
        </p>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
          {project.summary}
        </p>
      </div>
    </div>
  );
}
