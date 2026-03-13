import { Section, Container, SectionHeader } from "@/components/ui/Section";

const steps = [
  {
    number: "01",
    title: "Écoute du besoin",
    description:
      "Un premier échange pour comprendre votre projet, vos objectifs, vos contraintes et vos attentes. Sans engagement, sans jargon.",
  },
  {
    number: "02",
    title: "Proposition adaptée",
    description:
      "Un devis clair et détaillé, pensé pour votre besoin réel. Pas de pack standard imposé. Chaque proposition est sur mesure.",
  },
  {
    number: "03",
    title: "Création & développement",
    description:
      "Production, développement et création avec un suivi régulier. Vous êtes informé à chaque étape et vos retours sont intégrés.",
  },
  {
    number: "04",
    title: "Livraison & accompagnement",
    description:
      "Livraison soignée dans les délais convenus, avec accompagnement et conseils pour bien utiliser le résultat.",
  },
];

export function Approach() {
  return (
    <Section dark id="approche">
      <Container>
        <SectionHeader
          tag="Notre approche"
          title="Simple, clair et orienté résultat"
          subtitle="Un processus transparent de A à Z, pensé pour que vous soyez toujours à l'aise et au courant."
        />

        <div className="relative">
          {/* Connector line for desktop */}
          <div
            className="hidden lg:block absolute top-8 left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-[var(--obsidian-border)]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Step number bubble */}
                <div className="flex items-center gap-3 mb-5 lg:mb-0 lg:flex-col lg:items-start">
                  <div className="relative z-10 w-16 h-16 rounded-full border border-[var(--obsidian-accent)]/30 bg-[var(--obsidian-card)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--obsidian-accent)] font-bold text-lg font-mono">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="lg:mt-6">
                  <h3 className="text-[var(--obsidian-white)] font-semibold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
