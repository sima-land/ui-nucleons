import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  chip() {
    return this.page.getByTestId('chip');
  }
}

const here = new Here().register();

test('chip should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chip--primary');

  await expect(here.chip()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();
});

test('chips with light theme should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chip--light-theme');

  await expect(here.chip()).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});

test('chips with dark theme should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chip--dark-theme');

  await expect(here.chip()).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});

test('chips with end icon should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chip--with-end-icon');

  await expect(here.chip()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});

test('chips with end iconic button should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chip--with-end-button');

  await expect(here.chip()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});

test('chips with different shapes should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chip--different-shapes');

  await expect(here.chip()).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});

test('chips with text overflow should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chip--text-overflow');

  await expect(here.chip()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});
