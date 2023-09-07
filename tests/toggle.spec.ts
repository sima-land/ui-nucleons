import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  toggle() {
    return this.page.getByTestId('toggle');
  }
}

const here = new Here().register();

test.only('Toggle should works and change state by click', async ({ page }) => {
  await page.goto('/iframe.html?id=common-toggle--primary');

  await expect(here.toggle()).toHaveCount(1);
  expect(await here.toggle().isChecked()).toBe(true);
  await expect(here.page).toHaveScreenshot();

  await here.toggle().click();

  await expect(here.toggle()).toHaveCount(1);
  expect(await here.toggle().isChecked()).toBe(false);
  await expect(here.page).toHaveScreenshot();
});

test.only('Toggle should works and change state by separate button click', async ({ page }) => {
  await page.goto('/iframe.html?id=common-toggle--test-controlled');

  await expect(here.toggle()).toHaveCount(1);
  expect(await here.toggle().isChecked()).toBe(false);
  await expect(page.getByText('Активировать', { exact: true })).toHaveCount(1);
  await expect(page.getByText('Деактивировать', { exact: true })).toHaveCount(0);
  await expect(here.page).toHaveScreenshot();

  await page.getByText('Активировать').click();

  await expect(here.toggle()).toHaveCount(1);
  expect(await here.toggle().isChecked()).toBe(true);
  await expect(page.getByText('Активировать', { exact: true })).toHaveCount(0);
  await expect(page.getByText('Деактивировать', { exact: true })).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();
});
