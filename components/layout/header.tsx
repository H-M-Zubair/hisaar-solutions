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
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] text-mute transition-colors hover:text-paper",
                path === item.href || path.startsWith(`${item.href}/`)
                  ? "text-paper"
                  : "",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={theme === "light" ? "Switch to dark" : "Switch to light"}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="grid h-10 w-10 place-items-center rounded-full text-mute hover:bg-paper/5 hover:text-paper"
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="hidden h-4 w-4 dark:block" />
          </button>
          <MagneticCta className="hidden sm:inline-flex">
            <Button asChild size="sm">
              <a href={site.trialMessage} target="_blank" rel="noopener noreferrer">
                Book a trial
              </a>
            </Button>
          </MagneticCta>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="font-display text-xl">Hisaar</SheetTitle>
              <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl tracking-tight text-paper"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-10">
                <a href={site.trialMessage} target="_blank" rel="noopener noreferrer">
                  Book a trial on WhatsApp
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
