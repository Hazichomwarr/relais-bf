import { cn } from "@/lib/cn";

type SectionVariant = "default" | "white" | "soft" | "navy";

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-background text-foreground",
  white: "bg-surface text-foreground",
  soft: "bg-surface-soft text-foreground",
  navy: "bg-relais-navy text-white",
};

type SectionProps = {
  children: React.ReactNode;
  variant?: SectionVariant;
  className?: string;
};

export function Section({ children, variant = "default", className }: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-24", variantClasses[variant], className)}>
      {children}
    </section>
  );
}
