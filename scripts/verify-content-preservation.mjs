#!/usr/bin/env node
/**
 * OBSIDIAN — content & media preservation guard.
 *
 * Run with: node scripts/verify-content-preservation.mjs
 *
 * Compares the current working tree with the official published baseline.
 * This deliberately blocks changes to existing copy, portfolio inventories,
 * media and portfolio/service routes during the design-only redesign.
 * Do not silently update the baseline to make the check pass.
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const baseline = process.env.OBSIDIAN_OFFICIAL_BASELINE || "215a15e76251c376760da66aec430c8a4de035a5";
const protectedFiles = [
  "src/lib/data/portfolio.ts",
  "src/lib/data/services.ts",
  "src/lib/data/navigation.ts",
  "src/lib/data/faq.ts",
  "src/components/sections/DemoAdsGallery.tsx",
  "src/components/sections/ServicesGrid.tsx",
  "src/components/sections/ForWho.tsx",
  "src/components/sections/Approach.tsx",
  "src/components/sections/WhyObsidian.tsx",
  "src/components/sections/FAQSection.tsx",
  "src/components/sections/CTABlock.tsx",
  "src/app/portfolio/page.tsx",
  "src/app/services/page.tsx",
  "src/app/a-propos/page.tsx",
  "src/app/solutions-pro/page.tsx",
  "src/app/solutions-particuliers/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/api/contact/route.ts",
];
const errors = [];
const git = (...args) => execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });

try {
  git("cat-file", "-e", `${baseline}^{commit}`);
} catch {
  console.error(`Cannot find baseline ${baseline}. Fetch Git history before running this check.`);
  process.exit(2);
}

for (const path of protectedFiles) {
  try {
    const original = git("show", `${baseline}:${path}`);
    const current = readFileSync(resolve(path), "utf8");
    if (original !== current) errors.push(`Protected official content changed: ${path}`);
  } catch (error) {
    errors.push(`Cannot verify official content: ${path} (${error.message})`);
  }
}

const publicChanges = git("diff", "--name-status", baseline, "HEAD", "--", "public").trim();
if (publicChanges) {
  errors.push(`Original media changed, deleted or added:\n${publicChanges}`);
}

const home = readFileSync("src/components/sections/CinematicHome.tsx", "utf8");
for (const item of ["portfolioItems", "ServicesGrid", "ForWho", "Approach", "WhyObsidian", "FAQSection", "DemoAdsGallery", "siteConfig.email"]) {
  if (!home.includes(item)) errors.push(`Original data/component not referenced on landing page: ${item}`);
}
if (/const projects\s*=\s*\[/.test(home)) {
  errors.push("Standalone hardcoded production inventory found; derive featured work from portfolioItems instead.");
}

const allowedAppChanges = new Set(["src/app/page.tsx", "src/app/layout.tsx", "src/app/cinematic.css"]);
const appChanges = git("diff", "--name-only", baseline, "HEAD", "--", "src/app")
  .trim().split("\n").filter(Boolean);
for (const path of appChanges) {
  if (!allowedAppChanges.has(path)) errors.push(`Unexpected app-route change: ${path}`);
}

if (errors.length) {
  console.error("CONTENT PARITY FAILED:");
  for (const error of errors) console.error(" - " + error);
  process.exit(1);
}
console.log("CONTENT PARITY OK: original catalogue, public media, official routes and contact preserved.");
