import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  avatar() {
    return this.page.getByTestId('avatar');
  }

  avatarImage() {
    return this.avatar().locator('img');
  }

  avatarTextContent() {
    return this.avatar().textContent();
  }

  avatarIcon() {
    return this.avatar().locator('svg');
  }
}

const here = new Here().register();

test('Avatar should be in page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-avatar--with-image&viewMode=story');

  await expect(here.avatar()).toHaveCount(1);
  await expect(here.avatarImage()).toHaveCount(1);
  await expect(here.avatarIcon()).toHaveCount(0);
  expect(await here.avatarTextContent()).toBe('');

  await expect(here.page).toHaveScreenshot();
});

test('Avatar with PNG should be in page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-avatar--with-png&viewMode=story');

  await expect(here.avatar()).toHaveCount(1);
  await expect(here.avatarImage()).toHaveCount(1);
  await expect(here.avatarIcon()).toHaveCount(0);
  expect(await here.avatarTextContent()).toBe('');

  await expect(here.page).toHaveScreenshot();
});

test('Avatar with initial letter should be in page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-avatar--with-initials&viewMode=story');

  await expect(here.avatar()).toHaveCount(1);
  await expect(here.avatarImage()).toHaveCount(0);
  await expect(here.avatarIcon()).toHaveCount(0);
  expect(await here.avatarTextContent()).toBe('А');

  await expect(here.page).toHaveScreenshot();
});

test('Avatar with icon should be in page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-avatar--with-icon&viewMode=story');

  await expect(here.avatar()).toHaveCount(1);
  await expect(here.avatarImage()).toHaveCount(0);
  await expect(here.avatarIcon()).toHaveCount(1);
  expect(await here.avatarTextContent()).toBe('');

  await expect(here.page).toHaveScreenshot();
});

test('Avatar with custom colors should be in page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-avatar--with-custom-colors&viewMode=story');

  await expect(here.avatar()).toHaveCount(1);
  await expect(here.avatarImage()).toHaveCount(0);
  await expect(here.avatarIcon()).toHaveCount(0);
  expect(await here.avatarTextContent()).toBe('А');

  await expect(here.page).toHaveScreenshot();
});

test('Avatars with custom sizes should be in page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-avatar--with-custom-size&viewMode=story');

  await expect(here.avatar()).toHaveCount(4);

  await expect(here.page).toHaveScreenshot();
});
