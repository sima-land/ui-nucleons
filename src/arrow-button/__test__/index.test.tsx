import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ArrowButton } from '..';

describe('<ArrowButton />', () => {
  it('should renders correctly', () => {
    const { container } = render(<ArrowButton aria-label='Вперед' />);

    expect(container).toMatchSnapshot();
  });

  it('should handle props', async function () {
    const spy = jest.fn();

    const result = render(
      <ArrowButton size='l' direction='left' aria-label='Назад' onClick={spy} />,
    );

    expect(result.container).toMatchSnapshot();

    expect(spy).toBeCalledTimes(0);

    fireEvent.click(await result.findByTestId('arrow-button'));

    expect(spy).toBeCalledTimes(1);
  });

  it('should handle "data-testid"', function () {
    const { queryAllByTestId } = render(
      <ArrowButton
        size='l'
        direction='left'
        aria-label='Назад'
        data-testid='specific-arrow-button'
      />,
    );

    expect(queryAllByTestId('arrow-button')).toHaveLength(0);
    expect(queryAllByTestId('specific-arrow-button')).toHaveLength(1);
  });
});
