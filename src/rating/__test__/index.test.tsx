import { render } from '@testing-library/react';

import { Rating } from '..';

describe('<Rating />', () => {
  it('should renders correctly', () => {
    const { container } = render(<Rating size='m' value={3.4} className='test-class' />);

    expect(container).toMatchSnapshot();
  });

  it('should handle size prop missing', () => {
    const { container } = render(<Rating value={3.4} />);

    expect(container).toMatchSnapshot();
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(<Rating value={4} data-testid='product-rating' />);

    expect(queryAllByTestId('rating')).toHaveLength(0);
    expect(queryAllByTestId('product-rating')).toHaveLength(1);
  });
});
