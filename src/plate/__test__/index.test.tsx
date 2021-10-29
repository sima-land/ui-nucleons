import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { Plate } from '..';
import { act } from 'react-dom/test-utils';

describe('Plate', () => {
  it('should renders without props', () => {
    const wrapper = mount(<Plate />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const ref = createRef<HTMLInputElement | null>();
    const spy = jest.fn();

    const wrapper = mount(
      <Plate ref={ref} shadow='z3' rounds='m' className='test-class' onClick={spy}>
        Test
      </Plate>,
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div.test-class')).toHaveLength(1);
    expect(wrapper.find('div.test-class').getDOMNode()).toBe(ref.current);

    expect(wrapper.find('div[data-testid="plate"]')).toHaveLength(1);
    expect(wrapper.find('div[data-testid="plate"]').getDOMNode()).toBe(ref.current);

    expect(spy).toBeCalledTimes(0);
    act(() => {
      wrapper.find('div').simulate('click');
    });
    expect(spy).toBeCalledTimes(1);
  });

  it('should handle "data-testid" prop', () => {
    const ref = createRef<HTMLInputElement | null>();
    const spy = jest.fn();

    const wrapper = mount(
      <Plate
        ref={ref}
        shadow='z3'
        rounds='m'
        className='test-class'
        onClick={spy}
        data-testid='test-plate'
      >
        Test
      </Plate>,
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div.test-class')).toHaveLength(1);
    expect(wrapper.find('div.test-class').getDOMNode()).toBe(ref.current);

    expect(wrapper.find('div[data-testid="test-plate"]')).toHaveLength(1);
    expect(wrapper.find('div[data-testid="test-plate"]').getDOMNode()).toBe(ref.current);

    expect(spy).toBeCalledTimes(0);
    act(() => {
      wrapper.find('div').simulate('click');
    });
    expect(spy).toBeCalledTimes(1);
  });

  it('should renders with small rounds', () => {
    const wrapper = mount(<Plate rounds='s'>Test</Plate>);

    expect(wrapper).toMatchSnapshot();
  });
});
