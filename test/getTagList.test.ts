/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllPostList, getTagList } from "@/entities/post";
import { beforeEach, describe, expect, test, vi } from "vitest";

vi.mock("@/entities/post/model/getAllPostList", () => ({
  getAllPostList: vi.fn(),
}));

describe("getTagList", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("should return tag list with correct data", async () => {
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
        tagList: ["react", "nextjs"],
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
    const result = await getTagList();
    expect(result).toHaveLength(3);

    expect(result).toEqual([
      { tagName: "nestjs", count: 1 },
      { tagName: "nextjs", count: 1 },
      { tagName: "react", count: 2 },
    ]);
  });

  test("should return an empty array when no posts", async () => {
    (getAllPostList as any).mockReturnValue([]);
    const result = await getTagList();
    expect(result).toEqual([]);
  });
});
