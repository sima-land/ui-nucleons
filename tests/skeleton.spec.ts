import { test, expect } from '@playwright/test';

test('default skeleton should be displayed', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/skeleton/01-primary');
  await expect(page).toHaveScreenshot({ animations: 'disabled' });
});

test('skeleton with custom clip path should be displayed', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/skeleton/02-complex');
  await expect(page).toHaveScreenshot({ animations: 'disabled' });
});

test('skeleton with custom clip path and dark theme should be displayed', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/skeleton/03-complex-dark');
  await expect(page).toHaveScreenshot({ animations: 'disabled' });
});
