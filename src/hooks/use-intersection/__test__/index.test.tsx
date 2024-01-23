import { act, render } from '@testing-library/react';
import { it, expect, describe } from '@jest/globals';
import { useRef, useState } from 'react';
import { useIntersection } from '..';
import { IntersectionObserverContext } from '../../../context';
import { IntersectionObserverMock } from '../../../test-utils';

describe('useIntersection', () => {
  it('should works', () => {
    const TestComponent = () => {
      const ref = useRef<HTMLDivElement>(null);
      const [viewing, setViewing] = useState<boolean>(false);

      useIntersection(ref, entry => {
        setViewing(entry.isIntersecting);
      });

      return (
        <div ref={ref} data-testid='test-target'>
          {viewing ? 'On screen' : 'Off screen'}
        </div>
      );
    };

    const observers = IntersectionObserverMock.createRegistry();

    const { container, getByTestId } = render(
      <IntersectionObserverContext.Provider
        value={{ createIntersectionObserver: observers.getObserver }}
      >
        <TestComponent />
      </IntersectionObserverContext.Provider>,
    );

    expect(container.textContent).toBe('Off screen');

    act(() => {
      observers.simulateEntryChange({
        target: getByTestId('test-target'),
        isIntersecting: true,
        intersectionRatio: 0,
      });
    });

    expect(container.textContent).toBe('On screen');
  });

  it('should works with empty ref', () => {
    const TestComponent = () => {
      const ref = useRef<HTMLDivElement>(null);

      useIntersection(ref, () => void 0);

      return <div>Empty</div>;
    };

    expect(() => {
      render(<TestComponent />);
    }).not.toThrow();
  });
});
