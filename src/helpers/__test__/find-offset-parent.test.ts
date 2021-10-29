import { findOffsetParent } from '../find-offset-parent';

type FakeDiv = Omit<HTMLElement, 'offsetParent'> & { offsetParent?: Element };

describe('findOffsetParent', () => {
  const actualDescriptor = {
    ...Object.getOwnPropertyDescriptor(window, 'getComputedStyle'),
  };

  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: (el: HTMLElement & { __fakeStyles: any }) => el.__fakeStyles,
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'getComputedStyle', actualDescriptor);
  });

  it('should return document.body or offsetParent', () => {
    const fakeDiv = {} as FakeDiv;

    (document.body as HTMLElement & { __fakeStyles: any }).__fakeStyles = {};
    (document.documentElement as HTMLElement & { __fakeStyles: any }).__fakeStyles = {};

    expect(findOffsetParent(fakeDiv as HTMLElement)).toBe(document.body);

    fakeDiv.offsetParent = { __fakeStyles: { position: 'relative' } } as unknown as Element;

    expect(findOffsetParent(fakeDiv as HTMLElement)).toBe(fakeDiv.offsetParent);
  });

  it('should return null', () => {
    const fakeDiv = {
      offsetParent: { __fakeStyles: { position: 'static' } },
    } as unknown as FakeDiv;

    (document.documentElement as HTMLElement & { __fakeStyles: any }).__fakeStyles = {
      position: 'static',
    };

    expect(findOffsetParent(fakeDiv as HTMLElement)).toBe(null);
  });

  it('should return document.documentElement', () => {
    const fakeDiv = {
      offsetParent: { __fakeStyles: { position: 'static' } },
    };

    (document.documentElement as HTMLElement & { __fakeStyles: any }).__fakeStyles = {
      position: 'relative',
    };

    expect(findOffsetParent(fakeDiv as unknown as HTMLElement)).toBe(document.documentElement);
  });
});
