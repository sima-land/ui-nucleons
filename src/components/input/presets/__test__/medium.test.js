import { MediumSize } from '../medium';
import isFunction from 'lodash/isFunction';

describe('MediumSize()', () => {
  it('should works without arguments', () => {
    const result = MediumSize();
    expect(isFunction(result.computeClasses)).toBe(true);
  });
  it('should handle "classes" option', () => {
    const result = MediumSize({ classes: { input: 'custom-input', root: 'custom-root' } });
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
