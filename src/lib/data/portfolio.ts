export type PortfolioCategory = "video" | "musique" | "publicite" | "web" | "ia";
export type EmbedType = "youtube" | "instagram" | "iframe";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  description: string;
  available: boolean;
  embedType?: EmbedType;
  embedSrc?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Petits Plans Privés",
    category: "publicite",
    categoryLabel: "Publicité",
    description:
      "Création d'une publicité Instagram pour Petits Plans Privés. Format Reels optimisé pour l'engagement sur les réseaux sociaux.",
    available: true,
    embedType: "instagram",
    embedSrc: "DUHmMrVjKcm",
  },
  {
    id: "2",
    title: "Soirée Burning Edition PLAYBOY",
    category: "publicite",
    categoryLabel: "Publicité",
    description:
      "Publicité événementielle pour la soirée Burning Edition PLAYBOY. Contenu percutant adapté aux réseaux sociaux.",
    available: true,
    embedType: "instagram",
    embedSrc: "DTA05bTkVc9",
  },
  {
    id: "3",
    title: "Moostik — Teaser Série Animée",
    category: "video",
    categoryLabel: "Série animée",
    description:
      "Teaser de la série animée Moostik. Animation originale à l'univers coloré et décalé, diffusée sur Instagram.",
    available: true,
    embedType: "instagram",
    embedSrc: "DTlpYDyDKGQ",
  },
  {
    id: "4",
    title: "X-MAN — Ki Manniè Pou Fè",
    category: "musique",
    categoryLabel: "Clip musical",
    description:
      "Visualizer musical 100% généré par intelligence artificielle pour l'artiste X-MAN. Esthétique unique et immersive.",
    available: true,
    embedType: "youtube",
    embedSrc: "Fb64RXzGRI4",
  },
  {
    id: "9",
    title: "Warcraft : Cadifor",
    category: "video",
    categoryLabel: "Teaser",
    description:
      "Teaser cinématique Warcraft : Cadifor. Réalisé par Gary_Byss.",
    available: true,
    embedType: "instagram",
    embedSrc: "DV12REpjPVz",
  },
  {
    id: "8",
    title: "Juste Une Minute — Monstaaa L'Ovni",
    category: "musique",
    categoryLabel: "Clip musical",
    description:
      "Clip musical Instagram pour Monstaaa L'Ovni — Juste Une Minute.",
    available: true,
    embedType: "instagram",
    embedSrc: "DTQbDgtiBvY",
  },
  {
    id: "7",
    title: "Nostalgique — Monstaaa L'Ovni",
    category: "musique",
    categoryLabel: "Clip musical",
    description:
      "Clip musical pour Monstaaa L'Ovni — une plongée nostalgique dans l'univers de l'artiste.",
    available: true,
    embedType: "youtube",
    embedSrc: "MaR2_54qQIc",
  },
  {
    id: "5",
    title: "Aides Particuliers & Associations",
    category: "ia",
    categoryLabel: "Application web",
    description:
      "Plateforme gratuite d'orientation vers les aides disponibles pour particuliers et associations. Interface simple, accès rapide.",
    available: true,
    embedType: "iframe",
    embedSrc: "https://aides-particulier-association.vercel.app",
  },
  {
    id: "6",
    title: "OcciFlow — Plateforme Territoriale",
    category: "web",
    categoryLabel: "Site web",
    description:
      "Plateforme territoriale modulaire dédiée à l'Occitanie. Outil numérique au service des acteurs locaux et des collectivités.",
    available: true,
    embedType: "iframe",
    embedSrc: "https://occiflow.vercel.app",
  },
];

export const categoryLabels: Record<PortfolioCategory, string> = {
  video: "Vidéo",
  musique: "Musique",
  publicite: "Publicité",
  web: "Web",
  ia: "IA / App",
};
