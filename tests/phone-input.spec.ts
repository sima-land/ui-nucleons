import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  phoneInput() {
    return this.page.getByTestId('phone-input');
  }

  fieldBlock() {
    return this.phoneInput().getByTestId('field-block:block');
  }

  input() {
    return this.fieldBlock().getByTestId('base-input:field');
  }

  restPlaceholder() {
    return this.fieldBlock().getByTestId('base-input').getByTestId('rest-placeholder');
  }

  menuOpener() {
    return this.fieldBlock().getByTestId('phone-input:menu-opener');
  }

  menu() {
    return this.page.getByTestId('dropdown');
  }

  menuItem() {
    return this.menu().getByTestId('dropdown-item');
  }
}

const here = new Here().register();

test.beforeEach(async ({ page }) => {
  await page.goto('/iframe.html?args=&id=common-phoneinput--primary');
});

test('Opener must be in page', async () => {
  await expect(here.phoneInput()).toHaveCount(1);
  await expect(here.fieldBlock()).toHaveCount(1);
  await expect(here.menu()).toHaveCount(0);
  await expect(here.menuItem()).toHaveCount(0);
  await expect(here.page).toHaveScreenshot();
});

test.describe('Mouse interactions', () => {
  test('should handle mouse control', async () => {
    await expect(here.phoneInput()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
    await expect(here.page).toHaveScreenshot();

    await here.fieldBlock().click();
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
    await expect(here.input()).toBeFocused();
    await expect(here.page).toHaveScreenshot();

    await here.menuOpener().click();
    await expect(here.menu()).toHaveCount(1);
    await expect(here.menuItem()).toHaveCount(13);
    await expect(here.menu()).toBeFocused();
    await expect(here.page).toHaveScreenshot();

    await here.menuItem().nth(2).click();
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
    await expect(here.menuOpener()).toBeFocused();
    await expect(here.input()).toHaveValue('+374-');
    await expect(here.restPlaceholder()).toHaveText('__-___-___');
    await expect(here.page).toHaveScreenshot();
  });
});

test.describe('Keyboard interactions', () => {
  test('should handle keyboard control', async () => {
    await expect(here.phoneInput()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
    await expect(here.input()).not.toBeFocused();
    await expect(here.page).toHaveScreenshot();

    await here.page.keyboard.press('Tab');
    await expect(here.input()).toBeFocused();
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
    await expect(here.page).toHaveScreenshot();

    await here.page.keyboard.press('Tab');
    await expect(here.menuOpener()).toBeFocused();
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
    await expect(here.page).toHaveScreenshot();

    await here.page.keyboard.press('Enter');
    await expect(here.menu()).toHaveCount(1);
    await expect(here.menuItem()).toHaveCount(13);
    await expect(here.menu()).toBeFocused();
    await expect(here.page).toHaveScreenshot();

    await here.page.keyboard.press('ArrowDown');
    await here.page.keyboard.press('ArrowDown');
    await here.page.keyboard.press('ArrowDown');
    await here.page.keyboard.press('ArrowDown');
    await here.page.keyboard.press('ArrowDown');
    await expect(here.page).toHaveScreenshot();

    await here.page.keyboard.press('Enter');
    await expect(here.menuOpener()).toBeFocused();
    await expect(here.input()).toHaveValue('+996 (');
    await expect(here.restPlaceholder()).toHaveText('___) ___-___');
    await expect(here.page).toHaveScreenshot();
  });
});
