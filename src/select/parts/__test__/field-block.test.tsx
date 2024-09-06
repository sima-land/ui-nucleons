import { fireEvent, getByTestId, render } from '@testing-library/react';
import { Select } from '../..';
import { SelectFieldBlock } from '../field-block';
import { DropdownItem } from '../../../dropdown-item';

describe('SelectFieldBlock', () => {
  it('should handle onBlur prop', () => {
    const spy = jest.fn();

    const { container } = render(
      <Select opener={<SelectFieldBlock blockProps={{ onBlur: spy }} />}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );

    expect(getByTestId(container, 'field-block').classList.contains('focused')).toBe(false);
    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.focus(getByTestId(container, 'field-block:block'));
    expect(getByTestId(container, 'field-block').classList.contains('focused')).toBe(true);
    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.blur(getByTestId(container, 'field-block:block'));
    expect(getByTestId(container, 'field-block').classList.contains('focused')).toBe(false);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
