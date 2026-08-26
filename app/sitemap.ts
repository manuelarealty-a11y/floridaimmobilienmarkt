import type { MetadataRoute } from "next";
import { regions, properties, blogPosts } from "@/lib/site";

const BASE_URL = "https://floridaimmobilienmarkt.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/regionen",
    "/markt",
    "/objekte",
    "/blog",
    "/ueber-manuela",
    "/kontakt",
    "/cookies",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" || path === "/markt" || path === "/blog"
      ? "weekly"
      : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const regionRoutes = regions.map((r) => ({
    url: `${BASE_URL}/regionen/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const propertyRoutes = properties.map((p) => ({
    url: `${BASE_URL}/objekte/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((b) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...regionRoutes, ...propertyRoutes, ...blogRoutes];
}
