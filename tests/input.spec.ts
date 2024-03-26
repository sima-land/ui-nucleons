import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  input() {
    return this.page.getByTestId('input');
  }

  inputField() {
    return this.page.getByTestId('base-input:field');
  }

  inputClearButton() {
    return this.page.getByTestId('input:clear-button');
  }
}

const here = new Here().register();

test('input should be on page and should works properly', async ({ page }) => {
  await page.goto('/iframe.html?id=common-input--primary');

  await expect(here.input()).toHaveCount(1);
  await expect(here.inputField()).toHaveCount(1);

  await expect(here.inputField()).not.toBeFocused();
  expect(await here.inputField().inputValue()).toBe('');
  await expect(here.page).toHaveScreenshot();

  await here.inputField().focus();
  await expect(here.inputField()).toBeFocused();
  expect(await here.inputField().inputValue()).toBe('');
  await expect(here.page).toHaveScreenshot();

  await here.inputField().fill('Hello, world!');
  await expect(here.inputField()).toBeFocused();
  expect(await here.inputField().inputValue()).toBe('Hello, world!');
  await expect(here.page).toHaveScreenshot();

  await here.inputField().blur();
  await expect(here.inputField()).not.toBeFocused();
  expect(await here.inputField().inputValue()).toBe('Hello, world!');
  await expect(here.page).toHaveScreenshot();
});

test('inputs with different sizes should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-input--different-sizes');

  await expect(here.input()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});

test('inputs with different icons should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-input--with-icons');

  await expect(here.input()).toHaveCount(3);
  await expect(page.locator('svg')).toHaveCount(4);
  await expect(here.page).toHaveScreenshot();
});

test('working clearable inputs should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-input--clearable');

  await expect(here.input()).toHaveCount(3);
  expect(await here.inputField().nth(0).inputValue()).toBe('Hello, world!');
  await expect(here.inputClearButton()).toHaveCount(0);
  await expect(here.page).toHaveScreenshot();

  await here.inputField().nth(0).focus();
  expect(await here.inputField().nth(0).inputValue()).toBe('Hello, world!');
  await expect(here.inputClearButton()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();

  await here.inputClearButton().click();
  expect(await here.inputField().nth(0).inputValue()).toBe('');
  await expect(here.inputClearButton()).toHaveCount(0);
  await expect(here.page).toHaveScreenshot();
});

test('filled + disabled state look', async ({ page }) => {
  await page.goto('/iframe.html?id=common-input--different-states');

  await expect(here.input()).toHaveCount(4);
  expect(await here.inputField().nth(0).inputValue()).toBe('');
  expect(await here.inputField().nth(1).inputValue()).toBe('');
  expect(await here.inputField().nth(2).inputValue()).toBe('');
  expect(await here.inputField().nth(3).inputValue()).toBe('');
  await expect(here.page).toHaveScreenshot();

  // fill every input
  await here.inputField().nth(0).fill('Something');
  await here.inputField().nth(1).fill('Something');
  await here.inputField().nth(2).fill('Something');
  await here.inputField().nth(3).fill('Something');
  expect(await here.inputField().nth(0).inputValue()).toBe('Something');
  expect(await here.inputField().nth(1).inputValue()).toBe('Something');
  expect(await here.inputField().nth(2).inputValue()).toBe('Something');
  expect(await here.inputField().nth(3).inputValue()).toBe('Something');
  await expect(here.page).toHaveScreenshot();

  // disable
  await page.getByLabel('Состояние').selectOption('Отключено');
  expect(await here.inputField().nth(0).isDisabled()).toBe(true);
  expect(await here.inputField().nth(1).isDisabled()).toBe(true);
  expect(await here.inputField().nth(2).isDisabled()).toBe(true);
  expect(await here.inputField().nth(3).isDisabled()).toBe(true);
  await expect(here.page).toHaveScreenshot();
});
