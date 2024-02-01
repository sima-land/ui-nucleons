import { it, expect, describe } from '@jest/globals';
import { getNoIndexProps } from '../utils';

const cases: Array<{ input: unknown; output: string }> = [
  {
    input: null,
    output: '',
  },
  {
    input: undefined,
    output: '',
  },
  {
    input: true,
    output: '',
  },
  {
    input: false,
    output: '',
  },
  {
    input: '',
    output: '',
  },
  {
    input: 0,
    output: '<!--noindex-->0<!--/noindex-->',
  },
  {
    input: 123,
    output: '<!--noindex-->123<!--/noindex-->',
  },
  {
    input: 'Hello, world!',
    output: '<!--noindex-->Hello, world!<!--/noindex-->',
  },
  {
    input: '<p>Foo <span>Bar</span></p>',
    output: '<!--noindex--><p>Foo <span>Bar</span></p><!--/noindex-->',
  },
];

describe('getNoIndexProps', () => {
  it('should handle different inputs', () => {
    for (const { input, output } of cases) {
      expect(getNoIndexProps(input).dangerouslySetInnerHTML?.__html).toBe(output);
    }
  });
});
