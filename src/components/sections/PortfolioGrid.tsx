"use client";

import { useState } from "react";
import { ExternalLink, Clock } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { portfolioItems, categoryLabels, type PortfolioCategory } from "@/lib/data/portfolio";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const filters: { label: string; value: "all" | PortfolioCategory }[] = [
  { label: "Tous", value: "all" },
  { label: "Vidéo", value: "video" },
  { label: "Musique", value: "musique" },
  { label: "Publicité", value: "publicite" },
  { label: "Web", value: "web" },
  { label: "IA / Auto.", value: "ia" },
];

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
  showCTA?: boolean;
}

export function PortfolioGrid({ limit, showFilters = true, showCTA = false }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | PortfolioCategory>("all");

  const filtered =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <Section id="portfolio">
      <Container>
        <SectionHeader
          tag="Réalisations"
          title="Nos derniers projets"
          subtitle="Un aperçu de ce que nous créons pour nos clients. Chaque projet est unique, pensé sur mesure."
        />

        {showFilters && (
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtres par catégorie">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeFilter === filter.value
                    ? "bg-[var(--obsidian-accent)] text-[var(--obsidian-black)]"
                    : "bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] text-[var(--obsidian-text-muted)] hover:text-[var(--obsidian-text)] hover:border-[var(--obsidian-muted)]"
                )}
                aria-pressed={activeFilter === filter.value}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((item) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-xl border border-[var(--obsidian-border)] bg-[var(--obsidian-card)] card-hover"
            >
              {/* Placeholder image */}
              <div
                className="w-full aspect-video bg-[var(--obsidian-muted)] flex items-center justify-center relative overflow-hidden"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.3) 0%, transparent 70%)`,
                  }}
                />
                <span className="text-[var(--obsidian-text-subtle)] text-xs font-medium tracking-wide uppercase">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="tag text-xs">{item.categoryLabel}</span>
                  {!item.available && (
                    <span className="flex items-center gap-1 text-[var(--obsidian-text-subtle)] text-xs">
                      <Clock size={11} />
                      À venir
                    </span>
                  )}
                </div>
                <h3 className="text-[var(--obsidian-white)] font-semibold text-base mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.available && item.link ? (
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-[var(--obsidian-accent)] text-sm font-medium hover:gap-2.5 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                    <ExternalLink size={13} />
                  </a>
                ) : (
                  <span className="text-[var(--obsidian-text-subtle)] text-sm">
                    Bientôt disponible
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {showCTA && (
          <div className="mt-10 text-center">
            <Button href="/portfolio" variant="outline">
              Voir toutes les réalisations
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
