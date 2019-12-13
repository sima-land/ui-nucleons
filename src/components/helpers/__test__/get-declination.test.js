import getDeclination, { getDeclinationByUnit } from '../get-declination';

describe('test getDeclination', () => {
  const values = ['отзыв', 'отзыва', 'отзывов'];
  it('getDeclination() works properly', () => {
    expect(getDeclination(1, values)).toEqual('отзыв');
    expect(getDeclination(-1, values)).toEqual('отзыв');
    expect(getDeclination(3, values)).toEqual('отзыва');
    expect(getDeclination(-3, values)).toEqual('отзыва');
    expect(getDeclination(5, values)).toEqual('отзывов');
    expect(getDeclination(-5, values)).toEqual('отзывов');
    expect(getDeclination(28, values)).toEqual('отзывов');
    expect(getDeclination(-28, values)).toEqual('отзывов');
    expect(getDeclination(5210, values)).toEqual('отзывов');
  });
});

describe('test getDeclinationByUnit', () => {
  const unit = {
    name: 'набор',
    name_for_few: 'набора',
    name_for_many: 'наборов',
  };
  it('getDeclinationByUnit() works properly', () => {
    expect(getDeclinationByUnit(1, unit)).toEqual('набор');
    expect(getDeclinationByUnit(3, unit)).toEqual('набора');
    expect(getDeclinationByUnit(5, unit)).toEqual('наборов');
    expect(getDeclinationByUnit(5, { name: unit.name })).toEqual('набор');
    expect(getDeclinationByUnit(5)).toEqual('');
  });
});
