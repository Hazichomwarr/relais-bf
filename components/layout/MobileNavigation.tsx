"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { NavigationItem } from "@/content/navigation";
import { isActiveHref } from "./Navbar";

const CONTACT_HREF = "/contact";

type MobileNavigationProps = {
  items: readonly NavigationItem[];
  pathname: string;
};

export function MobileNavigation({ items, pathname }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [previousPathname, setPreviousPathname] = useState(pathname);
  const menuId = useId();

  if (pathname !== previousPathname) {
    setPreviousPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const links = items.filter((item) => item.href !== CONTACT_HREF);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-relais-navy transition-colors hover:bg-surface-soft"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        id={menuId}
        className={cn(
          "absolute inset-x-0 top-full border-b border-border bg-background/95 backdrop-blur",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav aria-label="Navigation mobile" className="flex flex-col gap-1 px-6 py-4">
          {links.map((item) => {
            const active = isActiveHref(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base font-medium transition-colors",
                  active
                    ? "bg-surface-soft text-relais-navy"
                    : "text-muted hover:bg-surface-soft hover:text-relais-navy"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button
            href={CONTACT_HREF}
            variant="primary"
            className="mt-3 w-full"
            onClick={() => setIsOpen(false)}
          >
            Nous contacter
          </Button>
        </nav>
      </div>
    </div>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}
