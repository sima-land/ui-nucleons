import { createRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Plate } from '..';

describe('Plate', () => {
  it('should renders without props', () => {
    const { container } = render(<Plate />);

    expect(container).toMatchSnapshot();
  });

  it('should handle props', () => {
    const ref = createRef<HTMLInputElement | null>();
    const spy = jest.fn();

    const { container } = render(
      <Plate ref={ref} shadow='z3' rounds='m' className='test-class' onClick={spy}>
        Test
      </Plate>,
    );

    expect(container).toMatchSnapshot();

    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(container.querySelectorAll('div.test-class')).toHaveLength(1);
    expect(container.querySelector('div.test-class')).toBe(ref.current);

    expect(container.querySelectorAll('div[data-testid="plate"]')).toHaveLength(1);
    expect(container.querySelector('div[data-testid="plate"]')).toBe(ref.current);

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(container.querySelector('div') as HTMLElement);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "data-testid" prop', () => {
    const ref = createRef<HTMLInputElement | null>();
    const spy = jest.fn();

    const { container } = render(
      <Plate
        ref={ref}
        shadow='z3'
        rounds='m'
        className='test-class'
        onClick={spy}
        data-testid='test-plate'
      >
        Test
      </Plate>,
    );

    expect(container).toMatchSnapshot();

    expect(container.querySelectorAll('div')).toHaveLength(1);
    expect(container.querySelectorAll('div.test-class')).toHaveLength(1);
    expect(container.querySelector('div.test-class')).toBe(ref.current);

    expect(container.querySelectorAll('div[data-testid="test-plate"]')).toHaveLength(1);
    expect(container.querySelector('div[data-testid="test-plate"]')).toBe(ref.current);

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(container.querySelector('div') as HTMLElement);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should renders with small rounds', () => {
    const { container } = render(<Plate rounds='s'>Test</Plate>);

    expect(container).toMatchSnapshot();
  });
});
