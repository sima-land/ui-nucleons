import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  infoText() {
    return this.page.getByTestId('info-text');
  }
}

const here = new Here().register();

test('info text should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-infotext--primary');

  await expect(here.infoText()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();
});
