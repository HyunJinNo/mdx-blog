import { expect, test } from "@playwright/test";

test.describe("home 페이지 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("check title", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: "노현진's Blog", exact: true }),
    ).toBeVisible();
    await expect(page.getByText("A Passionate Developer")).toBeVisible();
  });

  test("test search feature", async ({ page }) => {
    await page.getByRole("searchbox", { name: "Search..." }).click();
    await page.getByRole("searchbox", { name: "Search..." }).fill("docker");
    await expect(
      page.getByRole("link", { name: "Docker의 개념과 사용 방법" }),
    ).toBeVisible();
    await expect(page.locator("body")).toContainText(
      "Docker의 개념과 사용 방법",
    );
    await page.getByRole("link", { name: "Docker의 개념과 사용 방법" }).click();
    await expect(
      page.getByText("Docker의 개념과 사용 방법에 대해 설명하는 페이지입니다"),
    ).toBeVisible();
  });
});
