import { getPaginationItems } from '../utils';

describe('getPaginationItems', () => {
  it('should handle option arrows: true', () => {
    const result = getPaginationItems({ total: 50, current: 20 }, { arrows: true });

    expect(result).toEqual([
      { type: 'prev', value: 19 },

      { type: 'page', value: 1 },
      { type: 'more', value: 18 },
      { type: 'page', value: 19 },
      { type: 'page', value: 20 },
      { type: 'page', value: 21 },
      { type: 'more', value: 22 },
      { type: 'page', value: 50 },

      { type: 'next', value: 21 },
    ]);
  });

  it('should handle option arrows: true when in start of range', () => {
    const result = getPaginationItems({ total: 50, current: 1 }, { arrows: true });

    expect(result).toEqual([
      { type: 'prev', value: 1 },

      { type: 'page', value: 1 },
      { type: 'page', value: 2 },
      { type: 'page', value: 3 },
      { type: 'page', value: 4 },
      { type: 'page', value: 5 },
      { type: 'more', value: 6 },
      { type: 'page', value: 50 },

      { type: 'next', value: 2 },
    ]);
  });

  it('should handle option arrows: true when in end of range', () => {
    const result = getPaginationItems({ total: 50, current: 50 }, { arrows: true });

    expect(result).toEqual([
      { type: 'prev', value: 49 },

      { type: 'page', value: 1 },
      { type: 'more', value: 45 },
      { type: 'page', value: 46 },
      { type: 'page', value: 47 },
      { type: 'page', value: 48 },
      { type: 'page', value: 49 },
      { type: 'page', value: 50 },

      { type: 'next', value: 50 },
    ]);
  });

  it('should handle option arrows: "active"', () => {
    const result = getPaginationItems({ total: 50, current: 25 }, { arrows: 'active' });

    expect(result).toEqual([
      { type: 'prev', value: 24 },

      { type: 'page', value: 1 },
      { type: 'more', value: 23 },
      { type: 'page', value: 24 },
      { type: 'page', value: 25 },
      { type: 'page', value: 26 },
      { type: 'more', value: 27 },
      { type: 'page', value: 50 },

      { type: 'next', value: 26 },
    ]);
  });

  it('should handle option arrows: "active" when in start of range', () => {
    const result = getPaginationItems({ total: 50, current: 1 }, { arrows: 'active' });

    expect(result).toEqual([
      { type: 'page', value: 1 },
      { type: 'page', value: 2 },
      { type: 'page', value: 3 },
      { type: 'page', value: 4 },
      { type: 'page', value: 5 },
      { type: 'more', value: 6 },
      { type: 'page', value: 50 },

      { type: 'next', value: 2 },
    ]);
  });

  it('should handle option arrows: "active" when in end of range', () => {
    const result = getPaginationItems({ total: 50, current: 50 }, { arrows: 'active' });

    expect(result).toEqual([
      { type: 'prev', value: 49 },

      { type: 'page', value: 1 },
      { type: 'more', value: 45 },
      { type: 'page', value: 46 },
      { type: 'page', value: 47 },
      { type: 'page', value: 48 },
      { type: 'page', value: 49 },
      { type: 'page', value: 50 },
    ]);
  });
});
