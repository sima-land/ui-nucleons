import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  link() {
    return this.page.getByTestId('anchor');
  }
}

const here = new Here().register();

test('link should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/link/01-primary');

  await expect(here.link()).toHaveCount(1);
  expect(await here.link().textContent()).toBe('Наш сайт');
  await expect(here.page).toHaveScreenshot();
});

test('links with different colors should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/link/02-different-colors');

  await expect(here.link()).toHaveCount(18);
  await expect(here.page).toHaveScreenshot();
});
