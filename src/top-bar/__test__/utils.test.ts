import { presetButtons } from '../utils';

describe('presetButtons', () => {
  it('should handle callbacks', () => {
    const onBack = jest.fn();
    const onClose = jest.fn();
    const result = presetButtons({ onBack, onClose });

    expect(result?.start?.['data-testid']).toBe('top-bar:back');
    expect(result?.start?.onClick).toBe(onBack);
    expect(result?.end?.['data-testid']).toBe('top-bar:close');
    expect(result?.end?.onClick).toBe(onClose);
  });
});
