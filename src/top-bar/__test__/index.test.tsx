import React from 'react';
import { mount } from 'enzyme';
import { TopBar } from '..';
import { mapValues } from 'lodash';
import * as TestProps from './test-props';

describe('<TopBar />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <TopBar />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render as divided', () => {
    const wrapper = mount(
      <TopBar divided />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with title and subtitle', () => {
    const wrapper = mount(
      <TopBar {...TestProps.shortTitles} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "size" prop', () => {
    const wrapper = mount(
      <TopBar {...TestProps.shortTitles} />
    );

    TestProps.sizes.forEach(size => {
      wrapper.setProps({ size });
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should renders with start icon', () => {
    const wrapper = mount(
      <TopBar
        buttonsProps={{ start: TestProps.allButtons.start }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with end icon', () => {
    const wrapper = mount(
      <TopBar
        buttonsProps={{ end: TestProps.allButtons.end }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with start icons', () => {
    const wrapper = mount(
      <TopBar
        buttonsProps={TestProps.startButtons}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with end icons', () => {
    const wrapper = mount(
      <TopBar
        buttonsProps={TestProps.endButtons}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with all icons', () => {
    const buttonProps = mapValues(TestProps.allButtons, p => ({ ...p, onClick: jest.fn() }));

    const wrapper = mount(
      <TopBar
        buttonsProps={buttonProps}
      />
    );

    expect(wrapper).toMatchSnapshot();

    // start
    wrapper.find('.icon-button').at(0).simulate('click');
    expect(buttonProps.start.onClick).toBeCalledTimes(1);

    // start secondary
    wrapper.find('.icon-button').at(1).simulate('click');
    expect(buttonProps.startSecondary.onClick).toBeCalledTimes(1);

    // end
    wrapper.find('.icon-button').at(2).simulate('click');
    expect(buttonProps.endSecondary.onClick).toBeCalledTimes(1);

    // end secondary
    wrapper.find('.icon-button').at(3).simulate('click');
    expect(buttonProps.end.onClick).toBeCalledTimes(1);
  });
});
