/** */
export class DOMRectReadOnlyMock implements DOMRectReadOnly {
  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/bottom). */
  readonly bottom: number;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/height). */
  readonly height: number;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/left). */
  readonly left: number;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/right). */
  readonly right: number;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/top). */
  readonly top: number;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/width). */
  readonly width: number;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/x). */
  readonly x: number;

  /** [MDN Reference](https://developer.mozilla.org/docs/Web/API/DOMRectReadOnly/y). */
  readonly y: number;

  /** @inheritdoc */
  constructor(
    x: number | undefined = 0,
    y: number | undefined = 0,
    width: number | undefined = 0,
    height: number | undefined = 0,
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = y;
    this.left = x;
    this.bottom = y + height;
    this.right = x + width;
    Object.freeze(this);
  }

  /** @inheritdoc */
  toJSON(): any {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      top: this.top,
      left: this.left,
      bottom: this.bottom,
      right: this.right,
    };
  }
}
