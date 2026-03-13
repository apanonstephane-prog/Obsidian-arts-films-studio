import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://obsidian-arts-films.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/solutions-pro", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/solutions-particuliers", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/a-propos", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
