import { getPostList } from "./getPostList";

export const getCategoryList = async () => {
  const postList = await getPostList();
  const categoryMap = new Map<string, number>();

  postList.forEach((post) => {
    categoryMap.set(post.category, (categoryMap.get(post.category) ?? 0) + 1);
  });

  const categoryList = [...categoryMap];
  categoryList.sort((a, b) => a[0].localeCompare(b[0]));

  return categoryList.map((value) => ({
    title: value[0],
    count: value[1],
    categoryPath: value[0].toLowerCase(),
  }));
};
