import { useContext, useEffect, useRef } from 'react';
import { render } from '@testing-library/react';
import { PageScrollLockContext } from '../context';
import { PageScrollLockAdapter } from '../types';

class StubAdapter implements PageScrollLockAdapter {
  lock() {
    return void 0;
  }
  unlock() {
    return void 0;
  }
}

describe('PageScrollProvider', () => {
  it('should provide adapter', () => {
    const spy = jest.fn();

    function TestComponent() {
      const ref = useRef<HTMLDivElement>(null);
      const { adapter } = useContext(PageScrollLockContext);

      useEffect(() => {
        if (ref.current) {
          spy(adapter(ref.current, {}));
        }
      });

      return <div ref={ref}></div>;
    }

    render(
      <PageScrollLockContext.Provider value={{ adapter: () => new StubAdapter() }}>
        <TestComponent />
      </PageScrollLockContext.Provider>,
    );

    expect(spy.mock.calls[0][0]).toBeInstanceOf(StubAdapter);
  });

  it('should throw error when has parent provider', () => {
    expect(() => {
      render(
        <PageScrollLockContext.Provider value={{ adapter: () => new StubAdapter() }}>
          <PageScrollLockContext.Provider value={{ adapter: () => new StubAdapter() }}>
            <h1>Error test</h1>
          </PageScrollLockContext.Provider>
        </PageScrollLockContext.Provider>,
      );
    }).toThrow();
  });
});
