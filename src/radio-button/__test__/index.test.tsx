import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { RadioButton } from '..';

describe('RadioButton', () => {
  it('should renders properly', () => {
    const spy = jest.fn();
    const { container, getByTestId } = render(
      <label data-testid='test-label'>
        <RadioButton onChange={spy} />
      </label>,
    );

    expect(container).toMatchSnapshot();
    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('test-label'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
