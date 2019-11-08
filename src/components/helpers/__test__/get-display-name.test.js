import getDisplayName from '../get-display-name';

describe('getDisplayName()', () => {
  it('should return "displayName" property', () => {
    expect(getDisplayName({ displayName: 'Test' })).toBe('Test');
  });
  it('should return "name" property', () => {
    expect(getDisplayName({ name: 'Test' })).toBe('Test');
  });
  it('should return default placeholder', () => {
    expect(getDisplayName({})).toBe('Unknown');
    expect(getDisplayName(null)).toBe('Unknown');
  });
  it('should handle second argument as placeholder', () => {
    expect(getDisplayName({}, 'Component')).toBe('Component');
    expect(getDisplayName(undefined, 'Component')).toBe('Component');
  });
});
