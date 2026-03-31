import Link from "next/link";

interface SmallTagProps {
  tagName: string;
}

export const SmallTag = ({ tagName }: SmallTagProps) => {
  return (
    <Link
      className="text-custom-gray dark:border-custom-gray flex w-fit flex-row items-center gap-2 rounded-xl border border-gray-200 px-1.5 text-sm whitespace-nowrap duration-300 hover:bg-gray-200 hover:text-teal-500 dark:text-blue-300 dark:hover:bg-gray-800"
      href={`/tags/${tagName}`}
    >
      {tagName}
    </Link>
  );
};
