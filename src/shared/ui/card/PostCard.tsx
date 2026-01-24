import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "@react-icons/all-files/fa/FaRegCalendar";
import { FaFolderOpen } from "@react-icons/all-files/fa/FaFolderOpen";

export const PostCard = () => {
  return (
    <article>
      <Link
        className="group relative flex h-45 flex-row justify-between rounded-md border border-gray-200 shadow"
        href="/posts/TODO"
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 rounded-md duration-300 hover:bg-gray-200/30" />
        <div className="flex flex-col pt-7 pr-7 pb-5 pl-7">
          <h1 className="text-xl font-bold">
            중간에서 만나기 (Meet in the Middle) 알고리즘
          </h1>
          <p className="text-custom-gray mt-2">
            중간에서 만나기 (Meet in the Middle) 알고리즘에 대해 정리한
            페이지입니다.
          </p>
          <div className="text-custom-gray mt-4 flex flex-row items-center gap-7">
            <div className="flex flex-row items-center gap-2">
              <FaRegCalendar className="text-sm" />
              <time className="text-sm">Jan 19, 2026</time>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaFolderOpen />
              <span className="text-sm">Algorithms</span>
            </div>
          </div>
        </div>
        <div className="relative h-45 w-80">
          <Image
            className="rounded-r-md"
            src="/images/background.avif"
            alt="preview Image"
            fill={true}
          />
        </div>
      </Link>
    </article>
  );
};
