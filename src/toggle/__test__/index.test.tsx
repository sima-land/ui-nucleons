import { fireEvent, render } from '@testing-library/react';
import { createRef } from 'react';
import { Toggle } from '..';

describe('<Toggle />', () => {
  it('should work without props', () => {
    const { container } = render(<Toggle />);

    expect(container).toMatchSnapshot();
  });

  it('should handle "defaultChecked" prop', () => {
    const { container } = render(<Toggle defaultChecked />);

    expect(container.querySelector('input')?.defaultChecked).toBe(true);
  });

  it('should handle "checked" prop', () => {
    const spy = jest.fn();
    const { container, rerender } = render(<Toggle checked onChange={spy} />);

    expect(container.querySelector('input')?.checked).toBe(true);

    rerender(<Toggle checked={false} onChange={spy} />);

    expect(container.querySelector('input')?.checked).toBe(false);
  });

  it('should handle "onChange" prop', () => {
    const spy = jest.fn();
    const { container } = render(<Toggle onChange={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.click(container.querySelector('input') as HTMLElement);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "ref" prop', () => {
    const ref = createRef<HTMLInputElement>();

    const { container } = render(<Toggle ref={ref} />);

    expect(ref.current).toBe(container.querySelector('input'));
  });
});
