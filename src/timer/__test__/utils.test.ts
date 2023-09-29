import { addHours } from 'date-fns';
import { getDistanceToNow, formatDistance } from '../utils';
import subMonths from 'date-fns/subMonths';

jest.useFakeTimers();

beforeEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
  jest.setSystemTime(new Date('2020-01-01'));
});

describe('getDistanceToNow', () => {
  it('should return formatted time', () => {
    const targetDate = addHours(new Date('2020-01-01'), 11);
    const result = getDistanceToNow(targetDate.toISOString());

    expect(result).toEqual({
      days: 0,
      hours: 11,
      minutes: 660,
      seconds: 39600,
    });
  });

  it('should return zero time', () => {
    const targetDate = subMonths(new Date(), 10);
    const result = getDistanceToNow(targetDate.toISOString());

    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });
});

describe('formatDistance', () => {
  it('should format distance properly', () => {
    const days = 11;
    const hours = days * 24 + 2;
    const minutes = hours * 60 + 3;
    const seconds = minutes * 60 + 4;

    const result = formatDistance({
      days,
      hours,
      minutes,
      seconds,
    });

    expect(result).toBe('11:02:03:04');
  });
});
