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

  return (
    <main className="flex flex-col gap-8 dark:bg-black">
      <PostCard />
      <Pagination totalPages={14} currentPage={Number(page.slice(4))} />
    </main>
  );
}
