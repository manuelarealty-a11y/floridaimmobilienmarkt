import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://floridaimmobilienmarkt.de/sitemap.xml",
    host: "https://floridaimmobilienmarkt.de",
  };
}
