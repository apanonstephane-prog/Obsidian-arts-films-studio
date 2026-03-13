import type { Metadata } from "next";
import {
  TrendingUp,
  Monitor,
  Bot,
  Award,
  Rocket,
  Globe,
  Tv,
  Check,
  ArrowRight,
} from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/sections/CTABlock";

export const metadata: Metadata = {
  title: "Solutions Pro",
  description:
    "Solutions digitales sur mesure pour entreprises, artisans, commerçants, associations et indépendants. Développez votre visibilité et automatisez vos processus avec OBSIDIAN Arts Films.",
};

const needs = [
  {
    icon: TrendingUp,
    title: "Développer votre visibilité",
    description:
      "Vidéos, contenus réseaux sociaux, teasers et campagnes visuelles pour vous faire connaître et attirer de nouveaux clients.",
    items: [
      "Stratégie de contenu vidéo",
      "Reels et formats courts optimisés",
      "Campagne de lancement",
      "Contenus récurrents pour les réseaux",
    ],
  },
  {
    icon: Monitor,
    title: "Présenter votre activité",
    description:
      "Un site vitrine clair, rapide et professionnel qui transforme les visiteurs en prospects et renforce votre crédibilité.",
    items: [
      "Site vitrine responsive",
      "Page de présentation percutante",
      "Optimisation SEO de base",
      "Interface simple à maintenir",
    ],
  },
  {
    icon: Bot,
    title: "Automatiser et gagner du temps",
    description:
      "Agents IA, réponses automatiques, qualification de demandes : des outils intelligents pour être plus efficace au quotidien.",
    items: [
      "Assistant de prise de contact",
      "Qualification automatique des demandes",
      "Réponses personnalisées automatisées",
      "Intégration dans vos outils existants",
    ],
  },
  {
    icon: Award,
    title: "Obtenir une image plus professionnelle",
    description:
      "Vidéo d'entreprise, identité visuelle digitale, communication cohérente. Renforcez la confiance de vos clients et partenaires.",
    items: [
      "Film d'entreprise ou de présentation",
      "Identité digitale cohérente",
      "Contenus premium pour votre secteur",
      "Charte visuelle respectée",
    ],
  },
  {
    icon: Rocket,
    title: "Lancer une offre ou un service",
    description:
      "Teaser de lancement, page dédiée, contenus de communication : tout pour que votre lancement soit remarqué.",
    items: [
      "Teaser et vidéo de lancement",
      "Landing page dédiée",
      "Kit de communication complet",
      "Stratégie de diffusion conseillée",
    ],
  },
  {
    icon: Tv,
    title: "Promouvoir un produit ou événement",
    description:
      "Spot publicitaire, captation d'événement, contenus promotionnels. Une couverture complète et un rendu professionnel.",
    items: [
      "Vidéo publicitaire courte",
      "Captation et montage événementiel",
      "Aftermovie ou bilan vidéo",
      "Contenus de diffusion multi-supports",
    ],
  },
];

const useCases = [
  {
    title: "Artisan / Commerçant",
    description:
      "Une vidéo de présentation de votre atelier, un site pour vous trouver facilement, des contenus pour votre boutique sur les réseaux.",
  },
  {
    title: "Restaurant / Bar",
    description:
      "Des visuels appétissants, un teaser d'ambiance, une présence en ligne claire et des clients qui reviennent.",
  },
  {
    title: "Coach / Consultant",
    description:
      "Une image professionnelle qui inspire confiance, un site vitrine impeccable et des contenus qui montrent votre expertise.",
  },
  {
    title: "PME",
    description:
      "Vidéo d'entreprise, site web, automatisation de la relation client et communication digitale cohérente.",
  },
  {
    title: "Association",
    description:
      "Donnez de la visibilité à votre cause, communiquez sur vos événements et touchez un public plus large.",
  },
  {
    title: "Organisateur d'événements",
    description:
      "Teaser d'avant-événement, captation en direct, aftermovie et diffusion sur toutes vos plateformes.",
  },
];

export default function SolutionsProPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% -10%, rgba(200,169,110,0.09) 0%, transparent 70%)",
        }}
      >
        <Container>
          <div className="max-w-3xl">
            <span className="tag mb-5 inline-flex">Solutions Pro</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--obsidian-white)] leading-tight mb-5">
              Des outils concrets pour les professionnels
            </h1>
            <div className="accent-line mb-6" />
            <p className="text-[var(--obsidian-text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl">
              Quel que soit votre secteur, nous vous aidons à développer votre visibilité,
              renforcer votre image et automatiser certaines tâches. Un seul interlocuteur
              pour tous vos besoins créatifs et digitaux.
            </p>
          </div>
        </Container>
      </section>

      {/* Needs grid */}
      <Section dark>
        <Container>
          <SectionHeader
            tag="Vos besoins"
            title="Ce que nous pouvons faire pour vous"
            subtitle="Choisissez ce qui correspond à votre situation. Nous adaptons la solution en fonction de votre contexte et de votre budget."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {needs.map(({ icon: Icon, title, description, items }) => (
              <div
                key={title}
                className="flex flex-col p-7 rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--obsidian-accent-dim)] flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[var(--obsidian-accent)]" />
                </div>
                <h3 className="text-[var(--obsidian-white)] font-semibold text-lg mb-2">
                  {title}
                </h3>
                <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed mb-5 flex-1">
                  {description}
                </p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--obsidian-text-muted)]">
                      <Check size={13} className="text-[var(--obsidian-accent)] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use cases */}
      <Section>
        <Container>
          <SectionHeader
            tag="Cas d'usage"
            title="Des exemples concrets"
            subtitle="Voici comment nous aidons différents types de professionnels au quotidien."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map(({ title, description }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-[var(--obsidian-border)] bg-[var(--obsidian-card)] card-hover"
              >
                <div className="accent-line mb-4" />
                <h3 className="text-[var(--obsidian-white)] font-semibold text-base mb-2">
                  {title}
                </h3>
                <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Parlez-nous de votre projet
              <ArrowRight size={18} />
            </Button>
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Votre activité mérite une vraie présence"
        subtitle="Demandez un devis gratuit et personnalisé. Nous analysons votre situation et vous proposons la solution la plus adaptée."
        dark
      />
    </>
  );
}
