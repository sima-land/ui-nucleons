import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  rating() {
    return this.page.getByTestId('rating');
  }
}

const here = new Here().register();

test('rating stars should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/rating/01-primary');

  await expect(here.rating()).toHaveCount(1);
  expect(await here.rating().getAttribute('data-rating')).toBe('3.7');
  await expect(here.page).toHaveScreenshot();
});

test('rating stars with different sizes should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/rating/02-different-sizes');

  await expect(here.rating()).toHaveCount(2);
  expect(await here.rating().nth(0).getAttribute('data-rating')).toBe('3.7');
  expect(await here.rating().nth(1).getAttribute('data-rating')).toBe('3.7');
  await expect(here.page).toHaveScreenshot();
});
