import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  checkbox() {
    return this.page.getByTestId('checkbox');
  }
}

const here = new Here().register();

test('Checkbox should works and change state by click', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/checkbox/01-primary');

  await expect(here.checkbox()).toHaveCount(1);
  expect(await here.checkbox().isChecked()).toBe(true);
  await expect(here.page).toHaveScreenshot();

  await here.checkbox().click();

  await expect(here.checkbox()).toHaveCount(1);
  expect(await here.checkbox().isChecked()).toBe(false);
  await expect(here.page).toHaveScreenshot();
});

test('Checkbox should works and change state by separate button click', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/checkbox/test-controlled');

  await expect(here.checkbox()).toHaveCount(1);
  expect(await here.checkbox().isChecked()).toBe(false);
  await expect(page.getByText('Активировать', { exact: true })).toHaveCount(1);
  await expect(page.getByText('Деактивировать', { exact: true })).toHaveCount(0);
  await expect(here.page).toHaveScreenshot();

  await page.getByText('Активировать').click();

  await expect(here.checkbox()).toHaveCount(1);
  expect(await here.checkbox().isChecked()).toBe(true);
  await expect(page.getByText('Активировать', { exact: true })).toHaveCount(0);
  await expect(page.getByText('Деактивировать', { exact: true })).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();
});
