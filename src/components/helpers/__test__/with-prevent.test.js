import withPrevent from '../with-prevent';

describe('withPrevent()', () => {
  it('should works', () => {
    const spy = jest.fn();
    const decoratedSpy = withPrevent(spy);
    const fakeEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    };

    expect(spy).toHaveBeenCalledTimes(0);
    expect(fakeEvent.preventDefault).toHaveBeenCalledTimes(0);
    expect(fakeEvent.stopPropagation).toHaveBeenCalledTimes(0);

    decoratedSpy(fakeEvent);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(fakeEvent);
    expect(fakeEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(fakeEvent.stopPropagation).toHaveBeenCalledTimes(1);
  });
});
