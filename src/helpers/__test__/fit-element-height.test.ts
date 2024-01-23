import { it, expect, describe, jest } from '@jest/globals';
import { fitElementHeight } from '../fit-element-height';

describe('fitElementHeight()', () => {
  it('should set style.height', () => {
    const spy = jest.fn();
    const fakeTarget = {
      scrollHeight: 234,
      offsetHeight: 12,
      clientHeight: 23,
      style: {
        set height(value: string | number) {
          spy(value);
          if (value === 'auto') {
            fakeTarget.scrollHeight = 123;
          }
        },
      },
    };
    const fakeEvent = { target: fakeTarget as HTMLElement };

    fitElementHeight(fakeEvent);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[0][0]).toBe('auto');
    expect(spy.mock.calls[1][0]).toBe('112px'); // 112 = 123 + 12 - 23
  });
});
