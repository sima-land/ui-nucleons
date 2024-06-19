import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  sidePage() {
    return this.page.getByTestId('side-page');
  }
  topBarCloseButton() {
    return this.page.getByTestId('top-bar:close');
  }
  modalOverlay() {
    return this.page.getByTestId('modal-overlay');
  }
}

const here = new Here().register();

test('side page should be shown by opener click and closed by cross', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/side-page/01-primary');

  await expect(here.sidePage()).toHaveCount(0);
  await expect(here.topBarCloseButton()).toHaveCount(0);
  await expect(here.page).toHaveScreenshot();

  await page.getByText('Показать').click();
  await page.waitForTimeout(500); // wait css transition

  await expect(here.sidePage()).toHaveCount(1);
  await expect(here.topBarCloseButton()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();

  await here.topBarCloseButton().click();

  await expect(here.sidePage()).toHaveCount(0);
  await expect(here.topBarCloseButton()).toHaveCount(0);
});

test('side page should be shown by opener and closed by overlay click', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/side-page/01-primary');

  await expect(here.sidePage()).toHaveCount(0);
  await expect(here.modalOverlay()).toHaveCount(0);
  await expect(here.page).toHaveScreenshot();

  await page.getByText('Показать').click();
  await page.waitForTimeout(500); // wait css transition

  await expect(here.sidePage()).toHaveCount(1);
  await expect(here.modalOverlay()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();

  // click on overlay
  await page.mouse.move(10, 10);
  await page.mouse.down();
  await page.mouse.up();

  await expect(here.sidePage()).toHaveCount(0);
  await expect(here.modalOverlay()).toHaveCount(0);
});
