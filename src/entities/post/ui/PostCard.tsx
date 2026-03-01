import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "@react-icons/all-files/fa/FaRegCalendar";
import { FaFolderOpen } from "@react-icons/all-files/fa/FaFolderOpen";
import { convertDateFormat } from "@/shared/lib/utils";

interface PostCardProps {
  title: string;
  description: string;
  date: Date;
  category: string;
  imagePath: string;
  postPath: string;
}

export const PostCard = ({
  title,
  description,
  date,
  category,
  imagePath,
  postPath,
}: PostCardProps) => {
  return (
    <article>
      <Link
        className="group dark:border-custom-gray tablet:flex tablet:flex-row relative flex flex-col-reverse justify-between rounded-md border border-gray-50 shadow-sm"
        href={`/posts/${postPath}`}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 rounded-md duration-300 hover:bg-gray-200/30" />
        <div className="tablet:pt-7 tablet:pr-7 tablet:pb-5 tablet:pl-7 flex min-w-0 flex-col justify-between p-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold dark:text-slate-200">{title}</h1>
            <p className="text-custom-gray line-clamp-2">{description}</p>
          </div>
          <div className="text-custom-gray mt-4 flex flex-row items-center gap-7">
            <div className="flex flex-row items-center gap-2">
              <FaRegCalendar className="text-sm" />
              <time className="text-sm whitespace-nowrap">
                {convertDateFormat(date)}
              </time>
            </div>
            <div className="flex min-w-0 flex-row items-center gap-2">
              <FaFolderOpen />
              <span className="truncate text-sm">{category}</span>
            </div>
          </div>
        </div>
        <div className="relative aspect-video min-w-2/5">
          <Image
            className="tablet:rounded-r-md rounded-t-md object-cover"
            src={imagePath}
            alt="preview Image"
            fill={true}
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </Link>
    </article>
  );
};
