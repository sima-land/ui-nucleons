import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  textarea() {
    return this.page.getByTestId('textarea');
  }

  fieldBlock() {
    return this.page.getByTestId('field-block:block');
  }

  inputField() {
    return this.page.getByTestId('base-input:field');
  }
}

const here = new Here().register();

test('textarea should be on page and should works', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/textarea/01-primary');

  await expect(here.textarea()).toHaveCount(1);
  await expect(here.fieldBlock()).toHaveCount(1);
  expect(await here.fieldBlock().boundingBox()).toHaveProperty('height', 80);
  await expect(here.inputField()).toHaveCount(1);
  expect(await here.inputField().inputValue()).toBe('');
  await expect(here.page).toHaveScreenshot();

  await here.inputField().focus();
  await expect(here.fieldBlock()).toHaveCount(1);
  await expect(await here.fieldBlock().boundingBox()).toHaveProperty('height', 80);
  await expect(here.inputField()).toBeFocused();
  expect(await here.inputField().inputValue()).toBe('');
  await expect(here.page).toHaveScreenshot();

  await here.inputField().fill('foo');
  await expect(here.fieldBlock()).toHaveCount(1);
  expect(await here.fieldBlock().boundingBox()).toHaveProperty('height', 80);
  await expect(here.inputField()).toBeFocused();
  expect(await here.inputField().inputValue()).toBe('foo');
  await expect(here.page).toHaveScreenshot();

  await page.keyboard.press('Enter');
  await page.keyboard.type('bar');
  await page.keyboard.press('Enter');
  await page.keyboard.type('baz');
  await expect(here.fieldBlock()).toHaveCount(1);
  expect(await here.fieldBlock().boundingBox()).toHaveProperty('height', 104);
  await expect(here.inputField()).toBeFocused();
  expect(await here.inputField().inputValue()).toBe('foo\nbar\nbaz');
  await expect(here.page).toHaveScreenshot();
});
