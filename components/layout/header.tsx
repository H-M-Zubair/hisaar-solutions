"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MagneticCta } from "@/components/layout/magnetic-cta";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const drawerNav = [{ href: "/", label: "Hisaar" }, ...nav] as const;

function isActivePath(path: string, href: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export function Header() {
  const path = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled
          ? "border-line bg-ink/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 min-w-0 max-w-[1280px] items-center justify-between gap-3 px-5 sm:gap-4 sm:px-8">
        <div className="min-w-0 shrink">
          <Logo priority />
        </div>
        <nav className="hidden min-w-0 items-center gap-5 xl:flex xl:gap-7" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                path === item.href || path.startsWith(`${item.href}/`)
                  ? "page"
                  : undefined
              }
              className={cn(
                "shrink-0 text-[13px] text-mute transition-colors hover:text-paper",
                path === item.href || path.startsWith(`${item.href}/`)
                  ? "text-paper"
                  : "",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="btn btn-square grid h-10 w-10 place-items-center bg-transparent text-mute hover:bg-paper/5 hover:text-paper"
          >
            <Sun className="h-4 w-4 dark:hidden" aria-hidden />
            <Moon className="hidden h-4 w-4 dark:block" aria-hidden />
          </button>
          <MagneticCta className="hidden sm:inline-flex">
            <Button asChild size="sm">
              <a
                href={site.trialMessage}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Try Omni Ledger for 14 days on WhatsApp (opens in a new tab)"
              >
                Try 14 days
              </a>
            </Button>
          </MagneticCta>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mb-8 pr-8" onClick={() => setOpen(false)}>
                <Logo />
              </div>
              <nav className="mt-2 flex flex-col items-start gap-1.5" aria-label="Mobile">
                {drawerNav.map((item) => {
                  const active = isActivePath(path, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-full px-4 py-2 font-display text-2xl tracking-tight transition-colors",
                        active
                          ? "bg-teal text-ink"
                          : "text-paper hover:bg-paper/5",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <Button asChild className="mt-10">
                <a
                  href={site.trialMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book a 14-day Omni Ledger trial on WhatsApp (opens in a new tab)"
                >
                  Try 14 days on WhatsApp
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
