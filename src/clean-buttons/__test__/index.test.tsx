import React from 'react';
import { mount } from 'enzyme';
import { Clean } from '../index';

describe('<Clean.Button />', () => {
  it('should render without props', () => {
    const wrapper = mount(<Clean.Button />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(<Clean.Button href='https://site.com' children='Go to site' />);

    expect(wrapper.find('button')).toHaveLength(0);
    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ href: null, asLink: true });

    expect(wrapper.find('button')).toHaveLength(0);
    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<Clean.Group />', () => {
  it('should render without props', () => {
    const wrapper = mount(<Clean.Group />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props (1)', () => {
    const wrapper = mount(
      <Clean.Group>
        <Clean.Button>Foo</Clean.Button>
        <Clean.Button>Bar</Clean.Button>
        <Clean.Button href='https://www.abc.xyz'>XYZ</Clean.Button>
        <button>Just button</button>
      </Clean.Group>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props (2)', () => {
    const wrapper = mount(
      <Clean.Group>
        <Clean.Button>One button</Clean.Button>
      </Clean.Group>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
