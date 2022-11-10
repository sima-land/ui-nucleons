import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:9009/iframe.html?args=&id=common-select--primary');
});

test.describe('Mouse interactions', () => {
  test('Opener must be in page', async ({ page }) => {
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('dropdown')).toHaveCount(0);
    await expect(page.getByTestId('dropdown-item')).toHaveCount(0);
  });

  test('Menu should be shown after click by opener', async ({ page }) => {
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('dropdown')).toHaveCount(0);
    await expect(page.getByTestId('dropdown-item')).toHaveCount(0);

    await page.getByTestId('select:opener').click();
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('dropdown')).toHaveCount(1);
    await expect(page.getByTestId('dropdown')).toBeFocused();
    await expect(page.getByTestId('dropdown-item')).toHaveCount(7);
  });

  test('Click by option should close menu and change value in opener', async ({ page }) => {
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('field:main')).toHaveCount(1);
    await expect(page.getByTestId('field:main')).toHaveText('');
    await expect(page.getByTestId('dropdown')).toHaveCount(0);
    await expect(page.getByTestId('dropdown-item')).toHaveCount(0);

    await page.getByTestId('select:opener').click();
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('field:main')).toHaveCount(1);
    await expect(page.getByTestId('field:main')).toHaveText('');
    await expect(page.getByTestId('dropdown')).toHaveCount(1);
    await expect(page.getByTestId('dropdown')).toBeFocused();
    await expect(page.getByTestId('dropdown-item')).toHaveCount(7);

    await page.getByTestId('dropdown-item').nth(4).click();
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('select:opener')).toBeFocused();
    await expect(page.getByTestId('field:main')).toHaveCount(1);
    await expect(page.getByTestId('field:main')).toHaveText('Четыре');
    await expect(page.getByTestId('dropdown')).toHaveCount(0);
    await expect(page.getByTestId('dropdown-item')).toHaveCount(0);
  });
});

test.describe('Keyboard interactions', () => {
  test('Opener should be focusable by keyboard', async ({ page }) => {
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('select:opener')).not.toBeFocused();

    page.keyboard.press('Tab');

    await expect(page.getByTestId('select:opener')).toBeFocused();
  });

  test(`menu should be shown after specified key press by opener`, async ({ page }) => {
    for (const key of ['Enter', 'ArrowDown', 'ArrowUp']) {
      await expect(page.getByTestId('select:opener')).toHaveCount(1);
      await expect(page.getByTestId('dropdown')).toHaveCount(0);
      await expect(page.getByTestId('dropdown-item')).toHaveCount(0);

      await page.getByTestId('select:opener').press(key);
      await expect(page.getByTestId('select:opener')).toHaveCount(1);
      await expect(page.getByTestId('dropdown')).toHaveCount(1);
      await expect(page.getByTestId('dropdown')).toBeFocused();
      await expect(page.getByTestId('dropdown-item')).toHaveCount(7);

      await page.reload();
    }
  });

  test(`menu should be hidden after Escape key press`, async ({ page }) => {
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('dropdown')).toHaveCount(0);
    await expect(page.getByTestId('dropdown-item')).toHaveCount(0);

    await page.getByTestId('select:opener').press('Enter');
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('dropdown')).toHaveCount(1);
    await expect(page.getByTestId('dropdown')).toBeFocused();
    await expect(page.getByTestId('dropdown-item')).toHaveCount(7);

    await page.keyboard.press('Escape');
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('select:opener')).toBeFocused();
    await expect(page.getByTestId('dropdown')).toHaveCount(0);
    await expect(page.getByTestId('dropdown-item')).toHaveCount(0);
  });

  test('Enter keypress by option should close menu and change opener value', async ({ page }) => {
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('field:main')).toHaveCount(1);
    await expect(page.getByTestId('field:main')).toHaveText('');
    await expect(page.getByTestId('dropdown')).toHaveCount(0);
    await expect(page.getByTestId('dropdown-item')).toHaveCount(0);

    page.keyboard.press('Tab');
    page.keyboard.press('Enter');
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('field:main')).toHaveCount(1);
    await expect(page.getByTestId('field:main')).toHaveText('');
    await expect(page.getByTestId('dropdown')).toHaveCount(1);
    await expect(page.getByTestId('dropdown')).toBeFocused();
    await expect(page.getByTestId('dropdown-item')).toHaveCount(7);

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    await expect(page.getByTestId('select:opener')).toHaveCount(1);
    await expect(page.getByTestId('select:opener')).toBeFocused();
    await expect(page.getByTestId('field:main')).toHaveCount(1);
    await expect(page.getByTestId('field:main')).toHaveText('Пять');
    await expect(page.getByTestId('dropdown')).toHaveCount(0);
    await expect(page.getByTestId('dropdown-item')).toHaveCount(0);
  });
});
