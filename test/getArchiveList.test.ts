/* eslint-disable @typescript-eslint/no-explicit-any */

import { beforeEach, describe, expect, test, vi } from "vitest";
import { getAllPostList, getArchiveList } from "@/entities/post";

vi.mock("@/entities/post/model/getAllPostList", () => ({
  getAllPostList: vi.fn(),
}));

describe("getArchiveList", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("should group posts by year", async () => {
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

    const result = await getArchiveList();

    expect(result.size).toBe(2);

    // 2024년
    expect(result.get(2024)).toHaveLength(2);
    expect(result.get(2024)?.[0].title).toBe("Post 1");
    expect(result.get(2024)?.[1].title).toBe("Post 2");

    // 2025년
    expect(result.get(2025)).toHaveLength(1);
    expect(result.get(2025)?.[0].title).toBe("Post 3");
  });

  test("should return an empty map when no posts", async () => {
    (getAllPostList as any).mockResolvedValue([]);
    const result = await getArchiveList();
    expect(result.size).toBe(0);
  });
});
