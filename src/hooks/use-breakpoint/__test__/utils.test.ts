import { MatchMediaMock } from '../../../test-utils';
import { BreakpointQuery, createRegistry } from '../utils';

describe('BreakpointQuery', () => {
  it('isValid', () => {
    expect(BreakpointQuery.isValid(null)).toBe(false);
    expect(BreakpointQuery.isValid(undefined)).toBe(false);
    expect(BreakpointQuery.isValid(1)).toBe(false);
    expect(BreakpointQuery.isValid('s')).toBe(false);
    expect(BreakpointQuery.isValid('sml+')).toBe(false);

    expect(BreakpointQuery.isValid('l+')).toBe(true);
    expect(BreakpointQuery.isValid('xl+')).toBe(true);
    expect(BreakpointQuery.isValid('xs+')).toBe(true);
    expect(BreakpointQuery.isValid('xs-')).toBe(true);
  });

  it('parse', () => {
    expect(BreakpointQuery.parse('l+')).toEqual(['l', '+']);
    expect(BreakpointQuery.parse('mm-')).toEqual(['mm', '-']);
  });

  it('toMediaQuery', () => {
    expect(BreakpointQuery.toMediaQuery('xl+')).toBe('(min-width: 1920px)');
    expect(BreakpointQuery.toMediaQuery('ms-')).toBe('(max-width: 479px)');
  });
});

describe('createRegistry', () => {
  const matchMediaMock = new MatchMediaMock();

  jest.spyOn(matchMediaMock, 'matchMedia');

  it('should works without params', () => {
    expect(() => {
      createRegistry();
    }).not.toThrow();
  });

  it('should works', () => {
    const registry = createRegistry({ matchMedia: matchMediaMock.matchMedia });

    const spy1 = jest.fn();
    const spy2 = jest.fn();
    const spy3 = jest.fn();

    const subscription1 = registry.subscribe('ml+', spy1);
    registry.subscribe('ml+', spy2); // same as first
    registry.subscribe('xs-', spy3);

    expect(matchMediaMock.matchMedia).toHaveBeenCalledTimes(2); // for each unique query

    expect((matchMediaMock.matchMedia as jest.Mock).mock.calls[0][0]).toBe('(min-width: 840px)');
    expect((matchMediaMock.matchMedia as jest.Mock).mock.calls[1][0]).toBe('(max-width: 1023px)');

    matchMediaMock.simulateChange({
      query: '(min-width: 840px)',
      matches: true,
    });
    expect(spy1).toHaveBeenCalledTimes(1);
    expect(spy2).toHaveBeenCalledTimes(1);
    expect(spy3).toHaveBeenCalledTimes(0);

    matchMediaMock.simulateChange({
      query: '(max-width: 1023px)',
      matches: true,
    });
    expect(spy1).toHaveBeenCalledTimes(1);
    expect(spy2).toHaveBeenCalledTimes(1);
    expect(spy3).toHaveBeenCalledTimes(1);

    subscription1.unsubscribe();

    matchMediaMock.simulateChange({
      query: '(min-width: 840px)',
      matches: true,
    });
    expect(spy1).toHaveBeenCalledTimes(1);
    expect(spy2).toHaveBeenCalledTimes(2);
    expect(spy3).toHaveBeenCalledTimes(1);
  });
});
