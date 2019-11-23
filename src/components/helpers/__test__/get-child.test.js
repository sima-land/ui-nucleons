import getChild from '../get-child';

describe('getChild()', () => {
  it('should return child', () => {
    const parent = document.createElement('div');
    const child1 = document.createElement('span');
    const child2 = document.createElement('span');
    const child3 = document.createElement('span');

    parent.append(child1, child2, child3);

    expect(getChild(parent)).toBe(child1);
    expect(getChild(parent, 0)).toBe(child1);
    expect(getChild(parent, 1)).toBe(child2);
    expect(getChild(parent, 2)).toBe(child3);
    expect(getChild(parent, 3)).toBe(undefined);
    expect(getChild()).toBe(undefined);
  });
});
