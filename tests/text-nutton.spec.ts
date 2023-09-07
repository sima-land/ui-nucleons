import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  textButton() {
    return this.page.getByTestId('text-button');
  }
}

const here = new Here().register();

test('text button should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-textbutton--primary');

  await expect(here.textButton()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();
});

test('text buttons with different colors should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-textbutton--different-colors');

  await expect(here.textButton()).toHaveCount(5);
  await expect(here.page).toHaveScreenshot();
});

test('text buttons with different sizes should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-textbutton--different-sizes');

  await expect(here.textButton()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});

test('text buttons with start icon should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-textbutton--icon-start');

  await expect(here.textButton()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});

test('text buttons with end icon should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-textbutton--icon-end');

  await expect(here.textButton()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});
