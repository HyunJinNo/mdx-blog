import { PostMetadata } from "@/shared/model";
import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/content");

export const getPostList = async () => {
  const files = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    files.reverse().map(async (file) => {
      const mod = await import(`@/content/${file}`);
      const metadata: PostMetadata = mod.metadata;

      return {
        title: metadata.title,
        description: metadata.description,
        date: metadata.date,
        category: metadata.category,
        imagePath: metadata.imagePath,
        postPath: file.split(".")[0],
      };
    }),
  );

  return posts;
};
