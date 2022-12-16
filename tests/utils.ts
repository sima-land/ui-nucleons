/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
import { test, type Page } from '@playwright/test';

export class TestUtils {
  private _page?: Page;

  get page(): Page {
    if (!this._page) {
      throw Error('Page not found');
    }

    return this._page;
  }

  set page(page: Page) {
    this._page = page;
  }

  register(): this {
    test.beforeEach(async ({ page }) => {
      this.page = page;
    });

    return this;
  }
}
