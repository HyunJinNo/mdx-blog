import { test, expect } from "@playwright/test";

test.describe("Archive 페이지 테스트", () => {
  test("navigate to archive page and check content", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.getByRole("link", { name: "ARCHIVES" }).click();
    await expect(page.getByRole("heading", { name: "Archives" })).toBeVisible();
    await expect(page.getByRole("main")).toContainText("2026");
    await expect(page.getByRole("main")).toContainText("2025");
    await expect(page.getByRole("main")).toContainText("2024");
  });
});
