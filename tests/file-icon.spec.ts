import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  fileIcon() {
    return this.page.locator('svg');
  }
}

const here = new Here().register();

test('file icons should be on page', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/file-icon/01-primary');

  await expect(here.fileIcon()).toHaveCount(18);
  await expect(here.page).toHaveScreenshot();
});
