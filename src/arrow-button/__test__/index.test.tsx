import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ArrowButton } from '..';

describe('<ArrowButton />', () => {
  it('should renders correctly', () => {
    const { container } = render(
      <ArrowButton
        aria-label='Вперед'
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle props', async function () {
    const spy = jest.fn();

    const result = render(
      <ArrowButton
        size='l'
        direction='left'
        aria-label='Назад'
        onClick={spy}
      />
    );

    expect(result.container).toMatchSnapshot();

    expect(spy).toBeCalledTimes(0);

    fireEvent.click(await result.findByTestId('arrow-button'));

    expect(spy).toBeCalledTimes(1);
  });
});
