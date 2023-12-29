import { getResponsiveModalProps } from '../utils';

describe('getResponsiveModalProps', () => {
  it('should handle "size" option', () => {
    const result = getResponsiveModalProps({ size: 'xl' });

    expect(result).toEqual({
      size: 'unset',
      rounds: 'unset',
      overlayProps: {
        className: 'size-xl',
      },
    });
  });

  it('should handle "className" option', () => {
    const result = getResponsiveModalProps({
      size: 's',
      overlayProps: { className: 'custom-class' },
    });

    expect(result).toEqual({
      size: 'unset',
      rounds: 'unset',
      overlayProps: {
        className: 'size-s custom-class',
      },
    });
  });
});
