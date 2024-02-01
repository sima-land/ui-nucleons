import { it, expect, describe, beforeEach, jest } from '@jest/globals';
import { act, render } from '@testing-library/react';
import { Timer } from '..';
import { addDays, addSeconds } from 'date-fns';

jest.useFakeTimers();
jest.spyOn(global, 'clearInterval');

beforeEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
  jest.setSystemTime(new Date('2020-01-01'));
});

describe('Timer', () => {
  it('should handle props', () => {
    const { container } = render(
      <Timer
        date={addDays(new Date('2020-01-01'), 1).toISOString()}
        timeout={500}
        format={({ days }) => `Осталось дней: ${days}`}
      />,
    );

    expect(container.textContent).toBe('Осталось дней: 1');
  });

  it('should change time by timeout', () => {
    const { container } = render(
      <Timer
        date={addSeconds(new Date('2020-01-01'), 10).toISOString()}
        timeout={2000}
        format={({ seconds }) => `Осталось секунд: ${seconds}`}
      />,
    );
    expect(container.textContent).toBe('Осталось секунд: 10');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(container.textContent).toBe('Осталось секунд: 10');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(container.textContent).toBe('Осталось секунд: 8');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(container.textContent).toBe('Осталось секунд: 8');

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(container.textContent).toBe('Осталось секунд: 6');
  });

  it('should reset interval on unmount', () => {
    const { unmount } = render(<Timer date='30' />);

    expect(clearInterval).toHaveBeenCalledTimes(0);

    unmount();

    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
});
