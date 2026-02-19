import { getPostList } from "./getPostList";

export const getPostListByCategory = async (category: string) => {
  const postList = await getPostList();

  return postList.filter((post) => post.category === category);
};
