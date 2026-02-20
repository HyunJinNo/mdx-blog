import { getAllPostList } from "./getAllPostList";

export const getPostListByTag = async (tag: string) => {
  const postList = await getAllPostList();

  return postList.filter((post) => post.tagList.includes(tag));
};
