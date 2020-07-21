import {
  CanPlace,
  CorrectOffset,
  getInnerRect,
  getOriginCorrection,
  PlaceOffset,
  placeTooltip,
} from '../utils';

/**
 * Создает поддельный элемент.
 * @param {Object} rect Прямоугольник.
 * @return {Object} Поддельный элемент.
 */
const FakeElement = ({
  top = 0,
  left = 0,
  width = 0,
  height = 0,
  bottom = 0,
  right = 0,
} = {}) => ({
  style: {},
  getBoundingClientRect: () => ({
    top,
    left,
    width,
    height,
    bottom,
    right,
  }),
});

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
    let holderEl = FakeElement({ right: 10 });
    let tooltipEl = FakeElement({ width: 100 });

    expect(CanPlace.onRight(holderEl, tooltipEl, testArea)).toBe(true);

    holderEl = FakeElement({ right: 10 });
    tooltipEl = FakeElement({ width: 1200 });

    expect(CanPlace.onRight(holderEl, tooltipEl, testArea)).toBe(false);
  });

  it('onLeft', () => {
    let holderEl = FakeElement({ left: 400 });
    let tooltipEl = FakeElement({ width: 100 });

    expect(CanPlace.onLeft(holderEl, tooltipEl, testArea)).toBe(true);

    holderEl = FakeElement({ left: 100 });
    tooltipEl = FakeElement({ width: 100 });

    expect(CanPlace.onLeft(holderEl, tooltipEl, testArea)).toBe(false);
  });

  it('onBottom', () => {
    let holderEl = FakeElement({ bottom: 100 });
    let tooltipEl = FakeElement({ height: 100 });

    expect(CanPlace.onBottom(holderEl, tooltipEl, testArea)).toBe(true);

    holderEl = FakeElement({ bottom: 900 });
    tooltipEl = FakeElement({ height: 100 });

    expect(CanPlace.onBottom(holderEl, tooltipEl, testArea)).toBe(false);
  });

  it('onTop', () => {
    let holderEl = FakeElement({ bottom: 500 });
    let tooltipEl = FakeElement({ height: 100 });

    expect(CanPlace.onTop(holderEl, tooltipEl, testArea)).toBe(true);

    holderEl = FakeElement({ bottom: 100 });
    tooltipEl = FakeElement({ height: 100 });

    expect(CanPlace.onTop(holderEl, tooltipEl, testArea)).toBe(false);
  });
});

describe('PlaceOffset', () => {
  const realOffset = { x: window.pageXOffset, y: pageYOffset };

  const actualDescriptor = {
    ...Object.getOwnPropertyDescriptor(window, 'getComputedStyle'),
  };

  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: el => el.__fakeStyles || actualDescriptor.value(el),
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'getComputedStyle', actualDescriptor);
  });

  afterEach(() => {
    window.pageXOffset = realOffset.x;
    window.pageYOffset = realOffset.y;
  });

  it('reset', () => {
    const fakeElement = { style: {} };

    PlaceOffset.reset(fakeElement);

    expect(fakeElement.style).toStrictEqual({
      top: null,
      left: null,
      bottom: null,
      right: null,
    });
  });

  it('onRight', () => {
    const holderEl = FakeElement({ left: 40, width: 80, right: 120 });
    const tooltipEl = FakeElement();

    window.pageXOffset = 200;

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    document.documentElement.__fakeStyles = { position: 'static' };

    const result = PlaceOffset.onRight(tooltipEl, holderEl);

    expect(result).toEqual(328);
  });

  it('onLeft', () => {
    const holderEl = FakeElement({ left: 40, width: 80 });
    const tooltipEl = FakeElement();

    window.pageXOffset = 400;

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    document.documentElement.__fakeStyles = { position: 'static' };

    const result = PlaceOffset.onLeft(tooltipEl, holderEl);

    expect(result).toEqual(432);
  });

  it('onBottom', () => {
    const holderEl = FakeElement({ top: 10, height: 20, bottom: 30 });
    const tooltipEl = FakeElement();

    window.pageYOffset = 100;

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    document.documentElement.__fakeStyles = { position: 'static' };

    const result = PlaceOffset.onBottom(tooltipEl, holderEl);

    expect(result).toEqual(138);
  });

  it('onTop', () => {
    const holderEl = FakeElement({ top: 200, height: 20, bottom: 220 });
    const tooltipEl = FakeElement({ height: 120 });

    window.pageYOffset = 300;

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    document.documentElement.__fakeStyles = { position: 'static' };

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
      value: el => el.__fakeStyles || actualDescriptor.value(el),
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
    y: pageYOffset,
  };

  afterEach(() => {
    window.pageXOffset = realOffset.x;
    window.pageYOffset = realOffset.y;
  });

  it('vertically', () => {
    let holderEl = FakeElement({ top: 80, bottom: 100 });
    let tooltipEl = FakeElement({ height: 120 });

    window.pageYOffset = 300;

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    document.documentElement.__fakeStyles = { position: 'static' };

    let result = CorrectOffset.vertically(tooltipEl, holderEl, testArea);

    expect(result).toEqual(380);

    // second case
    holderEl = FakeElement({ top: 980, bottom: 990 });
    tooltipEl = FakeElement({ height: 200 });

    window.pageYOffset = 0;

    result = CorrectOffset.vertically(tooltipEl, holderEl, testArea);

    expect(result).toEqual(790);

    // third case
    holderEl = FakeElement({ top: 10, bottom: 990 });
    tooltipEl = FakeElement({ height: 1000 });

    result = CorrectOffset.vertically(tooltipEl, holderEl, testArea);

    expect(result).toEqual(16);
  });

  it('horizontally', () => {
    const tooltipEl = FakeElement({ height: 120 });

    tooltipEl.offsetParent = { __fakeStyles: { position: 'static' } };
    document.documentElement.__fakeStyles = { position: 'static' };

    const result = CorrectOffset.horizontally(tooltipEl, testArea);

    expect(result).toEqual(984);
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
    });
  });

  it('should place on right', () => {
    const holderEl = FakeElement({ width: 10, height: 980, left: 10, right: 20, top: 10, bottom: 990 });
    const tooltipEl = FakeElement({ width: 100, height: 100 });

    placeTooltip(tooltipEl, holderEl);

    expect(tooltipEl.style.transform).toEqual('translate3d(28px, 890px, 0)');
  });

  it('should place on left', () => {
    const holderEl = FakeElement({ width: 10, height: 980, left: 980, right: 990, top: 10, bottom: 990 });
    const tooltipEl = FakeElement({ width: 100, height: 100 });

    placeTooltip(tooltipEl, holderEl);

    expect(tooltipEl.style.transform).toEqual('translate3d(872px, 890px, 0)');
  });

  it('should place on bottom', () => {
    const holderEl = FakeElement({ width: 980, height: 10, left: 10, right: 990, top: 10, bottom: 20 });
    const tooltipEl = FakeElement({ height: 100, width: 100 });

    placeTooltip(tooltipEl, holderEl);

    expect(tooltipEl.style.transform).toEqual('translate3d(884px, 28px, 0)');
  });

  it('should place on top', () => {
    const holderEl = FakeElement({ width: 980, height: 10, left: 10, right: 990, top: 980, bottom: 990 });
    const tooltipEl = FakeElement({ height: 100, width: 100 });

    placeTooltip(tooltipEl, holderEl);

    expect(tooltipEl.style.transform).toEqual('translate3d(884px, 872px, 0)');
  });

  it('should do nothing when tooltip or holder is not defined', () => {
    const holderEl = FakeElement();
    const tooltipEl = FakeElement();

    placeTooltip(null, holderEl);
    placeTooltip(tooltipEl, null);
  });
});

describe('getOriginCorrection', () => {
  const realOffset = { x: window.pageXOffset, y: pageYOffset };

  const actualDescriptor = {
    ...Object.getOwnPropertyDescriptor(window, 'getComputedStyle'),
  };

  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: el => el.__fakeStyles || actualDescriptor.value(el),
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'getComputedStyle', actualDescriptor);
  });

  afterEach(() => {
    window.pageXOffset = realOffset.x;
    window.pageYOffset = realOffset.y;
  });

  it('should work without offsetParent', () => {
    const testDiv = {
      offsetParent: null,
      parentElement: { __fakeStyles: { overflow: 'auto' } },
    };

    document.body.__fakeStyles = { position: 'static' };
    document.documentElement.__fakeStyles = { position: 'static' };

    window.pageXOffset = 100;
    window.pageYOffset = 200;

    expect(getOriginCorrection(testDiv)).toEqual({ x: 100, y: 200 });
  });

  it('should work with offsetParent that is equal to scrollParent', () => {
    const testParent = {
      getBoundingClientRect: () => ({ top: 200, left: 200 }),
      __fakeStyles: {
        position: 'relative',
        borderLeftWidth: '30px',
        borderTopWidth: '40px',
        overflowY: 'auto',
      },
      scrollTop: 300,
      scrollLeft: 300,
    };

    const testDiv = {
      offsetParent: testParent,
      parentElement: testParent,
    };

    window.pageXOffset = 120;
    window.pageYOffset = 230;

    expect(getOriginCorrection(testDiv)).toEqual({ x: 70, y: 60 });
  });
});

describe('getInnerRect', () => {
  it('should correct when scrollWidth/scrollHeight greater than bounds', () => {
    const testDiv = FakeElement({
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
