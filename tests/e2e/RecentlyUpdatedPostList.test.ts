import { test, expect } from "@playwright/test";

test.describe("RecentlyUpdatedPostList 컴포넌트 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("navigate to latest post page", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Recently Updated" }),
    ).toBeVisible();

    const firstPostLink = page
      .locator("section")
      .filter({ hasText: "Recently Updated" })
      .locator("a")
      .first();
    const firstPostTitle = (await firstPostLink.textContent()) ?? "";

    await firstPostLink.click();
    await expect(
      page.getByRole("heading", { name: firstPostTitle }),
    ).toBeVisible();
  });

  test("navigate to second latest post page", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Recently Updated" }),
    ).toBeVisible();

    const secondPostLink = page
      .locator("section")
      .filter({ hasText: "Recently Updated" })
      .locator("a")
      .nth(1);
    const secondPostTitle = (await secondPostLink.textContent()) ?? "";

    await secondPostLink.click();
    await expect(
      page.getByRole("heading", { name: secondPostTitle }),
    ).toBeVisible();
  });
});
