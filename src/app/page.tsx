import { PostCard } from "@/shared/ui/card";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 dark:bg-black">
      <h1 className="text-[2rem] font-bold">Home (TODO)</h1>
      <PostCard />
    </main>
  );
}
