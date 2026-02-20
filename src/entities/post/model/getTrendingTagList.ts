import { getAllPostList } from "./getAllPostList";

export const getTrendingTagList = async () => {
  const postList = await getAllPostList();
  const tagMap = new Map<string, number>();

  postList.forEach((post) => {
    post.tagList.forEach((tag) => {
      tagMap.set(tag, (tagMap.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(tagMap.entries())
    .sort((a, b) => (b[1] !== a[1] ? b[1] - a[1] : b[0].localeCompare(a[0])))
    .map((value) => value[0])
    .slice(0, 10);
};
