"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, Play, Monitor, Film } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { portfolioItems, categoryLabels, type PortfolioCategory, type PortfolioItem } from "@/lib/data/portfolio";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const filters: { label: string; value: "all" | PortfolioCategory }[] = [
  { label: "Tous", value: "all" },
  { label: "Vidéo", value: "video" },
  { label: "Musique", value: "musique" },
  { label: "Publicité", value: "publicite" },
  { label: "Web", value: "web" },
  { label: "IA / App", value: "ia" },
];

function getEmbedUrl(item: PortfolioItem): string {
  switch (item.embedType) {
    case "youtube":
      return `https://www.youtube.com/embed/${item.embedSrc}?autoplay=1`;
    case "instagram":
      return `https://www.instagram.com/reel/${item.embedSrc}/embed/`;
    case "iframe":
      return item.embedSrc || "";
    default:
      return "";
  }
}

function VideoThumbnail({ item }: { item: PortfolioItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => { video.currentTime = 1; };
    video.addEventListener("loadedmetadata", onLoaded);
    return () => video.removeEventListener("loadedmetadata", onLoaded);
  }, []);

  return (
    <div className="w-full aspect-video relative overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={item.embedSrc}
        poster={item.thumbnail}
        preload="metadata"
        muted
        playsInline
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
        <div className="w-12 h-12 rounded-full bg-[var(--obsidian-accent)] flex items-center justify-center shadow-lg">
          <Play size={20} fill="black" className="ml-1" />
        </div>
      </div>
    </div>
  );
}

function CardThumbnail({ item }: { item: PortfolioItem }) {
  // YouTube: always use YouTube thumbnail (no custom thumbnail needed)
  if (item.embedType === "youtube") {
    return (
      <div className="w-full aspect-video relative overflow-hidden bg-black">
        <img
          src={`https://img.youtube.com/vi/${item.embedSrc}/hqdefault.jpg`}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-[var(--obsidian-accent)] flex items-center justify-center shadow-lg">
            <Play size={20} fill="black" className="ml-1" />
          </div>
        </div>
      </div>
    );
  }

  // Direct MP4 video — show real first frame, poster as fallback while loading
  if (item.embedType === "video") {
    return <VideoThumbnail item={item} />;
  }

  // Instagram with custom thumbnail
  if (item.embedType === "instagram" && item.thumbnail) {
    return (
      <div className="w-full aspect-video relative overflow-hidden bg-black">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => {}}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-[var(--obsidian-accent)] flex items-center justify-center shadow-lg">
            <Play size={20} fill="black" className="ml-1" />
          </div>
        </div>
      </div>
    );
  }

  // Instagram without custom thumbnail — gradient fallback
  if (item.embedType === "instagram") {
    return (
      <div className="w-full aspect-video relative overflow-hidden flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F77737)" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Play size={20} fill="white" className="ml-1" />
          </div>
          <span className="text-white text-xs font-medium opacity-80">Reel Instagram</span>
        </div>
      </div>
    );
  }

  // iFrame with custom thumbnail
  if (item.embedType === "iframe" && item.thumbnail) {
    return (
      <div className="w-full aspect-video relative overflow-hidden bg-[var(--obsidian-muted)]">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => {}}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
          <div className="w-12 h-12 rounded-full bg-[var(--obsidian-accent)] flex items-center justify-center shadow-lg">
            {item.category === "web" ? (
              <Monitor size={20} className="text-black" />
            ) : (
              <Film size={20} className="text-black" />
            )}
          </div>
        </div>
      </div>
    );
  }

  // iFrame without thumbnail — minimal fallback
  if (item.embedType === "iframe") {
    return (
      <div className="w-full aspect-video relative overflow-hidden bg-[var(--obsidian-muted)] flex items-center justify-center">
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(200,169,110,0.4) 0%, transparent 70%)" }}
        />
        <div className="relative flex flex-col items-center gap-2">
          {item.category === "web" ? (
            <Monitor size={32} className="text-[var(--obsidian-accent)] opacity-70" />
          ) : (
            <Film size={32} className="text-[var(--obsidian-accent)] opacity-70" />
          )}
          <span className="text-[var(--obsidian-text-subtle)] text-xs font-medium tracking-wide uppercase">
            {item.categoryLabel}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full aspect-video bg-[var(--obsidian-muted)] flex items-center justify-center">
      <span className="text-[var(--obsidian-text-subtle)] text-xs font-medium tracking-wide uppercase">
        {item.categoryLabel}
      </span>
    </div>
  );
}

interface PortfolioGridProps {
  limit?: number;
  showFilters?: boolean;
  showCTA?: boolean;
}

export function PortfolioGrid({ limit, showFilters = true, showCTA = false }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | PortfolioCategory>("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedItem(null);
    }
    if (selectedItem) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

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
              className="group relative overflow-hidden rounded-xl border border-[var(--obsidian-border)] bg-[var(--obsidian-card)] card-hover cursor-pointer"
              onClick={() => item.available && setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && item.available && setSelectedItem(item)}
              aria-label={`Voir ${item.title}`}
            >
              <CardThumbnail item={item} />

              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="tag text-xs">{item.categoryLabel}</span>
                </div>
                <h3 className="text-[var(--obsidian-white)] font-semibold text-base mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[var(--obsidian-accent)] text-sm font-medium">
                  Voir le projet →
                </span>
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

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[var(--obsidian-card)] rounded-2xl overflow-hidden border border-[var(--obsidian-border)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            {selectedItem.embedType === "video" ? (
              <div className="w-full aspect-video bg-black">
                <video
                  src={selectedItem.embedSrc}
                  controls
                  autoPlay
                  className="w-full h-full"
                  playsInline
                >
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
              </div>
            ) : selectedItem.embedType === "instagram" ? (
              <div className="flex justify-center bg-black py-4" style={{ minHeight: "560px" }}>
                <iframe
                  src={`https://www.instagram.com/reel/${selectedItem.embedSrc}/embed/`}
                  width="400"
                  height="540"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                  allow="autoplay; fullscreen"
                  className="rounded-lg"
                />
              </div>
            ) : selectedItem.embedType === "iframe" ? (
              <div className="w-full" style={{ height: "560px" }}>
                <iframe
                  src={selectedItem.embedSrc}
                  className="w-full h-full border-0"
                  allow="fullscreen"
                  title={selectedItem.title}
                />
              </div>
            ) : (
              <div className="w-full aspect-video">
                <iframe
                  src={getEmbedUrl(selectedItem)}
                  className="w-full h-full border-0"
                  allowFullScreen
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={selectedItem.title}
                />
              </div>
            )}

            <div className="p-6">
              <span className="tag text-xs">{selectedItem.categoryLabel}</span>
              <h3 className="text-[var(--obsidian-white)] font-semibold text-xl mt-3 mb-2">
                {selectedItem.title}
              </h3>
              <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
