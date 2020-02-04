import getDateIntervalData from '../get-date-interval-data';

describe('test getDateIntervalData', () => {
  let result;
  it('getDateIntervalData() returns object with interval date', () => {
    result = getDateIntervalData('2018-03-03', '2018-04-02');
    expect(result).toEqual({
      date: '3 марта - 2 апреля',
      isInterval: true,
    });
    result = getDateIntervalData('2018-03-03', '2018-03-12');
    expect(result).toEqual({
      date: '3 - 12 марта',
      isInterval: true,
    });
  });
  it('getDateIntervalData() returns object with not interval date', () => {
    result = getDateIntervalData('2018-03-03');
    expect(result).toEqual({
      date: '3 марта',
      isInterval: false,
    });
  });
  it('getDateIntervalData() returns empty object if wrong data have been passed', () => {
    result = getDateIntervalData(null, '2018-03-03');
    expect(result).toEqual({});
    result = getDateIntervalData();
    expect(result).toEqual({});
  });
});
