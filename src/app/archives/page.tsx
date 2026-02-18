import { getArchiveList } from "@/entities/post";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archives",
  description: "Archives 페이지",
};

export default async function Page() {
  const postMap = await getArchiveList();

  return (
    <main className="flex flex-col gap-8 dark:bg-black">
      <h1 className="text-[2rem] font-bold">Archives</h1>
      <div className="flex flex-col gap-6">
        {[...postMap.keys()].map((year) => (
          <div key={year} className="flex flex-col gap-6">
            <time className="w-fit text-2xl font-extralight">{year}</time>
            <ul>
              {postMap.get(year)!.map((post) => (
                <li
                  className="flex h-12 flex-row items-center gap-2 odd:bg-linear-to-r odd:from-[#FBFCFD] odd:to-white"
                  key={post.postPath}
                >
                  <span className="w-6">
                    {post.date.toLocaleDateString("en-US", {
                      day: "2-digit",
                    })}
                  </span>
                  <span className="text-custom-gray w-8">
                    {post.date.toLocaleDateString("en-US", { month: "short" })}
                  </span>
                  <Link
                    key={post.postPath}
                    className="text-custom-blue text-lg underline-offset-4 hover:text-teal-500 hover:underline"
                    href={`/posts/${post.postPath}`}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
