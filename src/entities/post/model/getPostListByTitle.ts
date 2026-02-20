import { getAllPostList } from "./getAllPostList";

export const getPostListByTitle = async (title: string) => {
  const postList = await getAllPostList();

  return postList.filter((post) =>
    post.title
      .replaceAll(" ", "")
      .toLowerCase()
      .includes(title.replaceAll(" ", "").toLowerCase()),
  );
};
