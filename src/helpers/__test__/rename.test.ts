import { rename } from '../rename';

describe('rename()', () => {
  const testObject = Object.freeze({ a: 1, b: 2, c: 3 });

  it('should rename prop', () => {
    expect(rename('a', 'Aa', testObject)).toEqual({ Aa: 1, b: 2, c: 3 });
  });
});
