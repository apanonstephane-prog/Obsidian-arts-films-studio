import Image from "next/image";
import { Mic2, Building2, UserCheck, Heart, ShoppingBag, Home } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";

const profiles = [
  {
    icon: Mic2,
    title: "Artistes",
    image: "/images/cible-artiste.jpg",
    description:
      "Clips, visuels, identité digitale. Donnez à votre univers musical une image à la hauteur de votre talent.",
  },
  {
    icon: Building2,
    title: "Entreprises",
    image: "/images/cible-entreprise.jpg",
    description:
      "Vidéos, sites, automatisation. Communiquez mieux, gagnez du temps et renforcez votre image professionnelle.",
  },
  {
    icon: UserCheck,
    title: "Indépendants",
    image: "/images/cible-independant.jpg",
    description:
      "Coach, consultant, freelance. Une présence web claire et des contenus qui vous différencient.",
  },
  {
    icon: Heart,
    title: "Associations",
    image: "/images/cible-association.jpg",
    description:
      "Donnez de la visibilité à votre cause. Communication visuelle et digitale accessible et percutante.",
  },
  {
    icon: ShoppingBag,
    title: "Commerçants",
    image: "/images/cible-commercant.jpg",
    description:
      "Artisans, restaurateurs, boutiques. Atteignez plus de clients avec une image moderne et professionnelle.",
  },
  {
    icon: Home,
    title: "Particuliers",
    image: "/images/cible-particulier.jpg",
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
          {profiles.map(({ icon: Icon, title, description, image }) => (
            <div
              key={title}
              className="group flex flex-col rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] card-hover overflow-hidden"
            >
              {/* Profile image */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(22,22,26,0.95) 100%)" }}
                />
                {/* Icon badge over image */}
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-[var(--obsidian-accent-dim)] border border-[var(--obsidian-accent)]/20 flex items-center justify-center backdrop-blur-sm">
                  <Icon size={18} className="text-[var(--obsidian-accent)]" />
                </div>
              </div>

              <div className="p-5">
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
