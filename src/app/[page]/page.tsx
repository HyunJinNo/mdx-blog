import { getPostList } from "@/entities/post";
import { PostCard } from "@/shared/ui/card";
import { Pagination } from "@/shared/ui/pagination";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const currentPage = Number(page.slice(4));

  if (!Number.isSafeInteger(currentPage) || currentPage <= 0) {
    notFound();
  }

  const postList = await getPostList();

  return (
    <main className="flex flex-col gap-8 dark:bg-black">
      {postList.slice((currentPage - 1) * 10, currentPage * 10).map((post) => (
        <PostCard
          key={post.title}
          title={post.title}
          description={post.description}
          date={post.date}
          category={post.category}
          imagePath={post.imagePath}
          postPath={post.postPath}
        />
      ))}
      <Pagination totalPages={14} currentPage={Number(page.slice(4))} />
    </main>
  );
}
