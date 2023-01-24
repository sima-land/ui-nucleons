import { getEventClientPos, isMainMouseButton, isTouchEvent, triggerInput } from '../events';
import Point from '../point';

describe('isTouchEvent', () => {
  it('should works properly', () => {
    expect(isTouchEvent(null)).toBe(false);
    expect(isTouchEvent(new Event('click'))).toBe(false);
    expect(isTouchEvent(new TouchEvent('touchstart'))).toBe(true);
  });
});

describe('isMainMouseButton', () => {
  it('should works properly', () => {
    expect(isMainMouseButton(null)).toBe(false);
    expect(isMainMouseButton(new Event('click'))).toBe(false);
    expect(isMainMouseButton(new MouseEvent('click', { button: 0 }))).toBe(true);
  });
});

describe('getEventClientPos', () => {
  it('should works properly', () => {
    expect(getEventClientPos(new MouseEvent('click', { clientX: 12, clientY: 23 }))).toEqual(
      Point(12, 23),
    );
    expect(
      getEventClientPos(
        new TouchEvent('click', { touches: [{ clientX: 34, clientY: 45 } as Touch] }),
      ),
    ).toEqual(Point(34, 45));
    expect(getEventClientPos(new TouchEvent('click', { touches: [] }))).toEqual(Point(0, 0));
  });
});

describe('triggerInput', () => {
  it('should do nothing when element is invalid', () => {
    expect(() => {
      triggerInput(null as unknown as HTMLInputElement, 'foo');
      triggerInput(document.createElement('div') as unknown as HTMLTextAreaElement, 'bar');
    }).not.toThrow();
  });

  it('should do nothing when descriptor is undefined', () => {
    const element = document.createElement('input');
    const originalDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');

    if (!originalDescriptor) {
      throw Error('Descriptor of "value" property not found');
    }

    Object.defineProperty(HTMLInputElement.prototype, 'value', {
      value: 'Some value',
    });
    delete (HTMLInputElement.prototype as any).value;

    expect(element instanceof HTMLInputElement).toBe(true);
    expect(() => triggerInput(element, 'Some other value')).not.toThrow();

    Object.defineProperty(HTMLInputElement.prototype, 'value', originalDescriptor);
  });

  it('should dispatch "input" event', () => {
    const spy = jest.fn();
    const element = document.createElement('input');

    element.addEventListener('input', spy);

    expect(spy).toHaveBeenCalledTimes(0);
    triggerInput(element, 'Some value');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
