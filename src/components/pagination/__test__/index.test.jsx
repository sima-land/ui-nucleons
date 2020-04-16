import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Pagination from '../index';
import { BasePagination } from '../base-pagination';

describe('<Pagination />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Pagination />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "onChange" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Pagination
        total={123}
        current={23}
        onChange={spy}
      />
    );

    expect(wrapper).toMatchSnapshot();

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find(BasePagination).prop('onButtonClick')(22);
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
