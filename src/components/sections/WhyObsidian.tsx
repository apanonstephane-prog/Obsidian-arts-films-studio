import { Eye, Wrench, Star, Cpu, Users, Layers } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";

const advantages = [
  {
    icon: Eye,
    title: "Vision créative & utilité concrète",
    description:
      "Nous créons du beau, mais surtout de l'utile. Chaque projet doit servir un objectif réel, pas juste être agréable à regarder.",
  },
  {
    icon: Wrench,
    title: "Solutions sur mesure",
    description:
      "Pas de forfaits rigides. Chaque mission est pensée en fonction de votre besoin, de votre contexte et de votre budget.",
  },
  {
    icon: Star,
    title: "Image premium",
    description:
      "Un rendu professionnel et soigné, quel que soit le format. Votre image reflète la qualité de ce que vous proposez.",
  },
  {
    icon: Cpu,
    title: "Approche moderne",
    description:
      "Nous intégrons les outils et les méthodes les plus récents : IA, automatisation, tendances visuelles actuelles.",
  },
  {
    icon: Users,
    title: "Accompagnement humain",
    description:
      "Un interlocuteur disponible et réactif. Vous n'êtes jamais seul face à votre projet, du premier échange à la livraison.",
  },
  {
    icon: Layers,
    title: "Polyvalence complète",
    description:
      "Vidéo, web, IA : un seul studio pour tous vos besoins créatifs et digitaux. Cohérence garantie sur toutes vos communications.",
  },
];

export function WhyObsidian() {
  return (
    <Section id="pourquoi">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left: Header */}
          <div className="mb-10 lg:mb-0 lg:sticky lg:top-32">
            <SectionHeader
              tag="Pourquoi nous choisir ?"
              title="Ce qui nous différencie vraiment"
              subtitle="Nous ne sommes pas qu'un prestataire. Nous sommes un partenaire créatif qui s'investit dans la réussite de chaque projet."
            />
          </div>

          {/* Right: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {advantages.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-5 rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] card-hover"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--obsidian-accent-dim)] flex items-center justify-center mb-3">
                  <Icon size={16} className="text-[var(--obsidian-accent)]" />
                </div>
                <h3 className="text-[var(--obsidian-white)] font-semibold text-sm mb-1.5">
                  {title}
                </h3>
                <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
