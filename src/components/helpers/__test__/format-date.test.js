import formatDate, { createDateFormatter } from '../format-date';

describe('formatDate()', () => {
  it('returns empty string if have been passed wrong params', () => {
    let date = formatDate();
    expect(date).toBe('');
    date = formatDate('2014*83');
    expect(date).toBe('');
    date = formatDate('2019-15-03');
    expect(date).toBe('');
  });
  it('returns correct date with default formats', () => {
    const date = formatDate('2014-02-03');
    expect(date).toBe('03 февраля 2014');
  });
});

describe('createDateFormatter', () => {
  it('works with default format', () => {
    const date = createDateFormatter()('2019-01-03');
    expect(date).toBe('03 января 2019');
  });
  it('returns correct date with custom formats', () => {
    let date = createDateFormatter('YYYY-DD-MM', 'Do MMMM')('2014-02-03');
    expect(date).toBe('2-го марта');
    date = createDateFormatter('YYYY-MM-DD', 'Do MMMM')('2014-02-03');
    expect(date).toBe('3-го февраля');
    date = createDateFormatter('YYYY-MM-DD', 'dddd: D MMM')('2014-02-03');
    expect(date).toBe('понедельник: 3 февр.');
  });
  it('should handle function as second argument', () => {
    const spy = jest.fn(moment => moment.isValid() && 'DD.MM');
    const date = createDateFormatter('YYYY-MM-DD', spy)('2014-02-03');
    expect(date).toBe('03.02');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].format('YYYY.MM.DD')).toBe('2014.02.03');
  });
});
