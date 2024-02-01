import { it, expect, describe } from '@jest/globals';
import { act, render } from '@testing-library/react';
import { useMedia } from '..';
import { MatchMediaContext } from '../../../context';
import { MatchMediaMock } from '../../../test-utils';

describe('useMedia', () => {
  const TestComponent = () => {
    const matches = useMedia('(min-width: 320px)');

    return <>{matches ? 'foo' : 'bar'}</>;
  };

  it('should handle change event', () => {
    const matchMediaMock = new MatchMediaMock();

    const { container } = render(
      <MatchMediaContext.Provider value={{ matchMedia: matchMediaMock.matchMedia }}>
        <TestComponent />
      </MatchMediaContext.Provider>,
    );
    expect(container.textContent).toContain('bar');

    act(() => {
      matchMediaMock.simulateChange({
        query: '(min-width: 320px)',
        matches: true,
      });
    });
    expect(container.textContent).toContain('foo');
  });
});
