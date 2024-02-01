import { it, expect, describe } from '@jest/globals';
import { getDeclination } from '../get-declination';

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
