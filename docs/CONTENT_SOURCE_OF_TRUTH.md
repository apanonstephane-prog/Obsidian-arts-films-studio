# OBSIDIAN — Source de vérité et protocole de refonte

## Règle impérative

Le site officiel en production est la **source de vérité** pour les informations, les médias, les réalisations, les coordonnées et toutes les réserves légales.

- **Projet** : `obsidian-arts-films-studio` sur Vercel.
- **Dépôt** : `apanonstephane-prog/Obsidian-arts-films-studio`.
- **Commit officiel de référence au lancement de la refonte** : `215a15e76251c376760da66aec430c8a4de035a5`.
- **Branche isolée de travail** : `feat/cinematic-home-v1-20261123`.
- **Mise en production** : **INTERDITE** avant feu vert explicite du propriétaire.

## Inventaire protégé

Les contenus de référence restent intégralement présents :

| Contenu | Source officielle | Consigne |
|---|---|---|
| Les 8 offres de services et leurs images | `src/lib/data/services.ts`, `src/components/sections/ServicesGrid.tsx` | Aucun retrait / renommage |
| Les 6 publics accompagnés et leurs images | `src/components/sections/ForWho.tsx` | Aucun retrait |
| Les 4 étapes de la méthode et leurs visuels | `src/components/sections/Approach.tsx` | Préserver la formulation |
| Les 6 arguments de différenciation | `src/components/sections/WhyObsidian.tsx` | Préserver la formulation |
| Toutes les questions et réponses | `src/lib/data/faq.ts`, `src/components/sections/FAQSection.tsx` | Pas de réponses inventées |
| 20 créations publicitaires **de démonstration** | `src/components/sections/DemoAdsGallery.tsx` | Conserver les images ET leurs mentions non commanditées |
| 4 applications + 2 films récents | `src/app/portfolio/page.tsx` | Conserver toutes les sources, liens et qualifications |
| 10 autres éléments de portfolio | `src/lib/data/portfolio.ts` | Source unique des titres, médias et descriptions |
| Médias locaux payés | `public/images/`, `public/videos/`, `public/logo.png` | Aucun remplacement ni suppression |
| Contact et coordonnées | `src/lib/data/navigation.ts`, `src/app/contact/page.tsx`, `src/app/api/contact/route.ts` | Aucun changement sans validation |

## Règles de conception

1. **Améliorer la présentation, pas inventer des références.** Toute vignette ou étude de cas affichée sur l'accueil doit provenir des fichiers officiels.
2. Réutiliser les médias existants à plein potentiel. Nouveaux mouvements : CSS / animation web tant que possible. Aucune nouvelle génération payante sans demande explicite.
3. Préserver les démonstrations comme **non commanditées** ; ne jamais les faire passer pour des contrats clients.
4. Garder les pages et formulaires existants fonctionnels. La navigation doit continuer à mener aux mêmes contenus.
5. Contrôler les builds Next.js, les ressources, les liens, les interactions, la fluidité sur mobile, `prefers-reduced-motion` et l'absence de régression SEO.
6. Ne jamais fusionner la branche de travail vers la branche officielle tant que le propriétaire n'a pas donné le feu vert explicite.

## Contrôles reproductibles

```bash
node scripts/verify-content-preservation.mjs
npm run build
```

Le vérificateur nécessite l'historique Git contenant le commit de référence. Il échoue volontairement si le catalogue officiel, les pages protégées ou les fichiers médias changent.

*Note : les données du site officiel peuvent évoluer pendant le chantier. Toute synchronisation ultérieure doit d'abord être auditée et intégrée sans effacer les changements non validés.*
