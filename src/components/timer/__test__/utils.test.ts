import { getDistanceToNow, formatDistance } from '../utils';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

jest.mock('date-fns/formatDistanceToNowStrict', () => ({
  __esModule: true,
  default: jest.fn(() => '2'),
}));

jest.useFakeTimers();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('getDistanceToNow', () => {
  it('should return formatted time', () => {
    const targetDate = addMonths(new Date(), 11);
    const result = getDistanceToNow(targetDate.toISOString());

    expect(result).toEqual({
      days: 2,
      hours: 2,
      minutes: 2,
      seconds: 2,
    });
    expect(formatDistanceToNowStrict).toHaveBeenCalledTimes(4);
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
    const hours = (days * 24) + 2;
    const minutes = (hours * 60) + 3;
    const seconds = (minutes * 60) + 4;

    const result = formatDistance({
      days,
      hours,
      minutes,
      seconds,
    });

    expect(result).toBe('11:02:03:04');
  });
});
