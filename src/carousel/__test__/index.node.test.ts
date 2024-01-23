import { it, expect, describe } from '@jest/globals';
/**
 * @jest-environment node
 */
import { Carousel } from '..';

describe('getViewport', () => {
  it('should return null on server', () => {
    const instance = new Carousel({});

    expect(instance.getViewport()).toBe(null);
  });
});
