import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  chips() {
    return this.page.getByTestId('chips');
  }

  chipsItem() {
    return this.page.getByTestId('chips:item');
  }
}

const here = new Here().register();

test('Chips should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chips--primary');

  await expect(here.chips()).toHaveCount(1);
  await expect(here.chipsItem()).toHaveCount(9);
  await expect(here.page).toHaveScreenshot();
});

test('Chips-links should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chips--links');

  await expect(here.chips()).toHaveCount(1);
  await expect(here.chipsItem()).toHaveCount(9);
  await expect(page.locator('a[href="https://www.sima-land.ru"]')).toHaveCount(9);
  await expect(here.page).toHaveScreenshot();
});

test('Chips with cross should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chips--with-cross');

  await expect(here.chips()).toHaveCount(1);
  await expect(here.chipsItem()).toHaveCount(9);
  await expect(here.page).toHaveScreenshot();
});

test('Truncated chips should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-chips--truncated-text');

  await expect(here.chipsItem()).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});
