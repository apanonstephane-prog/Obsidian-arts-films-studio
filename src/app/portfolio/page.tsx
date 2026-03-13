import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTABlock } from "@/components/sections/CTABlock";
import { Container } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Découvrez les projets réalisés par OBSIDIAN Arts Films : clips musicaux, vidéos publicitaires, sites internet, agents IA. Portfolio créatif et digital.",
};

export default function PortfolioPage() {
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
            <span className="tag mb-5 inline-flex">Réalisations</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--obsidian-white)] leading-tight mb-5">
              Ce que nous avons créé
            </h1>
            <div className="w-12 h-0.5 bg-[var(--obsidian-accent)] rounded mb-6" />
            <p className="text-[var(--obsidian-text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl">
              Chaque projet est une nouvelle histoire à raconter.
              Voici un aperçu de ce que nous avons réalisé pour nos clients.
            </p>
          </div>
        </Container>
      </section>

      <PortfolioGrid />

      <CTABlock
        title="Votre projet sera notre prochaine réalisation"
        subtitle="Contactez-nous pour discuter de votre projet et obtenir un devis sur mesure."
        dark
      />
    </>
  );
}
