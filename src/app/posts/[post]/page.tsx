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
    { post: "2023-12-13-bridge" },
    { post: "2023-12-13-cor" },
    { post: "2023-12-14-composite" },
    { post: "2023-12-14-prototype" },
    { post: "2023-12-23-state" },
    { post: "2023-12-24-builder" },
    { post: "2023-12-25-template-method" },
    { post: "2023-12-27-visitor" },
    { post: "2023-12-30-brute-force" },
    { post: "2024-01-03-divide-and-conquer" },
    { post: "2024-01-06-dynamic-programming" },
    { post: "2024-01-26-greedy" },
    { post: "2024-02-09-binary-search" },
    { post: "2024-02-23-ternary-search" },
    { post: "2024-03-04-euclidean-algorithm" },
    { post: "2024-03-06-modular-arithmetic" },
    { post: "2024-03-25-bitmask" },
    { post: "2024-03-25-sieve-of-eratosthenes" },
    { post: "2024-03-27-prefix-sum" },
    { post: "2024-04-08-kmp" },
    { post: "2025-03-12-fsd" },
  ];
}

export const dynamicParams = false;
