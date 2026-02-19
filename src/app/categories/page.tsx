import { CategoryCard, getCategoryList } from "@/entities/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description: "Catetories 페이지",
};

export default async function Page() {
  const categoryList = await getCategoryList();

  return (
    <main className="flex w-full flex-col gap-8 dark:bg-black">
      <h1 className="text-[2rem] font-bold">Categories</h1>
      {categoryList.map((category) => (
        <CategoryCard
          key={category.categoryPath}
          title={category.title}
          count={category.count}
          categoryPath={category.categoryPath}
        />
      ))}
    </main>
  );
}
