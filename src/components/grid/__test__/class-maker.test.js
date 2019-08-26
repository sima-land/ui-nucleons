import { makeRowClasses, makeColClasses } from '../class-maker';

describe('makeRowClasses', () => {
  it('should return correct classes', () => {
    let classes = makeRowClasses({ wrap: true });
    expect(classes).toEqual('row wrap items-stretch justify-start with-gutters');
    classes = makeRowClasses({ withoutGutters: true });
    expect(classes).toEqual('row items-stretch justify-start');
    classes = makeRowClasses({ justify: 'center', alignItems: 'start' });
    expect(classes).toEqual('row items-start justify-center with-gutters');
    classes = makeRowClasses({ externalClass: 'test' });
    expect(classes).toEqual('row items-stretch justify-start with-gutters test');
  });
});
describe('makeColClasses', () => {
  it('should return correct classes', () => {
    let classes = makeColClasses({ externalClass: 'test' });
    expect(classes).toEqual('col lg-auto-12 md-auto-8 test');
    classes = makeColClasses({ desktop: 5, mobile: 3 });
    expect(classes).toEqual('col lg-5-12 md-3-8');
  });
});
