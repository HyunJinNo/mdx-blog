import { getTrendingTagList } from "@/entities/post";
import { TrendingTag } from "@/shared/ui/tag";

export const TrendingTagList = async () => {
  const tagList = await getTrendingTagList();

  return (
    <section className="flex w-full flex-col gap-4 border-l border-gray-200 pb-4 pl-4">
      <h2 className="font-medium text-[#585858]">Trending Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tagList.map((tag) => (
          <TrendingTag key={tag} title={tag} />
        ))}
      </div>
    </section>
  );
};
