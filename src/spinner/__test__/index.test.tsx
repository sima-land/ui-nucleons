import React from 'react';
import { render } from '@testing-library/react';
import { Spinner, DIAMETERS } from '..';
import { COLORS } from '../../colors';

describe('Spinner', () => {
  it('should render component', () => {
    const { queryAllByTestId } = render(<Spinner />);

    expect(queryAllByTestId('spinner')).toHaveLength(1);
  });

  it('should render component with different sizes', () => {
    const { container, rerender } = render(<Spinner />);

    expect(container.querySelector('svg')?.classList.contains('size-m')).toBe(true);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe(String(DIAMETERS.m));

    rerender(<Spinner size='s' />);
    expect(container.querySelector('svg')?.classList.contains('size-s')).toBe(true);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe(String(DIAMETERS.s));

    rerender(<Spinner size='m' />);
    expect(container.querySelector('svg')?.classList.contains('size-m')).toBe(true);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe(String(DIAMETERS.m));

    rerender(<Spinner size='l' />);
    expect(container.querySelector('svg')?.classList.contains('size-l')).toBe(true);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe(String(DIAMETERS.l));

    rerender(<Spinner size={'invalid' as any} />);
    expect(container.querySelector('svg')?.classList.contains('size-m')).toBe(true);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe(String(DIAMETERS.m));
  });

  it('should render component with different colors', () => {
    const { container, rerender } = render(<Spinner />);

    expect(container.querySelector('svg')?.getAttribute('stroke')).toBe(COLORS.get('basic-blue'));

    rerender(<Spinner color='basic-white' />);
    expect(container.querySelector('svg')?.getAttribute('stroke')).toBe(COLORS.get('basic-white'));

    rerender(<Spinner color='basic-gray87' />);
    expect(container.querySelector('svg')?.getAttribute('stroke')).toBe(COLORS.get('basic-gray87'));
  });
});
