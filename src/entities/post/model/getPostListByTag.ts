import { getPostList } from "./getPostList";

export const getPostListByTag = async (tag: string) => {
  const postList = await getPostList();

  return postList.filter((post) => post.tagList.includes(tag));
};
