import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  alert() {
    return this.page.getByTestId('alert');
  }
}

const here = new Here().register();

test('Alert should be shown on opener click and closed by overlay click', async ({ page }) => {
  await page.goto('/iframe.html?args=&id=common-alert--primary');

  await expect(page.getByTestId('modal-overlay')).toHaveCount(0);
  await expect(here.alert()).toHaveCount(0);
  await expect(here.alert().getByTestId('top-bar')).toHaveCount(0);
  await expect(here.alert().getByTestId('bottom-bar')).toHaveCount(0);
  await expect(page.getByText('Показать Alert')).toHaveCount(1);

  await page.getByText('Показать Alert').click();
  await expect(page.getByTestId('modal-overlay')).toHaveCount(1);
  await expect(here.alert()).toHaveCount(1);
  await expect(here.alert().getByTestId('top-bar')).toHaveCount(1);
  await expect(here.alert().getByTestId('bottom-bar')).toHaveCount(1);
  await expect(page.getByText('Показать Alert')).toHaveCount(1);

  await expect(page).toHaveScreenshot();

  await page.mouse.move(10, 10);
  await page.mouse.down();
  await page.mouse.up();
  await expect(page.getByTestId('modal-overlay')).toHaveCount(0);
  await expect(here.alert()).toHaveCount(0);
  await expect(here.alert().getByTestId('top-bar')).toHaveCount(0);
  await expect(here.alert().getByTestId('bottom-bar')).toHaveCount(0);
  await expect(page.getByText('Показать Alert')).toHaveCount(1);

  await expect(page).toHaveScreenshot();
});
