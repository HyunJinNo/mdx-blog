import { getAllPostList } from "@/entities/post";

export default async function Page({
  params,
}: {
  params: Promise<{ post: string }>;
}) {
  const { post } = await params;
  const { default: Post } = await import(`@/content/${post}.mdx`);

  return <Post />;
}

export async function generateStaticParams() {
  const postList = await getAllPostList();

  return postList.map((post) => ({
    post: post.postPath,
  }));
}

export const dynamicParams = false;
