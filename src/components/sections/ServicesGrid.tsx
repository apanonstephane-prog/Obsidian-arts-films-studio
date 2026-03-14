import Link from "next/link";
import Image from "next/image";
import {
  Music,
  Megaphone,
  Smartphone,
  Film,
  Globe,
  Bot,
  Briefcase,
  User,
  ArrowRight,
} from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { services } from "@/lib/data/services";

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

export function ServicesGrid() {
  return (
    <Section dark id="services">
      <Container>
        <SectionHeader
          tag="Ce que nous faisons"
          title="Des solutions créatives et digitales pour chaque besoin"
          subtitle="De la vidéo au web en passant par l'intelligence artificielle, nous couvrons l'ensemble de vos besoins créatifs et digitaux."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Film;
            return (
              <article
                key={service.id}
                className="card-hover group flex flex-col rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)] overflow-hidden"
              >
                {/* Service image */}
                {service.image && (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(22,22,26,0.9) 100%)" }}
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1 p-6">
                {/* Icon */}
                <div className="w-11 h-11 rounded-lg bg-[var(--obsidian-accent-dim)] flex items-center justify-center mb-4 group-hover:bg-[rgba(200,169,110,0.2)] transition-colors">
                  <Icon size={20} className="text-[var(--obsidian-accent)]" />
                </div>

                <h3 className="text-[var(--obsidian-white)] font-semibold text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed flex-1 mb-4">
                  {service.shortDescription}
                </p>

                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1.5 text-[var(--obsidian-accent)] text-sm font-medium hover:gap-2.5 transition-all"
                  aria-label={`En savoir plus sur ${service.title}`}
                >
                  En savoir plus
                  <ArrowRight size={14} />
                </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
