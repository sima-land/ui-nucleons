import { it, expect, describe, beforeAll, afterAll } from '@jest/globals';
import { getScrollParent } from '../get-scroll-parent';

type FakeStyledElem = HTMLElement & { __fakeStyles: any };

describe('getScrollParent', () => {
  const actualDescriptor = {
    ...Object.getOwnPropertyDescriptor(window, 'getComputedStyle'),
  };

  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: (el: FakeStyledElem) => el.__fakeStyles,
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'getComputedStyle', actualDescriptor);
  });

  it('should return document.body', () => {
    (document.body as FakeStyledElem).__fakeStyles = { overflowX: '', overflowY: '', overflow: '' };

    expect(getScrollParent(null)).toBe(document.body);
    expect(getScrollParent(undefined)).toBe(document.body);
    expect(
      getScrollParent({
        parentElement: document.body,
        __fakeStyles: { overflowX: '', overflowY: '', overflow: '' },
      } as unknown as HTMLElement),
    ).toBe(document.body);
  });

  it('should return parentElement', () => {
    const fakeDiv = {
      __fakeStyles: { overflowX: '', overflowY: '', overflow: '' },
      parentElement: {
        __fakeStyles: { overflowX: '', overflowY: '', overflow: 'auto' },
      },
    } as unknown as HTMLElement;

    expect(getScrollParent(fakeDiv)).toBe(fakeDiv.parentElement);
  });

  it('should return body when parent is not scrollable', () => {
    const fakeDiv = {
      __fakeStyles: { overflowX: '', overflowY: '', overflow: '' },
      parentElement: {
        __fakeStyles: { overflowX: '', overflowY: '', overflow: '' },
      },
    } as unknown as HTMLElement;

    expect(getScrollParent(fakeDiv)).toBe(document.body);
  });
});
