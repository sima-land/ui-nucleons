import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  topBar() {
    return this.page.getByTestId('top-bar');
  }
}

const here = new Here().register();

test('top bar should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/top-bar/01-primary');

  await expect(here.topBar()).toHaveCount(1);
  expect(await here.topBar().textContent()).toBe('Это заголовок топбара');
  await expect(here.page).toHaveScreenshot();
});

test('top bar with subtitle should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/top-bar/02-with-subtitle');

  await expect(here.topBar()).toHaveCount(1);
  expect(await here.topBar().textContent()).toBe('Это заголовок топбараА это подзаголовок топбара');
  await expect(here.page).toHaveScreenshot();
});

test('top bar with text buttons should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/top-bar/03-with-text-buttons');

  await expect(here.topBar()).toHaveCount(1);
  expect(await here.topBar().locator('button').nth(0).textContent()).toBe('Отмена');
  expect(await here.topBar().locator('button').nth(1).textContent()).toContain('Применить');
  await expect(here.page).toHaveScreenshot();
});

test('top bar with icon buttons should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/top-bar/04-with-icon-buttons');

  await expect(here.topBar()).toHaveCount(1);
  await expect(page.locator('button svg')).toHaveCount(2);
  await expect(here.page).toHaveScreenshot();
});

test('top bar with mixed buttons should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/top-bar/05-with-mixed-buttons');

  await expect(here.topBar()).toHaveCount(1);
  await expect(here.topBar().locator('button').locator('svg')).toHaveCount(1);
  expect(await here.topBar().locator('button').nth(0).textContent()).toBe('');
  expect(await here.topBar().locator('button').nth(1).textContent()).toContain('Завершить');
  await expect(here.page).toHaveScreenshot();
});
