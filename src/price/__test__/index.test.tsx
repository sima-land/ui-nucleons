import { it, expect, describe } from '@jest/globals';
import { Price } from '..';
import { render } from '@testing-library/react';

describe('Price', () => {
  it('should renders correctly', () => {
    const { container } = render(<Price value='123.45' currencyGrapheme='₽' />);

    expect(container).toMatchSnapshot();
  });

  it('should handle props', () => {
    const { container } = render(
      <Price
        value='1234567.89'
        currencyGrapheme='$'
        crossedOut
        graphemeBefore
        className='test-class'
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(<Price value='100.200' data-testid='main-price' />);

    expect(queryAllByTestId('price')).toHaveLength(0);
    expect(queryAllByTestId('main-price')).toHaveLength(1);
  });
});
