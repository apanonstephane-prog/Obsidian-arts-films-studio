import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { DemoAdsGallery } from "@/components/sections/DemoAdsGallery";
import { CTABlock } from "@/components/sections/CTABlock";
import { Container } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Les réalisations d’OBSIDIAN Arts Films Studio : applications, 20 concepts publicitaires, cinéma, musique et expériences numériques.",
};

const projects = [
  { name: "OBSIDIAN CONQUEST", type: "Application métier", field: "Prospection · CRM · Veille", description: "Un espace de prospection et de suivi commercial conçu pour structurer les opportunités et les démarches du studio.", url: "https://obsidian-conquest.vercel.app", monogram: "OC", color: "#c8a96e", background: "#292216" },
  { name: "Morgane Voyages", type: "Application", field: "Voyage · Planification", description: "Une expérience numérique dédiée à la préparation du voyage, aux destinations et à l'organisation des itinéraires.", url: "https://morgane-voyages.vercel.app", monogram: "MV", color: "#8bc7da", background: "#18303a" },
  { name: "Korvan Transport", type: "Démonstration", field: "Transport · Expérience web", description: "Une démonstration d'expérience digitale pensée pour l'univers du transport.", url: "https://korvan-transport-demo.vercel.app", monogram: "KT", color: "#d6a478", background: "#352518" },
  { name: "Karbé Guyane", type: "Application", field: "Guyane · Expérience numérique", description: "Un projet numérique dédié à la Guyane, ancré dans son identité et son territoire.", url: "https://karbe-guyane.vercel.app", monogram: "KG", color: "#91c4a0", background: "#192d26" },
];

const films = [
  { title: "Le Cœur d’obsidienne", type: "Film · Novembre 2026", label: "Voir le film sur Instagram", url: "https://www.instagram.com/reel/DfrXFArGeOL/", source: "https://static.metricool.com/planner/202611/8064555-file-10314661643333381735.mp4" },
  { title: "Les Héritiers d’Orum", type: "Publicité · Novembre 2026", label: "Voir la publicité sur YouTube", url: "https://www.youtube.com/shorts/2pPcaLBC4e4", source: "https://static.metricool.com/planner/202611/8064555-file-2183419167292486944.mp4" },
];

const chapters = [
  { number: "01", title: "Applications", count: "04 projets", link: "#applications" },
  { number: "02", title: "Publicités", count: "20 concepts", link: "#publicites-demonstration" },
  { number: "03", title: "Films récents", count: "02 productions", link: "#films-recents" },
  { number: "04", title: "Autres réalisations", count: "Portfolio", link: "#portfolio" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pb-24" style={{background:"radial-gradient(ellipse at 85% 10%, rgba(200,169,110,0.13), transparent 55%), #0f0f12"}}>
        <Container>
          <div className="mb-12 max-w-4xl">
            <span className="tag mb-6 inline-flex">Portfolio · OBSIDIAN Arts Films Studio</span>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[var(--obsidian-accent)]">Création × Technologie × Cinéma</p>
            <h1 className="mb-6 text-5xl font-semibold leading-[1.04] tracking-tight text-[var(--obsidian-white)] md:text-7xl">
              Des idées qui prennent <span className="block font-light text-[var(--obsidian-accent)]">vie.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-[var(--obsidian-text-muted)] md:text-xl">Une sélection de nos univers créatifs : applications et expériences digitales, campagnes de démonstration, films, musique et productions originales.</p>
          </div>
          <nav aria-label="Explorer les réalisations" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {chapters.map((chapter) => (
              <a key={chapter.link} href={chapter.link} className="group rounded-xl border border-[var(--obsidian-border)] bg-[var(--obsidian-card)] p-4 transition-colors hover:border-[var(--obsidian-accent)] md:p-6">
                <div className="mb-7 flex items-center justify-between text-[var(--obsidian-accent)]"><span className="text-xs font-semibold tracking-widest">{chapter.number}</span><ArrowDownRight size={19} aria-hidden="true" /></div>
                <p className="font-semibold text-[var(--obsidian-white)]">{chapter.title}</p>
                <p className="text-xs text-[var(--obsidian-text-muted)]">{chapter.count}</p>
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section id="applications" aria-labelledby="apps-title" className="scroll-mt-24 border-t border-[var(--obsidian-border)] py-20 md:py-28">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[var(--obsidian-accent)]">01 / Digital & applications</p>
          <h2 id="apps-title" className="mb-4 text-4xl font-semibold tracking-tight text-[var(--obsidian-white)] md:text-5xl">Des outils. Des usages. Des solutions.</h2>
          <p className="mb-10 max-w-2xl text-[var(--obsidian-text-muted)] md:text-lg">Quatre projets numériques, chacun avec son univers et son objectif.</p>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.name} className="overflow-hidden rounded-2xl border border-[var(--obsidian-border)] bg-[var(--obsidian-card)] transition-colors hover:border-[var(--obsidian-accent)]/70">
                <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden" style={{background:`radial-gradient(ellipse at 50% 70%, ${project.background}, #0d0d10 82%)`, color:project.color}}>
                  <div aria-hidden="true" className="absolute -right-6 -top-10 h-40 w-40 rotate-45 rounded-3xl border border-current opacity-15 md:h-56 md:w-56" />
                  <div aria-hidden="true" className="absolute -bottom-16 -left-10 h-44 w-44 rotate-45 rounded-3xl border border-current opacity-15" />
                  <span className="absolute left-5 top-5 text-xs font-semibold tracking-[0.25em]">0{index + 1} — PROJET</span>
                  <span aria-hidden="true" className="font-mono text-6xl font-light tracking-tight md:text-8xl">{project.monogram}<span className="text-2xl">.</span></span>
                  <span className="absolute bottom-4 right-5 text-[10px] uppercase tracking-[0.25em]">OBSIDIAN / DIGITAL</span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-2"><span className="tag">{project.type}</span><span className="inline-flex items-center gap-1 text-xs text-[var(--obsidian-text-muted)]"><LockKeyhole size={12}/> Accès protégé</span></div>
                  <h3 className="mb-2 text-2xl font-semibold text-[var(--obsidian-white)]">{project.name}</h3>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--obsidian-accent)]">{project.field}</p>
                  <p className="mb-6 leading-relaxed text-[var(--obsidian-text-muted)]">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-5">
                    <a className="inline-flex items-center gap-2 font-semibold text-[var(--obsidian-accent)] hover:underline" href={project.url} target="_blank" rel="noopener noreferrer">Ouvrir le projet <ArrowUpRight size={16}/></a>
                    <Link className="text-sm text-[var(--obsidian-text-muted)] underline-offset-4 hover:underline" href="/contact">Demander une démonstration</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <DemoAdsGallery />

      <section id="films-recents" aria-labelledby="films-title" className="scroll-mt-24 border-t border-[var(--obsidian-border)] bg-[#0b0b0e] py-20 md:py-28">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[var(--obsidian-accent)]">03 / Films & publicité vidéo</p>
          <h2 id="films-title" className="mb-4 text-4xl font-semibold tracking-tight text-[var(--obsidian-white)] md:text-5xl">Dernières productions vidéo.</h2>
          <p className="mb-10 max-w-2xl text-[var(--obsidian-text-muted)] md:text-lg">Deux créations à découvrir en image et en mouvement.</p>
          <div className="grid gap-6 md:grid-cols-2">
            {films.map((film) => (
              <article key={film.title} className="overflow-hidden rounded-2xl border border-[var(--obsidian-border)] bg-[var(--obsidian-card)]">
                <div className="flex items-center justify-center bg-black px-3">
                  <video controls playsInline preload="metadata" src={film.source} aria-label={film.title} className="aspect-[9/16] max-h-[520px] w-full object-contain">
                    Retrouvez la vidéo via le lien de publication ci-dessous.
                  </video>
                </div>
                <div className="p-6 md:p-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--obsidian-accent)]">{film.type}</p>
                  <h3 className="mb-5 text-2xl font-semibold text-[var(--obsidian-white)]">{film.title}</h3>
                  <a href={film.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-[var(--obsidian-accent)] hover:underline">{film.label}<ArrowUpRight size={16}/></a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PortfolioGrid />
      <CTABlock title="Votre projet sera notre prochaine réalisation" subtitle="Contactez-nous pour discuter de votre projet et obtenir un devis sur mesure." dark />
    </>
  );
}
