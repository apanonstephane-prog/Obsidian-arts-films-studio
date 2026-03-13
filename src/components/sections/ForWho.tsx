import { Mic2, Building2, UserCheck, Heart, ShoppingBag, Home } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";

const profiles = [
  {
    icon: Mic2,
    title: "Artistes",
    description:
      "Clips, visuels, identité digitale. Donnez à votre univers musical une image à la hauteur de votre talent.",
  },
  {
    icon: Building2,
    title: "Entreprises",
    description:
      "Vidéos, sites, automatisation. Communiquez mieux, gagnez du temps et renforcez votre image professionnelle.",
  },
  {
    icon: UserCheck,
    title: "Indépendants",
    description:
      "Coach, consultant, freelance. Une présence web claire et des contenus qui vous différencient.",
  },
  {
    icon: Heart,
    title: "Associations",
    description:
      "Donnez de la visibilité à votre cause. Communication visuelle et digitale accessible et percutante.",
  },
  {
    icon: ShoppingBag,
    title: "Commerçants",
    description:
      "Artisans, restaurateurs, boutiques. Atteignez plus de clients avec une image moderne et professionnelle.",
  },
  {
    icon: Home,
    title: "Particuliers",
    description:
      "Projet personnel, événement, idée. Nous vous accompagnons simplement pour donner forme à ce qui compte.",
  },
];

export function ForWho() {
  return (
    <Section id="pour-qui">
      <Container>
        <SectionHeader
          tag="Pour qui ?"
          title="Nous accompagnons tous les profils"
          subtitle="Quel que soit votre secteur, votre budget ou votre niveau de maturité digitale, nous avons une solution adaptée."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 p-6 rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] card-hover"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--obsidian-accent-dim)] flex items-center justify-center mt-0.5">
                <Icon size={18} className="text-[var(--obsidian-accent)]" />
              </div>
              <div>
                <h3 className="text-[var(--obsidian-white)] font-semibold text-base mb-1.5">
                  {title}
                </h3>
                <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
