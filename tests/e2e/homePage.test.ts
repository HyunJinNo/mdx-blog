import { expect, test } from "@playwright/test";

test("home 페이지 테스트", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(
    page.getByRole("link", { name: "노현진's Blog", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("A Passionate Developer")).toBeVisible();
});
