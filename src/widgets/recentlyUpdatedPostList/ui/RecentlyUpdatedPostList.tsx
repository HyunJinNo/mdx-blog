import Link from "next/link";

export const RecentlyUpdatedPostList = () => {
  return (
    <section className="flex w-70 flex-col gap-2 border-l border-gray-200 pb-4 pl-4">
      <h2 className="font-medium text-[#585858]">Recently Updated</h2>
      <ul className="ml-1 flex flex-col gap-1.5">
        <li className="truncate">
          <Link
            className="text-custom-gray text-sm underline-offset-4 hover:text-teal-500 hover:underline"
            href="/posts/mitm"
          >
            중간에서 만나기 (Meet in the Middle) 알고리즘
          </Link>
        </li>
        <li className="truncate">
          <Link
            className="text-custom-gray text-sm underline-offset-4 hover:text-teal-500 hover:underline"
            href="/posts/mitm"
          >
            중간에서 만나기 (Meet in the Middle) 알고리즘
          </Link>
        </li>
        <li className="truncate">
          <Link
            className="text-custom-gray text-sm underline-offset-4 hover:text-teal-500 hover:underline"
            href="/posts/mitm"
          >
            중간에서 만나기 (Meet in the Middle) 알고리즘
          </Link>
        </li>
        <li className="truncate">
          <Link
            className="text-custom-gray text-sm underline-offset-4 hover:text-teal-500 hover:underline"
            href="/posts/mitm"
          >
            중간에서 만나기 (Meet in the Middle) 알고리즘
          </Link>
        </li>
        <li className="truncate">
          <Link
            className="text-custom-gray text-sm underline-offset-4 hover:text-teal-500 hover:underline"
            href="/posts/mitm"
          >
            중간에서 만나기 (Meet in the Middle) 알고리즘
          </Link>
        </li>
      </ul>
    </section>
  );
};
