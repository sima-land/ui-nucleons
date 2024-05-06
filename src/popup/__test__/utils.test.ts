import { popupFloatingConfig } from '../utils';

describe('popupFloatingConfig', () => {
  it('should work without params', () => {
    const result = popupFloatingConfig();
    expect(result.strategy).toBe('absolute');
    expect(result.placement).toBe('right-start');
    expect(result.middleware).toEqual([
      {
        name: 'offset',
        options: 8,
        fn: expect.any(Function),
      },
      {
        name: 'flip',
        options: {
          padding: 16,
          fallbackAxisSideDirection: 'start',
        },
        fn: expect.any(Function),
      },
      {
        name: 'shift',
        options: {
          padding: 16,
        },
        fn: expect.any(Function),
      },
    ]);
  });

  it('should work with params', () => {
    const result = popupFloatingConfig({ placement: 'bottom', offset: 32 });

    expect(result.strategy).toBe('absolute');
    expect(result.placement).toBe('bottom');
    expect(result.middleware).toEqual([
      {
        name: 'offset',
        options: 32,
        fn: expect.any(Function),
      },
      {
        name: 'flip',
        options: {
          padding: 16,
          fallbackAxisSideDirection: 'start',
        },
        fn: expect.any(Function),
      },
      {
        name: 'shift',
        options: {
          padding: 16,
        },
        fn: expect.any(Function),
      },
    ]);
  });
});
