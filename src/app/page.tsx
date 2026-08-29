import { getAllPostList, PostCard } from "@/entities/post";
import { AppPagination } from "@/shared/ui/pagination";

export default async function Home() {
  const postList = await getAllPostList();

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
      <AppPagination
        currentPage={1}
        totalPages={Math.ceil(postList.length / 10)}
        first={true}
        last={Math.ceil(postList.length / 10) === 1}
      />
    </main>
  );
}
