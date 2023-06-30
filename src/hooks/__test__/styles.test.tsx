import { useRef } from 'react';
import { render } from '@testing-library/react';
import { useViewportHeightUnit } from '../styles';

describe('useViewportHeightUnit', () => {
  it('should set css variable', () => {
    function TestComponent() {
      const ref = useRef<HTMLDivElement>(null);

      useViewportHeightUnit(ref);

      return <div ref={ref} data-testid='test-element'></div>;
    }

    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId('test-element').style.getPropertyValue('--vh')).toBe('7.68px');
  });
});
