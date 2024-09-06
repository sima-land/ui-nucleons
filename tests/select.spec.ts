import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  fieldBlock() {
    return this.page.getByTestId('field-block:block');
  }

  fieldValue() {
    return this.fieldBlock().getByTestId('field-block:main');
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
  await page.goto('/sandbox.html?path=/components/select/01-primary');
});

test('Opener must be in page', async () => {
  await expect(here.fieldBlock()).toHaveCount(1);
  await expect(here.menu()).toHaveCount(0);
  await expect(here.menuItem()).toHaveCount(0);
});

test.describe('Mouse interactions', () => {
  test('Menu should be shown after click by opener', async () => {
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
    await expect(here.page).toHaveScreenshot();

    await here.fieldBlock().click();
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(1);
    await expect(here.menu()).toBeFocused();
    await expect(here.menuItem()).toHaveCount(12);
    await expect(here.page).toHaveScreenshot();
  });

  test('Click by option should close menu and change value in opener', async () => {
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.fieldValue()).toHaveCount(1);
    await expect(here.fieldValue()).toHaveText('');
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);

    await here.fieldBlock().click();
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.fieldValue()).toHaveCount(1);
    await expect(here.fieldValue()).toHaveText('');
    await expect(here.menu()).toHaveCount(1);
    await expect(here.menu()).toBeFocused();
    await expect(here.menuItem()).toHaveCount(12);

    await here.menuItem().nth(4).click();
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.fieldBlock()).toBeFocused();
    await expect(here.fieldValue()).toHaveCount(1);
    await expect(here.fieldValue()).toHaveText('Четыре');
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
  });
});

test.describe('Keyboard interactions', () => {
  test('Opener should be focusable by keyboard', async ({ page }) => {
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.fieldBlock()).not.toBeFocused();

    await page.keyboard.press('Tab');
    await expect(here.fieldBlock()).toBeFocused();
  });

  test(`menu should be shown after specified key press by opener`, async ({ page }) => {
    for (const key of ['Enter', 'ArrowDown', 'ArrowUp']) {
      await expect(here.fieldBlock()).toHaveCount(1);
      await expect(here.menu()).toHaveCount(0);
      await expect(here.menuItem()).toHaveCount(0);

      await here.fieldBlock().press(key);
      await expect(here.fieldBlock()).toHaveCount(1);
      await expect(here.menu()).toHaveCount(1);
      await expect(here.menu()).toBeFocused();
      await expect(here.menuItem()).toHaveCount(12);

      await page.reload();
    }
  });

  test(`menu should be hidden after Escape key press`, async ({ page }) => {
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);

    await here.fieldBlock().press('Enter');
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(1);
    await expect(here.menu()).toBeFocused();
    await expect(here.menuItem()).toHaveCount(12);

    await page.keyboard.press('Escape');
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.fieldBlock()).toBeFocused();
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
  });

  test('Enter keypress by option should close menu and change opener value', async ({ page }) => {
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.fieldValue()).toHaveCount(1);
    await expect(here.fieldValue()).toHaveText('');
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);

    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.fieldValue()).toHaveCount(1);
    await expect(here.fieldValue()).toHaveText('');
    await expect(here.menu()).toHaveCount(1);
    await expect(here.menu()).toBeFocused();
    await expect(here.menuItem()).toHaveCount(12);

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.fieldBlock()).toBeFocused();
    await expect(here.fieldValue()).toHaveCount(1);
    await expect(here.fieldValue()).toHaveText('Пять');
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
  });
});
