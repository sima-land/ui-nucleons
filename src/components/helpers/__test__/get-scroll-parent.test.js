import { getScrollParent } from '../get-scroll-parent';

describe('getScrollParent', () => {
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

  it('should return document.body', () => {
    document.body.__fakeStyles = { overflowX: '', overflowY: '', overflow: '' };

    expect(getScrollParent(null)).toBe(document.body);
    expect(getScrollParent(undefined)).toBe(document.body);
    expect(getScrollParent({
      parentElement: document.body,
      __fakeStyles: { overflowX: '', overflowY: '', overflow: '' },
    })).toBe(document.body);
  });

  it('should return parentElement', () => {
    const fakeDiv = {
      __fakeStyles: { overflowX: '', overflowY: '', overflow: '' },
      parentElement: {
        __fakeStyles: { overflowX: '', overflowY: '', overflow: 'auto' },
      },
    };

    expect(getScrollParent(fakeDiv)).toBe(fakeDiv.parentElement);
  });
});
