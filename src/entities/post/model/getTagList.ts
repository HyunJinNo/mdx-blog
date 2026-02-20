import { getAllPostList } from "./getAllPostList";

export const getTagList = async () => {
  const postList = await getAllPostList();
  const tagMap = new Map<string, number>();

  postList.forEach((post) => {
    post.tagList.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map((value) => ({
      tagName: value[0],
      count: value[1],
    }));
};
