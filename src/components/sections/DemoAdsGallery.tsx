"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { Container } from "@/components/ui/Section";

type DemoAd = {
  id: string;
  title: string;
  brand: string;
  sector: string;
  description: string;
  image: string;
};

const guyaneAds: DemoAd[] = [
  {
    id: "wassai",
    title: "L'Amazonie en bouteille",
    brand: "Jeune Gueule × Yana Wassaï",
    sector: "Identité pop · Produit",
    description: "Une rencontre haute en couleur entre culture urbaine et imaginaire amazonien.",
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38Z5SdprKPAyFm5lutStOjNJFmo/50e02af7-7b09-4e9f-aecc-b584be29415b.jpg",
  },
  {
    id: "kymea",
    title: "L'éclat vient d'Amazonie",
    brand: "Kymëa · Huile de papaye",
    sector: "Beauté · Editorial",
    description: "Lumière solaire, peau et papaye dans une composition de cosmétique premium.",
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38Z5SdprKPAyFm5lutStOjNJFmo/69763024-892e-4dd0-a4bd-0b55dd78d3f0.jpg",
  },
  {
    id: "mopei",
    title: "Le punch qui sent la maison",
    brand: "Mo Pei · Punch passion",
    sector: "Vintage · Illustration",
    description: "Une affiche de voyage rétro, inspirée des paysages et des couleurs de Guyane.",
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38Z5SdprKPAyFm5lutStOjNJFmo/d5677ec5-40b9-41e7-993e-d0509216142e.jpg",
  },
  {
    id: "blaka",
    title: "La nuit a le goût du cupuaçu",
    brand: "Jeune Gueule Blaka",
    sector: "Cinématique · Ambiance",
    description: "Un écrin nocturne au cœur de la forêt, entre mystère et éclairage sculpté.",
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38Z5SdprKPAyFm5lutStOjNJFmo/8f893eb2-63ed-4781-9dab-b535b6eef9e3.jpg",
  },
  {
    id: "bois-rose",
    title: "Un parfum que l'on croyait perdu",
    brand: "Bois de rose de Guyane",
    sector: "Patrimoine · Botanique",
    description: "Une étude botanique au traitement patrimonial, comme une planche de collection.",
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38Z5SdprKPAyFm5lutStOjNJFmo/c28fddd0-126f-4b17-98e5-aac00ce37b14.jpg",
  },
  {
    id: "toco",
    title: "Tout le goût. Zéro brûlure.",
    brand: "Toco · Délices de Guyane",
    sector: "Food · Product shot",
    description: "Une explosion graphique d'ingrédients autour d'un produit au caractère affirmé.",
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38Z5SdprKPAyFm5lutStOjNJFmo/0e89066b-a916-4b7c-97ab-82f9f80c9197.jpg",
  },
  {
    id: "blonde",
    title: "La Guyane a soif de fête",
    brand: "Jeune Gueule Blonde",
    sector: "Culture · Événement",
    description: "Une scène de carnaval lumineuse, vivante et riche en détails.",
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38Z5SdprKPAyFm5lutStOjNJFmo/1f24f63c-1848-42e6-9310-195c635abb1a.jpg",
  },
  {
    id: "cayennaise",
    title: "Le temps est notre premier ingrédient",
    brand: "La Cayennaise XO",
    sector: "Luxe · Nature morte",
    description: "Bois, ambre et lumière pour une mise en scène de patrimoine et de savoir-faire.",
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38Z5SdprKPAyFm5lutStOjNJFmo/264a31e9-dd07-4450-85ac-edd590f4ece4.jpg",
  },
  {
    id: "pracaxi",
    title: "La forêt, version soin",
    brand: "Nature Amazonie · Pracaxi",
    sector: "Cosmétique · Minimalisme",
    description: "Une direction artistique apaisée, construite autour de la matière et de l'eau.",
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38Z5SdprKPAyFm5lutStOjNJFmo/a9f5a381-fac0-438f-8b25-967a5ad218fb.jpg",
  },
  {
    id: "vanille",
    title: "L'or noir de la forêt",
    brand: "Vanille de Guyane",
    sector: "Gastronomie · Luxe",
    description: "Un écrin de velours noir et d'or pour magnifier un ingrédient d'exception.",
    image: "https://d2ol7oe51mr4n9.cloudfront.net/user_38Z5SdprKPAyFm5lutStOjNJFmo/a4b7189d-9fac-4caa-91d0-85eeb051836e.jpg",
  },
];

const internationalAds: DemoAd[] = [
  {
    "id": "nike",
    "title": "Décolle.",
    "brand": "Nike · Air Max Dn",
    "sector": "Sport · Typographie",
    "description": "Le mouvement devient langage graphique.",
    "image": "https://static.metricool.com/planner/202611/8064555-file-12761181239481034535.png"
  },
  {
    "id": "dior",
    "title": "La nuit a un sillage.",
    "brand": "Dior · Sauvage Elixir",
    "sector": "Parfum · Luxe",
    "description": "Un univers nocturne sculpté par la lumière.",
    "image": "https://static.metricool.com/planner/202611/8064555-file-14479877713795573323.png"
  },
  {
    "id": "apple",
    "title": "Le bruit. Hors service.",
    "brand": "Apple · AirPods Pro 3",
    "sector": "Technologie · Minimalisme",
    "description": "L'isolement sonore traduit en composition épurée.",
    "image": "https://static.metricool.com/planner/202611/8064555-file-8363340266628581672.png"
  },
  {
    "id": "lorina",
    "title": "Le soleil se boit frais.",
    "brand": "Lorina · L'Originale",
    "sector": "Boisson · Art nouveau",
    "description": "Une interprétation fraîche et solaire de l'affiche illustrée.",
    "image": "https://static.metricool.com/planner/202611/8064555-file-17430694329877421220.png"
  },
  {
    "id": "samsung",
    "title": "Photographiez l'invisible.",
    "brand": "Samsung · Galaxy S26 Ultra",
    "sector": "Technologie · Science-fiction",
    "description": "Un imaginaire visuel construit autour de la photographie.",
    "image": "https://static.metricool.com/planner/202611/8064555-file-12999763814982506601.png"
  },
  {
    "id": "rituals",
    "title": "Ralentir est un luxe.",
    "brand": "Rituals · The Ritual of Sakura",
    "sector": "Beauté · Éditorial",
    "description": "Un instant de douceur et de contemplation.",
    "image": "https://static.metricool.com/planner/202611/8064555-file-1093581146190122642.png"
  },
  {
    "id": "marshall",
    "title": "Le stade tient dans ta main.",
    "brand": "Marshall · Emberton III",
    "sector": "Musique · Produit",
    "description": "L'énergie d'une scène dans un format compact.",
    "image": "https://static.metricool.com/planner/202611/8064555-file-16196674444565519310.png"
  },
  {
    "id": "lindt",
    "title": "L'intensité est un art.",
    "brand": "Lindt · Excellence Noir 70 %",
    "sector": "Gastronomie · Luxe",
    "description": "La matière et le contraste au service du chocolat.",
    "image": "https://static.metricool.com/planner/202611/8064555-file-18281912714550612572.png"
  },
  {
    "id": "nespresso",
    "title": "Un pop de bonne humeur.",
    "brand": "Nespresso · Vertuo Pop",
    "sector": "Lifestyle · Pop",
    "description": "Une composition colorée et énergique.",
    "image": "https://static.metricool.com/planner/202611/8064555-file-17157180322547944105.png"
  },
  {
    "id": "yeti",
    "title": "Construite pour l'inconnu.",
    "brand": "YETI · Rambler",
    "sector": "Outdoor · Aventure",
    "description": "Une proposition visuelle tournée vers l'exploration.",
    "image": "https://static.metricool.com/planner/202611/8064555-file-14008396176628341910.png"
  }
];
const demoAds = [...internationalAds, ...guyaneAds];
const collections = [
  { id: "international", name: "Horizons internationaux", subtitle: "Sport, luxe, technologie, gastronomie et lifestyle.", ads: internationalAds, offset: 0 },
  { id: "guyane", name: "Racines guyanaises", subtitle: "Matières, patrimoine, savoir-faire et culture amazonienne.", ads: guyaneAds, offset: internationalAds.length },
];

export function DemoAdsGallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((current) => current === null ? null : (current + 1) % demoAds.length);
      if (event.key === "ArrowLeft") setSelected((current) => current === null ? null : (current - 1 + demoAds.length) % demoAds.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  const activeAd = selected !== null ? demoAds[selected] : null;

  return (
    <section
      id="publicites-demonstration"
      aria-labelledby="demo-ads-title"
      className="relative overflow-hidden border-t border-[var(--obsidian-border)] py-20 md:py-28"
      style={{ background: "radial-gradient(ellipse 70% 30% at 50% 0%, rgba(200,169,110,0.07), transparent 80%), #111114" }}
    >
      <Container>
        <div className="mb-12 flex flex-col gap-7 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="tag mb-5">Laboratoire créatif · Publicité</span>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--obsidian-accent)]">
              Direction artistique / Publicité image
            </p>
            <h2 id="demo-ads-title" className="text-4xl font-semibold tracking-tight text-[var(--obsidian-white)] md:text-5xl lg:text-6xl">
              20 concepts.
              <span className="block font-light text-[var(--obsidian-accent)]">Deux collections. Une signature.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--obsidian-text-muted)] md:text-lg">
              Deux regards sur la création publicitaire : dix concepts pour des marques internationales et dix inspirés de la Guyane. Du produit à l'identité visuelle, chaque affiche explore une direction artistique singulière.
            </p>
          </div>
          <div className="shrink-0 rounded-xl border border-[var(--obsidian-accent)]/30 bg-[var(--obsidian-accent-dim)] px-5 py-4 lg:max-w-64">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--obsidian-accent)]">
              Publicités de démonstration
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--obsidian-text)]">
              Concepts non commandités. Aucune collaboration officielle avec les marques présentées.
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {collections.map((collection, collectionIndex) => (
            <div key={collection.id} id={collection.id} className="scroll-mt-28">
              <div className="mb-7 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--obsidian-border)] pb-5">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--obsidian-accent)]">Collection 0{collectionIndex + 1} / 02</p>
                  <h3 className="text-2xl font-semibold text-[var(--obsidian-white)] md:text-4xl">{collection.name}</h3>
                  <p className="mt-2 text-sm text-[var(--obsidian-text-muted)]">{collection.subtitle}</p>
                </div>
                <span className="tag">10 créations</span>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {collection.ads.map((ad, index) => (
            <article
              key={ad.id}
              className="group overflow-hidden rounded-2xl border border-[var(--obsidian-border)] bg-[var(--obsidian-card)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--obsidian-accent)]/60 hover:shadow-[0_24px_60px_rgba(0,0,0,0.48)]"
            >
              <button
                type="button"
                className="block w-full cursor-zoom-in text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[var(--obsidian-accent)]"
                aria-label={`Agrandir l'affiche de démonstration : ${ad.brand}`}
                onClick={() => setSelected(collection.offset + index)}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0c0c0e]">
                  <img
                    src={ad.image}
                    alt={`Concept publicitaire non commandité : ${ad.brand}, « ${ad.title} »`}
                    width={1229}
                    height={1536}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-md">
                    Démonstration
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/65 text-white backdrop-blur-md transition-transform group-hover:scale-110" aria-hidden="true">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
                <div className="px-5 pb-6 pt-5">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--obsidian-accent)]">
                    {ad.sector}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight text-[var(--obsidian-white)]">{ad.title}</h3>
                  <p className="mt-1 text-sm font-medium text-[var(--obsidian-text)]">{ad.brand}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--obsidian-text-muted)]">{ad.description}</p>
                </div>
              </button>
            </article>
          ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-[var(--obsidian-border)] pt-8 md:flex-row md:items-center">
          <p className="max-w-3xl text-xs leading-relaxed text-[var(--obsidian-text-muted)]">
            Ces vingt visuels sont des études créatives réalisées à des fins de démonstration.
            Ils ne constituent ni des campagnes officielles, ni des commandes, ni une approbation des marques représentées.
            Les créations figurant des boissons alcoolisées sont des exercices de direction artistique, non des supports destinés à la diffusion publicitaire.
          </p>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[var(--obsidian-accent)] px-5 py-3 text-sm font-semibold text-[var(--obsidian-accent)] transition-colors hover:bg-[var(--obsidian-accent)] hover:text-[var(--obsidian-black)]"
          >
            Créons votre campagne <ArrowUpRight size={16} />
          </Link>
        </div>
      </Container>

      {activeAd && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Affiche ${selected! + 1} sur ${demoAds.length} : ${activeAd.brand}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-xl sm:p-6"
          onClick={() => setSelected(null)}
        >
          <div className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4" onClick={(event) => event.stopPropagation()}>
            <div className="flex w-full items-center justify-between gap-4 text-white">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--obsidian-accent)]">
                  Publicité de démonstration · {selected! + 1} / {demoAds.length}
                </p>
                <p className="truncate text-sm font-semibold sm:text-lg">{activeAd.brand}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fermer l'affiche"
                className="rounded-full border border-white/20 bg-white/10 p-3 transition-colors hover:bg-white/20"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative flex min-h-0 w-full flex-1 items-center justify-center gap-2 sm:gap-5">
              <button
                type="button"
                aria-label="Affiche précédente"
                onClick={() => setSelected((selected! - 1 + demoAds.length) % demoAds.length)}
                className="shrink-0 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:p-3"
              >
                <ArrowLeft size={20} />
              </button>
              <img
                src={activeAd.image}
                alt={`Affiche intégrale de démonstration : ${activeAd.brand}`}
                width={1229}
                height={1536}
                className="max-h-full min-h-0 min-w-0 max-w-[calc(100%-104px)] flex-shrink object-contain"
              />
              <button
                type="button"
                aria-label="Affiche suivante"
                onClick={() => setSelected((selected! + 1) % demoAds.length)}
                className="shrink-0 rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:p-3"
              >
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="max-w-2xl text-center text-xs leading-relaxed text-white/65 sm:text-sm">
              {activeAd.title} — Concept non commandité · Échap pour fermer · Flèches pour naviguer
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
