import { fireEvent, render } from '@testing-library/react';
import { Skeleton } from '../skeleton';
import { createRef } from 'react';

describe('Skeleton', () => {
  it('should handle div props', () => {
    const spy = jest.fn();

    const { container } = render(
      <Skeleton id='primary' className='styled' onClick={spy}>
        Hello, world!
      </Skeleton>,
    );

    expect(container.querySelectorAll('#primary.styled')).toHaveLength(1);
    expect(container.querySelector('#primary.styled')?.textContent).toBe('Hello, world!');

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(container.querySelector('#primary.styled')!);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "rootRef"', () => {
    const ref = createRef<HTMLDivElement>();

    render(<Skeleton rootRef={ref}>Hello, world!</Skeleton>);

    expect(ref.current instanceof HTMLElement).toBe(true);
  });

  it('should handle "theme" prop', () => {
    const { container, rerender } = render(<Skeleton theme={undefined} />);

    expect(container.querySelectorAll('.theme-light')).toHaveLength(1);
    expect(container.querySelectorAll('.theme-dark')).toHaveLength(0);

    rerender(<Skeleton theme='light' />);

    expect(container.querySelectorAll('.theme-light')).toHaveLength(1);
    expect(container.querySelectorAll('.theme-dark')).toHaveLength(0);

    rerender(<Skeleton theme='dark' />);

    expect(container.querySelectorAll('.theme-light')).toHaveLength(0);
    expect(container.querySelectorAll('.theme-dark')).toHaveLength(1);

    rerender(<Skeleton theme='unset' />);

    expect(container.querySelectorAll('.theme-light')).toHaveLength(0);
    expect(container.querySelectorAll('.theme-dark')).toHaveLength(0);
  });

  it('should handle "shining" prop', () => {
    const { container, rerender } = render(<Skeleton shining={undefined} />);
    expect(container.querySelectorAll('.shining')).toHaveLength(1);

    rerender(<Skeleton shining />);
    expect(container.querySelectorAll('.shining')).toHaveLength(1);

    rerender(<Skeleton shining={false} />);
    expect(container.querySelectorAll('.shining')).toHaveLength(0);
  });
});
