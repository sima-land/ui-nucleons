import React from 'react';
import { fireEvent, getByTestId, queryAllByTestId, render } from '@testing-library/react';
import { SelectTextButton } from '../button';
import { Select } from '../../select';
import { DropdownItem } from '../../../dropdown-item';

describe('SelectTextButton', () => {
  it('should handle onKeyDown properly', () => {
    const spy = jest.fn();

    const { container, baseElement } = render(
      <Select opener={<SelectTextButton onKeyDown={spy} />}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );

    expect(spy).toBeCalledTimes(0);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    fireEvent.keyDown(getByTestId(container, 'select:opener'), { code: 'Enter' });
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(spy).toBeCalledTimes(1);
  });
});
