export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  const { default: Post } = await import(`@/content/${post}.mdx`);

  return <Post />;
}

export function generateStaticParams(): { post: string }[] {
  return [
    { post: "2022-06-03-dgt-bluetooth-e-board" },
    { post: "2022-12-24-dgt-pi-chess-computer" },
    { post: "2023-10-11-abstract-factory" },
    { post: "2025-03-12-fsd" },
  ];
}

export const dynamicParams = false;
