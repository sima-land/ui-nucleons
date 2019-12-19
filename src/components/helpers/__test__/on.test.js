import on from '../on';

describe('on()', () => {
  it('should add event listener', () => {
    const spy = jest.fn();
    const div = document.createElement('div');

    const unsubscribe = on(div, 'click', spy);

    expect(spy).toHaveBeenCalledTimes(0);
    div.dispatchEvent(new MouseEvent('click'));
    expect(spy).toHaveBeenCalledTimes(1);

    unsubscribe();
    div.dispatchEvent(new MouseEvent('click'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
