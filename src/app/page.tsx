import { getPostList } from "@/entities/post";
import { PostCard } from "@/shared/ui/card";
import { Pagination } from "@/shared/ui/pagination";

export default async function Home() {
  const postList = await getPostList();

  return (
    <main className="flex flex-col gap-8 dark:bg-black">
      {postList.slice(0, 10).map((post) => (
        <PostCard
          key={post.postPath}
          title={post.title}
          description={post.description}
          date={post.date}
          category={post.category}
          imagePath={post.imagePath}
          postPath={post.postPath}
        />
      ))}
      <Pagination
        totalPages={Math.ceil(postList.length / 10)}
        currentPage={1}
      />
    </main>
  );
}
