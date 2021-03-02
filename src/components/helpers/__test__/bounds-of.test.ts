import boundsOf from '../bounds-of';

describe('boundsOf()', () => {
  it('should return null', () => {
    expect(boundsOf(undefined)).toBe(null);
  });

  it('should return result of getBoundingClientRect() method', () => {
    const testElem = document.createElement('div');
    const testRect = testElem.getBoundingClientRect();

    jest.spyOn(testElem, 'getBoundingClientRect').mockReturnValue(testRect);

    expect(boundsOf(testElem)).toBe(testElem.getBoundingClientRect());
  });
});
