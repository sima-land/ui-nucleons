import { makeRowClasses, makeColClasses } from '../class-maker';

describe('makeRowClasses', () => {
  it('should return correct classes', () => {
    let classes = makeRowClasses({ wrap: true });
    expect(classes).toEqual([
      'row',
      'wrap',
      'items-stretch',
      'justify-start',
      'with-gutters',
      'row-lg-columns-count-12',
      'row-md-columns-count-8',
      'row-lg-columns-gutters-lg',
      'row-md-columns-gutters-md',
      'row-sm-columns-gutters-sm',
    ].join(' '));
    classes = makeRowClasses({ withoutGutters: true });
    expect(classes).toEqual([
      'row',
      'items-stretch',
      'justify-start',
      'row-lg-columns-count-12',
      'row-md-columns-count-8',
      'row-lg-columns-gutters-lg',
      'row-md-columns-gutters-md',
      'row-sm-columns-gutters-sm',
    ].join(' '));
    classes = makeRowClasses({ justify: 'center', alignItems: 'start' });
    expect(classes).toEqual([
      'row',
      'items-start',
      'justify-center',
      'with-gutters',
      'row-lg-columns-count-12',
      'row-md-columns-count-8',
      'row-lg-columns-gutters-lg',
      'row-md-columns-gutters-md',
      'row-sm-columns-gutters-sm',
    ].join(' '));
    classes = makeRowClasses({ externalClass: 'test' });
    expect(classes).toEqual([
      'row',
      'items-stretch',
      'justify-start',
      'with-gutters',
      'row-lg-columns-count-12',
      'row-md-columns-count-8',
      'row-lg-columns-gutters-lg',
      'row-md-columns-gutters-md',
      'row-sm-columns-gutters-sm',
      'test',
    ].join(' '));
  });
});
describe('makeColClasses', () => {
  it('should return correct classes', () => {
    let classes = makeColClasses({ externalClass: 'test' });
    expect(classes).toEqual('col col-lg-width-auto col-md-width-auto test');
    classes = makeColClasses({ desktop: 5, mobile: 3 });
    expect(classes).toEqual('col col-lg-width-5 col-md-width-3');
  });
});
