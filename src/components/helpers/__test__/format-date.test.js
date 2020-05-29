import { formatDate, createDateFormatter } from '../format-date';
import isValid from 'date-fns/isValid';

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

describe('createDateFormatter()', () => {
  it('works with default format', () => {
    const date = createDateFormatter()('2019-01-03');
    expect(date).toBe('03 января 2019');
  });

  it('returns correct date with custom formats', () => {
    let date = createDateFormatter({
      formatFrom: 'yyyy-dd-MM',
      formatTo: 'do MMMM',
    })('2014-02-03');
    expect(date).toBe('2-е марта');

    date = createDateFormatter({
      formatFrom: 'yyyy-MM-dd',
      formatTo: 'do MMMM',
    })('2014-02-03');
    expect(date).toBe('3-е февраля');

    date = createDateFormatter({
      formatFrom: 'yyyy-MM-dd',
      formatTo: 'EEEE: d MMM',
    })('2014-02-03');
    expect(date).toBe('понедельник: 3 фев.');
  });

  it('should handle function as second argument', () => {
    const spy = jest.fn(date => isValid(date) && 'dd.MM');
    const date = createDateFormatter({
      formatFrom: 'yyyy-MM-dd',
      formatTo: spy,
    })('2014-02-03');

    expect(date).toBe('03.02');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple formats', () => {
    const formatter = createDateFormatter({
      formatFrom: ['yyyy/MM/dd', 'dd.MM.yyyy'],
      formatTo: 'dd MM yyyy',
    });

    expect(formatter('2003/02/21')).toBe('21 02 2003');
    expect(formatter('21.02.2003')).toBe('21 02 2003');
  });
});
