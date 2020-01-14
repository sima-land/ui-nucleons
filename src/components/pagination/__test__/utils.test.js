import { getPageButtons, getRangeNumbers } from '../utils';

describe('getRangeNumbers', () => {
  it('should works properly', () => {
    expect(getRangeNumbers({ current: 1, range: 4, total: 9 })).toEqual([1, 2, 3, 4]);
    expect(getRangeNumbers({ current: 2, range: 4, total: 9 })).toEqual([1, 2, 3, 4]);
    expect(getRangeNumbers({ current: 3, range: 4, total: 9 })).toEqual([2, 3, 4, 5]);
    expect(getRangeNumbers({ current: 4, range: 4, total: 9 })).toEqual([3, 4, 5, 6]);
    expect(getRangeNumbers({ current: 5, range: 4, total: 9 })).toEqual([4, 5, 6, 7]);
    expect(getRangeNumbers({ current: 6, range: 4, total: 9 })).toEqual([5, 6, 7, 8]);
    expect(getRangeNumbers({ current: 7, range: 4, total: 9 })).toEqual([6, 7, 8, 9]);
    expect(getRangeNumbers({ current: 8, range: 4, total: 9 })).toEqual([6, 7, 8, 9]);
    expect(getRangeNumbers({ current: 9, range: 4, total: 9 })).toEqual([6, 7, 8, 9]);

    expect(getRangeNumbers({ current: 1, range: 4, total: 4 })).toEqual([1, 2, 3, 4]);
    expect(getRangeNumbers({ current: 2, range: 4, total: 4 })).toEqual([1, 2, 3, 4]);
    expect(getRangeNumbers({ current: 3, range: 4, total: 4 })).toEqual([1, 2, 3, 4]);
    expect(getRangeNumbers({ current: 4, range: 4, total: 4 })).toEqual([1, 2, 3, 4]);
  });
  it('should return empty array', () => {
    expect(getRangeNumbers({})).toEqual([]);
  });
});

describe('getPageButtons', () => {
  it('should works properly', () => {
    expect(getPageButtons({ current: 1, total: 120 }).join(' ')).toBe('1 2 3 4 5 6 ... 120');
    expect(getPageButtons({ current: 2, total: 120 }).join(' ')).toBe('1 2 3 4 5 6 ... 120');
    expect(getPageButtons({ current: 3, total: 120 }).join(' ')).toBe('1 2 3 4 5 6 ... 120');
    expect(getPageButtons({ current: 4, total: 120 }).join(' ')).toBe('1 2 3 4 5 6 ... 120');

    expect(getPageButtons({ current: 5, total: 120 }).join(' ')).toBe('1 ... 4 5 6 7 ... 120');
    expect(getPageButtons({ current: 12, total: 120 }).join(' ')).toBe('1 ... 11 12 13 14 ... 120');
    expect(getPageButtons({ current: 23, total: 120 }).join(' ')).toBe('1 ... 22 23 24 25 ... 120');
    expect(getPageButtons({ current: 115, total: 120 }).join(' ')).toBe('1 ... 114 115 116 117 ... 120');

    expect(getPageButtons({ current: 116, total: 120 }).join(' ')).toBe('1 ... 115 116 117 118 119 120');
    expect(getPageButtons({ current: 117, total: 120 }).join(' ')).toBe('1 ... 115 116 117 118 119 120');
    expect(getPageButtons({ current: 118, total: 120 }).join(' ')).toBe('1 ... 115 116 117 118 119 120');
    expect(getPageButtons({ current: 119, total: 120 }).join(' ')).toBe('1 ... 115 116 117 118 119 120');
    expect(getPageButtons({ current: 120, total: 120 }).join(' ')).toBe('1 ... 115 116 117 118 119 120');
  });
  it('should handle "buttonKeys" prop', () => {
    expect(
      getPageButtons({ current: 30, total: 60, buttonKeys: { more: 'test' } })
    ).toEqual([1, 'test', 29, 30, 31, 32, 'test', 60]);
  });
});
