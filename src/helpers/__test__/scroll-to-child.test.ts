import { scrollToChild } from '../scroll-to-child';

const makeRectangleMock = jest.fn((left, top, width, height) => ({
  left,
  top,
  right: left + width,
  bottom: top + height,
}));

const getBoundingClientRect = makeRectangleMock;

describe('scrollToChild', () => {
  let child;
  let parent;

  it('test scrollToChild if childRect.bottom >/< parentRect.bottom', () => {
    child = document.createElement('div');
    parent = document.createElement('div');

    parent.getBoundingClientRect = jest.fn(() =>
      getBoundingClientRect(20, 20, 20, 20),
    ) as unknown as () => DOMRect;
    child.getBoundingClientRect = jest.fn(() =>
      getBoundingClientRect(10, 10, 10, 10),
    ) as unknown as () => DOMRect;

    scrollToChild(parent, child);

    parent.getBoundingClientRect = jest.fn(() =>
      getBoundingClientRect(20, 20, 20, 20),
    ) as unknown as () => DOMRect;
    child.getBoundingClientRect = jest.fn(() =>
      getBoundingClientRect(110, 110, 110, 110),
    ) as unknown as () => DOMRect;

    scrollToChild(parent, child);

    expect(parent.getBoundingClientRect).toHaveBeenCalled();
    expect(child.getBoundingClientRect).toHaveBeenCalled();
  });

  it('test scrollToChild if isInsideRect', () => {
    child = document.createElement('div');
    parent = document.createElement('div');

    parent.getBoundingClientRect = jest.fn(() =>
      getBoundingClientRect(0, 0, 150, 150),
    ) as unknown as () => DOMRect;
    child.getBoundingClientRect = jest.fn(() =>
      getBoundingClientRect(0, 0, 100, 100),
    ) as unknown as () => DOMRect;

    scrollToChild(parent, child);

    expect(parent.getBoundingClientRect).toHaveBeenCalled();
    expect(child.getBoundingClientRect).toHaveBeenCalled();
  });
});
