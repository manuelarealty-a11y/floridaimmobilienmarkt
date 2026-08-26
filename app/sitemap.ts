import type { MetadataRoute } from "next";
import { regions } from "@/lib/site";

const BASE_URL = "https://floridaimmobilienmarkt.de";

// Nur Seiten mit eigenständigem, einzigartigem Content werden aktiv zur
// Indexierung vorgeschlagen (Startseite, Regionen, Marktbericht). Objekte,
// Über Manuela, Kontakt und Blog sind inhaltlich identisch mit
// floridaimmobilienkauf.de und tragen dort ein Canonical-Tag – sie werden
// daher bewusst NICHT in dieser Sitemap gelistet, um Duplicate-Content-
// Konkurrenz zwischen den beiden Domains zu vermeiden.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/regionen", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/markt", changeFrequency: "weekly" as const, priority: 0.9 },
  ].map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const regionRoutes = regions.map((r) => ({
    url: `${BASE_URL}/regionen/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...regionRoutes];
}
