import { CategoryCard } from "@/shared/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  description: "Catetories 페이지",
};

export default function Page() {
  return (
    <main className="dark:bg-black">
      <CategoryCard />
    </main>
  );
}
