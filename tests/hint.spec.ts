import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  hint() {
    return this.page.getByTestId('hint');
  }
}

const here = new Here().register();

test.only('hint should be shown by click on button', async ({ page }) => {
  await page.goto('/iframe.html?id=common-hint--on-click');

  await expect(here.hint()).toHaveCount(0);
  await expect(here.page).toHaveScreenshot();

  await page.getByText('Кликни').click();
  await expect(here.hint()).toHaveCount(1);
  expect(await here.hint().textContent()).toBe('Какой-то короткий текст получился');
  await expect(here.page).toHaveScreenshot();

  await page.getByText('Кликни').click();
  await expect(here.hint()).toHaveCount(0);

  await page.getByText('Кликни').click();
  await expect(here.hint()).toHaveCount(1);
  expect(await here.hint().textContent()).toBe('Какой-то короткий текст получился');

  await page.mouse.click(600, 10);
  await expect(here.hint()).toHaveCount(0);
});

test.only('hint should be shown by hover on button', async ({ page }) => {
  await page.goto('/iframe.html?id=common-hint--on-hover');

  await expect(here.hint()).toHaveCount(0);
  await expect(here.page).toHaveScreenshot();

  await page.getByText('Наведи').hover();
  await expect(here.hint()).toHaveCount(1);
  expect(await here.hint().textContent()).toBe('Какой-то короткий текст получился');
  await expect(here.page).toHaveScreenshot();

  await page.mouse.move(600, 10);
  await expect(here.hint()).toHaveCount(0);

  await page.getByText('Наведи').hover();
  await expect(here.hint()).toHaveCount(1);
  expect(await here.hint().textContent()).toBe('Какой-то короткий текст получился');

  await here.hint().hover();
  await expect(here.hint()).toHaveCount(1);
  expect(await here.hint().textContent()).toBe('Какой-то короткий текст получился');

  await page.mouse.move(600, 10);
  await expect(here.hint()).toHaveCount(0);
});

test.only('hint should be positioned properly', async ({ page }) => {
  await page.goto('/iframe.html?id=common-hint--test-click');

  await expect(page.getByText('Кликни')).toHaveCount(9);
  await expect(here.hint()).toHaveCount(0);

  for (let i = 0; i < 9; i++) {
    await page.getByText('Кликни').nth(i).click();
    await expect(here.hint()).toHaveCount(1);
    expect(await here.hint().textContent()).toBe('Какой-то короткий текст получился');
    await expect(here.page).toHaveScreenshot();

    await page.mouse.click(1, 1);
    await expect(here.hint()).toHaveCount(0);
  }
});
