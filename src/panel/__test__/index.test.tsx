import React from 'react';
import { mount } from 'enzyme';
import { Panel } from '..';
import InformationSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/information.js';
import { render } from '@testing-library/react';

describe('<Panel />', () => {
  it('should renders without props', () => {
    const wrapper = mount(<Panel />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <Panel
        color='white'
        contentColor='additional-red'
        inline
        icon={InformationSVG}
        className='test-class'
        children='Hello, world!'
      />,
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({
      children: null,
      html: 'Lorem <i>ipsum</i> <b>dolor</b> sit.',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "data-testid"', () => {
    const { container } = render(<Panel data-testid='other-panel'>Hello, world!</Panel>);

    expect(container.querySelectorAll('[data-testid="modal"]')).toHaveLength(0);
    expect(container.querySelectorAll('[data-testid="other-panel"]')).toHaveLength(1);
  });
});
