export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  const { default: Post } = await import(`@/content/${post}.mdx`);

  return <Post />;
}

export function generateStaticParams() {
  return [{ post: "2025-03-12-fsd" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  const mod = await import(`@/content/${post}.mdx`);
  const metadata = mod.metadata;

  console.log(metadata);

  return {
    author: metadata.author,
  };
}

export const dynamicParams = false;
