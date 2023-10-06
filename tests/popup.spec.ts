import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  opener() {
    return this.page.getByTestId('info-text:icon');
  }

  popup() {
    return this.page.getByTestId('popup');
  }

  popupClose() {
    return this.popup().getByTestId('popup:close');
  }

  inPopupButton() {
    return this.popup().getByTestId('text-button');
  }
}

const here = new Here().register();

test.beforeEach(async ({ page }) => {
  await page.goto('/iframe.html?id=common-popup--floating');
});

test('Opener must be in page', async () => {
  await expect(here.opener()).toHaveCount(1);
  await expect(here.popup()).toHaveCount(0);
  await expect(here.popupClose()).toHaveCount(0);
});

test.describe('Mouse interactions', () => {
  test('should closes by close icon click', async () => {
    await expect(here.popup()).toHaveCount(0);
    await expect(here.popupClose()).toHaveCount(0);

    await here.opener().click();
    await expect(here.popup()).toHaveCount(1);
    await expect(here.popupClose()).toHaveCount(1);
    await expect(here.page).toHaveScreenshot();

    await here.popupClose().click();
    await expect(here.popup()).toHaveCount(0);
    await expect(here.popupClose()).toHaveCount(0);
  });
});

test.describe('Keyboard interactions', () => {
  test.only('should create focus trap while opened', async () => {
    await expect(here.opener()).toHaveCount(1);
    await expect(here.popup()).toHaveCount(0);
    await expect(here.popupClose()).toHaveCount(0);

    await here.page.keyboard.press('Tab');
    await expect(here.popup()).toHaveCount(0);
    await expect(here.popupClose()).toHaveCount(0);
    await expect(here.opener()).toBeFocused();

    // close button not focused by default
    await here.page.keyboard.press('Enter');
    await expect(here.popup()).toHaveCount(1);
    await expect(here.popupClose()).toHaveCount(1);
    await expect(here.opener()).toBeFocused();
    await expect(here.page).toHaveScreenshot();

    // close button focused first
    await here.page.keyboard.press('Tab');
    await expect(here.popup()).toHaveCount(1);
    await expect(here.popupClose()).toHaveCount(1);
    await expect(here.popupClose()).toBeFocused();
    await expect(here.page).toHaveScreenshot();

    // some button in popup focused
    await here.page.keyboard.press('Tab');
    await expect(here.inPopupButton()).toBeFocused();
    await expect(here.page).toHaveScreenshot();

    // close button focused again
    await here.page.keyboard.press('Tab');
    await expect(here.popupClose()).toBeFocused();
    await expect(here.page).toHaveScreenshot();
  });
});
