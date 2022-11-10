import React from 'react';
import { fireEvent, getByTestId, render } from '@testing-library/react';
import { Select } from '../..';
import { SelectFieldBlock } from '../block';
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

    expect(getByTestId(container, 'field').classList.contains('focused')).toBe(false);
    expect(spy).toBeCalledTimes(0);

    fireEvent.focus(getByTestId(container, 'select:opener'));
    expect(getByTestId(container, 'field').classList.contains('focused')).toBe(true);
    expect(spy).toBeCalledTimes(0);

    fireEvent.blur(getByTestId(container, 'select:opener'));
    expect(getByTestId(container, 'field').classList.contains('focused')).toBe(false);
    expect(spy).toBeCalledTimes(1);
  });
});
