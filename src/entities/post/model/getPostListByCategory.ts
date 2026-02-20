import { getAllPostList } from "./getAllPostList";

export const getPostListByCategory = async (category: string) => {
  const postList = await getAllPostList();

  return postList.filter((post) => post.category === category);
};
