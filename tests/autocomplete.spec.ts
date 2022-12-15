/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  fieldBlock() {
    return this.page.getByTestId('field-block:block');
  }

  input() {
    return this.fieldBlock().getByTestId('base-input:field');
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
  await page.goto('/iframe.html?args=&id=common-autocomplete--primary');
});

test('Autocomplete must be in page', async () => {
  await expect(here.fieldBlock()).toHaveCount(1);
  await expect(here.menu()).toHaveCount(0);
  await expect(here.menuItem()).toHaveCount(0);
});

test.describe('Mouse interactions', () => {
  test('Menu should be shown after input focus by mouse click', async () => {
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
    await expect(here.page).toHaveScreenshot();

    await here.fieldBlock().click();
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.input()).toBeFocused();
    await expect(here.menu()).toHaveCount(1);
    await expect(here.menuItem()).toHaveCount(5);
    await expect(here.page).toHaveScreenshot();
  });

  test('Suggestion clock should close menu and change input value', async () => {
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);

    await here.fieldBlock().click();
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.input()).toBeFocused();
    await expect(here.menu()).toHaveCount(1);
    await expect(here.menuItem()).toHaveCount(5);

    await here.menuItem().nth(2).click();
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.input()).toBeFocused();
    await expect(here.input()).toHaveValue('Chrome');
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
  });
});

test.describe('Keyboard interactions', () => {
  test('Tab should focus input and show menu', async ({ page }) => {
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);

    await page.keyboard.press('Tab');
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.input()).toBeFocused();
    await expect(here.menu()).toHaveCount(1);
    await expect(here.menuItem()).toHaveCount(5);
  });

  test('should walk on suggestions list by arrows and select active by enter', async ({ page }) => {
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);

    await page.keyboard.press('Tab');
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.input()).toBeFocused();
    await expect(here.menu()).toHaveCount(1);
    await expect(here.menuItem()).toHaveCount(5);

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.input()).toBeFocused();
    await expect(here.input()).toHaveValue('Opera');
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
  });
});
