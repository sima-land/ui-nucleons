import { it, expect, describe, jest } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import { ArrowButton } from '..';

describe('ArrowButton', () => {
  it('should renders correctly', () => {
    const { container } = render(<ArrowButton aria-label='Вперед' />);

    expect(container).toMatchSnapshot();
  });

  it('should handle props', async function () {
    const spy = jest.fn();

    const { container, findByTestId } = render(
      <ArrowButton size='l' direction='left' aria-label='Назад' onClick={spy} />,
    );

    expect(container).toMatchSnapshot();

    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.click(await findByTestId('arrow-button'));

    expect(spy).toHaveBeenCalledTimes(1);
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
