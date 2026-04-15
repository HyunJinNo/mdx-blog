/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllPostList, getPostListByTag } from "@/entities/post";
import { beforeAll, describe, expect, test, vi } from "vitest";

vi.mock("@/entities/post/model/getAllPostList", () => ({
  getAllPostList: vi.fn(),
}));

describe("getPostListByTag", () => {
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
        tagList: ["react", "next.js"],
        postPath: "post2",
      },
      {
        title: "Post 3",
        description: "Description 3",
        date: new Date("2025-01-01"),
        category: "Front-end",
        imagePath: "/images/pic3.avif",
        tagList: ["react"],
        postPath: "post3",
      },
      {
        title: "Post 4",
        description: "Description 4",
        date: new Date("2025-01-02"),
        category: "Front-end",
        imagePath: "/images/pic4.avif",
        tagList: ["nextjs"],
        postPath: "post4",
      },
    ]);
  });

  test("should return list of posts with correct fields, reversed order, and correct tag", async () => {
    const result = await getPostListByTag("react");

    expect(result).toHaveLength(3);
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
      tagList: ["react", "next.js"],
      postPath: "post2",
    });
    expect(result[2]).toEqual({
      title: "Post 3",
      description: "Description 3",
      date: new Date("2025-01-01"),
      category: "Front-end",
      imagePath: "/images/pic3.avif",
      tagList: ["react"],
      postPath: "post3",
    });
  });

  test("should return an empty array when no posts are found", async () => {
    const result = await getPostListByTag("Unknown");
    expect(result).toEqual([]);
  });
});
