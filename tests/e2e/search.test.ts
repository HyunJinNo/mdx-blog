import { expect, test } from "@playwright/test";

test("test search feature", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByRole("searchbox", { name: "Search..." }).click();
  await page.getByRole("searchbox", { name: "Search..." }).fill("docker");
  await expect(
    page.getByRole("link", { name: "Docker의 개념과 사용 방법" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Docker의 개념과 사용 방법" }).click();
  await expect(
    page.getByText("Docker의 개념과 사용 방법에 대해 설명하는 페이지입니다"),
  ).toBeVisible();
});
