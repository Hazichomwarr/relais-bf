import { cn } from "@/lib/cn";

type SectionVariant = "default" | "white" | "soft" | "navy";

const variantClasses: Record<SectionVariant, string> = {
  default: "bg-background text-foreground",
  white: "bg-surface text-foreground",
  soft: "bg-surface-soft text-foreground",
  navy: "bg-relais-navy text-white",
};

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  variant?: SectionVariant;
};

export function Section({ children, variant = "default", className, ...props }: SectionProps) {
  return (
    <section
      className={cn("scroll-mt-24 py-16 sm:py-24", variantClasses[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}
