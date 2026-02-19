import Link from "next/link";

interface TrendingTagProps {
  tagName: string;
}

export const TrendingTag = ({ tagName }: TrendingTagProps) => {
  return (
    <Link
      className="text-custom-gray flex w-fit flex-row items-center gap-2 rounded-xl border border-gray-200 px-2 py-1 text-sm duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
      href={`/tags/${tagName}`}
    >
      {tagName}
    </Link>
  );
};
