import { render } from '@testing-library/react';
import { NoIndex, NoIndexMark } from '..';

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

describe('NoIndexMark', () => {
  it('should renders correctly without prop', () => {
    const { container, rerender } = render(<NoIndexMark />);
    expect(container.innerHTML).toEqual('<span><!--noindex--></span>');

    rerender(<NoIndexMark type='open' />);
    expect(container.innerHTML).toEqual('<span><!--noindex--></span>');
  });

  it('should renders correctly with prop "closed"', () => {
    const { container } = render(<NoIndexMark type='close' />);
    expect(container.innerHTML).toEqual('<span><!--/noindex--></span>');
  });
});
