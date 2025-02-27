import { test, expect } from '@playwright/test';

test('default accordion should be displayed', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/accordion/01-primary');
  await expect(page).toHaveScreenshot();
});

test('dark theme accordion should be displayed', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/accordion/01-primary');
  await page.getByText('light').click();
  await page.getByText('dark').click();
  await expect(page).toHaveScreenshot();
});

test('accordion should be displayed is full size opened', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/accordion/01-primary');
  await page.getByText('Заголовок аккордеона').click();
  await page.waitForTimeout(200); // wait css transition
  await expect(page).toHaveScreenshot();
});

test('accordions should be opened only 1 for group', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/accordion/02-multi-group');
  await page.getByRole('button').nth(1).click();
  await page.getByRole('button').nth(3).click();
  await page.getByRole('button').nth(4).click();
  await page.waitForTimeout(400); // wait css transition
  await page.evaluate(() => window.scrollTo(0, 0)); // scroll to top of page
  await expect(page).toHaveScreenshot();
});
