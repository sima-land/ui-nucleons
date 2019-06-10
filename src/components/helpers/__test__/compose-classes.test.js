import composeClasses from '../compose-classes';

describe('composeClasses', () => {
  it('returns correct object', () => {
    const defaultClasses = {
      main: 'test-main-class main',
      item: 'test-item',
      defaultClass: 'test-default',
    };
    const customClasses = {
      main: 'custom-main-class',
      item: 'custom-item item',
      customClass: 'test-custom',
    };
    const composed = composeClasses({ defaultClasses, customClasses });
    expect(composed).toEqual({
      customClass: 'test-custom',
      defaultClass: 'test-default',
      item: 'custom-item item test-item',
      main: 'custom-main-class test-main-class main',
    });
  });
});
