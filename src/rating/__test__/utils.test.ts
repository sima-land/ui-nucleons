import { composeClasses, getStarClass } from '../utils';

describe('getStarClass', () => {
  let starClass;

  const classes = {
    star: 'rating-star',
    emptyStar: 'empty-star',
    halfStar: 'half-star',
    fullStar: 'full-star',
  };

  it('returns classes for empty star properly', () => {
    starClass = getStarClass({ value: 0, classes, index: 3 });
    expect(starClass).toEqual('rating-star empty-star');
    starClass = getStarClass({ classes, value: 1, index: 3 });
    expect(starClass).toEqual('rating-star empty-star');
  });

  it('returns classes for half star properly', () => {
    starClass = getStarClass({ classes, value: 2.5, index: 3 });
    expect(starClass).toEqual('rating-star half-star');
  });

  it('returns classes for full star properly', () => {
    starClass = getStarClass({ classes, value: 5, index: 3 });
    expect(starClass).toEqual('rating-star full-star');
    starClass = getStarClass({ classes, value: 3, index: 3 });
    expect(starClass).toEqual('rating-star full-star');
  });
});

describe('composeClasses', () => {
  it('returns correct object', () => {
    const base = {
      main: 'base-main',
      item: 'base-item',
      other: 'base-other',
    };

    const custom = {
      main: 'custom-main',
      item: 'custom-item',
      another: 'custom-another',
    };

    const composed = composeClasses(base, custom);

    expect(composed).toEqual({
      main: 'base-main custom-main',
      item: 'base-item custom-item',
      other: 'base-other',
      another: 'custom-another',
    });
  });
});
