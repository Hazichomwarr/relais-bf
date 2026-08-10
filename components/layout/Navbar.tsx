"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { mainNavigation } from "@/content/navigation";
import { cn } from "@/lib/cn";
import { RelaisLogo } from "./RelaisLogo";
import { MobileNavigation } from "./MobileNavigation";

export function isActiveHref(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const CONTACT_HREF = "/contact";

export function Navbar() {
  const pathname = usePathname();
  const links = mainNavigation.filter((item) => item.href !== CONTACT_HREF);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <Container>
        <div className="flex h-18 items-center justify-between lg:h-20">
          <RelaisLogo className="text-relais-navy" />

          <nav aria-label="Navigation principale" className="hidden lg:flex lg:items-center lg:gap-8">
            {links.map((item) => {
              const active = isActiveHref(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative pb-1 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded-full after:transition-colors",
                    active
                      ? "text-relais-navy after:bg-relais-emerald"
                      : "text-muted hover:text-relais-navy after:bg-transparent"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href={CONTACT_HREF} variant="primary">
              Nous contacter
            </Button>
          </div>

          <MobileNavigation items={mainNavigation} pathname={pathname} />
        </div>
      </Container>
    </header>
  );
}
