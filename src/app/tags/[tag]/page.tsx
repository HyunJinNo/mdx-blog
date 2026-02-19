import { getPostListByTag } from "@/entities/post";
import { convertDateFormat } from "@/shared/lib/utils";
import { FaTag } from "@react-icons/all-files/fa/FaTag";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: decodedTag,
    description: `${decodedTag} 페이지`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const postList = await getPostListByTag(decodedTag);

  return (
    <main className="flex w-full flex-col gap-8 dark:bg-black">
      <h1 className="flex flex-row items-baseline gap-2 text-[2rem] font-bold">
        <FaTag className="text-custom-gray text-base" />
        {decodedTag}
        <span className="text-custom-gray pl-2 text-xl font-light">
          {postList.length}
        </span>
      </h1>
      <ul className="marker:text-custom-gray list-disc pl-4">
        {postList.map((post) => (
          <li key={post.postPath}>
            <div className="flex flex-row items-center gap-2 py-2 pr-4">
              <Link
                className="text-custom-blue text-lg underline-offset-4 hover:text-teal-500 hover:underline"
                href={`/posts/${post.postPath}`}
              >
                {post.title}
              </Link>
              <span className="flex-1 border border-dashed border-gray-300" />
              <time className="text-custom-gray">
                {convertDateFormat(post.date)}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
