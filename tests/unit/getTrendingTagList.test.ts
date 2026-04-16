/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllPostList, getTrendingTagList } from "@/entities/post";
import { beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("@/entities/post/model/getAllPostList", () => ({
  getAllPostList: vi.fn(),
}));

describe("getTrendingTagList", async () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("should return trending tag list with correct data", async () => {
    const postList = [];
    const arr = [
      "ai",
      "algorithm",
      "docker",
      "react",
      "nextjs",
      "nestjs",
      "typescript",
      "linux",
      "database",
      "github",
      "ci",
      "cd",
      "chess",
      "cookie",
      "expressjs",
      "json",
      "java",
    ];
    const countMap = new Map<string, number>();

    for (let i = 1; i <= 100; i++) {
      const index = Math.floor(Math.random() * 10);
      countMap.set(arr[index], (countMap.get(arr[index]) ?? 0) + 1);

      postList.push({
        title: `Post`,
        description: `Description ${i}`,
        date: new Date("2024-01-01"),
        category: "Category",
        imagePath: `/images/pic${i}.avif`,
        tagList: [arr[index]],
        postPath: `post`,
      });
    }

    (getAllPostList as any).mockResolvedValue(postList);
    const result = await getTrendingTagList();

    expect(result).toHaveLength(countMap.size);
    expect(result).toEqual(
      Array.from(countMap.entries())
        .sort((a, b) =>
          b[1] !== a[1] ? b[1] - a[1] : b[0].localeCompare(a[0]),
        )
        .map((value) => value[0])
        .slice(0, 10),
    );
  });

  test("should return an empty array when no posts", async () => {
    (getAllPostList as any).mockResolvedValue([]);
    const result = await getTrendingTagList();
    expect(result).toEqual([]);
  });
});
