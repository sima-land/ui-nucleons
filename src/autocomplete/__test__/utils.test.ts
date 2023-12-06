import { NaiveSyntheticEvent, when } from '../utils';

describe('NaiveSyntheticEvent', () => {
  it('should implement "persist" method', () => {
    const target = document.createElement('div');
    const nativeEvent = new Event('fake');
    const event = new NaiveSyntheticEvent(nativeEvent, target);

    expect(() => event.persist()).not.toThrow();
  });

  it('should implement "stopPropagation" method', () => {
    const target = document.createElement('div');
    const nativeEvent = new Event('fake');
    jest.spyOn(nativeEvent, 'stopPropagation');

    const event = new NaiveSyntheticEvent(nativeEvent, target);

    expect(nativeEvent.stopPropagation).toHaveBeenCalledTimes(0);
    event.stopPropagation();
    expect(nativeEvent.stopPropagation).toHaveBeenCalledTimes(1);
  });

  it('should implement "isPropagationStopped" method', () => {
    const target = document.createElement('div');
    const nativeEvent = new Event('fake');
    const event = new NaiveSyntheticEvent(nativeEvent, target);

    expect(event.isPropagationStopped()).toBe(false);
  });

  it('should implement "preventDefault" method', () => {
    const target = document.createElement('div');
    const nativeEvent = new Event('fake', { cancelable: true });
    const event = new NaiveSyntheticEvent(nativeEvent, target);

    expect(nativeEvent.defaultPrevented).toBe(false);
    expect(event.defaultPrevented).toBe(false);

    event.preventDefault();
    expect(nativeEvent.defaultPrevented).toBe(true);
    expect(event.defaultPrevented).toBe(true);
  });

  it('should implement "isDefaultPrevented" method', () => {
    const target = document.createElement('div');
    const nativeEvent = new Event('fake', { cancelable: true });
    const event = new NaiveSyntheticEvent(nativeEvent, target);

    expect(event.isDefaultPrevented()).toBe(false);
    event.preventDefault();
    expect(event.isDefaultPrevented()).toBe(true);
  });
});

describe('when', () => {
  it('should call function when value is non nullable', () => {
    const double = jest.fn((count: number) => count * 2);
    expect(double).toHaveBeenCalledTimes(0);

    expect(when(1, double)).toBe(2);
    expect(double).toHaveBeenCalledTimes(1);

    expect(when(3, double)).toBe(6);
    expect(double).toHaveBeenCalledTimes(2);

    expect(when(null, double)).toBe(undefined);
    expect(double).toHaveBeenCalledTimes(2);

    expect(when(undefined, double)).toBe(undefined);
    expect(double).toHaveBeenCalledTimes(2);
  });
});
