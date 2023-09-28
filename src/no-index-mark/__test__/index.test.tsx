import { render } from '@testing-library/react';
import { NoIndexMark } from '..';

describe('NoIndexMark', () => {
  it('should renders correctly without prop', () => {
    const { container } = render(<NoIndexMark />);

    expect(container.innerHTML).toEqual('<span><!--noindex--></span>');
  });

  it('should renders correctly with prop "closed"', () => {
    const { container } = render(<NoIndexMark closing />);

    expect(container.innerHTML).toEqual('<span><!--/noindex--></span>');
  });
});
