import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/images", "/logos", "/videos"],
    },
    host: "https://hyunjinno-dev.com",
    sitemap: "https://hyunjinno-dev.com/sitemap.xml",
  };
}

export const dynamic = "force-static";
