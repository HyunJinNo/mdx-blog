import { getPostList } from "./getPostList";

export const getArchiveList = async () => {
  const postList = await getPostList();
  const postMap = new Map<number, typeof postList>();

  postList.forEach((post) => {
    const year = post.date.getFullYear();

    if (!postMap.has(year)) {
      postMap.set(year, []);
    }

    postMap.get(year)!.push(post);
  });

  return postMap;
};
