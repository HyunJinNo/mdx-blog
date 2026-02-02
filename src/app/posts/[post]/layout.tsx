import { PostMetadata } from "@/shared/model";
import Image from "next/image";

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
    <main className="flex w-full flex-col">
      <header className="flex flex-col">
        <h1 className="mb-2 text-3xl font-semibold text-black">
          {metadata.title}
        </h1>
        <p className="mb-6 text-lg">{metadata.description}</p>
        <div className="text-custom-gray flex flex-col gap-4 text-sm">
          <span>
            Posted: <time>{metadata.date}</time>
          </span>
          <div className="relative aspect-video">
            <Image
              className="rounded-xl"
              src={metadata.imagePath}
              alt="Preview Image"
              fill={true}
            />
          </div>
          <div className="flex flex-row items-center justify-between">
            <span>By HyunJinNo</span>
            <span>10 min read</span>
          </div>
        </div>
      </header>
      {children}
    </main>
  );
}
