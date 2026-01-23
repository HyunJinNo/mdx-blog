import { Tag } from "@/shared/ui/tag";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tags",
  description: "Tags 페이지",
};

export default function Page() {
  return (
    <main className="flex flex-col gap-8 dark:bg-black">
      <h1 className="text-[2rem] font-bold">Tags</h1>
      <Tag />
    </main>
  );
}
