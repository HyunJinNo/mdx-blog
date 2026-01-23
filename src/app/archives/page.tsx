import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Archives",
  description: "Archives 페이지",
};

export default function Page() {
  return (
    <main className="mt-12 flex flex-col gap-8 px-8 dark:bg-black">
      <h1 className="text-[2rem] font-bold">Archives</h1>
    </main>
  );
}
