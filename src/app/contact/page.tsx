import type { Metadata } from "next";
import { Mail, Clock, MessageCircle } from "lucide-react";
import { Section, Container } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Demande de devis — Contact",
  description:
    "Demandez un devis personnalisé pour votre projet vidéo, site internet ou agent IA. OBSIDIAN Arts Films vous répond rapidement.",
};

export default function ContactPage() {
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
            <span className="tag mb-5 inline-flex">Devis & Contact</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--obsidian-white)] leading-tight mb-5">
              Parlons de votre projet
            </h1>
            <div className="w-12 h-0.5 bg-[var(--obsidian-accent)] rounded mb-6" />
            <p className="text-[var(--obsidian-text-muted)] text-lg md:text-xl leading-relaxed max-w-2xl">
              Remplissez le formulaire ci-dessous et nous vous répondons dans les meilleurs
              délais. Vous pouvez aussi nous écrire directement par email.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Left: Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="p-6 rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)]">
                  <h2 className="text-[var(--obsidian-white)] font-semibold text-base mb-4">
                    Nous contacter directement
                  </h2>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[var(--obsidian-accent-dim)] flex items-center justify-center flex-shrink-0">
                        <Mail size={16} className="text-[var(--obsidian-accent)]" />
                      </div>
                      <div>
                        <div className="text-[var(--obsidian-text-subtle)] text-xs mb-0.5">Email</div>
                        <div className="text-[var(--obsidian-text)] text-sm group-hover:text-[var(--obsidian-accent)] transition-colors">
                          {siteConfig.email}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)]">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--obsidian-accent-dim)] flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-[var(--obsidian-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-[var(--obsidian-white)] font-medium text-sm mb-1">
                        Délai de réponse
                      </h3>
                      <p className="text-[var(--obsidian-text-muted)] text-sm">
                        Réponse rapide selon disponibilité. En général sous 24 à 48h.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)]">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--obsidian-accent-dim)] flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={16} className="text-[var(--obsidian-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-[var(--obsidian-white)] font-medium text-sm mb-1">
                        Premier échange
                      </h3>
                      <p className="text-[var(--obsidian-text-muted)] text-sm">
                        Gratuit et sans engagement. Nous prenons le temps d'écouter votre besoin avant toute proposition.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[var(--obsidian-text-subtle)] text-xs px-1">
                  * Les champs marqués d'un astérisque sont obligatoires.
                  Vos données ne sont pas partagées ni revendues.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="p-8 md:p-10 rounded-2xl bg-[var(--obsidian-card)] border border-[var(--obsidian-border)]">
                <h2 className="text-[var(--obsidian-white)] text-xl font-semibold mb-2">
                  Formulaire de demande de devis
                </h2>
                <p className="text-[var(--obsidian-text-muted)] text-sm mb-8">
                  Plus votre description est précise, plus notre réponse sera pertinente et adaptée.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
