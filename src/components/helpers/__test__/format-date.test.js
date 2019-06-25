import formatDate, { createDateFormatter } from '../format-date';

let date;

describe('formatDate()', () => {
  it('returns empty string if have been passed wrong params', () => {
    date = formatDate();
    expect(date).toEqual('');
    date = formatDate('2014*83');
    expect(date).toEqual('');
    date = formatDate('2019-15-03');
    expect(date).toEqual('');
  });
  it('returns correct date with default formats', () => {
    date = formatDate('2014-02-03');
    expect(date).toEqual('03 февраля 2014');
  });
});

describe('createDateFormatter', () => {
  it('works with default format', () => {
    date = createDateFormatter()('2019-01-03');
    expect(date).toEqual('03 января 2019');
  });
  it('returns correct date with custom formats', () => {
    date = createDateFormatter('YYYY-DD-MM', 'Do MMMM')('2014-02-03');
    expect(date).toEqual('2-го марта');
    date = createDateFormatter('YYYY-MM-DD', 'Do MMMM')('2014-02-03');
    expect(date).toEqual('3-го февраля');
    date = createDateFormatter('YYYY-MM-DD', 'dddd: D MMM')('2014-02-03');
    expect(date).toEqual('понедельник: 3 февр.');
  });
});
