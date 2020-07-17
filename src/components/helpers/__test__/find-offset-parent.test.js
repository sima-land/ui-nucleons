import { findOffsetParent } from '../find-offset-parent';

describe('findOffsetParent', () => {
  const actualDescriptor = {
    ...Object.getOwnPropertyDescriptor(window, 'getComputedStyle'),
  };

  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: el => el.__fakeStyles,
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'getComputedStyle', actualDescriptor);
  });

  it('should return document.body or offsetParent', () => {
    const fakeDiv = {};

    document.body.__fakeStyles = {};
    document.documentElement.__fakeStyles = {};

    expect(findOffsetParent(fakeDiv)).toBe(document.body);

    fakeDiv.offsetParent = { __fakeStyles: { position: 'relative' } };

    expect(findOffsetParent(fakeDiv)).toBe(fakeDiv.offsetParent);
  });

  it('should return null', () => {
    const fakeDiv = {
      offsetParent: { __fakeStyles: { position: 'static' } },
    };

    document.documentElement.__fakeStyles = { position: 'static' };

    expect(findOffsetParent(fakeDiv)).toBe(null);
  });

  it('should return document.documentElement', () => {
    const fakeDiv = {
      offsetParent: { __fakeStyles: { position: 'static' } },
    };

    document.documentElement.__fakeStyles = { position: 'relative' };

    expect(findOffsetParent(fakeDiv)).toBe(document.documentElement);
  });
});
