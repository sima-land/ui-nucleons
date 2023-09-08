import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  uploadArea() {
    return this.page.getByTestId('upload-area');
  }
  uploadAreaInput() {
    return this.page.getByTestId('upload-area:input');
  }
  uploadAreaAnchor() {
    return this.page.getByTestId('upload-area:anchor');
  }
}

const here = new Here().register();

test('upload area should be on page', async ({ page }) => {
  await page.goto('/iframe.html?id=common-uploadarea--primary');

  await expect(here.uploadArea()).toHaveCount(1);
  expect(await here.uploadArea().textContent()).toBe(
    'Загрузите фото10 файлов, формат JPG, JPEG, PNG, до 2 Mb',
  );
  await expect(here.uploadAreaInput()).toHaveCount(1);
  await expect(here.page).toHaveScreenshot();

  let alertMessage = '';

  page.on('dialog', dialog => {
    alertMessage = dialog.message();
    dialog.accept();
  });

  const fileChooserPromise = page.waitForEvent('filechooser');
  await page.getByText('Загрузите фото').click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles([
    './src/avatar/__stories__/person.jpg',
    './src/avatar/__stories__/dog.png',
  ]);

  expect(alertMessage).toBe('Файлов выбрано: 2');
});
