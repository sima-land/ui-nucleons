import { PageButton, getPageButtons, getRangeNumbers, getCorrectRangeNumbers } from '../utils';

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
    expect(getRangeNumbers({ current: 0, total: 0, range: 0 })).toEqual([]);
  });
});

describe('getCorrectRangeNumbers()', () => {
  it('should return correct range', () => {
    expect(getCorrectRangeNumbers({ current: 1, range: 5, total: 99 })).toEqual([1, 2, 3, 4, 5]);
    expect(getCorrectRangeNumbers({ current: 2, range: 5, total: 99 })).toEqual([1, 2, 3, 4, 5]);
    expect(getCorrectRangeNumbers({ current: 3, range: 5, total: 99 })).toEqual([1, 2, 3, 4, 5]);
    expect(getCorrectRangeNumbers({ current: 4, range: 5, total: 99 })).toEqual([1, 2, 3, 4, 5]);

    expect(getCorrectRangeNumbers({ current: 5, range: 5, total: 99 })).toEqual([3, 4, 5, 6, 7]);
    expect(getCorrectRangeNumbers({ current: 95, range: 5, total: 99 })).toEqual([93, 94, 95, 96, 97]);

    expect(getCorrectRangeNumbers({ current: 96, range: 5, total: 99 })).toEqual([95, 96, 97, 98, 99]);
    expect(getCorrectRangeNumbers({ current: 97, range: 5, total: 99 })).toEqual([95, 96, 97, 98, 99]);
    expect(getCorrectRangeNumbers({ current: 98, range: 5, total: 99 })).toEqual([95, 96, 97, 98, 99]);
    expect(getCorrectRangeNumbers({ current: 99, range: 5, total: 99 })).toEqual([95, 96, 97, 98, 99]);
  });
});

describe('getPageButtons', () => {
  it('should work with small total', () => {
    const assertions = [
      [{ current: 1, range: 5, total: 1 }, [1]],

      [{ current: 1, range: 5, total: 2 }, [1, 2]],
      [{ current: 2, range: 5, total: 2 }, [1, 2]],

      [{ current: 1, range: 5, total: 3 }, [1, 2, 3]],
      [{ current: 2, range: 5, total: 3 }, [1, 2, 3]],
      [{ current: 3, range: 5, total: 3 }, [1, 2, 3]],

      [{ current: 1, range: 5, total: 4 }, [1, 2, 3, 4]],
      [{ current: 2, range: 5, total: 4 }, [1, 2, 3, 4]],
      [{ current: 3, range: 5, total: 4 }, [1, 2, 3, 4]],
      [{ current: 4, range: 5, total: 4 }, [1, 2, 3, 4]],

      [{ current: 1, range: 5, total: 5 }, [1, 2, 3, 4, 5]],
      [{ current: 2, range: 5, total: 5 }, [1, 2, 3, 4, 5]],
      [{ current: 3, range: 5, total: 5 }, [1, 2, 3, 4, 5]],
      [{ current: 4, range: 5, total: 5 }, [1, 2, 3, 4, 5]],
      [{ current: 5, range: 5, total: 5 }, [1, 2, 3, 4, 5]],

      [{ current: 1, range: 5, total: 6 }, [1, 2, 3, 4, 5, 6]],
      [{ current: 2, range: 5, total: 6 }, [1, 2, 3, 4, 5, 6]],
      [{ current: 3, range: 5, total: 6 }, [1, 2, 3, 4, 5, 6]],
      [{ current: 4, range: 5, total: 6 }, [1, 2, 3, 4, 5, 6]],
      [{ current: 5, range: 5, total: 6 }, [1, 2, 3, 4, 5, 6]],
      [{ current: 6, range: 5, total: 6 }, [1, 2, 3, 4, 5, 6]],

      [{ current: 1, range: 5, total: 7 }, [1, 2, 3, 4, 5, 6, 7]],
      [{ current: 2, range: 5, total: 7 }, [1, 2, 3, 4, 5, 6, 7]],
      [{ current: 3, range: 5, total: 7 }, [1, 2, 3, 4, 5, 6, 7]],
      [{ current: 4, range: 5, total: 7 }, [1, 2, 3, 4, 5, 6, 7]],
      [{ current: 5, range: 5, total: 7 }, [1, 2, 3, 4, 5, 6, 7]],
      [{ current: 6, range: 5, total: 7 }, [1, 2, 3, 4, 5, 6, 7]],
      [{ current: 7, range: 5, total: 7 }, [1, 2, 3, 4, 5, 6, 7]],
    ];

    assertions.forEach(([state, list]) => {
      getPageButtons(state as any).forEach((pageButton, index) => {
        expect(pageButton.value).toBe((list as any)[index]);
        expect(pageButton.content).toBe((list as any)[index]);
      });
    });
  });

  it('should works properly with large total', () => {
    // start of range
    expect(getPageButtons({ current: 1, total: 120 })).toEqual([
      PageButton(1),
      PageButton(2),
      PageButton(3),
      PageButton(4),
      PageButton(5),
      PageButton(6, '...'),
      PageButton(120),
    ]);
    expect(getPageButtons({ current: 2, total: 120 })).toEqual([
      PageButton(1),
      PageButton(2),
      PageButton(3),
      PageButton(4),
      PageButton(5),
      PageButton(6, '...'),
      PageButton(120),
    ]);
    expect(getPageButtons({ current: 3, total: 120 })).toEqual([
      PageButton(1),
      PageButton(2),
      PageButton(3),
      PageButton(4),
      PageButton(5),
      PageButton(6, '...'),
      PageButton(120),
    ]);
    expect(getPageButtons({ current: 4, total: 120 })).toEqual([
      PageButton(1),
      PageButton(2),
      PageButton(3),
      PageButton(4),
      PageButton(5),
      PageButton(6, '...'),
      PageButton(120),
    ]);

    // range middle
    expect(getPageButtons({ current: 5, total: 120 })).toEqual([
      PageButton(1),
      PageButton(3, '...'),
      PageButton(4),
      PageButton(5),
      PageButton(6),
      PageButton(7),
      PageButton(8, '...'),
      PageButton(120),
    ]);
    expect(getPageButtons({ current: 115, total: 120 })).toEqual([
      PageButton(1),
      PageButton(113, '...'),
      PageButton(114),
      PageButton(115),
      PageButton(116),
      PageButton(117),
      PageButton(118, '...'),
      PageButton(120),
    ]);

    // range end
    expect(getPageButtons({ current: 116, total: 120 })).toEqual([
      PageButton(1),
      PageButton(114, '...'),
      PageButton(115),
      PageButton(116),
      PageButton(117),
      PageButton(118),
      PageButton(119),
      PageButton(120),
    ]);
    expect(getPageButtons({ current: 117, total: 120 })).toEqual([
      PageButton(1),
      PageButton(115, '...'),
      PageButton(116),
      PageButton(117),
      PageButton(118),
      PageButton(119),
      PageButton(120),
    ]);
    expect(getPageButtons({ current: 118, total: 120 })).toEqual([
      PageButton(1),
      PageButton(115, '...'),
      PageButton(116),
      PageButton(117),
      PageButton(118),
      PageButton(119),
      PageButton(120),
    ]);
    expect(getPageButtons({ current: 119, total: 120 })).toEqual([
      PageButton(1),
      PageButton(115, '...'),
      PageButton(116),
      PageButton(117),
      PageButton(118),
      PageButton(119),
      PageButton(120),
    ]);
    expect(getPageButtons({ current: 120, total: 120 })).toEqual([
      PageButton(1),
      PageButton(115, '...'),
      PageButton(116),
      PageButton(117),
      PageButton(118),
      PageButton(119),
      PageButton(120),
    ]);
  });

  it('should handle "buttonKeys" prop', () => {
    expect(
      getPageButtons({ current: 30, total: 60, buttonKeys: { more: 'test' } })
    ).toEqual([
      PageButton(1),
      PageButton(28, 'test'),
      PageButton(29),
      PageButton(30),
      PageButton(31),
      PageButton(32),
      PageButton(33, 'test'),
      PageButton(60),
    ]);
  });
});
