import React, { useEffect, useRef } from 'react';
import { render } from '@testing-library/react';
import { PageScrollProvider, usePageScrollContext } from '../context';
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
      const { adapter } = usePageScrollContext();

      useEffect(() => {
        if (ref.current) {
          spy(adapter(ref.current, {}));
        }
      });

      return <div ref={ref}></div>;
    }

    render(
      <PageScrollProvider adapter={() => new StubAdapter()}>
        <TestComponent />
      </PageScrollProvider>,
    );

    expect(spy.mock.calls[0][0]).toBeInstanceOf(StubAdapter);
  });

  it('should throw error when has parent provider', () => {
    expect(() => {
      render(
        <PageScrollProvider adapter={() => new StubAdapter()}>
          <PageScrollProvider adapter={() => new StubAdapter()}>
            <h1>Error test</h1>
          </PageScrollProvider>
        </PageScrollProvider>,
      );
    }).toThrow();
  });
});
