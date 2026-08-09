import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 min-h-11 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-relais-emerald";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-relais-navy text-white hover:bg-relais-navy-deep",
  secondary:
    "bg-relais-emerald text-white hover:bg-relais-emerald-dark",
  ghost:
    "bg-transparent text-relais-navy border border-border hover:bg-surface-soft",
};

type CommonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, keyof CommonProps> & {
    href: React.ComponentProps<typeof Link>["href"];
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);

  if (props.href !== undefined) {
    const linkProps = props as Omit<ButtonAsLink, keyof CommonProps>;
    return (
      <Link className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
