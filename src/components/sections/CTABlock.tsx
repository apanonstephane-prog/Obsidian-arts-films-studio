import { ArrowRight, Mail } from "lucide-react";
import { Section, Container } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/data/navigation";

interface CTABlockProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export function CTABlock({
  title = "Parlons de votre projet",
  subtitle = "Que vous ayez une idée précise ou juste une envie de faire avancer les choses, c'est par ici que ça commence. Échange gratuit, sans engagement.",
  dark,
}: CTABlockProps) {
  return (
    <Section dark={dark} id="contact-cta">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-[var(--obsidian-border)] bg-[var(--obsidian-card)] p-8 md:p-14 text-center">
          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% -20%, rgba(200,169,110,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <span className="tag mb-6 inline-flex">Passons à l'action</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--obsidian-white)] mb-5 leading-tight">
              {title}
            </h2>
            <p className="text-[var(--obsidian-text-muted)] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Demander un devis
                <ArrowRight size={18} />
              </Button>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-[var(--obsidian-text-muted)] text-sm hover:text-[var(--obsidian-accent)] transition-colors"
              >
                <Mail size={15} />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
