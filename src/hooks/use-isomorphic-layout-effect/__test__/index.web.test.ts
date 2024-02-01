/**
 * @jest-environment jsdom
 */
import { it, expect, describe } from '@jest/globals';
import { useLayoutEffect } from 'react';
import { useIsomorphicLayoutEffect } from '..';

describe('useIsomorphicLayoutEffect', () => {
  it('should work as regular effect in NodeJS environment', () => {
    expect(useIsomorphicLayoutEffect).toBe(useLayoutEffect);
  });
});
