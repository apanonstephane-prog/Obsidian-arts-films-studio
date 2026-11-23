"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioItems, type PortfolioItem } from "@/lib/data/portfolio";
import { siteConfig } from "@/lib/data/navigation";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ForWho } from "@/components/sections/ForWho";
import { Approach } from "@/components/sections/Approach";
import { WhyObsidian } from "@/components/sections/WhyObsidian";
import { FAQSection } from "@/components/sections/FAQSection";
import { DemoAdsGallery } from "@/components/sections/DemoAdsGallery";

const chapters = [
  {
    number: "01",
    kicker: "IMAGE EN MOUVEMENT",
    word: "FILM.",
    title: "Des images qui restent.",
    description: "Publicités, clips, univers animés : nous imaginons des expériences visuelles qui donnent du caractère aux marques et aux histoires.",
    image: "/images/service-video-pub.jpg",
    link: "/services#pub",
    linkText: "Découvrir la création vidéo",
  },
  {
    number: "02",
    kicker: "EXPÉRIENCES DIGITALES",
    word: "DIGITAL.",
    title: "Des interfaces qui marquent.",
    description: "Sites, applications et expériences interactives : chaque détail sert la lisibilité, le plaisir d'utilisation et la présence de votre marque.",
    image: "/images/service-sites-web.jpg",
    link: "/services#web",
    linkText: "Explorer nos expériences web",
  },
  {
    number: "03",
    kicker: "INTELLIGENCE APPLIQUÉE",
    word: "INTELLIGENCE.",
    title: "Une technologie qui agit.",
    description: "Agents IA, automatisations et outils sur mesure : transformer des tâches répétitives en temps retrouvé et en opportunités à saisir.",
    image: "/images/service-ia-automatisation.jpg",
    link: "/services#ia",
    linkText: "Voir les solutions IA",
  },
];

// Titles, descriptions and visuals are sourced exclusively from the official portfolio.
// This curated preview never introduces or renames a production.
const featuredProjectIds = ["1", "6", "3", "5"] as const;
const projects: PortfolioItem[] = featuredProjectIds
  .map((id) => portfolioItems.find((item) => item.id === id))
  .filter((item): item is PortfolioItem => Boolean(item));


function useCinematicReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".cinematic [data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("cin-is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("cin-is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function InteractiveValue() {
  const [hours, setHours] = useState(8);
  const [hourlyCost, setHourlyCost] = useState(35);
  const [people, setPeople] = useState(1);
  const monthlyHours = hours * people * 4.33;
  const monthlyAmount = Math.round(monthlyHours * hourlyCost);
  const euros = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

  return (
    <div className="cin-value__panel" data-reveal>
      <div className="cin-value__panel-top">
        <span className="cin-eyebrow">ESTIMATION INTERACTIVE</span>
        <span className="cin-value__index">OBSIDIAN / LAB 001</span>
      </div>
      <h3>Que vaut votre temps ?</h3>
      <p className="cin-value__intro">Estimez le coût théorique des tâches répétitives. Ce calcul illustre un potentiel d'optimisation, pas une économie garantie.</p>
      <div className="cin-controls">
        <label className="cin-control">
          <span>Heures répétitives / semaine <strong>{hours} h</strong></span>
          <input type="range" min="1" max="40" step="1" value={hours} onChange={(event) => setHours(Number(event.target.value))} />
        </label>
        <label className="cin-control">
          <span>Coût horaire chargé estimé <strong>{hourlyCost} €</strong></span>
          <input type="range" min="15" max="100" step="5" value={hourlyCost} onChange={(event) => setHourlyCost(Number(event.target.value))} />
        </label>
        <label className="cin-control">
          <span>Personnes concernées <strong>{people}</strong></span>
          <input type="range" min="1" max="20" step="1" value={people} onChange={(event) => setPeople(Number(event.target.value))} />
        </label>
      </div>
      <div className="cin-value__result" aria-live="polite" aria-atomic="true">
        <span>Coût mensuel théorique du temps consacré</span>
        <strong>{euros.format(monthlyAmount)}</strong>
        <small>≈ {Math.round(monthlyHours).toLocaleString("fr-FR")} heures cumulées / mois, sur la base de 4,33 semaines.</small>
      </div>
      <Link href="/contact" className="cin-text-link">Étudier une automatisation pertinente <ArrowUpRight size={18} aria-hidden="true" /></Link>
    </div>
  );
}

function ProjectLink({ project, index }: { project: PortfolioItem; index: number }) {
  const image = project.thumbnail || "/images/hero-main.jpg";
  const featuredClass = index === 0 ? "cin-project--feature" : index === 3 ? "cin-project--wide" : "";
  return (
    <Link
      href="/portfolio#portfolio"
      className={`cin-project ${featuredClass}`}
      aria-label={`Voir la réalisation : ${project.title}`}
      data-reveal
    >
      <Image
        src={image}
        alt=""
        fill
        sizes={index === 0 || index === 3 ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 50vw"}
        className="cin-project__image"
      />
      <div className="cin-project__shade" aria-hidden="true" />
      <span className="cin-project__num">{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
      <span className="cin-project__arrow"><ArrowUpRight size={23} aria-hidden="true" /></span>
      <div className="cin-project__copy">
        <span className="cin-project__category">{project.categoryLabel.toUpperCase()}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="cin-project__visit">Voir la réalisation <ArrowRight size={16} aria-hidden="true" /></span>
      </div>
    </Link>
  );
}

export function CinematicHome() {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapterNodes = useRef<(HTMLElement | null)[]>([]);
  useCinematicReveal();

  useEffect(() => {
    const nodes = chapterNodes.current.filter((node): node is HTMLElement => node !== null);
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) {
          const index = Number((visible[0].target as HTMLElement).dataset.index || 0);
          setActiveChapter(index);
        }
      },
      { rootMargin: "-22% 0px -32% 0px", threshold: [0, 0.15, 0.4, 0.7] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".cin-hero");
    if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      hero.style.setProperty("--cin-hero-scroll", `${Math.min(window.scrollY, window.innerHeight) * 0.16}px`);
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  return (
    <div className="cinematic" id="accueil">
      <section className="cin-hero" aria-labelledby="cin-hero-heading">
        <div className="cin-hero__art" aria-hidden="true">
          <Image src="/images/hero-main.jpg" alt="" fill priority sizes="100vw" className="cin-hero__image" />
          <div className="cin-hero__vignette" />
          <div className="cin-hero__ring cin-hero__ring--outer" />
          <div className="cin-hero__ring cin-hero__ring--inner" />
          <div className="cin-hero__glow" />
        </div>
        <div className="cin-hero__head">
          <span className="cin-overline"><span className="cin-dot" /> STUDIO CRÉATIF & DIGITAL</span>
          <span className="cin-hero__location">TOULOUSE <span>·</span> GUYANE</span>
        </div>
        <div className="cin-hero__content">
          <span className="cin-hero__serial">OBSIDIAN / NOUVELLE DIMENSION</span>
          <h1 id="cin-hero-heading">Vidéo, web et IA<br /><em>qui font vraiment la différence.</em></h1>
          <p>OBSIDIAN accompagne artistes, marques, entreprises, indépendants et particuliers avec des solutions créatives et digitales sur mesure. Un seul interlocuteur. Des résultats concrets.</p>
          <div className="cin-hero__actions">
            <Link href="#projets" className="cin-btn cin-btn--gold">Voir nos réalisations <ArrowUpRight size={19} aria-hidden="true" /></Link>
            <Link href="/contact" className="cin-btn cin-btn--ghost">Demander un devis <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="cin-hero__proof" aria-label="Nos engagements">
            <span>Réponse rapide</span>
            <span>Solutions sur mesure</span>
            <span>Devis personnalisé</span>
          </div>
        </div>
        <div className="cin-hero__foot">
          <span>ART DIRECTION <span className="cin-separator">/</span> TECHNOLOGY <span className="cin-separator">/</span> STORYTELLING</span>
          <a href="#vision" className="cin-hero__scroll" aria-label="Découvrir la suite du site">SCROLL POUR DÉCOUVRIR <ArrowDown size={17} aria-hidden="true" /></a>
          <span>01 — 05</span>
        </div>
      </section>

      <section className="cin-vision" id="vision" aria-labelledby="cin-vision-heading">
        <div className="cin-container cin-vision__grid">
          <div className="cin-vision__side" data-reveal><span className="cin-eyebrow"><span className="cin-dot" /> NOTRE CONVICTION</span><span className="cin-vision__index">01 / MANIFESTE</span></div>
          <div data-reveal>
            <h2 id="cin-vision-heading">Le monde n&apos;a pas besoin <span>de plus de contenu.</span><br />Il a besoin <em>d&apos;idées qui comptent.</em></h2>
            <div className="cin-vision__bottom">
              <span className="cin-rule" aria-hidden="true" />
              <p>La création attire le regard. Le design guide le geste. L&apos;intelligence libère le temps. Chez OBSIDIAN, ces disciplines se rencontrent pour donner une longueur d&apos;avance à chaque projet.</p>
            </div>
          </div>
        </div>
        <div className="cin-vision__watermark" aria-hidden="true">MAKE IT MATTER.</div>
      </section>

      <section className="cin-universes" id="expertises" aria-labelledby="cin-universes-heading">
        <h2 className="cin-sr-only" id="cin-universes-heading">Nos trois univers créatifs</h2>
        <div className="cin-universes__stage" aria-hidden="true">
          {chapters.map((chapter, index) => (
            <div className={`cin-universes__visual ${activeChapter === index ? "cin-universes__visual--active" : ""}`} key={chapter.number}>
              <Image src={chapter.image} alt="" fill sizes="100vw" className="cin-universes__visual-image" />
            </div>
          ))}
          <div className="cin-universes__wash" />
          <div className="cin-universes__stage-head"><span className="cin-overline">TROIS DISCIPLINES. UNE VISION.</span><span>02 / EXPERTISES</span></div>
          <div className="cin-universes__giant" key={activeChapter}>{chapters[activeChapter].word}</div>
          <div className="cin-universes__progress">
            {chapters.map((chapter, index) => <span key={chapter.number} className={activeChapter === index ? "cin-universes__progress--active" : ""} />)}
          </div>
        </div>
        <div className="cin-universes__track">
          {chapters.map((chapter, index) => (
            <article key={chapter.number} data-index={index} ref={(node) => { chapterNodes.current[index] = node; }} className="cin-universes__step">
              <div className="cin-universes__step-inner">
                <span className="cin-eyebrow">{chapter.number} / {chapter.kicker}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <Link href={chapter.link} className="cin-text-link">{chapter.linkText} <ArrowUpRight size={19} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All eight official services and six audiences remain available with their paid imagery. */}
      <div className="cin-original cin-original--services"><ServicesGrid /></div>
      <div className="cin-original cin-original--audiences"><ForWho /></div>

      <section className="cin-work" id="projets" aria-labelledby="cin-work-heading">
        <div className="cin-container">
          <div className="cin-section-heading" data-reveal>
            <div><span className="cin-eyebrow"><span className="cin-dot" /> PORTFOLIO SÉLECTIONNÉ</span><h2 id="cin-work-heading">Le travail parle.<br /><em>Nous lui donnons de la voix.</em></h2></div>
            <Link href="/portfolio" className="cin-text-link">Toutes les réalisations <ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
          <div className="cin-work__grid">{projects.map((project, index) => <ProjectLink key={project.id} project={project} index={index} />)}</div>
          <p className="cin-work__disclaimer">Sélection issue du portfolio officiel. Retrouvez les applications, les vingt concepts publicitaires de démonstration, les films récents et toutes les autres réalisations sur la page dédiée.</p>
        </div>
      </section>

      {/* Existing paid video media — playable, not auto-downloaded or duplicated as new productions. */}
      <section className="cin-screen" id="films" aria-labelledby="cin-screen-title">
        <div className="cin-container">
          <div className="cin-section-heading" data-reveal>
            <div>
              <span className="cin-eyebrow"><span className="cin-dot" /> NOS FILMS EN MOUVEMENT</span>
              <h2 id="cin-screen-title">L'image se vit.<br /><em>Pas seulement se regarde.</em></h2>
            </div>
            <Link href="/portfolio#films-recents" className="cin-text-link">Voir les films récents <ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
          <div className="cin-screen__grid">
            {portfolioItems
              .filter((item) => (item.id === "1" || item.id === "3") && item.embedType === "video" && item.embedSrc)
              .map((item, index) => (
                <article className={`cin-screen__film ${index === 0 ? "cin-screen__film--primary" : ""}`} key={item.id} data-reveal>
                  <div className="cin-screen__player">
                    <video
                      src={item.embedSrc}
                      poster={item.thumbnail}
                      controls
                      playsInline
                      preload="none"
                      aria-label={`Regarder : ${item.title}`}
                    >
                      Votre navigateur ne peut pas lire la vidéo. <Link href="/portfolio">Voir le portfolio</Link>.
                    </video>
                    <span className="cin-screen__frame" aria-hidden="true">OBSIDIAN / FILMS</span>
                  </div>
                  <div className="cin-screen__info">
                    <span className="cin-eyebrow">{item.categoryLabel}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Reuse the existing twenty paid demonstration images, titles and legal disclaimers. */}
      <div className="cin-original cin-original--demo"><DemoAdsGallery /></div>

      <section className="cin-value" id="intelligence" aria-labelledby="cin-value-heading">
        <div className="cin-container cin-value__grid">
          <div className="cin-value__narrative" data-reveal>
            <span className="cin-eyebrow"><span className="cin-dot" /> UNE IA QUI SERT QUELQUE CHOSE</span>
            <h2 id="cin-value-heading">Moins de répétition.<br /><em>Plus de possibilités.</em></h2>
            <p>Un agent intelligent ne devrait pas être un gadget. Il doit résoudre un problème concret : mieux répondre, mieux organiser, mieux servir. Commençons par chiffrer ce qui mobilise vos équipes.</p>
            <div className="cin-value__orb" aria-hidden="true"><div className="cin-value__orb-core" /></div>
          </div>
          <InteractiveValue />
        </div>
      </section>

      {/* Keep all original process, differentiators and FAQ copy, without rewriting claims. */}
      <div className="cin-original cin-original--approach"><Approach /></div>
      <div className="cin-original cin-original--why"><WhyObsidian /></div>
      <div className="cin-original cin-original--faq"><FAQSection /></div>

      <section className="cin-outro" aria-labelledby="cin-outro-heading">
        <div className="cin-outro__background" aria-hidden="true"><Image src="/images/cta-final-bg.jpg" alt="" fill sizes="100vw" /></div>
        <div className="cin-container cin-outro__content" data-reveal>
          <span className="cin-eyebrow"><span className="cin-dot" /> VOTRE PROCHAIN CHAPITRE</span>
          <h2 id="cin-outro-heading">Parlons de<br /><em>votre projet.</em></h2>
          <p>Que vous ayez une idée précise ou juste une envie de faire avancer les choses, c'est par ici que ça commence. Échange gratuit, sans engagement.</p>
          <Link href="/contact" className="cin-btn cin-btn--gold">Demander un devis <ArrowUpRight size={20} aria-hidden="true" /></Link>
          <a className="cin-outro__email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <div className="cin-outro__footer"><span>OBSIDIAN ARTS FILMS STUDIO</span><span>TOULOUSE / GUYANE</span><Link href="/a-propos">DÉCOUVRIR LE STUDIO <ArrowUpRight size={14} aria-hidden="true" /></Link></div>
        </div>
      </section>
    </div>
  );
}
