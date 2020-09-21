import { stubTrue } from 'lodash';
import { ClassGetter } from '../utils';

describe('ClassGetter', () => {
  it('should works', () => {
    const testClasses = {
      num1: 'one',
      num2: 'two',
      num3: 'three',
    };

    const getClassName = ClassGetter(testClasses, stubTrue, 'num');

    expect(getClassName(1)).toBe('one');
    expect(getClassName(2)).toBe('two');
    expect(getClassName(3)).toBe('three');
  });

  it('should works without prefix argument', () => {
    const testClasses = {
      1: 'one',
      2: 'two',
      3: 'three',
    };

    const getClassName = ClassGetter(testClasses, stubTrue);

    expect(getClassName(1)).toBe('one');
    expect(getClassName(2)).toBe('two');
    expect(getClassName(3)).toBe('three');
  });
});
