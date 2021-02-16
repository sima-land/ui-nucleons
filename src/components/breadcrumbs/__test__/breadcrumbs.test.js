import React from 'react';
import { mount } from 'enzyme';
import styles from '../breadcrumbs.scss';
import Breadcrumbs, { createMountHandler } from '../breadcrumbs';
import CSSTransition from 'react-transition-group/CSSTransition';
import Link from '../../link/deprecated';

describe('<Breadcrumbs />', () => {
  it('should render without props', () => {
    const wrapper = mount(<Breadcrumbs />);
    expect(wrapper.find(`ul.${styles.breadcrumbs}`)).toHaveLength(1);
  });
  it('should match snapshot', () => {
    const wrapper = mount(
      <Breadcrumbs
        items={[
          { name: 'First' },
          { name: 'Second' },
          {
            name: 'Third',
            items: [
              { name: 'third child 1' },
              { name: 'third child 2' },
              { name: 'third child 3' },
            ],
          },
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should render top level items', () => {
    const wrapper = mount(
      <Breadcrumbs
        items={[
          { name: 'First' },
          { name: 'Second' },
          { name: 'Third' },
        ]}
      />
    );
    expect(wrapper.find('li')).toHaveLength(3);
    expect(wrapper.find('li').at(0).text()).toContain('First');
    expect(wrapper.find('li').at(1).text()).toContain('Second');
    expect(wrapper.find('li').at(2).text()).toContain('Third');
  });

  it('should render open icon for items with children', () => {
    jest.useFakeTimers();
    const spy = jest.fn();
    const breadcrumb = {
      name: 'First',
      items: [
        { name: 'First child' },
        { name: 'Second child' },
        { name: 'Third child' },
      ],
    };
    const wrapper = mount(
      <Breadcrumbs
        items={[breadcrumb]}
        onOpenBreadcrumbs={spy}
      />
    );

    expect(wrapper.find('li')).toHaveLength(1);
    expect(wrapper.find('svg.toggle-icon')).toHaveLength(1);
    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);

    wrapper.find('svg.toggle-icon').simulate('click');
    expect(wrapper.find(CSSTransition).prop('in')).toBe(true);

    wrapper.find('svg.toggle-icon').at(1).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(breadcrumb);
    jest.advanceTimersByTime(1000);
    expect(wrapper.find(CSSTransition).prop('in')).toBe(false);
    wrapper.find('svg.toggle-icon').at(1).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
    wrapper.find('svg.toggle-icon').simulate('click');
    expect(spy).toHaveBeenCalledTimes(2);
  });
  it('should render active child breadcrumbs with default isActiveChild function', () => {
    const wrapper = mount(
      <Breadcrumbs
        items={[
          {
            name: 'First',
            url: 'href',
            items: [
              { name: 'First child', url: 'href' },
              { name: 'Active', isActive: true },
              { name: 'Third child' },
            ],
          },
          {
            name: 'Active',
            isActive: true,
          },
        ]}
      />
    );
    expect(wrapper.find('li').at(0).find(Link).prop('color')).toBe('dark-gray');
    expect(wrapper.find('li').at(0).find(Link).prop('href')).toBe('href');
    expect(wrapper.find('li').at(0).find(Link).prop('underlined')).toBeFalsy();
    expect(wrapper.find('li').at(1).find('span').text()).toContain('Active');

    wrapper.find('svg.toggle-icon').simulate('click');

    expect(wrapper.find(`.${styles['sibling-item']}`).at(0).find(Link).prop('color')).toBe('dark-gray');
    expect(wrapper.find(`.${styles['sibling-item']}`).at(0).find(Link).prop('href')).toBe('href');
    expect(wrapper.find(`.${styles['sibling-item']}`).at(0).find(Link).prop('underlined')).toBeFalsy();

    expect(wrapper.find(`.${styles['sibling-item']}`).at(1).find('span').text()).toContain('Active');

    expect(wrapper.find(`.${styles['sibling-item']}`).at(2).find(Link).prop('color')).toBe('dark-gray');
    expect(wrapper.find(`.${styles['sibling-item']}`).at(2).find(Link).prop('href')).toBeUndefined();
    expect(wrapper.find(`.${styles['sibling-item']}`).at(2).find(Link).prop('underlined')).toBeFalsy();
  });
  it('should render active child breadcrumbs with custom isActiveChild function', () => {
    const wrapper = mount(
      <Breadcrumbs
        isActiveChild={item => item.name === 'Active'}
        items={[
          {
            name: 'First',
            url: 'href',
            items: [
              { name: 'First child', url: 'href' },
              { name: 'Active' },
              { name: 'Third child' },
            ],
          },
          {
            name: 'Active',
          },
        ]}
      />
    );
    expect(wrapper.find('li').at(0).find(Link).prop('color')).toBe('dark-gray');
    expect(wrapper.find('li').at(0).find(Link).prop('href')).toBe('href');
    expect(wrapper.find('li').at(0).find(Link).prop('underlined')).toBeFalsy();
    expect(wrapper.find('li').at(1).text()).toContain('Active');

    wrapper.find('svg.toggle-icon').simulate('click');

    expect(wrapper.find(`.${styles['sibling-item']}`).at(0).find(Link).prop('color')).toBe('dark-gray');
    expect(wrapper.find(`.${styles['sibling-item']}`).at(0).find(Link).prop('href')).toBe('href');
    expect(wrapper.find(`.${styles['sibling-item']}`).at(0).find(Link).prop('underlined')).toBeFalsy();

    expect(wrapper.find(`.${styles['sibling-item']}`).at(1).text()).toContain('Active');

    expect(wrapper.find(`.${styles['sibling-item']}`).at(2).find(Link).prop('color')).toBe('dark-gray');
    expect(wrapper.find(`.${styles['sibling-item']}`).at(2).find(Link).prop('href')).toBeUndefined();
    expect(wrapper.find(`.${styles['sibling-item']}`).at(2).find(Link).prop('underlined')).toBeFalsy();
  });
  describe('createMountHandler', () => {
    const popupNodeContainer = { current: document.createElement('div') };
    const openerNodeContainer = { current: document.createElement('div') };
    const removeGlobalListener = jest.fn();
    const addGlobalListener = jest.fn(() => removeGlobalListener);
    const togglePopup = jest.fn();
    const mountHandler = createMountHandler([
      popupNodeContainer,
      openerNodeContainer,
      addGlobalListener,
      togglePopup,
    ]);
    expect(typeof mountHandler).toBe('function');
    expect(togglePopup).toHaveBeenCalledTimes(0);
    expect(addGlobalListener).toHaveBeenCalledTimes(0);

    const unmountHandler = mountHandler();
    expect(togglePopup).toHaveBeenCalledTimes(0);
    expect(addGlobalListener).toHaveBeenCalledTimes(2);
    expect(addGlobalListener.mock.calls[0][0]).toBe('click');
    const clickHandler = addGlobalListener.mock.calls[0][1];
    const keyboardHandler = addGlobalListener.mock.calls[1][1];

    clickHandler({ target: document.createElement('span') });
    expect(togglePopup).toHaveBeenCalledTimes(1);
    expect(addGlobalListener).toHaveBeenCalledTimes(2);

    clickHandler({ target: openerNodeContainer.current });
    expect(togglePopup).toHaveBeenCalledTimes(1);
    expect(addGlobalListener).toHaveBeenCalledTimes(2);

    keyboardHandler({ code: 'Enter' });
    expect(togglePopup).toHaveBeenCalledTimes(1);
    expect(addGlobalListener).toHaveBeenCalledTimes(2);

    keyboardHandler({ code: 'Escape' });
    expect(togglePopup).toHaveBeenCalledTimes(2);
    expect(addGlobalListener).toHaveBeenCalledTimes(2);

    expect(removeGlobalListener).toHaveBeenCalledTimes(0);
    unmountHandler();
    expect(togglePopup).toHaveBeenCalledTimes(2);
    expect(addGlobalListener).toHaveBeenCalledTimes(2);
    expect(removeGlobalListener).toHaveBeenCalledTimes(2);
  });
});
