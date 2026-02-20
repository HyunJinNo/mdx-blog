import Link from "next/link";
import { FaRegFolder } from "@react-icons/all-files/fa/FaRegFolder";
import { FaTag } from "@react-icons/all-files/fa/FaTag";

interface SearchResultProps {
  title: string;
  description: string;
  category: string;
  tagList: string[];
  postPath: string;
}

export const SearchResult = ({
  title,
  description,
  category,
  tagList,
  postPath,
}: SearchResultProps) => {
  return (
    <article className="mt-12 flex flex-col gap-1">
      <header className="flex flex-col gap-2">
        <h2>
          <Link
            className="text-custom-blue text-2xl font-semibold underline-offset-4 hover:text-teal-500 hover:underline"
            href={`/posts/${postPath}`}
          >
            {title}
          </Link>
        </h2>
        <div className="text-custom-gray flex flex-row items-center gap-6 text-sm">
          <div className="flex flex-row items-center gap-1">
            <FaRegFolder className="text-xs" />
            {category}
          </div>
          <div className="flex flex-row items-center gap-1">
            <FaTag className="text-xs" />
            {tagList.join(", ")}
          </div>
        </div>
      </header>
      <p className="text-custom-gray">{description}</p>
    </article>
  );
};
