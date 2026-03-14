/**
 * OBSIDIAN Arts Films Studio — Générateur d'images
 * ------------------------------------------------
 * Utilise google/nano-banana-pro via l'API Replicate
 * pour générer les 26 assets visuels du site.
 *
 * Usage :
 *   REPLICATE_API_TOKEN=r8_xxx node generate-images.js
 *
 * Pré-requis :
 *   npm install replicate
 */

import Replicate from "replicate";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "public", "images");

const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("❌  REPLICATE_API_TOKEN manquant.");
  console.error("   Lance : REPLICATE_API_TOKEN=r8_xxx node generate-images.js");
  process.exit(1);
}

const replicate = new Replicate({ auth: TOKEN });

// ─── Style de base commun ───────────────────────────────────────────────────
const BASE =
  "dark premium cinematic aesthetic, near-black background, gold bronze accent highlights #c8a96e, " +
  "sleek elegant composition, no stock photo feel, high-end refined visual, " +
  "subtle depth and controlled contrast, modern digital creative studio, no text, no watermark";

// ─── Liste des 26 images à générer ──────────────────────────────────────────
const IMAGES = [
  // ── HERO ──────────────────────────────────────────────────────────────────
  {
    file: "hero-main.jpg",
    ratio: "16:9",
    prompt: `Ultra-premium creative studio command center, cinematic wide shot, dark near-black environment,
multiple high-end monitors displaying video editing timeline and web design mockups and AI dashboard interfaces,
dramatic rim lighting with gold-bronze accent glows, cinematic camera equipment bokeh in background,
floating holographic UI elements, subtle lens flares, deep atmospheric perspective,
film production meets digital technology, sleek modern workspace, photorealistic, hyperdetailed. ${BASE}`,
  },

  // ── SERVICES ──────────────────────────────────────────────────────────────
  {
    file: "service-clips-musicaux.jpg",
    ratio: "16:9",
    prompt: `Cinematic music video production scene, dark atmospheric stage with dramatic colored lighting,
camera crane silhouette, artistic lens flare and light bokeh, moody film aesthetic,
gold-bronze rim light accents, shallow depth of field, professional cinema camera in foreground bokeh,
abstract motion blur light trails, premium music video production atmosphere, no people visible. ${BASE}`,
  },
  {
    file: "service-video-pub.jpg",
    ratio: "16:9",
    prompt: `Premium advertising video production setup, dark studio environment,
product on sleek dark podium with dramatic spotlight creating golden rim light,
professional softboxes with warm gold glow, camera equipment visible in bokeh,
cinematic color grading dark teal and gold, polished reflective surface,
luxury brand commercial aesthetic, high-end product photography meets video production,
minimal composition. ${BASE}`,
  },
  {
    file: "service-reseaux-sociaux.jpg",
    ratio: "16:9",
    prompt: `Modern social media content creation flatlay, dark matte black surface,
smartphone showing vertical reel format with glowing screen, ring light reflection on surface,
microphone and accessories arranged with artistic composition, gold accent lighting,
professional content creator setup, minimal stylized. ${BASE}`,
  },
  {
    file: "service-teasers.jpg",
    ratio: "16:9",
    prompt: `Dynamic teaser trailer production aesthetic, dark cinematic environment,
film countdown leader frames and motion blur light streaks, dramatic energy and anticipation mood,
gold-bronze light trails suggesting fast movement, film reel elements in dark space,
preview and reveal concept, high-energy cinematic still. ${BASE}`,
  },
  {
    file: "service-sites-web.jpg",
    ratio: "16:9",
    prompt: `Ultra-premium web design mockup, floating laptop and smartphone screens
displaying beautiful dark website interface with gold accents, dark near-black studio background,
screens emit soft blue-white glow with gold UI highlights, multiple device mockups at elegant angles,
holographic wireframe elements floating around screens, modern UI components visible on screen,
professional digital agency aesthetic, photorealistic 3D render style. ${BASE}`,
  },
  {
    file: "service-ia-automatisation.jpg",
    ratio: "16:9",
    prompt: `Futuristic AI automation visualization, dark near-black background,
glowing neural network nodes connected by gold-bronze light streams,
abstract data flow visualization, holographic dashboard interface floating,
circuit board patterns dissolving into light particles,
automated workflow diagram in golden light, deep space dark atmosphere,
technological elegance, no faces. ${BASE}`,
  },

  // ── CIBLES ────────────────────────────────────────────────────────────────
  {
    file: "cible-artiste.jpg",
    ratio: "1:1",
    prompt: `Silhouette of musician artist in dark moody studio, dramatic backlight
creating gold-bronze rim lighting, microphone stand in foreground,
atmospheric haze and bokeh lights, cinematic portrait mood,
dark background with subtle colored stage light,
artistic creative individual captured as silhouette, no face visible,
premium music production atmosphere, film grain texture. ${BASE}`,
  },
  {
    file: "cible-entreprise.jpg",
    ratio: "1:1",
    prompt: `Premium corporate modern office environment, dark elegant interior design,
glass conference table with laptop glowing, city skyline blurred through
floor-to-ceiling windows at dusk, gold accent details in architecture,
sophisticated business atmosphere, no people, warm dark lighting,
editorial architecture photography, minimal luxury aesthetic. ${BASE}`,
  },
  {
    file: "cible-independant.jpg",
    ratio: "1:1",
    prompt: `Modern freelancer workspace flatlay, dark premium desk surface,
laptop with glowing screen showing design work, notebook coffee
and minimal accessories arranged with precision, soft gold accent lighting,
clean minimal composition, professional independent worker aesthetic,
productivity and creativity mood, no face. ${BASE}`,
  },
  {
    file: "cible-association.jpg",
    ratio: "1:1",
    prompt: `Event venue interior dark and atmospheric, rows of chairs facing
illuminated stage with warm gold spotlight, community gathering space,
nonprofit event aesthetic, dramatic theatrical lighting,
empty stage with golden beam of light descending,
architectural interior photography, cinematic depth of field, no people. ${BASE}`,
  },
  {
    file: "cible-commercant.jpg",
    ratio: "1:1",
    prompt: `Upscale boutique shop interior at night, warm golden interior lighting
through display window, premium product display with dark elegant backdrop,
artisan workshop detail shot, rich textures and materials,
gold and dark tones, local premium commerce aesthetic,
editorial lifestyle photography, no people. ${BASE}`,
  },
  {
    file: "cible-particulier.jpg",
    ratio: "1:1",
    prompt: `Personal creative project aesthetic, dark cozy home studio corner,
soft warm lamp light creating intimate atmosphere, personal items
artistically arranged, camera as centerpiece,
personal passion project mood, warm gold tones against dark background,
genuine authentic lifestyle photography, no face, shallow depth of field. ${BASE}`,
  },

  // ── PROCESS ───────────────────────────────────────────────────────────────
  {
    file: "process-ecoute.jpg",
    ratio: "1:1",
    prompt: `Minimalist premium icon concept, dark background,
single glowing headphone rendered in gold as elegant 3D object floating in dark space,
soft ambient glow, subtle reflection below, clean centered composition,
luxury product photography style, isolated object, deep black background, cinematic lighting. ${BASE}`,
  },
  {
    file: "process-conception.jpg",
    ratio: "1:1",
    prompt: `Minimalist premium concept, dark background,
elegant glowing golden sketchbook or wireframe layout
rendered as 3D object in gold light,
holographic blueprint aesthetic, floating in dark space,
subtle particle glow, clean centered composition, luxury minimal 3D render. ${BASE}`,
  },
  {
    file: "process-creation.jpg",
    ratio: "1:1",
    prompt: `Minimalist premium concept, dark background,
glowing golden tools combined — paintbrush code brackets and film frame —
rendered as elegant 3D icon in gold floating in dark space,
creative production concept, soft rim light, subtle glow particles,
clean centered minimal composition, luxury 3D icon. ${BASE}`,
  },
  {
    file: "process-livraison.jpg",
    ratio: "1:1",
    prompt: `Minimalist premium concept, dark background,
elegant glowing golden checkmark rendered as premium 3D icon in gold,
floating in deep dark space, success and delivery concept,
soft ambient gold glow, clean centered composition,
minimal luxury aesthetic, cinematic studio lighting. ${BASE}`,
  },

  // ── PORTFOLIO ─────────────────────────────────────────────────────────────
  {
    file: "portfolio-petits-plans-prives.jpg",
    ratio: "16:9",
    prompt: `Dark cinematic advertising film still, intimate private event venue,
dramatic chiaroscuro lighting, gold-bronze light accents,
elegant dark atmosphere, blurred bokeh background with warm tones,
premium event advertising visual, french short film aesthetic,
cinematic color grade dark teal and gold, editorial photography style. ${BASE}`,
  },
  {
    file: "portfolio-burning-edition.jpg",
    ratio: "16:9",
    prompt: `Premium nightclub event atmosphere, dark venue with dramatic lighting,
red and gold color palette, luxury party aesthetic,
stage with atmospheric haze and colored spotlights,
Playboy magazine glamour meets dark editorial photography,
no people visible, rich dark tones with warm accent lights, cinematic event photography. ${BASE}`,
  },
  {
    file: "portfolio-moostik.jpg",
    ratio: "16:9",
    prompt: `Animated series concept art aesthetic, dark background with colorful
character design elements, cartoon animation production mood,
glowing character silhouettes with vibrant colors against dark backdrop,
animation studio production visual, creative illustrated aesthetic
meets premium digital art, dark background with colorful pops. ${BASE}`,
  },
  {
    file: "portfolio-xman.jpg",
    ratio: "16:9",
    prompt: `Caribbean urban music video aesthetic, dramatic cinematic scene,
dark moody atmosphere with colorful artistic lighting,
music video production still, urban street meets cinematic lighting,
warm tropical tones against dark shadows,
French Caribbean rap aesthetic, premium music video frame,
cinematic color grading, no visible faces. ${BASE}`,
  },
  {
    file: "portfolio-warcraft-cadifor.jpg",
    ratio: "16:9",
    prompt: `Epic fantasy cinematic teaser, dark dramatic battlefield atmosphere,
magical glowing elements in gold and dark tones,
Warcraft inspired fantasy world, cinematic wide shot,
dramatic sky with atmospheric lighting, fantasy epic movie poster aesthetic,
no faces visible, premium VFX cinematic still. ${BASE}`,
  },
  {
    file: "portfolio-aides-ia.jpg",
    ratio: "16:9",
    prompt: `AI-powered assistant application mockup, dark premium UI on
floating smartphone screen, chat interface with glowing responses,
social aid and automation concept, warm gold accents on dark screen,
modern mobile application design, conversational AI visual,
humanitarian tech meets premium design, multiple device display. ${BASE}`,
  },
  {
    file: "portfolio-occiflow.jpg",
    ratio: "16:9",
    prompt: `Premium web platform mockup floating on dark background,
modern dashboard interface displayed on laptop and tablet screens,
territorial data visualization with map elements glowing,
clean professional UI with blue-green data visualization on dark screens,
multiple device mockup arrangement, digital agency portfolio presentation style. ${BASE}`,
  },

  // ── À PROPOS ──────────────────────────────────────────────────────────────
  {
    file: "apropos-setup-studio.jpg",
    ratio: "16:9",
    prompt: `High-end creative director studio setup, wide shot of professional workspace,
multiple curved monitors displaying video editing software and design tools,
dark room with warm ambient lighting, cable-managed desk with premium equipment,
cinematic camera and lighting rig visible in background,
atmospheric moody studio environment, no person visible,
premium workstation aesthetic, gold accent desk lamp, editorial interior photography. ${BASE}`,
  },
  {
    file: "apropos-coulisses.jpg",
    ratio: "4:3",
    prompt: `Behind the scenes film production atmosphere, dark cinematic environment,
monitor displaying video footage in color grading software,
hands on keyboard with warm gold backlight only visible,
professional editing suite atmosphere, focus on the craft and dedication,
shallow depth of field on screen content, film production meets digital,
dark premium editorial photography, authentic creative work mood, no face. ${BASE}`,
  },

  // ── CTA FINAL ─────────────────────────────────────────────────────────────
  {
    file: "cta-final-bg.jpg",
    ratio: "16:9",
    prompt: `Ultra-premium dark cinematic landscape composition, abstract creative
studio environment, deep black space with elegant gold light streams
radiating from center, subtle bokeh particles floating,
dark textured background with depth and dimension,
cinematic widescreen closing shot, premium brand atmosphere,
invitation and possibility concept, abstract minimalist luxury,
gold light beams in darkness, photorealistic atmospheric photography, 8K quality. ${BASE}`,
  },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status} ${res.statusText}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(destPath, buffer);
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  // Créer le dossier de sortie
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  console.log(`\n🎬  OBSIDIAN Arts Films — Génération de ${IMAGES.length} images`);
  console.log(`📁  Sortie : ${OUTPUT_DIR}\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < IMAGES.length; i++) {
    const { file, ratio, prompt } = IMAGES[i];
    const destPath = join(OUTPUT_DIR, file);
    const label = `[${String(i + 1).padStart(2, "0")}/${IMAGES.length}]`;

    // Sauter si déjà généré
    if (existsSync(destPath)) {
      console.log(`${label} ⏭  ${file} (déjà présent, ignoré)`);
      success++;
      continue;
    }

    process.stdout.write(`${label} ⏳  ${file} ... `);

    try {
      const output = await replicate.run("google/nano-banana-pro", {
        input: {
          prompt,
          aspect_ratio: ratio,
        },
      });

      // L'output peut être une URL string, un tableau, ou un ReadableStream
      let imageUrl;
      if (typeof output === "string") {
        imageUrl = output;
      } else if (Array.isArray(output)) {
        imageUrl = output[0];
      } else if (output && typeof output === "object" && output.url) {
        imageUrl = typeof output.url === "function" ? output.url() : output.url;
      } else {
        // ReadableStream (replicate v1+)
        const chunks = [];
        for await (const chunk of output) {
          if (chunk instanceof Uint8Array) chunks.push(chunk);
          else if (typeof chunk === "string") { imageUrl = chunk; break; }
        }
        if (!imageUrl && chunks.length > 0) {
          await writeFile(destPath, Buffer.concat(chunks));
          console.log(`✅`);
          success++;
          await sleep(1500);
          continue;
        }
      }

      if (!imageUrl) throw new Error("Pas d'URL dans la réponse");

      await downloadImage(imageUrl, destPath);
      console.log(`✅`);
      success++;
    } catch (err) {
      console.log(`❌  ${err.message}`);
      failed++;
    }

    // Pause entre requêtes pour éviter le rate limit
    if (i < IMAGES.length - 1) await sleep(1500);
  }

  console.log(`\n──────────────────────────────────────`);
  console.log(`✅  Réussi  : ${success}/${IMAGES.length}`);
  if (failed > 0) console.log(`❌  Échoué  : ${failed}/${IMAGES.length}`);
  console.log(`📁  Images dans : public/images/`);
  console.log(`\n💡  Lance \`npm run dev\` pour voir le résultat.\n`);
}

main().catch((err) => {
  console.error("\n❌  Erreur fatale :", err.message);
  process.exit(1);
});
