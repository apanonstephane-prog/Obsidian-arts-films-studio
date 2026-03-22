import type { Metadata } from "next";
import {
  Heart,
  Camera,
  Globe,
  Lightbulb,
  Star,
  MessageCircle,
  Check,
  ArrowRight,
} from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/sections/CTABlock";

export const metadata: Metadata = {
  title: "Solutions Particuliers",
  description:
    "Vous êtes un particulier avec un projet, une idée ou un besoin digital ? OBSIDIAN Arts Films vous accompagne simplement avec une approche humaine et accessible.",
};

const useCases = [
  {
    icon: Camera,
    image: "/images/service-clips-musicaux.jpg",
    title: "Vidéo souvenir & événement",
    description:
      "Mariage, anniversaire, baptême, fête de famille. Une captation soignée et un montage émotionnel pour garder vos plus beaux moments.",
    items: [
      "Captation professionnelle",
      "Montage avec musique et titres",
      "Film émotionnel et immersif",
      "Livraison numérique haute qualité",
    ],
  },
  {
    icon: Globe,
    image: "/images/service-sites-web.jpg",
    title: "Création d'un site simple",
    description:
      "Vous voulez vous présenter en ligne, partager votre passion ou créer une page pour votre activité secondaire. On s'en occupe.",
    items: [
      "Site vitrine simple et élégant",
      "Mobile-first et rapide",
      "Facile à gérer ensuite",
      "Accompagnement inclus",
    ],
  },
  {
    icon: Lightbulb,
    image: "/images/portfolio-aides-ia.jpg",
    title: "Mise en valeur d'un projet personnel",
    description:
      "Vous avez une idée, un projet créatif, une activité à lancer. Nous vous aidons à lui donner une vraie image et une vraie présence.",
    items: [
      "Identité visuelle digitale",
      "Vidéo de présentation",
      "Communication claire",
      "Conseil et orientation",
    ],
  },
  {
    icon: Star,
    image: "/images/service-reseaux-sociaux.jpg",
    title: "Support de communication",
    description:
      "Besoin d'un flyer numérique, d'un teaser pour un événement, d'un reel pour partager quelque chose de fort ? On le crée pour vous.",
    items: [
      "Visuels numériques personnalisés",
      "Teaser d'événement",
      "Contenu prêt à publier",
      "Adapté à votre ton et votre style",
    ],
  },
  {
    icon: Heart,
    image: "/images/service-ia-automatisation.jpg",
    title: "Accompagnement digital",
    description:
      "Vous vous sentez dépassé par le digital ? Nous vous aidons à y voir clair, à structurer vos besoins et à avancer pas à pas.",
    items: [
      "Audit de vos besoins réels",
      "Conseils simples et compréhensibles",
      "Solutions adaptées à votre budget",
      "Suivi humain et rassurant",
    ],
  },
  {
    icon: MessageCircle,
    image: "/images/hero-main.jpg",
    title: "Vous avez une idée, on vous aide à la structurer",
    description:
      "Vous ne savez pas encore exactement ce qu'il vous faut ? Pas de problème. Un échange suffit souvent pour y voir beaucoup plus clair.",
    items: [
      "Échange sans engagement",
      "Analyse de votre besoin",
      "Proposition adaptée",
      "Devis transparent",
    ],
  },
];

export default function SolutionsParticuliersPage() {
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
            <span className="tag mb-5 inline-flex">Solutions Particuliers</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--obsidian-white)] leading-tight mb-5">
              Vos projets personnels méritent le meilleur
            </h1>
            <div className="accent-line mb-6" />
            <p className="text-[var(--obsidian-text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl">
              Vous n'êtes pas une entreprise, mais votre projet compte tout autant.
              OBSIDIAN vous accompagne avec la même exigence, une approche humaine
              et des tarifs adaptés à votre situation.
            </p>
          </div>
        </Container>
      </section>

      {/* Intro reassurance */}
      <Section dark>
        <Container narrow>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "Aucun jargon", desc: "On vous parle simplement, sans termes techniques inutiles." },
              { label: "Sans engagement", desc: "Un premier échange gratuit pour voir si on peut vous aider." },
              { label: "Sur mesure", desc: "Pas de formule imposée. Chaque demande est traitée individuellement." },
            ].map(({ label, desc }) => (
              <div key={label} className="p-6 rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)]">
                <div className="accent-line mx-auto mb-4" style={{ width: 32 }} />
                <h3 className="text-[var(--obsidian-white)] font-semibold text-base mb-2">{label}</h3>
                <p className="text-[var(--obsidian-text-muted)] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use cases grid */}
      <Section>
        <Container>
          <SectionHeader
            tag="Exemples de projets"
            title="Comment pouvons-nous vous aider ?"
            subtitle="Des situations courantes auxquelles nous répondons chaque jour avec la même attention."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map(({ icon: Icon, image, title, description, items }) => (
              <div
                key={title}
                className="flex flex-col rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] card-hover overflow-hidden"
              >
                {image && (
                  <div className="relative h-44 overflow-hidden">
                    <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[var(--obsidian-card)]" />
                  </div>
                )}
                <div className="flex flex-col p-7 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-[var(--obsidian-accent-dim)] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[var(--obsidian-accent)]" />
                  </div>
                  <h3 className="text-[var(--obsidian-white)] font-semibold text-base mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed mb-5 flex-1">
                    {description}
                  </p>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--obsidian-text-muted)]">
                        <Check size={12} className="text-[var(--obsidian-accent)] mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--obsidian-text-muted)] text-base mb-6">
              Vous ne trouvez pas exactement ce qu&apos;il vous faut ? Décrivez votre besoin,
              nous trouverons la solution.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Parler de mon projet
              <ArrowRight size={18} />
            </Button>
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Votre projet, notre attention"
        subtitle="Un échange simple et sans engagement pour voir comment nous pouvons vous aider. Pas de pression, pas de jargon."
        dark
      />
    </>
  );
}
