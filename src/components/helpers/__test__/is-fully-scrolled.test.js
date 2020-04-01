import { isFullyScrolled } from '../is-fully-scrolled';

describe('isFullyScrolled()', () => {
  it('should return true', () => {
    const fakeElement = {
      scrollTop: 200,
      clientHeight: 100,
      scrollHeight: 200,
    };
    expect(isFullyScrolled(fakeElement)).toBe(true);
  });
  it('should return true with threshold', () => {
    const fakeElement = {
      scrollTop: 100,
      clientHeight: 100,
      scrollHeight: 200,
    };
    expect(isFullyScrolled(fakeElement, { threshold: 100 })).toBe(true);
  });
  it('should return false', () => {
    const fakeElement = {
      scrollTop: 50,
      clientHeight: 100,
      scrollHeight: 200,
    };
    expect(isFullyScrolled(fakeElement)).toBe(false);
    expect(isFullyScrolled(null)).toBe(false);
  });
});
