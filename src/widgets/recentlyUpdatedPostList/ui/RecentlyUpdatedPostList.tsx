import { getRecentlyUpdatedPostList } from "@/entities/post";
import Link from "next/link";

export const RecentlyUpdatedPostList = async () => {
  const recentlyUpdatedPostList = await getRecentlyUpdatedPostList();

  return (
    <section className="flex w-full flex-col gap-2 border-l border-gray-200 pb-4 pl-4">
      <h2 className="font-medium text-[#585858]">Recently Updated</h2>
      <ul className="ml-1 flex flex-col gap-1.5">
        {recentlyUpdatedPostList.map((post) => (
          <li key={post.postPath} className="truncate">
            <Link
              className="text-custom-gray text-sm underline-offset-4 hover:text-teal-500 hover:underline"
              href={`/posts/${post.postPath}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
