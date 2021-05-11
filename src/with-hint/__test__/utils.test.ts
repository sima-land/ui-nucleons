import { PlaceAt } from '../utils';

class FakeDOMRect {
  x: number;
  y: number;
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;

  constructor (x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.left = x;
    this.top = y;
    this.right = x + w;
    this.bottom = y + h;
  }
}

describe('PlaceAt', () => {
  class FakeHTMLElement {
    style: Record<string, any>;
    bounds: FakeDOMRect;

    constructor (...args: ConstructorParameters<typeof FakeDOMRect>) {
      this.style = {};
      this.bounds = new FakeDOMRect(...args);
    }

    getBoundingClientRect () {
      return this.bounds;
    }
  }

  it('top', () => {
    const hint = new FakeHTMLElement(0, 0, 20, 20);
    const opener = new FakeHTMLElement(100, 100, 20, 20);

    PlaceAt.top(hint as any, opener as any);

    expect(hint.style.left).toBe('100px');
    expect(hint.style.top).toBe('76px');
  });

  it('right', () => {
    const hint = new FakeHTMLElement(0, 0, 20, 20);
    const opener = new FakeHTMLElement(100, 100, 20, 20);

    PlaceAt.right(hint as any, opener as any);

    expect(hint.style.left).toBe('124px');
    expect(hint.style.top).toBe('100px');
  });

  it('bottom', () => {
    const hint = new FakeHTMLElement(0, 0, 20, 20);
    const opener = new FakeHTMLElement(100, 100, 20, 20);

    PlaceAt.bottom(hint as any, opener as any);

    expect(hint.style.left).toBe('100px');
    expect(hint.style.top).toBe('124px');
  });

  it('left', () => {
    const hint = new FakeHTMLElement(0, 0, 20, 20);
    const opener = new FakeHTMLElement(100, 100, 20, 20);

    PlaceAt.left(hint as any, opener as any);

    expect(hint.style.left).toBe('76px');
    expect(hint.style.top).toBe('100px');
  });
});
