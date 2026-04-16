/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, describe, expect, test, vi } from "vitest";
import fs from "fs";
import { getRecentlyUpdatedPostList } from "@/entities/post";

vi.mock("fs", () => ({
  default: {
    readdirSync: vi.fn(),
  },
  readdirSync: vi.fn(),
}));

for (let i = 1; i <= 10; i++) {
  vi.doMock(`@/content/post${i}.mdx`, () => ({
    metadata: {
      title: `Post ${i}`,
      description: `Description ${i}`,
      date: new Date("2024-01-01"),
      category: "Front-end",
      tags: ["react"],
      pin: false,
      imagePath: `/images/pic${i}.avif`,
    },
  }));
}

describe("getRecentlyUpdatedPostList", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("should return 5 recently updated posts", async () => {
    (fs.readdirSync as any).mockReturnValue([
      "post1.mdx",
      "post2.mdx",
      "post3.mdx",
      "post4.mdx",
      "post5.mdx",
      "post6.mdx",
      "post7.mdx",
      "post8.mdx",
      "post9.mdx",
      "post10.mdx",
    ]);
    const result = await getRecentlyUpdatedPostList();

    expect(result).toHaveLength(5);
    expect(result[0].title).toBe("Post 10");
    expect(result[0].postPath).toBe("post10");

    expect(result).toEqual([
      { title: "Post 10", postPath: "post10" },
      { title: "Post 9", postPath: "post9" },
      { title: "Post 8", postPath: "post8" },
      { title: "Post 7", postPath: "post7" },
      { title: "Post 6", postPath: "post6" },
    ]);
  });

  test("should return only 3 posts if there are 3 posts", async () => {
    (fs.readdirSync as any).mockReturnValue([
      "post1.mdx",
      "post6.mdx",
      "post8.mdx",
    ]);
    const result = await getRecentlyUpdatedPostList();

    expect(result).toHaveLength(3);
    expect(result).toEqual([
      { title: "Post 8", postPath: "post8" },
      { title: "Post 6", postPath: "post6" },
      { title: "Post 1", postPath: "post1" },
    ]);
  });

  test("should return an empty array when no posts", async () => {
    (fs.readdirSync as any).mockReturnValue([]);
    const result = await getRecentlyUpdatedPostList();
    expect(result).toEqual([]);
  });
});
