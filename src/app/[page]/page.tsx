import { getAllPostList, PostCard } from "@/entities/post";
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

  const postList = await getAllPostList();

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

export function generateStaticParams(): { page: string }[] {
  return [
    { page: "page2" },
    { page: "page3" },
    { page: "page4" },
    { page: "page5" },
    { page: "page6" },
    { page: "page7" },
    { page: "page8" },
    { page: "page9" },
    { page: "page10" },
    { page: "page11" },
    { page: "page12" },
    { page: "page13" },
    { page: "page14" },
  ];
}

export const dynamicParams = false;
