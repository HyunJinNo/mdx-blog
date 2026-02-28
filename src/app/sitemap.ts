import { getAllPostList } from "@/entities/post";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postList = await getAllPostList();

  return postList.map((post) => ({
    url: `https://hyunjinno-dev.com/posts/${post.postPath}`,
    lastModified: post.date,
    changeFrequency: "weekly",
    priority: 1,
  }));
}

export const dynamic = "force-static";
