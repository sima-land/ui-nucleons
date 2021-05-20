import React from 'react';
import { render } from 'react-dom';
import { CardContent, CardFooter, CardHeader } from '../slots';
import { defineSlots, CardContext } from '../utils';

describe('defineSlots', () => {
  const TestComponent: React.FC = ({ children }) => {
    const slots = defineSlots(children);

    return (
      <CardContext.Provider value={{}}>
        <div>
          {slots.header}
          {slots.content}
          {slots.footer}
        </div>
      </CardContext.Provider>
    );
  };

  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.append(container);
  });

  afterEach(() => {
    container && container.remove();
  });

  it('should handle empty children', () => {
    expect(defineSlots(undefined)).toEqual({
      header: undefined,
      content: undefined,
      footer: undefined,
    });
  });

  it('should handle all slots', () => {
    render(
      <TestComponent>
        <CardFooter>[CardFooter]</CardFooter>
        IgnoredText
        <CardHeader>[CardHeader]</CardHeader>
        <CardContent>[CardContent]</CardContent>
        <span>IgnoredSpan</span>
      </TestComponent>,
      container
    );

    expect(container.textContent).toBe('[CardHeader][CardContent][CardFooter]');
  });
});
