import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  panel() {
    return this.page.getByTestId('panel');
  }
}

const here = new Here().register();

test('panel should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/panel/01-primary');

  await expect(here.panel()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();
});

test('panels with different colors should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/panel/02-different-colors');

  await expect(here.panel()).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});

test('panels with start icon should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/panel/03-with-start-icon');

  await expect(here.panel()).toHaveCount(4);
  await expect(here.panel().locator('svg')).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});

test('panels with end icon should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/panel/04-with-end-icon');

  await expect(here.panel()).toHaveCount(4);
  await expect(here.panel().locator('svg')).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});
