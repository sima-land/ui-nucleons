import { render } from '@testing-library/react';
import { CustomScrollbar } from '..';
import { useOverlayScrollbarsInit } from '../custom-scrollbar';
import { createRef, useRef } from 'react';
import { useOverlayScrollbars } from 'overlayscrollbars-react';

describe('CustomScrollbar', () => {
  it('should handle "rootRef" prop', () => {
    const rootRef = createRef<HTMLDivElement>();

    const { container } = render(
      <div>
        <CustomScrollbar rootRef={rootRef}>
          <div>Hello, world!</div>
        </CustomScrollbar>
      </div>,
    );

    expect(container.textContent).toContain('Hello, world!');
    expect(rootRef.current instanceof HTMLDivElement).toBe(true);
  });

  it('should remove tabIndex from viewport', () => {
    const viewportRef = createRef<HTMLDivElement>();

    const { container } = render(
      <div>
        <CustomScrollbar viewportRef={viewportRef}>
          <div>Hello, world!</div>
        </CustomScrollbar>
      </div>,
    );

    expect(container.textContent).toContain('Hello, world!');
    expect(viewportRef.current instanceof HTMLElement).toBe(true);
    expect(viewportRef.current?.getAttribute('tabindex')).toBe(null);
  });
});

describe('useOverlayScrollbarsInit', () => {
  const TestComponent = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);

    const [initialize, getInstance] = useOverlayScrollbars({
      options: { overflow: { x: 'scroll', y: 'scroll' } },
      defer: false,
    });

    useOverlayScrollbarsInit(initialize, getInstance, rootRef, viewportRef);

    return <div>Hi</div>;
  };
  it('should not throw when refs is empty', () => {
    const { container } = render(<TestComponent />);

    expect(container.textContent).toBe('Hi');
  });
});
