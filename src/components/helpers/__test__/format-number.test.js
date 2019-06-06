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
});

