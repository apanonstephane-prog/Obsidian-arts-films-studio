"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, Container, SectionHeader } from "@/components/ui/Section";
import { faqItems } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <Container narrow>
        <SectionHeader
          tag="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce que vous devez savoir avant de nous contacter."
          centered
        />

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "rounded-xl border transition-all duration-200",
                  isOpen
                    ? "border-[var(--obsidian-accent)]/40 bg-[var(--obsidian-card)]"
                    : "border-[var(--obsidian-border)] bg-[var(--obsidian-card)] hover:border-[var(--obsidian-muted)]"
                )}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className={cn(
                      "font-medium text-base transition-colors",
                      isOpen
                        ? "text-[var(--obsidian-accent)]"
                        : "text-[var(--obsidian-white)]"
                    )}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      "flex-shrink-0 text-[var(--obsidian-text-muted)] transition-transform duration-200",
                      isOpen && "rotate-180 text-[var(--obsidian-accent)]"
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  className={cn(
                    "overflow-hidden transition-all duration-200",
                    isOpen ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-5 text-[var(--obsidian-text-muted)] text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
