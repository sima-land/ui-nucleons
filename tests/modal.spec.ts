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
    url: '/iframe.html?id=common-modal--size-s',
  },
  {
    size: 'm',
    url: '/iframe.html?id=common-modal--size-m',
  },
  {
    size: 'l',
    url: '/iframe.html?id=common-modal--size-l',
  },
  {
    size: 'xl',
    url: '/iframe.html?id=common-modal--size-xl',
  },
  {
    size: 'fullscreen',
    url: '/iframe.html?id=common-modal--size-fullscreen',
  },
];

for (const { size, url } of sizes) {
  test.describe(`Modal size ${size}`, () => {
    test('shows by opener click and hides by cross click', async ({ page }) => {
      await page.goto(url);

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
        await page.goto(url);

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
