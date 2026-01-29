export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  // const { default: Post } = await import(`@/content/${post}.mdx`);

  // return <Post />;
}

export function generateStaticParams() {
  return [{ post: "welcome" }, { post: "about" }];
}

export const dynamicParams = false;
