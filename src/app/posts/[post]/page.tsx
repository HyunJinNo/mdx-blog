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
    { post: "2023-10-11-command" },
    { post: "2023-10-11-factory-method" },
    { post: "2023-10-11-observer" },
    { post: "2023-10-11-strategy" },
    { post: "2023-10-18-adapter" },
    { post: "2023-10-18-decorator" },
    { post: "2023-10-18-facade" },
    { post: "2023-10-18-iterator" },
    { post: "2023-10-18-singleton" },
    { post: "2023-10-20-mediator" },
    { post: "2025-03-12-fsd" },
  ];
}

export const dynamicParams = false;
