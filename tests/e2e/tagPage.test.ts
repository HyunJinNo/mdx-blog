import { test, expect } from "@playwright/test";

test.describe("Tag 페이지 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("navigate to tag list page", async ({ page }) => {
    await page.getByRole("link", { name: "TAGS" }).click();
    await expect(page.getByRole("heading", { name: "Tags" })).toBeVisible();
  });

  test("navigate to tag page", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Trending Tags" }),
    ).toBeVisible();
    await page.getByRole("link", { name: "typescript" }).click();
    await expect(
      page.getByRole("heading", { name: "typescript" }),
    ).toBeVisible();
  });
});
