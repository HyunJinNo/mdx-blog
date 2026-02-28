import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/images", "/logos", "/videos"],
    },
    sitemap: "https://hyunjinno-dev.com/sitemap.xml",
  };
}

export const dynamic = "force-static";
