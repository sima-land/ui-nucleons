import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Alert } from '..';
import { useBodyScrollLock } from '../../_internal/body-scroll';

jest.mock('../../_internal/body-scroll', () => {
  const original = jest.requireActual('../../_internal/body-scroll');

  return {
    ...original,
    __esModule: true,
    useBodyScrollLock: jest.fn(original.useBodyScrollLock),
  };
});

describe('<Alert />', () => {
  it('should renders without props', () => {
    const { container } = render(<Alert />);

    expect(container).toMatchSnapshot();
  });

  it('should handle props', () => {
    const { container } = render(
      <Alert
        title='Hello, world!'
        withNavBar
        withDivideNavBar={false}
        navBarProps={{ subtitle: 'Subtitle text' }}
        className='test-class'
        children='Main content'
        footer='Footer content'
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should disable/enable body scroll', () => {
    expect(useBodyScrollLock).toBeCalledTimes(0);

    render(<Alert withScrollDisable />);

    expect(useBodyScrollLock).toBeCalledTimes(1);
  });

  it('should do not use disable/enable body scrolling by default', () => {
    render(<Alert />);

    expect((useBodyScrollLock as any).mock.calls[0][1]).toBe(false);
  });

  it('should call onClose callback on overlay click', () => {
    const spy = jest.fn();
    const { getByTestId } = render(<Alert onClose={spy} />);

    expect(spy).toBeCalledTimes(0);
    fireEvent.click(getByTestId('alert:overlay'));
    expect(spy).toBeCalledTimes(1);
  });

  it('should handle overlay click without onClose callback', () => {
    const { getByTestId } = render(<Alert onClose={undefined} />);

    expect(() => {
      fireEvent.click(getByTestId('alert:overlay'));
    }).not.toThrow();
  });
});
