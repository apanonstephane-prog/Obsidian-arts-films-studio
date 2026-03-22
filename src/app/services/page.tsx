import type { Metadata } from "next";
import {
  Music,
  Megaphone,
  Smartphone,
  Film,
  Globe,
  Bot,
  Briefcase,
  User,
  Check,
  ArrowRight,
} from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABlock } from "@/components/sections/CTABlock";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Clips musicaux, vidéos publicitaires, sites internet, agents IA et automatisation. Découvrez toutes les solutions créatives et digitales d'OBSIDIAN Arts Films.",
};

const iconMap: Record<string, React.ElementType> = {
  Music,
  Megaphone,
  Smartphone,
  Film,
  Globe,
  Bot,
  Briefcase,
  User,
};

export default function ServicesPage() {
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
            <span className="tag mb-5 inline-flex">Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--obsidian-white)] leading-tight mb-5">
              Des solutions concrètes pour chaque projet
            </h1>
            <div className="accent-line mb-6" />
            <p className="text-[var(--obsidian-text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl">
              Vidéo, web ou automatisation : nous couvrons l'ensemble de vos besoins créatifs
              et digitaux avec une approche sur mesure, du premier brief à la livraison finale.
            </p>
          </div>
        </Container>
      </section>

      {/* Services detail */}
      <Section>
        <Container>
          <div className="space-y-8">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Film;
              const isEven = i % 2 === 0;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="group rounded-2xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] hover:border-[var(--obsidian-accent)]/30 transition-colors overflow-hidden"
                >
                  {/* Image banner */}
                  {service.image && (
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[var(--obsidian-card)]" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8 md:p-10">
                    {/* Icon + title col */}
                    <div className={`lg:col-span-2 flex flex-col justify-center ${isEven ? "" : "lg:order-last"}`}>
                      <div className="w-14 h-14 rounded-xl bg-[var(--obsidian-accent-dim)] flex items-center justify-center mb-5">
                        <Icon size={24} className="text-[var(--obsidian-accent)]" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[var(--obsidian-white)] mb-3 leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-[var(--obsidian-text-muted)] text-base leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>
                      <Button href="/contact" variant="primary" size="md" className="w-fit">
                        Demander un devis
                        <ArrowRight size={16} />
                      </Button>
                    </div>

                    {/* Benefits col */}
                    <div className={`lg:col-span-3 flex flex-col justify-center ${isEven ? "" : "lg:order-first"}`}>
                      <h3 className="text-[var(--obsidian-text-subtle)] text-xs font-semibold tracking-wider uppercase mb-4">
                        Ce que vous obtenez
                      </h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--obsidian-accent-dim)] flex items-center justify-center mt-0.5">
                              <Check size={11} className="text-[var(--obsidian-accent)]" strokeWidth={3} />
                            </span>
                            <span className="text-[var(--obsidian-text)] text-sm leading-relaxed">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTABlock
        title="Un projet en tête ?"
        subtitle="Dites-nous ce dont vous avez besoin et nous vous proposons une solution adaptée. Devis gratuit, sans engagement."
        dark
      />
    </>
  );
}
