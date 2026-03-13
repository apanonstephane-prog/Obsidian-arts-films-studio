"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  typeClient: string;
  service: string;
  budget: string;
  delais: string;
  description: string;
  consent: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const clientTypes = [
  "Particulier",
  "Artiste",
  "Entreprise",
  "Association",
  "Indépendant / Freelance",
  "Artisan / Commerçant",
  "Autre",
];

const serviceOptions = [
  "Clip musical",
  "Vidéo publicitaire",
  "Contenus réseaux sociaux",
  "Teaser / Reel / Trailer",
  "Site internet",
  "Agent IA & automatisation",
  "Solution pour professionnel",
  "Solution pour particulier",
  "Autre / Je ne sais pas encore",
];

const budgetOptions = [
  "Moins de 500 €",
  "500 € – 1 000 €",
  "1 000 € – 3 000 €",
  "3 000 € – 5 000 €",
  "Plus de 5 000 €",
  "À définir ensemble",
];

const delaisOptions = [
  "Urgent (moins de 2 semaines)",
  "Sous 1 mois",
  "Sous 3 mois",
  "Pas de contrainte particulière",
];

const initialForm: FormData = {
  nom: "",
  prenom: "",
  email: "",
  telephone: "",
  typeClient: "",
  service: "",
  budget: "",
  delais: "",
  description: "",
  consent: false,
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.nom.trim()) errors.nom = "Le nom est requis.";
  if (!data.prenom.trim()) errors.prenom = "Le prénom est requis.";
  if (!data.email.trim()) {
    errors.email = "L'email est requis.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Format d'email invalide.";
  }
  if (!data.typeClient) errors.typeClient = "Merci de sélectionner un profil.";
  if (!data.service) errors.service = "Merci de sélectionner un service.";
  if (!data.description.trim()) errors.description = "Décrivez brièvement votre projet.";
  if (!data.consent) errors.consent = "Merci d'accepter la politique de confidentialité.";
  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    // ─── Brancher ici Resend / Formspree / Supabase ───────────────────────────
    // Exemple Formspree : fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: JSON.stringify(form) })
    // Exemple Resend : POST /api/contact qui utilise resend.emails.send(...)
    // ─────────────────────────────────────────────────────────────────────────

    try {
      // Simulation d'envoi (remplacer par l'appel réel)
      await new Promise((res) => setTimeout(res, 1200));
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
          <CheckCircle className="text-green-400" size={30} />
        </div>
        <h3 className="text-[var(--obsidian-white)] text-xl font-semibold mb-2">
          Message envoyé !
        </h3>
        <p className="text-[var(--obsidian-text-muted)] text-sm max-w-sm mb-6">
          Merci pour votre demande. Nous vous répondrons dans les meilleurs délais.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Envoyer une autre demande
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Nom" required error={errors.nom}>
          <input
            className="form-input"
            type="text"
            id="nom"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            placeholder="Dupont"
            autoComplete="family-name"
            aria-describedby={errors.nom ? "nom-error" : undefined}
          />
        </Field>
        <Field label="Prénom" required error={errors.prenom}>
          <input
            className="form-input"
            type="text"
            id="prenom"
            name="prenom"
            value={form.prenom}
            onChange={handleChange}
            placeholder="Marie"
            autoComplete="given-name"
          />
        </Field>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email" required error={errors.email}>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="marie@exemple.fr"
            autoComplete="email"
          />
        </Field>
        <Field label="Téléphone" error={errors.telephone}>
          <input
            className="form-input"
            type="tel"
            id="telephone"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            placeholder="06 12 34 56 78"
            autoComplete="tel"
          />
        </Field>
      </div>

      {/* Profile + service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Vous êtes" required error={errors.typeClient}>
          <select
            className="form-input"
            id="typeClient"
            name="typeClient"
            value={form.typeClient}
            onChange={handleChange}
          >
            <option value="">Sélectionnez votre profil</option>
            {clientTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Service recherché" required error={errors.service}>
          <select
            className="form-input"
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
          >
            <option value="">Sélectionnez un service</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
      </div>

      {/* Budget + délais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Budget estimatif" error={errors.budget}>
          <select
            className="form-input"
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
          >
            <option value="">Fourchette approximative</option>
            {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </Field>
        <Field label="Délais souhaités" error={errors.delais}>
          <select
            className="form-input"
            id="delais"
            name="delais"
            value={form.delais}
            onChange={handleChange}
          >
            <option value="">Quand en avez-vous besoin ?</option>
            {delaisOptions.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </Field>
      </div>

      {/* Description */}
      <Field label="Décrivez votre projet" required error={errors.description}>
        <textarea
          className="form-input resize-none"
          id="description"
          name="description"
          rows={5}
          value={form.description}
          onChange={handleChange}
          placeholder="Décrivez votre projet, vos objectifs, ce que vous souhaitez obtenir... Plus vous êtes précis, plus notre réponse sera pertinente."
        />
      </Field>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded accent-[var(--obsidian-accent)] cursor-pointer flex-shrink-0"
          />
          <span className="text-[var(--obsidian-text-muted)] text-sm leading-relaxed">
            J&apos;accepte que mes données soient utilisées pour traiter ma demande et me recontacter.
            Aucun démarchage, aucune revente de données.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1.5">
            <AlertCircle size={12} /> {errors.consent}
          </p>
        )}
      </div>

      {/* Error global */}
      {status === "error" && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle size={16} />
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-[var(--obsidian-black)]/30 border-t-[var(--obsidian-black)] rounded-full animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer ma demande
            <Send size={16} />
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-[var(--obsidian-text)] text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-[var(--obsidian-accent)] ml-1" aria-label="requis">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-red-400 text-xs flex items-center gap-1.5" role="alert">
          <AlertCircle size={12} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}
