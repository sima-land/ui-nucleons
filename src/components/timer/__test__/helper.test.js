import { getTimeDurationToNow } from '../helper';
import moment from 'moment';

jest.useFakeTimers();

jest.mock('moment', () => {
  const original = jest.requireActual('moment');
  const momentMock = jest.fn((endTime = 10) => endTime);
  momentMock.formatSpy = jest.fn((duration, format = 'format') => `${duration} ${format}`);
  momentMock.duration = jest.fn(duration => ({
    format: momentMock.formatSpy.bind(null, duration),
  }));
  return {
    ...original,
    __esModule: true,
    default: momentMock,
  };
});

jest.mock('moment-duration-format', () => jest.fn());

beforeEach(() => {
  jest.clearAllMocks();
});

describe('getTimeDurationToNow', () => {
  it('should returns default result', () => {
    const result = getTimeDurationToNow();
    expect(moment).toHaveBeenCalledTimes(2);
    expect(moment.duration).toHaveBeenCalledTimes(1);
    expect(moment.formatSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual('0 format');
  });

  it('should returns properly result', () => {
    const result = getTimeDurationToNow(50, 'custom format');
    expect(moment).toHaveBeenCalledTimes(2);
    expect(moment.duration).toHaveBeenCalledTimes(1);
    expect(moment.formatSpy).toHaveBeenCalledTimes(1);
    expect(result).toEqual('40 custom format');
  });
});
