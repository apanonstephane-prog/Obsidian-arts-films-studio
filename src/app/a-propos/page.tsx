import type { Metadata } from "next";
import { Eye, Sparkles, MessageSquare, RefreshCw, Zap } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { CTABlock } from "@/components/sections/CTABlock";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez OBSIDIAN Arts Films : un studio créatif & digital qui accompagne artistes, professionnels et particuliers avec des solutions visuelles et digitales sur mesure.",
};

const values = [
  {
    icon: Eye,
    label: "Exigence",
    description:
      "Chaque détail compte. Nous ne livrons que ce qui est vraiment à la hauteur.",
  },
  {
    icon: Sparkles,
    label: "Créativité",
    description:
      "Des solutions originales, pensées pour se démarquer et avoir un vrai impact.",
  },
  {
    icon: MessageSquare,
    label: "Clarté",
    description:
      "Communication directe, devis transparents, projets bien définis. Pas de surprise.",
  },
  {
    icon: RefreshCw,
    label: "Adaptabilité",
    description:
      "Nous nous adaptons à chaque contexte, chaque budget, chaque type de besoin.",
  },
  {
    icon: Zap,
    label: "Efficacité",
    description:
      "Des délais tenus, une exécution rigoureuse et un résultat concret à chaque fois.",
  },
];

export default function AProposPage() {
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
            <span className="tag mb-5 inline-flex">À propos</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--obsidian-white)] leading-tight mb-5">
              Un studio créatif au service de vos projets
            </h1>
            <div className="w-12 h-0.5 bg-[var(--obsidian-accent)] rounded mb-6" />
            <p className="text-[var(--obsidian-text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl">
              OBSIDIAN Arts Films, c'est un studio créatif et digital pensé pour les artistes,
              les professionnels et les particuliers qui veulent donner du poids à leur image
              et à leurs projets.
            </p>
          </div>
        </Container>
      </section>

      {/* About text */}
      <Section dark>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <SectionHeader
                tag="Notre histoire"
                title="Ce que nous sommes"
                subtitle=""
              />
              <div className="space-y-5 text-[var(--obsidian-text-muted)] text-base leading-relaxed">
                <p>
                  OBSIDIAN Arts Films accompagne les artistes, les marques, les professionnels
                  et les particuliers dans la création de solutions visuelles et digitales
                  pensées pour avoir un vrai impact.
                </p>
                <p>
                  Notre approche repose sur une alliance entre exigence esthétique, clarté,
                  modernité et adaptation aux besoins réels. Nous ne faisons pas du beau
                  pour le beau. Nous créons des supports qui servent réellement vos objectifs.
                </p>
                <p>
                  Que vous ayez besoin d'un clip musical, d'un site vitrine, d'une vidéo
                  publicitaire ou d'un agent IA pour gagner du temps, nous apportons la même
                  rigueur et le même engagement à chaque projet.
                </p>
                <p>
                  OBSIDIAN, c'est aussi la conviction que la créativité et l'utilité ne
                  s'opposent pas. Au contraire : les meilleures solutions sont celles qui
                  sont à la fois belles et efficaces.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary">
                  Travailler avec nous
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            {/* Stats / highlights */}
            <div className="grid grid-cols-2 gap-5">
              {[
                { label: "Services proposés", value: "8+" },
                { label: "Secteurs accompagnés", value: "Tous" },
                { label: "Approche", value: "Sur mesure" },
                { label: "Réponse", value: "Rapide" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-6 rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] text-center"
                >
                  <div className="text-3xl font-bold text-[var(--obsidian-accent)] mb-1">
                    {value}
                  </div>
                  <div className="text-[var(--obsidian-text-muted)] text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <SectionHeader
            tag="Nos valeurs"
            title="Ce qui guide chaque décision"
            subtitle="Cinq mots qui résument notre façon de travailler et ce que vous pouvez attendre de nous."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map(({ icon: Icon, label, description }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--obsidian-accent-dim)] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[var(--obsidian-accent)]" />
                </div>
                <h3 className="text-[var(--obsidian-white)] font-semibold text-base mb-2">
                  {label}
                </h3>
                <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mission statement */}
      <Section dark>
        <Container narrow>
          <div className="text-center py-6">
            <div className="w-12 h-0.5 bg-[var(--obsidian-accent)] rounded mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-semibold text-[var(--obsidian-white)] leading-relaxed mb-6 italic">
              &ldquo;Chaque projet est une opportunité de créer quelque chose qui
              compte vraiment pour ceux qui le reçoivent.&rdquo;
            </blockquote>
            <p className="text-[var(--obsidian-accent)] font-medium">
              OBSIDIAN Arts Films
            </p>
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Construisons quelque chose ensemble"
        subtitle="Parlez-nous de votre projet. Nous sommes là pour écouter, conseiller et créer."
      />
    </>
  );
}
