import { makeRowClasses, makeColClasses } from '../class-maker';

describe('makeRowClasses', () => {
  it('should return correct classes', () => {
    let classes = makeRowClasses({ wrap: true });
    expect(classes).toEqual('row wrap items-stretch justify-start row-gutter-l');
    classes = makeRowClasses({ justify: 'center', gutter: 's', alignItems: 'start' });
    expect(classes).toEqual('row items-start justify-center row-gutter-s');
    classes = makeRowClasses({ externalClass: 'test' });
    expect(classes).toEqual('row test items-stretch justify-start row-gutter-l');
  });
});
describe('makeColClasses', () => {
  it('should return correct classes', () => {
    let classes = makeColClasses({ wrap: true });
    expect(classes).toEqual('col wrap items-stretch justify-start col-gutter-l width-auto');
    classes = makeColClasses({ justify: 'center', gutter: 's', width: 5, alignItems: 'start' });
    expect(classes).toEqual('col items-start justify-center col-gutter-s width-5');
    classes = makeColClasses({ externalClass: 'test' });
    expect(classes).toEqual('col test items-stretch justify-start col-gutter-l width-auto');
  });
});
