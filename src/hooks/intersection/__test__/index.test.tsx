import { render } from '@testing-library/react';
import React, { useRef, useState } from 'react';
import { useIntersection } from '..';
import { IntersectionMock } from '../test-utils';

describe('useIntersection', () => {
  const intersectionMock = new IntersectionMock();

  beforeAll(() => {
    intersectionMock.apply();
  });

  afterAll(() => {
    intersectionMock.restore();
  });

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

    const { asFragment, getByTestId } = render(<TestComponent />);

    const target = getByTestId('test-target');

    expect(asFragment().textContent).toContain('Off screen');

    intersectionMock.changeElementState({
      target,
      isIntersecting: true,
      intersectionRatio: 0,
    });

    expect(asFragment().textContent).toContain('On screen');
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
