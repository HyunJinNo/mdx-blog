import { PostCard } from "@/shared/ui/card";
import { Pagination } from "@/shared/ui/pagination";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 dark:bg-black">
      <PostCard />
      <Pagination totalPages={14} currentPage={1} />
    </main>
  );
}
