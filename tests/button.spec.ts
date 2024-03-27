import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  button() {
    return this.page.getByTestId('button');
  }
}

const here = new Here().register();

test('Button should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--primary');

  await expect(here.button()).toHaveCount(1);
  expect(await here.button().textContent()).toBe('Нажми на меня');

  await expect(here.page).toHaveScreenshot();
});

test('Buttons with different colors should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--different-colors');

  await expect(here.button()).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});

test('Buttons with different sizes should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--different-sizes');

  await expect(here.button()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});

test('Buttons with only icon should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--only-icon');

  await expect(here.button()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});

test('Buttons with start icon should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--icon-start');

  await expect(here.button()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});

test('Buttons with end icon should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--icon-end');

  await expect(here.button()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});

test('Loading buttons should not show content on hover', async ({ page }) => {
  await page.goto('/iframe.html?id=common-button--different-states');

  await expect(here.button()).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();

  // make buttons loading (show spinner)
  await page.getByLabel('Состояние').selectOption('Загрузка');
  await expect(here.page).toHaveScreenshot({ animations: 'disabled' });

  // hover second button
  await here.button().nth(1).hover();
  await expect(here.page).toHaveScreenshot({ animations: 'disabled' });
});
