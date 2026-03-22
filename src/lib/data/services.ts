export interface Service {
  id: string;
  icon: string;
  image?: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  category: "video" | "web" | "ia" | "solutions";
}

export const services: Service[] = [
  {
    id: "clips",
    icon: "Music",
    image: "/images/service-clips-musicaux.jpg",
    title: "Clips musicaux",
    shortDescription:
      "Donnez une identité visuelle forte à votre projet musical.",
    fullDescription:
      "Création de clips et visuels artistiques à forte identité, pensés pour renforcer l'image, l'univers et l'impact d'un projet musical. Du concept à la livraison finale, chaque étape est pensée pour sublimer votre musique.",
    benefits: [
      "Direction artistique sur mesure",
      "Rendu cinématographique professionnel",
      "Adapté à tous les styles musicaux",
      "Formats optimisés pour toutes les plateformes",
      "Accompagnement créatif de A à Z",
    ],
    category: "video",
  },
  {
    id: "pub",
    icon: "Megaphone",
    image: "/images/service-video-pub.jpg",
    title: "Vidéos publicitaires",
    shortDescription:
      "Mettez en valeur votre marque avec une vidéo qui marque les esprits.",
    fullDescription:
      "Création de contenus vidéo pour mettre en valeur une marque, un produit, un service ou une activité avec un rendu moderne et percutant. Une vidéo publicitaire réussie attire, convainc et convertit.",
    benefits: [
      "Script et storytelling inclus",
      "Rendu adapté à votre identité de marque",
      "Formats multi-supports (web, réseaux, TV locale)",
      "Efficace sur les audiences froides",
      "Livraison rapide selon cahier des charges",
    ],
    category: "video",
  },
  {
    id: "social",
    icon: "Smartphone",
    image: "/images/service-reseaux-sociaux.jpg",
    title: "Contenus réseaux sociaux",
    shortDescription:
      "Des formats courts et efficaces pour booster votre présence en ligne.",
    fullDescription:
      "Formats courts, teasers, reels, extraits, contenus promotionnels conçus pour attirer l'attention et améliorer la présence en ligne. Pensés pour Instagram, TikTok, YouTube Shorts et toutes les plateformes modernes.",
    benefits: [
      "Formats optimisés par plateforme",
      "Rythme accrocheur et impactant",
      "Adapté à votre charte et votre ton",
      "Production régulière possible",
      "Stratégie de contenu sur demande",
    ],
    category: "video",
  },
  {
    id: "teasers",
    icon: "Film",
    image: "/images/service-teasers.jpg",
    title: "Teasers, reels & trailers",
    shortDescription:
      "Créez l'anticipation et suscitez l'envie avant chaque lancement.",
    fullDescription:
      "Des formats dynamiques et percutants pour annoncer un événement, un lancement, un projet ou un moment fort. Trailers d'événements, teasers de sortie, reels d'ambiance : chaque format est conçu pour créer l'attente.",
    benefits: [
      "Impact immédiat en moins de 60 secondes",
      "Montage dynamique et énergique",
      "Sous-titres et motion design inclus",
      "Optimisé pour le partage viral",
      "Livraison rapide",
    ],
    category: "video",
  },
  {
    id: "web",
    icon: "Globe",
    image: "/images/service-sites-web.jpg",
    title: "Sites internet",
    shortDescription:
      "Une présence web claire, rapide et professionnelle pour votre activité.",
    fullDescription:
      "Création de sites vitrines, pages de présentation, interfaces simples et efficaces pensées pour donner une présence claire et professionnelle sur le web. Des sites modernes, rapides et optimisés pour le référencement.",
    benefits: [
      "Design sur mesure, mobile-first",
      "Optimisation SEO de base incluse",
      "Chargement ultra-rapide",
      "Interface facile à gérer",
      "Hébergement et déploiement accompagnés",
    ],
    category: "web",
  },
  {
    id: "ia",
    icon: "Bot",
    image: "/images/service-ia-automatisation.jpg",
    title: "Agents IA & automatisation",
    shortDescription:
      "Gagnez du temps et professionnalisez votre activité avec l'intelligence artificielle.",
    fullDescription:
      "Création de solutions intelligentes pour gagner du temps, répondre plus vite, mieux organiser le travail, simplifier certaines tâches et améliorer la relation client. Des outils puissants, simples à utiliser au quotidien.",
    benefits: [
      "Assistant de prise de contact automatisé",
      "Qualification intelligente des demandes",
      "Réponses automatiques personnalisées",
      "Intégration dans vos outils existants",
      "Formation et accompagnement inclus",
    ],
    category: "ia",
  },
  {
    id: "pro",
    icon: "Briefcase",
    image: "/images/cible-entreprise.jpg",
    title: "Solutions pour professionnels",
    shortDescription:
      "Communication, image et digital : un accompagnement complet pour votre activité.",
    fullDescription:
      "Solutions sur mesure pour entreprises, indépendants, artisans, commerçants, associations : communication visuelle, web, automatisation, présence digitale. Un seul interlocuteur pour tous vos besoins créatifs et digitaux.",
    benefits: [
      "Approche personnalisée par secteur",
      "Pack communication visuelle complet",
      "Image professionnelle renforcée",
      "Suivi et accompagnement sur la durée",
      "Solutions adaptées à votre budget",
    ],
    category: "solutions",
  },
  {
    id: "particuliers",
    icon: "User",
    image: "/images/cible-particulier.jpg",
    title: "Solutions pour particuliers",
    shortDescription:
      "Votre projet personnel mérite une attention et un rendu à la hauteur.",
    fullDescription:
      "Aide à la mise en valeur d'un projet personnel, d'un événement, d'une idée, d'une activité ou d'un besoin spécifique avec une approche simple et accompagnée. Parce que les besoins des particuliers méritent le même sérieux.",
    benefits: [
      "Accompagnement pas à pas",
      "Tarifs adaptés aux particuliers",
      "Aucun jargon technique",
      "Conseil et orientation inclus",
      "Résultat clé en main",
    ],
    category: "solutions",
  },
];
