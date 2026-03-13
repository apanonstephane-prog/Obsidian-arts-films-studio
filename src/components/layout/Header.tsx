"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--obsidian-black)]/95 backdrop-blur-md border-b border-[var(--obsidian-border)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label="OBSIDIAN Arts Films — Accueil"
            >
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={140}
                height={48}
                className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80"
                style={{ filter: "invert(1) brightness(1.1)" }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {navLinks.filter((l) => l.label !== "Contact").map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                      isActive
                        ? "text-[var(--obsidian-accent)] bg-[var(--obsidian-accent-dim)]"
                        : "text-[var(--obsidian-text-muted)] hover:text-[var(--obsidian-text)] hover:bg-[var(--obsidian-card)]"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Button href="/contact" variant="primary" size="sm" className="hidden sm:inline-flex">
                Demander un devis
              </Button>
              <button
                className="lg:hidden p-2 text-[var(--obsidian-text-muted)] hover:text-[var(--obsidian-text)] rounded-lg hover:bg-[var(--obsidian-card)] transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        style={{ background: "rgba(10,10,11,0.8)", backdropFilter: "blur(4px)" }}
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-72 lg:hidden transition-transform duration-300 ease-in-out",
          "bg-[var(--obsidian-dark)] border-l border-[var(--obsidian-border)]",
          "flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--obsidian-border)]">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={100}
            height={34}
            className="h-7 w-auto object-contain"
            style={{ filter: "invert(1) brightness(1.1)" }}
          />
          <button
            className="p-2 text-[var(--obsidian-text-muted)] hover:text-[var(--obsidian-text)] rounded-lg"
            onClick={() => setIsOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Navigation mobile">
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all",
                      isActive
                        ? "text-[var(--obsidian-accent)] bg-[var(--obsidian-accent-dim)]"
                        : "text-[var(--obsidian-text-muted)] hover:text-[var(--obsidian-text)] hover:bg-[var(--obsidian-card)]"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-4 pb-8">
          <Button href="/contact" variant="primary" className="w-full">
            Demander un devis
          </Button>
        </div>
      </div>
    </>
  );
}
