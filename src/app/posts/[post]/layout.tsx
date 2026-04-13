import { PostMetadata } from "@/entities/post";
import { TocTopBar } from "@/entities/toc";
import { Comment } from "@/features/comment";
import { convertDateFormat } from "@/shared/lib/utils";
import { PhotoProvider, PhotoView } from "@/shared/ui/photo";
import { PostTailWrapper } from "@/widgets/postTailWrapper";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  const mod = await import(`@/content/${post}.mdx`);
  const metadata: PostMetadata = mod.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function MdxLayout({
  params,
  children,
}: {
  params: Promise<{ post: string }>;
  children: React.ReactNode;
}) {
  const { post } = await params;
  const mod = await import(`@/content/${post}.mdx`);
  const metadata: PostMetadata = mod.metadata;

  // Create any shared layout or styles here
  return (
    <PhotoProvider>
      <main className="flex w-full flex-col">
        <header className="mb-8 flex flex-col">
          <h1 className="mb-2 text-3xl font-bold text-black dark:text-white">
            {metadata.title}
          </h1>
          <p className="mb-6 text-lg">{metadata.description}</p>
          <div className="text-custom-gray flex flex-col gap-4 text-sm">
            <span>
              Posted{" "}
              <time className="font-medium">
                {convertDateFormat(metadata.date)}
              </time>
            </span>
            <div className="relative aspect-video">
              <PhotoView src={metadata.imagePath}>
                <Image
                  className="cursor-zoom-in rounded-xl border border-gray-100 bg-gray-100 object-cover"
                  src={metadata.imagePath}
                  alt="Preview Image"
                  fill={true}
                  sizes="(max-width: 850px): 100vw, 80vw"
                  fetchPriority="high"
                  loading="eager"
                />
              </PhotoView>
            </div>
            <span>
              By{" "}
              <a
                className="text-custom-gray font-bold underline-offset-4 hover:text-teal-500 hover:underline dark:text-gray-400"
                href="https://github.com/HyunJinNo"
              >
                HyunJinNo
              </a>
            </span>
          </div>
        </header>
        <TocTopBar postTitle={metadata.title} />
        {children}
        <PostTailWrapper
          categoryTitle={metadata.category}
          tagList={metadata.tags}
        />
        <Comment />
      </main>
    </PhotoProvider>
  );
}
