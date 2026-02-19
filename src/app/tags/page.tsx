import { getTagList } from "@/entities/post";
import { Tag } from "@/shared/ui/tag";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tags",
  description: "Tags 페이지",
};

export default async function Page() {
  const tagList = await getTagList();

  return (
    <main className="flex flex-col gap-8 dark:bg-black">
      <h1 className="text-[2rem] font-bold">Tags</h1>
      <div className="flex flex-wrap gap-3">
        {tagList.map((tag) => (
          <Tag key={tag.tagName} tagName={tag.tagName} count={tag.count} />
        ))}
      </div>
    </main>
  );
}
