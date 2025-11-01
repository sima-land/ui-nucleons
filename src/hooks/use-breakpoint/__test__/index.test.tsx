import { act, render, renderHook } from '@testing-library/react';
import { BreakpointProvider, useBreakpoint } from '..';
import { MatchMediaContext } from '../../../context';
import { MatchMediaMock } from '../../../test-utils';
import { isBrowser } from '../../../helpers';

jest.mock('../../../helpers', () => ({
  ...jest.requireActual('../../../helpers'),
  isBrowser: jest.fn(() => true),
}));

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
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() =>
      render(
        <BreakpointProvider>
          <TestComponent query='invalid_query' />
        </BreakpointProvider>,
      ),
    ).toThrow(Error('useBreakpoint: Invalid query, "invalid_query"'));

    spy.mockRestore();
  });

  it('should return false when platform is not browser', () => {
    (isBrowser as jest.Mock).mockReturnValue(false);
    const { result } = renderHook(() => useBreakpoint('mm+'));

    expect(result.current).toBe(false);
  });

  it('should return result of matchMedia when platform is browser', () => {
    (isBrowser as jest.Mock).mockReturnValue(true);
    jest.spyOn(window, 'matchMedia').mockReturnValue({ matches: true } as any);
    const { result } = renderHook(() => useBreakpoint('mm+'));

    expect(result.current).toBe(true);
  });
});
