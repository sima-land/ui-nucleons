import { useRef } from 'react';
import { render } from '@testing-library/react';
import { usePageScrollLock } from '../hook';
import { PageScrollLock } from '../adapters/body-scroll-lock';
import { PageScrollLockAdapter, PageScrollLockAdapterFactory } from '../types';
import { PageScrollLockProvider } from '../context';

describe('usePageScrollLock', () => {
  const lockSpy = jest.spyOn(PageScrollLock.prototype, 'lock');
  const unlockSpy = jest.spyOn(PageScrollLock.prototype, 'unlock');

  afterEach(() => {
    lockSpy.mockClear();
    unlockSpy.mockClear();
  });

  afterAll(() => {
    (PageScrollLock.prototype.lock as jest.Mock).mockRestore();
    (PageScrollLock.prototype.unlock as jest.Mock).mockRestore();
  });

  it('should use default adapter (body-scroll-lock)', () => {
    function TestComponent() {
      const ref = useRef<HTMLDivElement>(null);
      usePageScrollLock(ref, {
        lockEnabled: true,
        reserveScrollBarGap: false,
      });

      return <div ref={ref}>Hello</div>;
    }

    expect(lockSpy).toHaveBeenCalledTimes(0);
    expect(unlockSpy).toHaveBeenCalledTimes(0);

    const { unmount } = render(<TestComponent />);
    expect(lockSpy).toHaveBeenCalledTimes(1);
    expect(unlockSpy).toHaveBeenCalledTimes(0);

    unmount();
    expect(lockSpy).toHaveBeenCalledTimes(1);
    expect(unlockSpy).toHaveBeenCalledTimes(1);
  });

  it('should use default options', () => {
    function TestComponent() {
      const ref = useRef<HTMLDivElement>(null);

      usePageScrollLock(ref);

      return <div ref={ref}>Hello</div>;
    }

    const adapterFactory = jest.fn<PageScrollLockAdapter, Parameters<PageScrollLockAdapterFactory>>(
      () => ({
        lock: jest.fn(),
        unlock: jest.fn(),
      }),
    );

    render(
      <PageScrollLockProvider adapter={adapterFactory}>
        <TestComponent />
      </PageScrollLockProvider>,
    );
    expect(adapterFactory.mock.calls[0][1]).toEqual({
      reserveScrollBarGap: true,
    });
  });

  it('should use provided adapter', () => {
    const adapter: PageScrollLockAdapter = {
      lock: jest.fn(),
      unlock: jest.fn(),
    };

    function TestComponent() {
      const ref = useRef<HTMLDivElement>(null);

      usePageScrollLock(ref, {
        lockEnabled: true,
        reserveScrollBarGap: false,
      });

      return <div ref={ref}>Hello</div>;
    }

    expect(lockSpy).toHaveBeenCalledTimes(0);
    expect(unlockSpy).toHaveBeenCalledTimes(0);

    const { unmount } = render(
      <PageScrollLockProvider adapter={() => adapter}>
        <TestComponent />
      </PageScrollLockProvider>,
    );

    expect(adapter.lock).toHaveBeenCalledTimes(1);
    expect(adapter.unlock).toHaveBeenCalledTimes(0);

    unmount();
    expect(adapter.lock).toHaveBeenCalledTimes(1);
    expect(adapter.unlock).toHaveBeenCalledTimes(1);
  });
});
