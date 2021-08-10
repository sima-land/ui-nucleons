import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { BreakpointProvider, useBreakpoint } from '..';

describe('useBreakpoint', () => {
  const TestComponent = ({ query }: { query: string }) => {
    const matches = useBreakpoint(query);
    return <div>{matches ? 'YES' : 'NO'}</div>;
  };

  const listeners: Record<
    string,
    Array<(e: MediaElementAudioSourceOptions) => void>
  > = {};

  beforeEach(() => {
    jest.spyOn(window, 'matchMedia').mockImplementation(
      query =>
        ({
          addEventListener: (
            eventName: string,
            listener: (e: MediaElementAudioSourceOptions) => void,
          ) => {
            listeners[query] = listeners[query] || [];
            listeners[query].push(listener);
          },
          removeEventListener: () => void 0,
        } as any),
    );
  });

  afterEach(() => {
    (matchMedia as jest.Mock).mockRestore();
  });

  it('should works properly', () => {
    const wrapper = mount(
      <BreakpointProvider>
        <TestComponent query='mm-' />
      </BreakpointProvider>,
    );

    expect(wrapper.text()).toBe('NO');

    act(() => {
      listeners['(max-width: 719px)'].forEach(fn =>
        fn({ matches: true } as any),
      );
    });
    wrapper.update();

    expect(wrapper.text()).toBe('YES');
  });

  it('should throws error', () => {
    expect(() =>
      mount(
        <BreakpointProvider>
          <TestComponent query='invalid_query' />
        </BreakpointProvider>,
      ),
    ).toThrowError(Error('useBreakpoint: Invalid query, "invalid_query"'));
  });
});
