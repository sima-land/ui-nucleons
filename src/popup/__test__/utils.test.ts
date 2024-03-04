import { popupFloatingConfig } from '../utils';

describe('popupFloatingConfig', () => {
  it('should work without params', () => {
    const result = popupFloatingConfig();

    expect(result.strategy).toBe('absolute');
    expect(result.placement).toBe('right-start');
  });
});
