/**
 * @jest-environment node
 */
import { useEffect } from 'react';
import { useIsomorphicLayoutEffect } from '../..';

describe('useIsomorphicLayoutEffect', () => {
  it('should work as regular effect in NodeJS environment', () => {
    expect(useIsomorphicLayoutEffect).toBe(useEffect);
  });
});
