/**
 * @jest-environment node
 */
import { it, expect, describe } from '@jest/globals';
import { Carousel } from '../carousel';

describe('getViewport', () => {
  it('should return null on server', () => {
    const instance = new Carousel({});

    expect(instance.getViewport()).toBe(null);
  });
});
