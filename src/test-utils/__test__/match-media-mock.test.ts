import { MatchMediaMock, MediaQueryListMock, MediaQueryListEventMock } from '../match-media-mock';

describe('MatchMediaMock', () => {
  it('should works', () => {
    const mock = new MatchMediaMock();

    const mql = mock.matchMedia('(max-width: 200px)');
    const spy = jest.fn();

    mql.addEventListener('change', spy);
    expect(spy).toHaveBeenCalledTimes(0);

    mock.simulateChange({ query: '(min-width: 100px)', matches: true });
    expect(spy).toHaveBeenCalledTimes(0);

    mock.simulateChange({ query: '(max-width: 200px)', matches: true });
    expect(spy).toHaveBeenCalledTimes(1);

    mql.removeEventListener('change', spy);
    expect(spy).toHaveBeenCalledTimes(1);

    mock.simulateChange({ query: '(max-width: 200px)', matches: true });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should implement deprecated methods', () => {
    const mock = new MatchMediaMock();

    const mql = mock.matchMedia('(max-width: 200px)');
    const spy = jest.fn();

    mql.addListener(spy);
    mql.addListener(null);
    expect(spy).toHaveBeenCalledTimes(0);

    mock.simulateChange({ query: '(min-width: 100px)', matches: true });
    expect(spy).toHaveBeenCalledTimes(0);

    mock.simulateChange({ query: '(max-width: 200px)', matches: true });
    expect(spy).toHaveBeenCalledTimes(1);

    mql.removeListener(spy);
    mql.removeListener(null);
    expect(spy).toHaveBeenCalledTimes(1);

    mock.simulateChange({ query: '(max-width: 200px)', matches: true });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('MediaQueryListMock', () => {
  it('constructor should handle non string as query parameter', () => {
    const mql = new MediaQueryListMock(123 as unknown as string, false);

    expect(mql.media).toBe('not all');
  });
});

describe('MediaQueryListEventMock', () => {
  it('should handle empty init', () => {
    const event = new MediaQueryListEventMock('change');

    expect(event.media).toBe('');
    expect(event.matches).toBe(false);
  });
});
