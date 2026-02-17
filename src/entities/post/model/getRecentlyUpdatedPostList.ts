import fs from "fs";
import path from "path";
import { PostMetadata } from "./postMetadata";

const postsDirectory = path.join(process.cwd(), "src/content");

export const getRecentlyUpdatedPostList = async () => {
  const fileList = fs.readdirSync(postsDirectory);

  const postList = await Promise.all(
    fileList
      .reverse()
      .slice(0, 5)
      .map(async (file) => {
        const mod = await import(`@/content/${file}`);
        const metadata: PostMetadata = mod.metadata;

        return {
          title: metadata.title,
          postPath: file.split(".")[0],
        };
      }),
  );

  return postList;
};
