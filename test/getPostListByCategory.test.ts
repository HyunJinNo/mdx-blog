/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllPostList, getPostListByCategory } from "@/entities/post";
import { beforeAll, describe, expect, test, vi } from "vitest";

vi.mock("@/entities/post/model/getAllPostList", () => ({
  getAllPostList: vi.fn(),
}));

describe("getPostListByCategory", () => {
  beforeAll(() => {
    (getAllPostList as any).mockResolvedValue([
      {
        title: "Post 1",
        description: "Description 1",
        date: new Date("2024-01-01"),
        category: "Front-end",
        imagePath: "/image/pic1.avif",
        tagList: ["react"],
        postPath: "post1",
      },
      {
        title: "Post 2",
        description: "Description 2",
        date: new Date("2024-01-02"),
        category: "Front-end",
        imagePath: "/images/pic2.avif",
        tagList: ["next.js"],
        postPath: "post2",
      },
      {
        title: "Post 3",
        description: "Description 3",
        date: new Date("2025-01-01"),
        category: "Back-end",
        imagePath: "/images/pic3.avif",
        tagList: ["nestjs"],
        postPath: "post3",
      },
    ]);
  });

  test("should return list of posts with correct fields, reversed order, and correct category", async () => {
    const result = await getPostListByCategory("Front-end");

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      title: "Post 1",
      description: "Description 1",
      date: new Date("2024-01-01"),
      category: "Front-end",
      imagePath: "/image/pic1.avif",
      tagList: ["react"],
      postPath: "post1",
    });
    expect(result[1]).toEqual({
      title: "Post 2",
      description: "Description 2",
      date: new Date("2024-01-02"),
      category: "Front-end",
      imagePath: "/images/pic2.avif",
      tagList: ["next.js"],
      postPath: "post2",
    });
  });

  test("should return an empty array when no posts are found", async () => {
    const result = await getPostListByCategory("Unknown");
    expect(result).toEqual([]);
  });
});
