import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  chip() {
    return this.page.getByTestId('chip');
  }
}

const here = new Here().register();

test('chip should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/chip/01-primary');

  await expect(here.chip()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();
});

test('chips with light theme should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/chip/02-light-theme');

  await expect(here.chip()).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});

test('chips with dark theme should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/chip/03-dark-theme');

  await expect(here.chip()).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});

test('chips with end icon should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/chip/04-with-end-icon');

  await expect(here.chip()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});

test('chips with end iconic button should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/chip/05-with-end-button');

  await expect(here.chip()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});

test('chips with different shapes should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/chip/06-different-shapes');

  await expect(here.chip()).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});

test('chips with text overflow should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/chip/07-text-overflow');

  await expect(here.chip()).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});
