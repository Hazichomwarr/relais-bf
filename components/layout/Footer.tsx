import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { companyIdentity, positioningStatement } from "@/content/company";
import { mainNavigation } from "@/content/navigation";
import { solutions } from "@/content/solutions";
import { contactChannels } from "@/content/contact";
import { cn } from "@/lib/cn";
import { RelaisLogo } from "./RelaisLogo";

const linkClasses = "text-sm text-white/70 transition-colors hover:text-white";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-relais-navy-deep text-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 sm:gap-10 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-8">
          <div className="flex max-w-sm flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <RelaisLogo className="text-white" />
            <p className="text-sm font-medium text-white/80">{companyIdentity.slogan}</p>
            <p className="text-sm leading-relaxed text-white/60">{positioningStatement}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Navigation
            </h3>
            <nav aria-label="Navigation du pied de page">
              <ul className="mt-4 flex flex-col gap-3">
                {mainNavigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClasses}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Solutions
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {solutions.map((solution) => (
                <li key={solution.slug}>
                  <Link href={solution.href} className={cn(linkClasses, "inline-flex items-center gap-2")}>
                    {solution.name}
                    {solution.status === "development" && (
                      <span className="rounded-full border border-white/20 px-2 py-0.5 text-[11px] font-medium text-white/50">
                        Bientôt
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/50">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {contactChannels.map((channel) => {
                const isExternal = channel.href.startsWith("http");
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      className={cn(linkClasses, "break-words")}
                      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className="sr-only">{channel.label} : </span>
                      {channel.value}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {companyIdentity.legalName}. Tous droits réservés.
          </p>
          <p>{companyIdentity.country}</p>
        </div>
      </Container>
    </footer>
  );
}
