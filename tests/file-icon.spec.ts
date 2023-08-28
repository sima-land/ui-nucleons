import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  fileIcon() {
    return this.page.locator('svg');
  }
}

const here = new Here().register();

test('file icons should be on page', async ({ page }) => {
  await page.goto('/iframe.html?args=&id=common-fileicon--primary');

  await expect(here.fileIcon()).toHaveCount(7);
  await expect(here.page).toHaveScreenshot();
});
