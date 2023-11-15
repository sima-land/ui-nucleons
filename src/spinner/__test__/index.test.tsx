import { render } from '@testing-library/react';
import { Spinner, SPINNER_DIAMETER, SpinnerSVG } from '..';
import { COLORS } from '../../colors';

describe('Spinner', () => {
  it('should render component', () => {
    const { queryAllByTestId } = render(<Spinner />);

    expect(queryAllByTestId('spinner')).toHaveLength(1);
  });

  it('should render component with different sizes', () => {
    const { container, rerender } = render(<Spinner />);

    expect(container.querySelector('svg')?.classList.contains('size-m')).toBe(true);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe(String(SPINNER_DIAMETER.m));

    rerender(<Spinner size='s' />);
    expect(container.querySelector('svg')?.classList.contains('size-s')).toBe(true);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe(String(SPINNER_DIAMETER.s));

    rerender(<Spinner size='m' />);
    expect(container.querySelector('svg')?.classList.contains('size-m')).toBe(true);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe(String(SPINNER_DIAMETER.m));

    rerender(<Spinner size='l' />);
    expect(container.querySelector('svg')?.classList.contains('size-l')).toBe(true);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe(String(SPINNER_DIAMETER.l));

    rerender(<Spinner size={'invalid' as any} />);
    expect(container.querySelector('svg')?.classList.contains('size-m')).toBe(true);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe(String(SPINNER_DIAMETER.m));
  });

  it('should render component with different colors', () => {
    const { container, rerender } = render(<Spinner />);

    expect(container.querySelector('svg')?.getAttribute('stroke')).toBe(COLORS.get('basic-blue'));

    rerender(<Spinner color='basic-white' />);
    expect(container.querySelector('svg')?.getAttribute('stroke')).toBe(COLORS.get('basic-white'));

    rerender(<Spinner color='basic-gray87' />);
    expect(container.querySelector('svg')?.getAttribute('stroke')).toBe(COLORS.get('basic-gray87'));
  });

  it('should use default color for invalid token in "color" prop', () => {
    const { container } = render(<Spinner color={'invalid' as any} />);
    expect(container.querySelector('svg')?.getAttribute('stroke')).toBe(COLORS.get('basic-blue'));
  });

  it('should handle "data-testid" prop', () => {
    const { queryAllByTestId } = render(<Spinner data-testid='MY_SPINNER' />);
    expect(queryAllByTestId('MY_SPINNER')).toHaveLength(1);
  });
});

describe('SpinnerSVG', () => {
  it('should render component', () => {
    const { queryAllByTestId, getByTestId } = render(<SpinnerSVG />);

    expect(queryAllByTestId('spinner')).toHaveLength(1);
    expect(getByTestId('spinner') instanceof SVGSVGElement).toBe(true);
    expect(getByTestId('spinner').getAttribute('stroke')).toBe(COLORS.get('basic-blue'));
    expect(getByTestId('spinner').classList).toContain('size-m');
  });

  it('should handle "data-testid" prop', () => {
    const { queryAllByTestId } = render(<SpinnerSVG data-testid='MY_SPINNER222' />);
    expect(queryAllByTestId('MY_SPINNER222')).toHaveLength(1);
  });
});
