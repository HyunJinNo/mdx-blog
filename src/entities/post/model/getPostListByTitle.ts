import { getPostList } from "./getPostList";

export const getPostListByTitle = async (title: string) => {
  const postList = await getPostList();

  return postList.filter((post) =>
    post.title
      .replaceAll(" ", "")
      .toLowerCase()
      .includes(title.replaceAll(" ", "").toLowerCase()),
  );
};
