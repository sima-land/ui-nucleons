import { getTimeDurationToNow } from '../helper';
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

describe('getTimeDurationToNow', () => {
  it('should return formatted time', () => {
    const targetDate = addMonths(new Date(), 11);
    const result = getTimeDurationToNow(targetDate.toISOString());

    expect(result).toEqual('2:02:02:02');
    expect(formatDistanceToNowStrict).toHaveBeenCalledTimes(4);
  });

  it('should return zero time', () => {
    const targetDate = subMonths(new Date(), 10);
    const result = getTimeDurationToNow(targetDate.toISOString());

    expect(result).toEqual('0:00:00:00');
  });
});
