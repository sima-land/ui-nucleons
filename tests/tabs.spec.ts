import { test, expect } from '@playwright/test';
import { TestUtils } from './utils';

class Here extends TestUtils {
  tabs() {
    return this.page.getByTestId('tabs');
  }
  tabsItem() {
    return this.page.getByTestId('tab');
  }
}

const here = new Here().register();

test('tabs should be on page and should works', async ({ page }) => {
  await page.goto('/sandbox.html?path=/components/tabs/01-primary');

  await expect(here.tabs()).toHaveCount(1);
  await expect(here.tabsItem()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();

  await here.tabsItem().nth(1).click();

  await expect(here.tabs()).toHaveCount(1);
  await expect(here.tabsItem()).toHaveCount(3);
  await expect(here.page).toHaveScreenshot();
});
