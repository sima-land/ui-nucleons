import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  button() {
    return this.page.getByTestId('button');
  }
}

const here = new Here().register();

test('Button should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--primary&viewMode=story');

  await expect(here.button()).toHaveCount(1);
  expect(await here.button().textContent()).toBe('Нажми на меня');

  await expect(here.page).toHaveScreenshot();
});

test('Buttons with different colors should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--different-colors&viewMode=story');

  await expect(here.button()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});

test('Buttons with different sizes should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--different-sizes&viewMode=story');

  await expect(here.button()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});

test('Buttons with only icon should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--only-icon&viewMode=story');

  await expect(here.button()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});

test('Buttons with start icon should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--icon-start&viewMode=story');

  await expect(here.button()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});

test('Buttons with end icon should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--icon-end&viewMode=story');

  await expect(here.button()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});
