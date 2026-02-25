import { getPostListByTag } from "@/entities/post";
import { convertDateFormat } from "@/shared/lib/utils";
import { FaTag } from "@react-icons/all-files/fa/FaTag";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: decodedTag,
    description: `${decodedTag} 페이지`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const postList = await getPostListByTag(decodedTag);

  return (
    <main className="flex w-full flex-col gap-8 dark:bg-black">
      <h1 className="flex flex-row items-baseline gap-2 text-[2rem] font-bold">
        <FaTag className="text-custom-gray text-base" />
        {decodedTag}
        <span className="text-custom-gray pl-2 text-xl font-light">
          {postList.length}
        </span>
      </h1>
      <ul className="marker:text-custom-gray list-disc pl-4">
        {postList.map((post) => (
          <li key={post.postPath}>
            <div className="flex flex-row items-center gap-2 py-2 pr-4">
              <Link
                className="text-custom-blue text-lg underline-offset-4 hover:text-teal-500 hover:underline dark:text-blue-300"
                href={`/posts/${post.postPath}`}
              >
                {post.title}
              </Link>
              <span className="flex-1 border border-dashed border-gray-300" />
              <time className="text-custom-gray">
                {convertDateFormat(post.date)}
              </time>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export function generateStaticParams(): { tag: string }[] {
  return [
    { tag: "ai" },
    { tag: "algorithm" },
    { tag: "android-studio" },
    { tag: "apk" },
    { tag: "apt" },
    { tag: "audio" },
    { tag: "avif" },
    { tag: "babel" },
    { tag: "cd" },
    { tag: "certbot" },
    { tag: "chess" },
    { tag: "ci" },
    { tag: "class" },
    { tag: "closure" },
    { tag: "cookie" },
    { tag: "crawling" },
    { tag: "createportal" },
    { tag: "css" },
    { tag: "database" },
    { tag: "debounce" },
    { tag: "design-pattern" },
    { tag: "development-history" },
    { tag: "DGT" },
    { tag: "docker" },
    { tag: "eslint" },
    { tag: "event-loop" },
    { tag: "execution-context" },
    { tag: "expressjs" },
    { tag: "ffmpeg" },
    { tag: "file" },
    { tag: "font" },
    { tag: "forwardref" },
    { tag: "fsd" },
    { tag: "function" },
    { tag: "giscus" },
    { tag: "git" },
    { tag: "github" },
    { tag: "github-actions" },
    { tag: "heap" },
    { tag: "hoisting" },
    { tag: "html" },
    { tag: "http" },
    { tag: "image" },
    { tag: "intersection-observer" },
    { tag: "java" },
    { tag: "javascript" },
    { tag: "jest" },
    { tag: "json" },
    { tag: "jsx" },
    { tag: "kakao" },
    { tag: "linux" },
    { tag: "llm" },
    { tag: "localtunnel" },
    { tag: "lombok" },
    { tag: "mariadb" },
    { tag: "memory" },
    { tag: "mobile" },
    { tag: "modal" },
    { tag: "multer" },
    { tag: "mysql" },
    { tag: "naver-boostcamp-9th" },
    { tag: "nestjs" },
    { tag: "nextjs" },
    { tag: "nginx" },
    { tag: "nodejs" },
    { tag: "nodemon" },
    { tag: "notion" },
    { tag: "ollama" },
    { tag: "oop" },
    { tag: "origin" },
    { tag: "os" },
    { tag: "passport" },
    { tag: "pem" },
    { tag: "prettier" },
    { tag: "prototype" },
    { tag: "puppeteer" },
    { tag: "purgecss" },
    { tag: "qr-code" },
    { tag: "quill" },
    { tag: "raspberry-pi" },
    { tag: "react" },
    { tag: "react-native" },
    { tag: "react-navigation" },
    { tag: "regex" },
    { tag: "rendering" },
    { tag: "robots.txt" },
    { tag: "scraping" },
    { tag: "session" },
    { tag: "shell" },
    { tag: "site" },
    { tag: "sitemap" },
    { tag: "snapd" },
    { tag: "socket" },
    { tag: "spring-boot" },
    { tag: "ssh" },
    { tag: "ssl" },
    { tag: "stack" },
    { tag: "tailwind-css" },
    { tag: "test" },
    { tag: "throttle" },
    { tag: "tls" },
    { tag: "toc" },
    { tag: "troubleshooting" },
    { tag: "ts-node" },
    { tag: "typeorm" },
    { tag: "typescript" },
    { tag: "ufw" },
    { tag: "video" },
    { tag: "virtual-dom" },
    { tag: "vscode" },
    { tag: "webm" },
    { tag: "webp" },
    { tag: "webpack" },
    { tag: "webrtc" },
    { tag: "xml" },
    { tag: "yml" },
    { tag: "zustand" },
    { tag: "체스" },
  ];
}

export const dynamicParams = false;
