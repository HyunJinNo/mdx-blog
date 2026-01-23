import Link from "next/link";

export const Tag = () => {
  return (
    <Link
      className="group flex w-fit flex-row items-center gap-2 rounded-xl border border-gray-200 px-2 py-1.5 duration-300 hover:bg-gray-200"
      href="/tags/algorithm"
    >
      <span className="text-custom-blue group-hover:text-teal-500">
        algorithm
      </span>
      <span className="text-custom-gray text-xs">18</span>
    </Link>
  );
};
