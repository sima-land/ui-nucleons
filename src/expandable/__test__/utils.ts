/* eslint-disable jsdoc/require-jsdoc */

export function setBoundingClientRect(
  element: Element,
  { x = 0, y = 0, width = 0, height = 0 }: DOMRectInit,
) {
  const rect: DOMRect = {
    x,
    y,
    width,
    height,
    get top() {
      return y;
    },
    get right() {
      return x + width;
    },
    get bottom() {
      return y + height;
    },
    get left() {
      return x;
    },
    toJSON() {
      return JSON.stringify(rect);
    },
  };

  jest.spyOn(element, 'getBoundingClientRect').mockImplementation(() => rect);
}
