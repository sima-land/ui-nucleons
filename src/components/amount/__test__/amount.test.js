import React from 'react';
import { mount } from 'enzyme';
import Amount from '../amount';
import Icon from '../../icon';
import classes from '../amount.scss';

describe('<Amount />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Amount />
    );
    expect(wrapper.find(`div.${classes['amount-container']}`)).toHaveLength(1);
  });
  it('should handle "withControls" prop', () => {
    const wrapper = mount(
      <Amount
        withControls
      />
    );
    expect(wrapper.find(`.${classes.button}`)).toHaveLength(2);
    expect(wrapper.find(`.${classes['clear-icon-wrapper']}`)).toHaveLength(1);
    wrapper.setProps({ withControls: false });
    expect(wrapper.find(`.${classes.button}`)).toHaveLength(0);
    expect(wrapper.find(`.${classes['clear-icon-wrapper']}`)).toHaveLength(0);
    wrapper.setProps({ withControls: undefined });
    expect(wrapper.find(`.${classes.button}`)).toHaveLength(2);
    expect(wrapper.find(`.${classes['clear-icon-wrapper']}`)).toHaveLength(1);
  });
  it('should handle "withPlus" prop', () => {
    const wrapper = mount(
      <Amount
        withPlus
      />
    );
    expect(wrapper.find(`.${classes['add-button']}`)).toHaveLength(1);
    wrapper.setProps({ withPlus: false });
    expect(wrapper.find(`.${classes['add-button']}`)).toHaveLength(0);
    wrapper.setProps({ withPlus: undefined });
    expect(wrapper.find(`.${classes['add-button']}`)).toHaveLength(1);
  });
  it('should handle "withMinus" prop', () => {
    const wrapper = mount(
      <Amount
        withMinus
      />
    );
    expect(wrapper.find(`.${classes['subtract-button']}`)).toHaveLength(1);
    wrapper.setProps({ withMinus: false });
    expect(wrapper.find(`.${classes['subtract-button']}`)).toHaveLength(0);
    wrapper.setProps({ withMinus: undefined });
    expect(wrapper.find(`.${classes['subtract-button']}`)).toHaveLength(1);
  });
  it('should handle "withCross" prop', () => {
    const wrapper = mount(
      <Amount
        withCross
      />
    );
    expect(wrapper.find(`.${classes['clear-icon-wrapper']}`)).toHaveLength(1);
    wrapper.setProps({ withCross: false });
    expect(wrapper.find(`.${classes['clear-icon-wrapper']}`)).toHaveLength(0);
    wrapper.setProps({ withCross: undefined });
    expect(wrapper.find(`.${classes['clear-icon-wrapper']}`)).toHaveLength(1);
  });
  it('onAdd', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Amount
        onAdd={spy}
      />
    );
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(`.${classes['add-button']}`).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('onSubtract', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Amount
        onSubtract={spy}
      />
    );
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(`.${classes['subtract-button']}`).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('onClear', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Amount
        onClear={spy}
      />
    );
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(`.${classes['clear-icon-wrapper']}`).find(Icon).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should match snapshot', () => {
    const wrapper = mount(
      <Amount
        value={123}
        onClear={() => {}}
        onAdd={() => {}}
        onSubtract={() => {}}
        onChange={() => {}}
        withControls
        alwaysShowCross={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
