import { getPositionedParentOffset, cssValueToNumber } from '../get-positioned-parent-offset';
import { describe, it, expect, beforeAll, afterAll, afterEach } from '@jest/globals';

const FakeElement = {
  create: (data: any = {}) => {
    const el = document.createElement('div');

    [
      'offsetParent',
      'parentElement',
      'scrollLeft',
      'scrollWidth',
      'scrollTop',
      'scrollHeight',
    ].forEach(n =>
      Object.defineProperty(el, n, {
        value: undefined,
        configurable: true,
        writable: true,
      }),
    );

    Object.assign(el, {
      style: {},
      ...data,
    });

    return el as any;
  },
};

describe('cssValueToNumber', () => {
  it('should handle invalid values', () => {
    expect(cssValueToNumber('foobar')).toBe(0);
  });
});

describe('getPositionedParentOffset', () => {
  const realOffset = { x: window.pageXOffset, y: window.pageYOffset };

  const actualDescriptor = {
    ...Object.getOwnPropertyDescriptor(window, 'getComputedStyle'),
  };

  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: (el: any) => el.__fakeStyles || actualDescriptor.value(el),
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'getComputedStyle', actualDescriptor);
  });

  afterEach(() => {
    (window as any).pageXOffset = realOffset.x;
    (window as any).pageYOffset = realOffset.y;
  });

  it('should work without offsetParent', () => {
    const testDiv = {
      offsetParent: null,
      parentElement: { __fakeStyles: { overflow: 'auto' } },
    };

    (document.body as any).__fakeStyles = { position: 'static' };
    (document.documentElement as any).__fakeStyles = { position: 'static' };

    (window as any).pageXOffset = 100;
    (window as any).pageYOffset = 200;

    expect(getPositionedParentOffset(testDiv as any)).toEqual({ x: 100, y: 200 });
  });

  it('should work with offsetParent that is equal to scrollParent', () => {
    const testParent = FakeElement.create({
      getBoundingClientRect: () => ({ top: 200, left: 200 }),
      __fakeStyles: {
        position: 'relative',
        borderLeftWidth: '30px',
        borderTopWidth: '40px',
        overflowY: 'auto',
      },
      scrollTop: 300,
      scrollLeft: 300,
    });

    const testDiv = FakeElement.create({
      offsetParent: testParent,
      parentElement: testParent,
    });

    (window as any).pageXOffset = 120;
    (window as any).pageYOffset = 230;

    expect(getPositionedParentOffset(testDiv as any)).toEqual({ x: 70, y: 60 });
  });
});
