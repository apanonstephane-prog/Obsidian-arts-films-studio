import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--obsidian-dark)] border-t border-[var(--obsidian-border)]">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col leading-none mb-6 group">
              <span className="text-[var(--obsidian-white)] font-bold text-xl tracking-wide group-hover:text-[var(--obsidian-accent)] transition-colors">
                OBSIDIAN
              </span>
              <span className="text-[var(--obsidian-accent)] text-xs tracking-[0.2em] uppercase font-medium">
                Arts Films
              </span>
            </Link>
            <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed max-w-sm mb-6">
              Studio créatif & digital : vidéo, web et automatisation.
              Des solutions concrètes sur mesure pour artistes, professionnels et particuliers.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-[var(--obsidian-accent)] text-sm hover:text-[var(--obsidian-accent-hover)] transition-colors group"
            >
              <Mail size={15} />
              {siteConfig.email}
              <ArrowRight size={13} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-[var(--obsidian-white)] text-sm font-semibold tracking-wide uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--obsidian-text-muted)] text-sm hover:text-[var(--obsidian-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-[var(--obsidian-white)] text-sm font-semibold tracking-wide uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--obsidian-text-muted)] text-sm hover:text-[var(--obsidian-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--obsidian-border)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[var(--obsidian-text-subtle)] text-xs">
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <p className="text-[var(--obsidian-text-subtle)] text-xs">
            Studio créatif & digital
          </p>
        </div>
      </div>
    </footer>
  );
}
