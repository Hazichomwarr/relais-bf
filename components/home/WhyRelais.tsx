import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type MethodStage = {
  number: string;
  title: string;
  description: string;
};

const methodStages: readonly MethodStage[] = [
  {
    number: "01",
    title: "Comprendre",
    description:
      "Nous prenons le temps de comprendre votre activité, vos difficultés et la façon dont vous travaillez aujourd'hui.",
  },
  {
    number: "02",
    title: "Concevoir",
    description:
      "Nous définissons une solution claire, adaptée à vos priorités, avant de commencer le développement.",
  },
  {
    number: "03",
    title: "Développer",
    description:
      "Nous construisons l'outil avec une attention particulière portée à la simplicité, à la fiabilité et à l'usage réel.",
  },
  {
    number: "04",
    title: "Déployer",
    description:
      "Nous mettons la solution en place, accompagnons la prise en main et aidons vos équipes à l'utiliser correctement.",
  },
  {
    number: "05",
    title: "Accompagner",
    description:
      "Nous restons disponibles après la mise en ligne pour assurer le suivi, la maintenance et les améliorations nécessaires.",
  },
];

export function WhyRelais() {
  return (
    <Section variant="white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Pourquoi RELAIS"
              title="Nous ne livrons pas simplement un outil. Nous construisons une solution adaptée à votre activité."
              description="Un bon logiciel ne commence pas par le code. Il commence par une compréhension claire de votre travail, de vos contraintes et de ce que vous cherchez réellement à améliorer."
            />

            <div className="border-l-2 border-relais-emerald pl-5">
              <p className="text-lg font-medium leading-relaxed text-relais-navy">
                Notre objectif n&apos;est pas de vous donner plus de
                technologie. C&apos;est de vous aider à mieux travailler grâce
                à la technologie.
              </p>
            </div>
          </div>

          <ol className="relative flex flex-col gap-10">
            <div
              aria-hidden="true"
              className="absolute top-5 bottom-5 left-5 w-px bg-border"
            />
            {methodStages.map((stage) => (
              <li key={stage.number} className="relative flex gap-5">
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-relais-navy">
                  {stage.number}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-lg font-semibold text-relais-navy">
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {stage.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
