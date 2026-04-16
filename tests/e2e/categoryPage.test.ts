import { test, expect } from "@playwright/test";

test.describe("Category 페이지 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("navigate to category page and check content", async ({ page }) => {
    await page.getByRole("link", { name: "CATEGORIES" }).click();
    await page.getByRole("link", { name: "Algorithms" }).click();
    await page
      .getByRole("link", { name: "중간에서 만나기 (Meet in the Middle" })
      .click();
    await expect(
      page.getByText(
        "중간에서 만나기 (Meet in the Middle) 알고리즘에 대해 정리한 페이지입니다",
      ),
    ).toBeVisible();
  });
});
