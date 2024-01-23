import { it, expect, describe, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { Checkbox } from '..';

describe('Checkbox', () => {
  it('should render without props', () => {
    const { getByRole, queryAllByRole } = render(<Checkbox />);

    expect(queryAllByRole('checkbox')).toHaveLength(1);
    expect(getByRole('checkbox').getAttribute('type')).toBe('checkbox');
  });

  it('should renders as disabled', () => {
    const { getByRole } = render(<Checkbox disabled />);

    expect((getByRole('checkbox') as HTMLInputElement).disabled).toBe(true);
  });

  it('should handle "defaultChecked" prop', () => {
    const { getByRole } = render(<Checkbox defaultChecked />);

    expect((getByRole('checkbox') as HTMLInputElement).checked).toBe(true);
  });

  it('should handle "id" property', () => {
    const { getByRole } = render(<Checkbox id='test-checkbox' />);

    expect(getByRole('checkbox').id).toBe('test-checkbox');
  });

  it('should handle "onChange" property', () => {
    const spy = jest.fn();

    const { getByRole, rerender } = render(<Checkbox onChange={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.click(getByRole('checkbox'));
    expect(spy).toHaveBeenCalledTimes(1);

    rerender(<Checkbox onChange={undefined} />);
    expect(() => {
      fireEvent.change(getByRole('checkbox'));
    }).not.toThrow();
  });

  it('should pass "className" prop', () => {
    const { container } = render(<Checkbox className='test-class-name' />);

    expect((container.querySelector('.root') as HTMLElement).className).toContain(
      'test-class-name',
    );
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(<Checkbox data-testid='my-specific-checkbox' />);

    expect(queryAllByTestId('checkbox')).toHaveLength(0);
    expect(queryAllByTestId('my-specific-checkbox')).toHaveLength(1);
  });
});
