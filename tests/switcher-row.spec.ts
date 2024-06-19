import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  switcherRow() {
    return this.page.getByTestId('switcher-row');
  }
  switcherRowLabel() {
    return this.page.getByTestId('switcher-row:label');
  }
  switcherRowComment() {
    return this.page.getByTestId('switcher-row:comment');
  }
  checkbox() {
    return this.page.getByTestId('checkbox');
  }
  toggle() {
    return this.page.getByTestId('toggle');
  }
  radioButton() {
    return this.page.getByTestId('radio-button');
  }
}

const here = new Here().register();

test('switcher row with checkbox should be on page and should works', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/switcher-row/01-primary');

  await expect(here.switcherRow()).toHaveCount(1);
  await expect(here.switcherRowLabel()).toHaveCount(1);
  await expect(here.switcherRowComment()).toHaveCount(1);
  await expect(here.checkbox()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();

  // label title
  expect(await here.checkbox().isChecked()).toBe(true);
  await here.switcherRowLabel().click();
  expect(await here.checkbox().isChecked()).toBe(false);
  await here.switcherRowLabel().click();
  expect(await here.checkbox().isChecked()).toBe(true);

  // label comment
  expect(await here.checkbox().isChecked()).toBe(true);
  await here.switcherRowComment().click();
  expect(await here.checkbox().isChecked()).toBe(false);
  await here.switcherRowComment().click();
  expect(await here.checkbox().isChecked()).toBe(true);
});

test('switcher row with toggle should be on page and should works', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/switcher-row/02-with-toggle');

  await expect(here.switcherRow()).toHaveCount(1);
  await expect(here.switcherRowLabel()).toHaveCount(1);
  await expect(here.switcherRowComment()).toHaveCount(1);
  await expect(here.toggle()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();

  // label title
  expect(await here.toggle().isChecked()).toBe(true);
  await here.switcherRowLabel().click();
  expect(await here.toggle().isChecked()).toBe(false);
  await here.switcherRowLabel().click();
  expect(await here.toggle().isChecked()).toBe(true);

  // label comment
  expect(await here.toggle().isChecked()).toBe(true);
  await here.switcherRowComment().click();
  expect(await here.toggle().isChecked()).toBe(false);
  await here.switcherRowComment().click();
  expect(await here.toggle().isChecked()).toBe(true);
});

test('switcher row with radio should be on page and should works', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/switcher-row/03-with-radio-buttons');

  await expect(here.switcherRow()).toHaveCount(3);
  await expect(here.switcherRowLabel()).toHaveCount(3);
  await expect(here.switcherRowComment()).toHaveCount(3);
  await expect(here.radioButton()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();

  // label title
  expect(await here.radioButton().nth(1).isChecked()).toBe(false);
  await here.switcherRowLabel().nth(1).click();
  expect(await here.radioButton().nth(1).isChecked()).toBe(true);

  // label comment
  expect(await here.radioButton().nth(2).isChecked()).toBe(false);
  await here.switcherRowComment().nth(2).click();
  expect(await here.radioButton().nth(2).isChecked()).toBe(true);
});
