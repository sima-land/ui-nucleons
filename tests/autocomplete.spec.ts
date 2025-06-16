import { expect, test } from '@playwright/test';
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
  checkbox() {
    return this.page.getByRole('checkbox');
  }
}

const here = new Here().register();

test.beforeEach(async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/autocomplete/01-primary');
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
    await expect(here.menuItem()).toHaveCount(8);
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
    await expect(here.menuItem()).toHaveCount(8);

    await here.menuItem().nth(2).click();
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.input()).toBeFocused();
    await expect(here.input()).toHaveValue('Firefox');
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
    await expect(here.menuItem()).toHaveCount(8);
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
    await expect(here.menuItem()).toHaveCount(8);

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(here.fieldBlock()).toHaveCount(1);
    await expect(here.input()).toHaveCount(1);
    await expect(here.input()).toBeFocused();
    await expect(here.input()).toHaveValue('Edge');
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
  });
});

test.describe('Viewport interaction', () => {
  test('dropdown bottom should stick to the bottom of viewport', async ({ page }) => {
    await here.fieldBlock().click();
    await page.setViewportSize({ height: 1000, width: 270 });
    const fullHeight = (await here.menu().boundingBox())?.height || 0;
    await page.setViewportSize({ height: 376, width: 270 });
    const stickHeight = (await here.menu().boundingBox())?.height || 0;
    expect(stickHeight).toBeLessThan(fullHeight);
    expect(fullHeight).toBe(376);
    expect(stickHeight).toBe(288);
  });
});

test.describe('Upward dropdown opening', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sandbox.html?path=/components/autocomplete/04-different-states');
  });

  test('dropdown should open upward when not enough space below', async () => {
    await here.checkbox().nth(1).click();

    await here.fieldBlock().click();

    const inputBox = await here.input().boundingBox();
    const menuBox = await here.menu().boundingBox();
    const inputTop = inputBox!.y;
    const menuTop = menuBox!.y;

    expect(menuTop).toBeLessThan(inputTop);

    await expect(here.page).toHaveScreenshot();
  });
});
