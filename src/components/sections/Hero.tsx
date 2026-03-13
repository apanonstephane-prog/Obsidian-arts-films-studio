import Link from "next/link";
import { ArrowRight, Zap, SlidersHorizontal, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

const badges = [
  { icon: Zap, label: "Réponse rapide" },
  { icon: SlidersHorizontal, label: "Solutions sur mesure" },
  { icon: MessageSquare, label: "Devis personnalisé" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Présentation OBSIDIAN Arts Films"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--obsidian-black)]" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(200,169,110,0.1) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 100%, rgba(200,169,110,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--obsidian-border) 1px, transparent 1px), linear-gradient(90deg, var(--obsidian-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <span className="tag">Studio créatif & digital</span>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-in-up animate-delay-100"
          >
            <span className="text-[var(--obsidian-white)]">Vidéo, web et IA</span>
            <br />
            <span className="gradient-text">qui font vraiment la différence.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-[var(--obsidian-text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200"
          >
            OBSIDIAN accompagne artistes, marques, entreprises, indépendants et particuliers
            avec des solutions créatives et digitales sur mesure.
            Un seul interlocuteur. Des résultats concrets.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up animate-delay-300">
            <Button href="/contact" variant="primary" size="lg">
              Demander un devis
              <ArrowRight size={18} />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Voir nos services
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animate-delay-400">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] text-sm text-[var(--obsidian-text-muted)]"
              >
                <Icon size={14} className="text-[var(--obsidian-accent)]" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-500">
          <div className="w-px h-12 bg-gradient-to-b from-[var(--obsidian-accent)]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
