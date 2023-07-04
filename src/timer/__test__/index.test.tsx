import { act, render } from '@testing-library/react';
import { getDistanceToNow } from '../utils';
import { Timer } from '..';

jest.useFakeTimers();
jest.spyOn(global, 'clearInterval');

jest.mock('../utils', () => {
  const original = jest.requireActual('../utils');

  return {
    ...original,
    __esModule: true,
    getDistanceToNow: jest.fn(() => ({ days: 1, hours: 2, minutes: 3, seconds: 4 })),
  };
});

beforeEach(() => {
  jest.clearAllTimers();
  jest.clearAllMocks();
});

describe('Timer', () => {
  it('should render properly without props', () => {
    const { container } = render(<Timer date='' />);

    expect(container).toMatchSnapshot();
  });

  it('should pass props', () => {
    const { container } = render(
      <Timer date='2030-03-08' timeout={500} format={({ days }) => `Осталось дней: ${days}`} />,
    );

    expect(container.textContent).toBe('Осталось дней: 1');
  });

  it('should change time by timeout', () => {
    render(<Timer date='2030-03-08' />);

    expect(getDistanceToNow).toHaveBeenCalledTimes(3);

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(getDistanceToNow).toHaveBeenCalledTimes(9);
  });

  it('should reset interval on unmount', () => {
    const { unmount } = render(<Timer date='30' />);

    expect(clearInterval).toHaveBeenCalledTimes(0);

    unmount();

    expect(clearInterval).toHaveBeenCalledTimes(1);
  });
});
