import { act, render } from '@testing-library/react';
import { BreakpointProvider, useBreakpoint } from '..';

describe('useBreakpoint', () => {
  const TestComponent = ({ query }: { query: string }) => {
    const matches = useBreakpoint(query);
    return <div>{matches ? 'YES' : 'NO'}</div>;
  };

  const listeners: Record<string, Array<(e: MediaElementAudioSourceOptions) => void>> = {};

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
        }) as any,
    );
  });

  afterEach(() => {
    (matchMedia as jest.Mock).mockRestore();
  });

  it('should works properly', () => {
    const { container } = render(
      <BreakpointProvider>
        <TestComponent query='mm-' />
      </BreakpointProvider>,
    );

    expect(container.textContent).toBe('NO');

    act(() => {
      listeners['(max-width: 719px)'].forEach(fn => fn({ matches: true } as any));
    });

    expect(container.textContent).toBe('YES');
  });

  it('should throws error', () => {
    expect(() =>
      render(
        <BreakpointProvider>
          <TestComponent query='invalid_query' />
        </BreakpointProvider>,
      ),
    ).toThrow(Error('useBreakpoint: Invalid query, "invalid_query"'));
  });
});
