import Link from "next/link";

interface TagProps {
  tagName: string;
  count: number;
}

export const Tag = ({ tagName, count }: TagProps) => {
  return (
    <Link
      className="group dark:border-custom-gray flex w-fit flex-row items-center gap-2 rounded-xl border border-gray-200 px-2 py-1.5 duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
      href={`/tags/${tagName}`}
    >
      <span className="text-custom-blue group-hover:text-teal-500 dark:text-blue-300">
        {tagName}
      </span>
      <span className="text-custom-gray text-xs">{count}</span>
    </Link>
  );
};
