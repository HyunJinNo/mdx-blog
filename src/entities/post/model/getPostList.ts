import fs from "fs";
import path from "path";
import { PostMetadata } from "./postMetadata";

const postsDirectory = path.join(process.cwd(), "src/content");

export const getPostList = async () => {
  const fileList = fs.readdirSync(postsDirectory);

  const postList = await Promise.all(
    fileList.reverse().map(async (file) => {
      const mod = await import(`@/content/${file}`);
      const metadata: PostMetadata = mod.metadata;

      return {
        title: metadata.title,
        description: metadata.description,
        date: metadata.date,
        category: metadata.category,
        imagePath: metadata.imagePath,
        tagList: metadata.tags,
        postPath: file.split(".")[0],
      };
    }),
  );

  return postList;
};
