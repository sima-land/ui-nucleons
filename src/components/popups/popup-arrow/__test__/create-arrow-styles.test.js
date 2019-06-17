import { createArrowStyles } from '../create-arrow-styles';

describe('createArrowStyles return correct classes', () => {
  let classes;
  it('should return correct default classes', () => {
    classes = createArrowStyles();
    expect(classes).toEqual('base white top');
  });
  it('should return correct classes if gets available attributes values', () => {
    classes = createArrowStyles({ direction: 'bottom', color: 'blue', className: 'test', shadow: true });
    expect(classes).toEqual('base blue test bottom shadow shadow-bottom');
  });
});
