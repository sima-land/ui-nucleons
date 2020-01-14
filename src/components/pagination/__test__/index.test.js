import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Pagination from '../index';
import { BasePagination, BUTTON_CONTENTS } from '../base-pagination';
import { PageSelectForm } from '../page-select-form';
import { PageButton } from '../page-button';

describe('<Pagination />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Pagination />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should toggle form and page buttons', () => {
    const wrapper = mount(
      <Pagination
        total={123}
        current={23}
      />
    );

    expect(wrapper.find(BasePagination)).toHaveLength(1);
    expect(wrapper.find(PageSelectForm)).toHaveLength(0);

    act(() => {
      wrapper
        .find(PageButton)
        .filterWhere(el => el.prop('children') === BUTTON_CONTENTS.more)
        .at(0)
        .prop('onClick')();
    });
    wrapper.update();

    expect(wrapper.find(BasePagination)).toHaveLength(0);
    expect(wrapper.find(PageSelectForm)).toHaveLength(1);

    act(() => {
      wrapper
        .find(PageSelectForm)
        .prop('onClose')();
    });
    wrapper.update();

    expect(wrapper.find(BasePagination)).toHaveLength(1);
    expect(wrapper.find(PageSelectForm)).toHaveLength(0);

    act(() => {
      wrapper.find(BasePagination).prop('onButtonClick')(BUTTON_CONTENTS.more);
    });
    wrapper.update();

    expect(wrapper.find(BasePagination)).toHaveLength(0);
    expect(wrapper.find(PageSelectForm)).toHaveLength(1);
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

    expect(spy).toHaveBeenCalledTimes(0);
    act(() => {
      wrapper.find(BasePagination).prop('onButtonClick')(22);
    });
    wrapper.update();
    expect(spy).toHaveBeenCalledTimes(1);

    act(() => {
      wrapper
        .find(PageButton)
        .filterWhere(el => el.prop('children') === BUTTON_CONTENTS.more)
        .at(0)
        .prop('onClick')();
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
    act(() => {
      wrapper.find(PageSelectForm).prop('onSubmit')({ value: 24 });
    });
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
