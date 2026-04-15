/* eslint-disable @typescript-eslint/no-explicit-any */

import { describe, expect, vi, beforeEach, test } from "vitest";
import fs from "fs";
import { getAllPostList } from "@/entities/post";

vi.mock("fs", () => ({
  default: {
    readdirSync: vi.fn(),
  },
  readdirSync: vi.fn(),
}));

vi.mock("@/content/post1.mdx", () => ({
  metadata: {
    title: "Post 1",
    description: "Description 1",
    date: new Date("2024-01-01"),
    category: "Front-end",
    tags: ["react"],
    pin: false,
    imagePath: "/images/pic1.avif",
  },
}));

vi.mock("@/content/post2.mdx", () => ({
  metadata: {
    title: "Post 2",
    description: "Description 2",
    date: new Date("2024-01-02"),
    category: "Front-end",
    tags: ["next.js"],
    pin: false,
    imagePath: "/images/pic2.avif",
  },
}));

describe("getAllPostList", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("should return list of posts with correct fields, reversed order", async () => {
    (fs.readdirSync as any).mockReturnValue(["post1.mdx", "post2.mdx"]);
    const result = await getAllPostList();

    expect(result).toHaveLength(2);
    expect(result[0].title).toBe("Post 2");
    expect(result[0].postPath).toBe("post2");
    expect(result[1].title).toBe("Post 1");
    expect(result[1].postPath).toBe("post1");

    expect(result[0]).toEqual({
      title: "Post 2",
      description: "Description 2",
      date: new Date("2024-01-02"),
      category: "Front-end",
      imagePath: "/images/pic2.avif",
      tagList: ["next.js"],
      postPath: "post2",
    });
  });

  test("should handle empty directory", async () => {
    (fs.readdirSync as any).mockReturnValue([]);
    const result = await getAllPostList();

    expect(result).toEqual([]);
  });
});
