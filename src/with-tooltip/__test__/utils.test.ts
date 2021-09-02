import {
  CanPlace,
  CorrectOffset,
  getInnerRect,
  getOriginCorrection,
  PlaceOffset,
  placeTooltip,
} from '../utils';

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

  withRect: (rect: any) =>
    FakeElement.create({
      getBoundingClientRect: () => ({
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        ...rect,
      }),
    }),
};

describe('CanPlace', () => {
  const testArea = {
    top: 0,
    left: 0,
    width: 1000,
    height: 1000,
    bottom: 1000,
    right: 1000,
  };

  it('onRight', () => {
    let holderEl = FakeElement.withRect({ right: 10 }) as any;
    let tooltipEl = FakeElement.withRect({ width: 100 }) as any;

    expect(CanPlace.onRight(holderEl, tooltipEl, testArea)).toBe(true);

    holderEl = FakeElement.withRect({ right: 10 });
    tooltipEl = FakeElement.withRect({ width: 1200 });

    expect(CanPlace.onRight(holderEl, tooltipEl, testArea)).toBe(false);
  });

  it('onLeft', () => {
    let holderEl = FakeElement.withRect({ left: 400 }) as any;
    let tooltipEl = FakeElement.withRect({ width: 100 }) as any;

    expect(CanPlace.onLeft(holderEl, tooltipEl, testArea)).toBe(true);

    holderEl = FakeElement.withRect({ left: 100 });
    tooltipEl = FakeElement.withRect({ width: 100 });

    expect(CanPlace.onLeft(holderEl, tooltipEl, testArea)).toBe(false);
  });

  it('onBottom', () => {
    let holderEl = FakeElement.withRect({ bottom: 100 }) as any;
    let tooltipEl = FakeElement.withRect({ height: 100 }) as any;

    expect(CanPlace.onBottom(holderEl, tooltipEl, testArea)).toBe(true);

    holderEl = FakeElement.withRect({ bottom: 900 });
    tooltipEl = FakeElement.withRect({ height: 100 });

    expect(CanPlace.onBottom(holderEl, tooltipEl, testArea)).toBe(false);
  });

  it('onTop', () => {
    let holderEl = FakeElement.withRect({ bottom: 500 }) as any;
    let tooltipEl = FakeElement.withRect({ height: 100 }) as any;

    expect(CanPlace.onTop(holderEl, tooltipEl, testArea)).toBe(true);

    holderEl = FakeElement.withRect({ bottom: 100 }) as any;
    tooltipEl = FakeElement.withRect({ height: 100 }) as any;

    expect(CanPlace.onTop(holderEl, tooltipEl, testArea)).toBe(false);
  });
});

describe('PlaceOffset', () => {
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

  it('reset', () => {
    const fakeElement = FakeElement.create();

    PlaceOffset.reset(fakeElement as any);

    expect(fakeElement.style.top).toBe('0px');
    expect(fakeElement.style.left).toBe('0px');
    expect(fakeElement.style.bottom).toBe('');
    expect(fakeElement.style.right).toBe('');
  });

  it('onRight', () => {
    const holderEl = FakeElement.withRect({ left: 40, width: 80, right: 120 }) as any;
    const tooltipEl = FakeElement.create() as any;

    (window as any).pageXOffset = 200;

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    (document.documentElement as any).__fakeStyles = { position: 'static' };

    const result = PlaceOffset.onRight(tooltipEl, holderEl);

    expect(result).toEqual(328);
  });

  it('onLeft', () => {
    const holderEl = FakeElement.withRect({ left: 40, width: 80 });
    const tooltipEl = FakeElement.create();

    (window as any).pageXOffset = 400;

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    (document.documentElement as any).__fakeStyles = { position: 'static' };

    const result = PlaceOffset.onLeft(tooltipEl, holderEl);

    expect(result).toEqual(432);
  });

  it('onBottom', () => {
    const holderEl = FakeElement.withRect({ top: 10, height: 20, bottom: 30 });
    const tooltipEl = FakeElement.create();

    (window as any).pageYOffset = 100;

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    (document.documentElement as any).__fakeStyles = { position: 'static' };

    const result = PlaceOffset.onBottom(tooltipEl, holderEl);

    expect(result).toEqual(138);
  });

  it('onTop', () => {
    const holderEl = FakeElement.withRect({ top: 200, height: 20, bottom: 220 });
    const tooltipEl = FakeElement.withRect({ height: 120 });

    (window as any).pageYOffset = 300;

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    (document.documentElement as any).__fakeStyles = { position: 'static' };

    const result = PlaceOffset.onBottom(tooltipEl, holderEl);

    expect(result).toEqual(528);
  });
});

describe('Correct', () => {
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

  const testArea = {
    top: 0,
    left: 0,
    width: 1000,
    height: 1000,
    bottom: 1000,
    right: 1000,
  };

  const realOffset = {
    x: window.pageXOffset,
    y: window.pageYOffset,
  };

  afterEach(() => {
    (window as any).pageXOffset = realOffset.x;
    (window as any).pageYOffset = realOffset.y;
  });

  it('vertically', () => {
    let holderEl = FakeElement.withRect({ top: 80, bottom: 100 });
    let tooltipEl = FakeElement.withRect({ height: 120 });

    (window as any).pageYOffset = 300;

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    (document.documentElement as any).__fakeStyles = { position: 'static' };

    let result = CorrectOffset.vertically(tooltipEl, holderEl, testArea);

    expect(result).toEqual(380);

    // second case
    holderEl = FakeElement.withRect({ top: 980, bottom: 990 });
    tooltipEl = FakeElement.withRect({ height: 200 });

    (window as any).pageYOffset = 0;

    result = CorrectOffset.vertically(tooltipEl, holderEl, testArea);

    expect(result).toEqual(790);

    // third case
    holderEl = FakeElement.withRect({ top: 10, bottom: 990 });
    tooltipEl = FakeElement.withRect({ height: 1000 });

    result = CorrectOffset.vertically(tooltipEl, holderEl, testArea);

    expect(result).toEqual(16);
  });

  it('horizontally', () => {
    const tooltipEl = FakeElement.withRect({ height: 120 });

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    (document.documentElement as any).__fakeStyles = { position: 'static' };

    const result = CorrectOffset.horizontally(tooltipEl, testArea);

    expect(result).toEqual(16);
  });
});

describe('placeTooltip', () => {
  beforeAll(() => {
    jest.spyOn(document.body, 'getBoundingClientRect').mockReturnValue({
      top: 0,
      left: 0,
      width: 1000,
      height: 1000,
      bottom: 1000,
      right: 1000,
    } as any);
  });

  it('should place on right', () => {
    const holderEl = FakeElement.withRect({
      width: 10,
      height: 980,
      left: 10,
      right: 20,
      top: 10,
      bottom: 990,
    });
    const tooltipEl = FakeElement.withRect({ width: 100, height: 100 });

    placeTooltip(tooltipEl, holderEl);

    expect(tooltipEl.style.transform).toEqual('translate3d(28px, 890px, 0)');
  });

  it('should place on left', () => {
    const holderEl = FakeElement.withRect({
      width: 10,
      height: 980,
      left: 980,
      right: 990,
      top: 10,
      bottom: 990,
    });
    const tooltipEl = FakeElement.withRect({ width: 100, height: 100 });

    placeTooltip(tooltipEl, holderEl);

    expect(tooltipEl.style.transform).toEqual('translate3d(872px, 890px, 0)');
  });

  it('should place on bottom', () => {
    const holderEl = FakeElement.withRect({
      width: 980,
      height: 10,
      left: 10,
      right: 990,
      top: 10,
      bottom: 20,
    });
    const tooltipEl = FakeElement.withRect({ height: 100, width: 100 });

    placeTooltip(tooltipEl, holderEl);

    expect(tooltipEl.style.transform).toEqual('translate3d(16px, 28px, 0)');
  });

  it('should place on top', () => {
    const holderEl = FakeElement.withRect({
      width: 980,
      height: 10,
      left: 10,
      right: 990,
      top: 980,
      bottom: 990,
    });
    const tooltipEl = FakeElement.withRect({ height: 100, width: 100 });

    placeTooltip(tooltipEl, holderEl);

    expect(tooltipEl.style.transform).toEqual('translate3d(16px, 872px, 0)');
  });

  it('should do nothing when tooltip or holder is not defined', () => {
    const holderEl = FakeElement.create();
    const tooltipEl = FakeElement.create();

    expect(() => {
      placeTooltip(null as any, holderEl);
      placeTooltip(tooltipEl, null as any);
    }).not.toThrow();
  });
});

describe('getOriginCorrection', () => {
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

    expect(getOriginCorrection(testDiv as any)).toEqual({ x: 100, y: 200 });
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

    expect(getOriginCorrection(testDiv as any)).toEqual({ x: 70, y: 60 });
  });
});

describe('getInnerRect', () => {
  it('should correct when scrollWidth/scrollHeight greater than bounds', () => {
    const testDiv = FakeElement.withRect({
      left: 10,
      width: 100,
      right: 110,
      top: 10,
      height: 100,
      bottom: 110,
    });

    testDiv.scrollLeft = 20;
    testDiv.scrollWidth = 200;
    testDiv.scrollTop = 20;
    testDiv.scrollHeight = 200;

    expect(getInnerRect(testDiv)).toEqual({
      bottom: 190,
      height: 200,
      left: -10,
      right: 190,
      top: -10,
      width: 200,
    });
  });
});
