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

    parent.getBoundingClientRect = jest.fn(() => getBoundingClientRect(20, 20, 20, 20));
    child.getBoundingClientRect = jest.fn(() => getBoundingClientRect(10, 10, 10, 10));

    scrollToChild(parent, child);

    parent.getBoundingClientRect = jest.fn(() => getBoundingClientRect(20, 20, 20, 20));
    child.getBoundingClientRect = jest.fn(() => getBoundingClientRect(110, 110, 110, 110));

    scrollToChild(parent, child);

    expect(parent.getBoundingClientRect).toHaveBeenCalled();
    expect(child.getBoundingClientRect).toHaveBeenCalled();
  });

  it('test scrollToChild if isInsideRect', () => {
    child = document.createElement('div');
    parent = document.createElement('div');

    parent.getBoundingClientRect = jest.fn(() => getBoundingClientRect(0, 0, 150, 150));
    child.getBoundingClientRect = jest.fn(() => getBoundingClientRect(0, 0, 100, 100));

    scrollToChild(parent, child);

    expect(parent.getBoundingClientRect).toHaveBeenCalled();
    expect(child.getBoundingClientRect).toHaveBeenCalled();
  });
});
