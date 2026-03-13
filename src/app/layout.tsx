import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data/navigation";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://obsidian-arts-films.fr";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.name} — Studio créatif & digital`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "studio créatif digital",
    "création vidéo",
    "clip musical",
    "vidéo publicitaire",
    "création site internet",
    "agent IA",
    "automatisation",
    "OBSIDIAN Arts Films",
    "solutions digitales",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Studio créatif & digital`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Studio créatif & digital`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased bg-[var(--obsidian-black)] text-[var(--obsidian-text)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
