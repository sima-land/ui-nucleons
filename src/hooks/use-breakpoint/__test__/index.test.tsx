import { act, render } from '@testing-library/react';
import { BreakpointProvider, useBreakpoint } from '..';
import { MatchMediaContext } from '../../../context';
import { MatchMediaMock } from '../../../test-utils';

describe('useBreakpoint', () => {
  const TestComponent = ({ query }: { query: string }) => {
    const matches = useBreakpoint(query);

    return <div>{matches ? 'YES' : 'NO'}</div>;
  };

  it('should works properly', () => {
    const matchMediaMock = new MatchMediaMock();

    const { container } = render(
      <MatchMediaContext.Provider value={{ matchMedia: matchMediaMock.matchMedia }}>
        <BreakpointProvider>
          <TestComponent query='mm-' />
        </BreakpointProvider>
      </MatchMediaContext.Provider>,
    );

    expect(container.textContent).toBe('NO');

    act(() => {
      matchMediaMock.simulateChange({
        query: '(max-width: 719px)',
        matches: true,
      });
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
