import { render } from '@testing-library/react';
import { NoIndex } from '..';

describe('NoIndex', () => {
  it('should renders correctly', () => {
    const { container } = render(
      <NoIndex>
        <p>
          Hello, <b>World!</b>
        </p>
      </NoIndex>,
    );

    expect(container.textContent).toBe('Hello, World!');
    expect(container.querySelectorAll('p')).toHaveLength(1);
    expect(container.querySelectorAll('b')).toHaveLength(1);
    expect(container.childNodes).toHaveLength(3);

    // span with open comment
    expect(container.childNodes[0] instanceof HTMLSpanElement).toBe(true);
    expect(container.childNodes[0].childNodes).toHaveLength(1);
    expect(container.childNodes[0].childNodes[0] instanceof Comment).toBe(true);
    expect(container.childNodes[0].childNodes[0].textContent).toBe('noindex');

    // span with close comment
    expect(container.childNodes[2] instanceof HTMLSpanElement).toBe(true);
    expect(container.childNodes[2].childNodes).toHaveLength(1);
    expect(container.childNodes[2].childNodes[0] instanceof Comment).toBe(true);
    expect(container.childNodes[2].childNodes[0].textContent).toBe('/noindex');
  });
});
