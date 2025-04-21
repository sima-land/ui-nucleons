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

test('Opener must be in page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/phone-input/01-primary');

  await expect(here.phoneInput()).toHaveCount(1);
  await expect(here.fieldBlock()).toHaveCount(1);
  await expect(here.menu()).toHaveCount(0);
  await expect(here.menuItem()).toHaveCount(0);
  await expect(here.page).toHaveScreenshot();
});

test.describe('Mouse interactions', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sandbox.html?path=/components/phone-input/01-primary');
  });

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
  test.beforeEach(async ({ page }) => {
    await page.goto('/sandbox.html?path=/components/phone-input/01-primary');
  });

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

test.describe('Props handling', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sandbox.html?path=/components/phone-input/04-different-states');
  });

  const variants = [
    {
      event: 'change',
      controlled: true,
    },
    {
      event: 'change',
      controlled: false,
    },
    {
      event: 'input',
      controlled: true,
    },
    {
      event: 'input',
      controlled: false,
    },
  ];

  for (const { controlled, event } of variants) {
    test(`Default state with on${event} and ${controlled ? 'value' : 'defaultValue'}`, async () => {
      await here.page.getByLabel('Состояние').selectOption({ value: 'default' });
      await here.page.getByLabel('Событие').selectOption({ value: event });
      await here.page.getByLabel('Контролируемый').setChecked(controlled);

      await expect(here.phoneInput()).toHaveCount(1);
      await expect(here.menu()).toHaveCount(0);
      await expect(here.menuItem()).toHaveCount(0);
      await expect(here.input()).not.toBeFocused();
      await expect(here.input()).toHaveValue('+7 (800) 555-35-35');

      await here.phoneInput().click();
      await expect(here.input()).toBeFocused();

      await here.input().clear();
      await expect(here.input()).toHaveValue('+7 (');

      await here.input().fill('1002003040');
      await expect(here.input()).toHaveValue('+7 (100) 200-30-40');

      await here.menuOpener().click();
      await expect(here.menu()).toHaveCount(1);
      await expect(here.menuItem()).toHaveCount(13);

      await here.menuItem().nth(6).click();
      await expect(here.menu()).toHaveCount(0);
      await expect(here.menuItem()).toHaveCount(0);
      await expect(here.input()).toHaveValue('+995 (');

      await here.phoneInput().click();
      await expect(here.input()).toBeFocused();

      await here.input().fill('111222333');
      await expect(here.input()).toHaveValue('+995 (111) 222-333');
    });
  }

  test('Disabled state', async () => {
    await here.page.getByLabel('Состояние').selectOption({ value: 'disabled' });

    await expect(here.phoneInput()).toHaveCount(1);
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
    await expect(here.input()).toBeDisabled();
    await expect(here.menuOpener()).toBeDisabled();
    await expect(here.menuOpener()).toHaveAttribute('role', 'combobox');
    await expect(here.menuOpener()).toHaveAttribute('aria-label', 'Выбор страны');
    await expect(here.input()).toHaveValue('+7 (800) 555-35-35');
    await expect(here.page).toHaveScreenshot();

    await here.menuOpener().click({ force: true });
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);

    await here.menuOpener().focus();
    await expect(here.menuOpener()).not.toBeFocused();

    await here.menuOpener().press('Enter');
    await expect(here.menu()).toHaveCount(0);
    await expect(here.menuItem()).toHaveCount(0);
  });
});
