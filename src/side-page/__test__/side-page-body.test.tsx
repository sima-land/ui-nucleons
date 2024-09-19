import { render } from '@testing-library/react';
import { SidePageBody } from '../side-page-body';
import { createRef } from 'react';
import { PageScrollLockAdapter, PageScrollLockContext } from '../../_internal/page-scroll-lock';
import { PageScrollLockContextValue } from '../../_internal/page-scroll-lock/types';

describe('SidePage', () => {
  it('should renders correctly', () => {
    const { container } = render(
      <SidePageBody>
        <p>SidePageBody!</p>
      </SidePageBody>,
    );

    expect(container.textContent).toBe('SidePageBody!');
  });

  it('should handle rootRef', () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <SidePageBody rootRef={ref}>
        <p>SidePageBody!</p>
      </SidePageBody>,
    );

    expect(ref.current instanceof HTMLElement).toBe(true);
  });

  it('should lock page scroll', () => {
    const adapter: PageScrollLockAdapter = {
      lock: jest.fn(),
      unlock: jest.fn(),
    };

    const context: PageScrollLockContextValue = {
      adapter: () => adapter,
    };

    expect(adapter.lock).toHaveBeenCalledTimes(0);
    expect(adapter.unlock).toHaveBeenCalledTimes(0);

    const { rerender } = render(
      <PageScrollLockContext.Provider value={context}>
        <SidePageBody withScrollDisable>
          <p>SidePageBody!</p>
        </SidePageBody>
      </PageScrollLockContext.Provider>,
    );

    expect(adapter.lock).toHaveBeenCalledTimes(1);
    expect(adapter.unlock).toHaveBeenCalledTimes(0);

    rerender(
      <PageScrollLockContext.Provider value={context}>
        <SidePageBody withScrollDisable={false}>
          <p>SidePageBody!</p>
        </SidePageBody>
      </PageScrollLockContext.Provider>,
    );

    expect(adapter.lock).toHaveBeenCalledTimes(1);
    expect(adapter.unlock).toHaveBeenCalledTimes(1);
  });
});
