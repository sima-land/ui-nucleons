import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  pagination() {
    return this.page.getByLabel('Навигация по страницам');
  }
  paginationItem() {
    return this.pagination().getByRole('button');
  }
}

const here = new Here().register();

test('Pagination should be on page and have working arrows', async ({ page }) => {
  await page.goto('/iframe.html?id=common-pagination--primary');

  await expect(here.pagination()).toHaveCount(1);
  await expect(here.paginationItem()).toHaveCount(9);
  expect(await here.pagination().textContent()).toBe('12345…18');
  await expect(page.locator('[aria-current="true"]')).toHaveText('1');
  await expect(page.getByLabel('Предыдущая страница')).toHaveCount(1);
  await expect(page.getByLabel('Предыдущая страница')).toBeDisabled();
  await expect(page.getByLabel('Следующая страница')).toHaveCount(1);
  await expect(page.getByLabel('Следующая страница')).not.toBeDisabled();
  await expect(page).toHaveScreenshot();

  // move from 1 to 2
  await page.getByLabel('Следующая страница').click();

  await expect(here.pagination()).toHaveCount(1);
  await expect(here.paginationItem()).toHaveCount(9);
  expect(await here.pagination().textContent()).toBe('12345…18');
  await expect(page.locator('[aria-current="true"]')).toHaveText('2');
  await expect(page.getByLabel('Предыдущая страница')).toHaveCount(1);
  await expect(page.getByLabel('Предыдущая страница')).not.toBeDisabled();
  await expect(page.getByLabel('Следующая страница')).toHaveCount(1);
  await expect(page.getByLabel('Следующая страница')).not.toBeDisabled();
  await expect(page).toHaveScreenshot();

  // move from 2 to 9
  for (let i = 0; i < 7; i++) {
    await page.getByLabel('Следующая страница').click();
  }

  await expect(here.pagination()).toHaveCount(1);
  await expect(here.paginationItem()).toHaveCount(9);
  expect(await here.pagination().textContent()).toBe('1…8910…18');
  await expect(page.locator('[aria-current="true"]')).toHaveText('9');
  await expect(page.getByLabel('Предыдущая страница')).toHaveCount(1);
  await expect(page.getByLabel('Предыдущая страница')).not.toBeDisabled();
  await expect(page.getByLabel('Следующая страница')).toHaveCount(1);
  await expect(page.getByLabel('Следующая страница')).not.toBeDisabled();
  await expect(page).toHaveScreenshot();

  // move from 9 to 15
  for (let i = 0; i < 6; i++) {
    await page.getByLabel('Следующая страница').click();
  }

  await expect(here.pagination()).toHaveCount(1);
  await expect(here.paginationItem()).toHaveCount(9);
  expect(await here.pagination().textContent()).toBe('1…1415161718');
  await expect(page.locator('[aria-current="true"]')).toHaveText('15');
  await expect(page.getByLabel('Предыдущая страница')).toHaveCount(1);
  await expect(page.getByLabel('Предыдущая страница')).not.toBeDisabled();
  await expect(page.getByLabel('Следующая страница')).toHaveCount(1);
  await expect(page.getByLabel('Следующая страница')).not.toBeDisabled();
  await expect(page).toHaveScreenshot();

  // move from 15 to 18
  for (let i = 0; i < 3; i++) {
    await page.getByLabel('Следующая страница').click();
  }

  await expect(here.pagination()).toHaveCount(1);
  await expect(here.paginationItem()).toHaveCount(9);
  expect(await here.pagination().textContent()).toBe('1…1415161718');
  await expect(page.locator('[aria-current="true"]')).toHaveText('18');
  await expect(page.getByLabel('Предыдущая страница')).toHaveCount(1);
  await expect(page.getByLabel('Предыдущая страница')).not.toBeDisabled();
  await expect(page.getByLabel('Следующая страница')).toHaveCount(1);
  await expect(page.getByLabel('Следующая страница')).toBeDisabled();
  await expect(page).toHaveScreenshot();
});

test('Pagination should be on page and have working page buttons', async ({ page }) => {
  await page.goto('/iframe.html?id=common-pagination--primary');

  await expect(here.pagination()).toHaveCount(1);
  await expect(here.paginationItem()).toHaveCount(9);
  expect(await here.pagination().textContent()).toBe('12345…18');
  await expect(page.locator('[aria-current="true"]')).toHaveText('1');

  // move from 1 to 2
  await here.paginationItem().filter({ hasText: '2' }).click();

  await expect(here.pagination()).toHaveCount(1);
  await expect(here.paginationItem()).toHaveCount(9);
  expect(await here.pagination().textContent()).toBe('12345…18');
  await expect(page.locator('[aria-current="true"]')).toHaveText('2');
  await expect(page).toHaveScreenshot();

  // move from 2 to 5
  await here.paginationItem().filter({ hasText: '5' }).click();

  await expect(here.pagination()).toHaveCount(1);
  await expect(here.paginationItem()).toHaveCount(9);
  expect(await here.pagination().textContent()).toBe('1…456…18');
  await expect(page.locator('[aria-current="true"]')).toHaveText('5');
  await expect(page).toHaveScreenshot();

  // move from 5 to 7 (by "more" button)
  await here.paginationItem().filter({ hasText: '…' }).nth(1).click();

  await expect(here.pagination()).toHaveCount(1);
  await expect(here.paginationItem()).toHaveCount(9);
  expect(await here.pagination().textContent()).toBe('1…678…18');
  await expect(page.locator('[aria-current="true"]')).toHaveText('7');
  await expect(page).toHaveScreenshot();

  // move from 7 to 18
  await here.paginationItem().filter({ hasText: '18' }).click();

  await expect(here.pagination()).toHaveCount(1);
  await expect(here.paginationItem()).toHaveCount(9);
  expect(await here.pagination().textContent()).toBe('1…1415161718');
  await expect(page.locator('[aria-current="true"]')).toHaveText('18');
  await expect(page).toHaveScreenshot();
});
