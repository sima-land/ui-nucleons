import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  stepperInput() {
    return this.page.getByTestId('stepper:input');
  }
  stepperPlus() {
    return this.page.getByTestId('stepper:plus');
  }
  stepperMinus() {
    return this.page.getByTestId('stepper:minus');
  }
}

const here = new Here().register();

test('stepper should be on page and should works', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/stepper/01-primary');

  await expect(here.stepperInput()).toHaveCount(1);
  await expect(here.stepperPlus()).toHaveCount(1);
  await expect(here.stepperMinus()).toHaveCount(1);
  expect(await here.stepperInput().inputValue()).toBe('0');
  expect(await here.stepperPlus().isDisabled()).toBe(false);
  expect(await here.stepperMinus().isDisabled()).toBe(true);
  await expect(here.page).toHaveScreenshot();

  // plus
  await here.stepperPlus().click();
  expect(await here.stepperInput().inputValue()).toBe('1');
  await here.stepperPlus().click();
  expect(await here.stepperInput().inputValue()).toBe('2');
  await here.stepperPlus().click();
  expect(await here.stepperInput().inputValue()).toBe('3');

  // minus
  await here.stepperMinus().click();
  expect(await here.stepperInput().inputValue()).toBe('2');
  await here.stepperMinus().click();
  expect(await here.stepperInput().inputValue()).toBe('1');
  await here.stepperMinus().click();
  expect(await here.stepperInput().inputValue()).toBe('0');

  // input
  await here.stepperInput().fill('8');
  expect(await here.stepperInput().inputValue()).toBe('8');
  await here.stepperInput().fill('12');
  expect(await here.stepperInput().inputValue()).toBe('10');
  expect(await here.stepperPlus().isDisabled()).toBe(true);
  expect(await here.stepperMinus().isDisabled()).toBe(false);
});
