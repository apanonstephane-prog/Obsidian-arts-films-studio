export type PortfolioCategory = "video" | "musique" | "publicite" | "web" | "ia";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  description: string;
  thumbnail: string;
  available: boolean;
  link?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Clip artistique — Projet Lumière",
    category: "musique",
    categoryLabel: "Clip musical",
    description:
      "Direction artistique complète et tournage d'un clip pour un artiste indépendant. Rendu cinématographique, ambiance nocturne et urbaine.",
    thumbnail: "/portfolio/clip-01.jpg",
    available: false,
  },
  {
    id: "2",
    title: "Campagne vidéo — Marque locale",
    category: "publicite",
    categoryLabel: "Publicité",
    description:
      "Série de trois formats vidéo pour le lancement d'une marque locale. Adapté pour les réseaux sociaux et les supports digitaux.",
    thumbnail: "/portfolio/pub-01.jpg",
    available: false,
  },
  {
    id: "3",
    title: "Site vitrine — Cabinet conseil",
    category: "web",
    categoryLabel: "Site internet",
    description:
      "Création d'un site vitrine professionnel pour un cabinet de conseil. Design épuré, rapide, optimisé SEO et entièrement responsive.",
    thumbnail: "/portfolio/web-01.jpg",
    available: false,
  },
  {
    id: "4",
    title: "Assistant IA — Service client",
    category: "ia",
    categoryLabel: "Agent IA",
    description:
      "Déploiement d'un assistant de qualification automatique pour une TPE. Réduction du temps de réponse et meilleure organisation des demandes.",
    thumbnail: "/portfolio/ia-01.jpg",
    available: false,
  },
  {
    id: "5",
    title: "Reels événement — Soirée lancement",
    category: "video",
    categoryLabel: "Vidéo",
    description:
      "Captation et montage de reels dynamiques pour la soirée de lancement d'un nouveau concept. Livraison en 48h.",
    thumbnail: "/portfolio/event-01.jpg",
    available: false,
  },
  {
    id: "6",
    title: "Identité digitale — Artiste émergent",
    category: "musique",
    categoryLabel: "Clip musical",
    description:
      "Accompagnement complet d'un artiste émergent : clip, visuels, contenu réseaux. Cohérence d'image de A à Z.",
    thumbnail: "/portfolio/artist-01.jpg",
    available: false,
  },
];

export const categoryLabels: Record<PortfolioCategory, string> = {
  video: "Vidéo",
  musique: "Musique",
  publicite: "Publicité",
  web: "Web",
  ia: "IA / Automatisation",
};
