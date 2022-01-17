import React from 'react';
import { mount } from 'enzyme';
import { DropdownItem, DropdownItemProps } from '..';
import { render } from '@testing-library/react';

describe('DropdownItem', () => {
  it('should render without props', () => {
    const wrapper = mount(<DropdownItem />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render as disabled', () => {
    const wrapper = mount(<DropdownItem disabled />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render as checked', () => {
    const wrapper = mount(<DropdownItem checked />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with no hover effect', () => {
    const wrapper = mount(<DropdownItem noHover />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <DropdownItem className='hello' role='test-role' size='l'>
        Hello, world!
      </DropdownItem>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle size prop', () => {
    const SIZES: Array<DropdownItemProps['size']> = ['s', 'm', 'l', 'xl'];

    SIZES.forEach(size => {
      const wrapper = mount(<DropdownItem size={size} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should handle "data-testid"', () => {
    const { queryAllByTestId } = render(<DropdownItem size='s' data-testid='custom-item' />);

    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);
    expect(queryAllByTestId('custom-item')).toHaveLength(1);
  });
});
