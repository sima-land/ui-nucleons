import { isBrowser } from '../is-browser';

describe('test isBrowser()', () => {
  it('make sure, we are in browser', () => {
    expect(isBrowser()).toBeTruthy();
  });
});
