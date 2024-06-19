import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  textButton() {
    return this.page.getByTestId('text-button');
  }
}

const here = new Here().register();

test('text button should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/text-button/01-primary');

  await expect(here.textButton()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();
});

test('text buttons with different colors should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/text-button/02-different-colors');

  await expect(here.textButton()).toHaveCount(5);
  await expect(here.page).toHaveScreenshot();
});

test('text buttons with different sizes should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/text-button/03-different-sizes');

  await expect(here.textButton()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});

test('text buttons with start icon should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/text-button/04-icon-start');

  await expect(here.textButton()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});

test('text buttons with end icon should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/text-button/05-icon-end');

  await expect(here.textButton()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});
