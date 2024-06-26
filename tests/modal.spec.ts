import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  opener() {
    return this.page.getByTestId('button').filter({ hasText: 'Показать окно' });
  }
  modal() {
    return this.page.getByTestId('modal');
  }
  topBarCloseButton() {
    return this.page.getByTestId('top-bar:close');
  }
  modalOverlay() {
    return this.page.getByTestId('modal-overlay');
  }
}

const here = new Here().register();

const sizes = [
  {
    size: 's',
  },
  {
    size: 'm',
  },
  {
    size: 'l',
  },
  {
    size: 'xl',
  },
  {
    size: 'fullscreen',
  },
];

for (const { size } of sizes) {
  test.describe(`Modal size ${size}`, () => {
    test('shows by opener click and hides by cross click', async ({ page }) => {
      await page.goto('/sandbox.html?path=/components/modal/02-different-states');
      await page.getByLabel('Размер').selectOption({ value: size });
      await page.getByLabel('Шапка').selectOption({ value: 'top-bar' });

      await expect(here.opener()).toHaveCount(1);
      await expect(here.modal()).toHaveCount(0);
      await expect(here.modalOverlay()).toHaveCount(0);
      await expect(here.page).toHaveScreenshot();

      await here.opener().click();

      await expect(here.opener()).toHaveCount(1);
      await expect(here.modal()).toHaveCount(1);
      await expect(here.modalOverlay()).toHaveCount(1);
      await expect(here.page).toHaveScreenshot();

      await here.topBarCloseButton().click();

      await expect(here.opener()).toHaveCount(1);
      await expect(here.modal()).toHaveCount(0);
      await expect(here.modalOverlay()).toHaveCount(0);
    });

    if (size !== 'fullscreen') {
      test('shows by opener click and hides by overlay click', async ({ page }) => {
        await page.goto('/sandbox.html?path=/components/modal/02-different-states');
        await page.getByLabel('Размер').selectOption({ value: size });
        await page.getByLabel('Шапка').selectOption({ value: 'top-bar' });

        await expect(here.opener()).toHaveCount(1);
        await expect(here.modal()).toHaveCount(0);
        await expect(here.modalOverlay()).toHaveCount(0);

        await here.opener().click();

        await expect(here.opener()).toHaveCount(1);
        await expect(here.modal()).toHaveCount(1);
        await expect(here.modalOverlay()).toHaveCount(1);

        // click on overlay
        await page.mouse.move(10, 10);
        await page.mouse.down();
        await page.mouse.up();

        await expect(here.opener()).toHaveCount(1);
        await expect(here.modal()).toHaveCount(0);
        await expect(here.modalOverlay()).toHaveCount(0);
      });
    }
  });
}
