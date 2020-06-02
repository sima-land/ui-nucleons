import React from 'react';
import { mount } from 'enzyme';
import TopBar from '../index';
import { sizes, shortTitles, allButtons, startButtons, endButtons } from '../__test__/props.jsx';

describe('<TopBar />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <TopBar />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with title and subtitle', () => {
    const wrapper = mount(
      <TopBar {...shortTitles} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "size" prop', () => {
    const wrapper = mount(
      <TopBar {...shortTitles} />
    );

    sizes.forEach(size => {
      wrapper.setProps({ size });
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should renders with start icon', () => {
    const wrapper = mount(
      <TopBar
        buttonsProps={{ start: allButtons.start }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with end icon', () => {
    const wrapper = mount(
      <TopBar
        buttonsProps={{ end: allButtons.end }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with start icons', () => {
    const wrapper = mount(
      <TopBar
        buttonsProps={startButtons}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with end icons', () => {
    const wrapper = mount(
      <TopBar
        buttonsProps={endButtons}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with all icons', () => {
    const spy = jest.spyOn(console, 'log');
    const wrapper = mount(
      <TopBar
        buttonsProps={allButtons}
      />
    );
    const buttons = wrapper.find('.icon-button');
    const startButton = buttons.at(0);
    const startSecondaryButton = buttons.at(1);
    const endSecondaryButton = buttons.at(2);
    const endButton = buttons.at(3);

    startButton.simulate('click');
    expect(spy).toHaveBeenNthCalledWith(1, 'The click to the start button was handled');

    startSecondaryButton.simulate('click');
    expect(spy).toHaveBeenNthCalledWith(2, 'The click to the start secondary button was handled');

    endSecondaryButton.simulate('click');
    expect(spy).toHaveBeenNthCalledWith(3, 'The click to the end secondary button was handled');

    endButton.simulate('click');
    expect(spy).toHaveBeenNthCalledWith(4, 'The click to the end button was handled');

    expect(wrapper).toMatchSnapshot();
  });
});
