import { SmallSize } from '../small';
import isFunction from 'lodash/isFunction';

describe('SmallSize()', () => {
  it('should works without arguments', () => {
    const result = SmallSize();
    expect(isFunction(result.computeClasses)).toBe(true);
  });
  it('should handle "classes" option', () => {
    const result = SmallSize({ classes: { input: 'custom-input', root: 'custom-root' } });
    expect(isFunction(result.computeClasses)).toBe(true);
    expect(result.computeClasses()).toEqual({
      endAdornment: 'adornment-container adornment-end',
      failed: 'root-failed',
      focused: 'root-focused',
      input: 'input-reset custom-input',
      permanent: 'root custom-root',
      startAdornment: 'adornment-container adornment-start',
      withEndAdornment: 'root-with-end-adornment',
      withStartAdornment: 'root-with-start-adornment',
    });
  });
});
