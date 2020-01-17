import React from 'react';
import { mount } from 'enzyme';
import Wish from '../';
import Icon from '../../icon';
import Link from '../../link';
import classes from '../wish.scss';

describe('<Wish />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Wish />
    );
    expect(wrapper.find(`a.${classes.wrap}`)).toHaveLength(1);
    expect(wrapper.find(`svg.${classes['icon-no-fill']}`)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
  });
  it('should handle "isChecked" prop', () => {
    const wrapper = mount(
      <Wish
        isChecked
      />
    );
    expect(wrapper.find(`svg.${classes.active}`)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(1);
  });

  it('should change link text', () => {
    const wrapper = mount(
      <Wish
        isDisplayText
        isChecked
      />
    );

    expect(wrapper.find(`svg.${classes['icon-fill']}`)).toHaveLength(1);
    expect(wrapper.text()).toBe('В избранном');
    expect(wrapper.find(Link).prop('aria-label')).toBe('Убрать из избранного');
    expect(wrapper.find(`svg.${classes.active}`)).toHaveLength(1);

    wrapper.setProps({ isChecked: false });

    expect(wrapper.text()).toBe('В избранное');
    expect(wrapper.find(Link).prop('aria-label')).toBe('Добавить в избранное');
    expect(wrapper.find(`svg.${classes.active}`)).toHaveLength(0);
  });

  it('should add className "touch" if device is support touches', () => {
    window.ontouchstart = jest.fn();
    const elected = mount(<Wish />);

    expect(elected.find(Link).prop('className')).toBe('wrap touch');
  });

  it('should match snapshot', () => {
    const wrapper = mount(
      <Wish
        isChecked
        onClear={() => {}}
        size={36}
        isDisplayText
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
