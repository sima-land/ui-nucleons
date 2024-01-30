import { useContext, useEffect } from 'react';
import { MatchMediaContext, ResizeObserverContext, IntersectionObserverContext } from '..';
import { render } from '@testing-library/react';

describe('MatchMediaContext', () => {
  it('should use global browser value by default', () => {
    jest.spyOn(window, 'matchMedia');

    const TestComponent = () => {
      const { matchMedia } = useContext(MatchMediaContext);

      useEffect(() => {
        matchMedia('(max-width: 200px)');
      });

      return <>Hello</>;
    };

    expect(window.matchMedia).toHaveBeenCalledTimes(0);
    render(<TestComponent />);
    expect(window.matchMedia).toHaveBeenCalledTimes(1);
  });
});

describe('ResizeObserverContext', () => {
  it('should use global browser value by default', () => {
    const spy = jest.fn();

    const resizeObserverDescriptor = Object.getOwnPropertyDescriptor(window, 'ResizeObserver');

    Object.defineProperty(window, 'ResizeObserver', {
      value: class ResizeObserverMock {
        constructor() {
          spy();
        }
        observe() {}
        unobserve() {}
        disconnect() {}
      },
    });

    const TestComponent = () => {
      const { createResizeObserver } = useContext(ResizeObserverContext);

      useEffect(() => {
        createResizeObserver(() => {});
      });

      return <>Hello</>;
    };

    expect(spy).toHaveBeenCalledTimes(0);
    render(<TestComponent />);
    expect(spy).toHaveBeenCalledTimes(1);

    if (resizeObserverDescriptor) {
      Object.defineProperty(window, 'ResizeObserver', resizeObserverDescriptor);
    }
  });
});

describe('IntersectionObserverContext', () => {
  it('should use global browser value by default', () => {
    const spy = jest.fn();

    const IntersectionObserverDescriptor = Object.getOwnPropertyDescriptor(
      window,
      'IntersectionObserver',
    );

    Object.defineProperty(window, 'IntersectionObserver', {
      value: class IntersectionObserverMock {
        constructor() {
          spy();
        }
        observe() {}
        unobserve() {}
        disconnect() {}
        takeRecords() {}
      },
    });

    const TestComponent = () => {
      const { createIntersectionObserver } = useContext(IntersectionObserverContext);

      useEffect(() => {
        createIntersectionObserver(() => {});
      });

      return <>Hello</>;
    };

    expect(spy).toHaveBeenCalledTimes(0);
    render(<TestComponent />);
    expect(spy).toHaveBeenCalledTimes(1);

    if (IntersectionObserverDescriptor) {
      Object.defineProperty(window, 'IntersectionObserver', IntersectionObserverDescriptor);
    }
  });
});
