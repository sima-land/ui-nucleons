import { formatNumber } from '../format-number';

describe('test formatNumber', () => {
  let number;
  it('formatNumber() works properly', () => {
    number = formatNumber(100.55, ' ');
    expect(number).toEqual(['100', '55']);
    number = formatNumber(123456789.34475484);
    expect(number).toEqual(['123 456 789', '34']);
    number = formatNumber(123456789.34475484, '.');
    expect(number).toEqual(['123.456.789', '34']);
  });
  it('formatNumber() works properly if gets NaN', () => {
    number = formatNumber('test', ' ');
    expect(number).toEqual([]);
    number = formatNumber(0.001);
    expect(number).toEqual(['0', '0010']);
  });
});

