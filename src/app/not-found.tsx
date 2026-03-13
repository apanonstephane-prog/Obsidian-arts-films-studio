import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <div className="text-8xl font-bold text-[var(--obsidian-border)] mb-4">404</div>
        <div className="w-12 h-0.5 bg-[var(--obsidian-accent)] rounded mx-auto mb-6" />
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--obsidian-white)] mb-4">
          Page introuvable
        </h1>
        <p className="text-[var(--obsidian-text-muted)] text-base mb-8 max-w-md mx-auto">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">
            <ArrowLeft size={16} />
            Retour à l&apos;accueil
          </Button>
          <Button href="/contact" variant="outline">
            Nous contacter
          </Button>
        </div>
      </div>
    </div>
  );
}
