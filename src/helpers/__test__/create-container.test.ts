import { createContainer } from '../create-container';

describe('createContainer', () => {
  it('should return container', () => {
    const spy = jest.fn();
    const testContainer = createContainer(1);

    expect(testContainer.get()).toBe(1);

    testContainer.set(2);
    expect(testContainer.get()).toBe(2);

    testContainer.setObserver(spy);
    expect(spy).toHaveBeenCalledTimes(0);

    testContainer.set(3);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(3, 2);

    testContainer.set(3);
    expect(spy).toHaveBeenCalledTimes(1);

    testContainer.setObserver(null);
    testContainer.set(4);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
