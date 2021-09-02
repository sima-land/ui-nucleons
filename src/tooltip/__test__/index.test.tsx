import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tooltip } from '..';

describe('Tooltip', () => {
  it('should renders correctly', () => {
    const { container } = render(
      <Tooltip className='test-class' style={{ opacity: 0.2 }}>
        Hello, world!
      </Tooltip>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should handle cross click', async () => {
    const spy = jest.fn();

    const { findByTestId } = render(<Tooltip onClose={spy}>Hello, world!</Tooltip>);

    expect(spy).toBeCalledTimes(0);

    fireEvent.click(await findByTestId('tooltip:cross'));

    expect(spy).toBeCalledTimes(1);
  });
});
