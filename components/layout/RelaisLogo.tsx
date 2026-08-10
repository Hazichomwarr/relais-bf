import Link from "next/link";
import { cn } from "@/lib/cn";

type RelaisLogoProps = {
  className?: string;
};

export function RelaisLogo({ className }: RelaisLogoProps) {
  return (
    <Link
      href="/"
      aria-label="RELAIS — Retour à l'accueil"
      className={cn(
        "inline-flex items-center text-lg font-bold tracking-tight text-current sm:text-xl",
        className
      )}
    >
      RELAIS
    </Link>
  );
}
