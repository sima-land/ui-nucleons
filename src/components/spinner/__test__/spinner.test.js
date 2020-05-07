import React from 'react';
import { mount } from 'enzyme';
import { Spinner } from '../../spinner/spinner';

describe('<Spinner />', () => {
  it('should render component', () => {
    const component = mount(
      <Spinner />
    );

    expect(component).toMatchSnapshot();
  });

  it('should render component with different sizes', () => {
    const component = mount(
      <Spinner />
    );

    expect(component.find('svg').hasClass('size-medium')).toBe(true);
    expect(component).toMatchSnapshot();

    component.setProps({ size: 'small' });
    expect(component.find('svg').hasClass('size-small')).toBe(true);
    expect(component).toMatchSnapshot();

    component.setProps({ size: 'medium' });
    expect(component.find('svg').hasClass('size-medium')).toBe(true);
    expect(component).toMatchSnapshot();

    component.setProps({ size: 'large' });
    expect(component.find('svg').hasClass('size-large')).toBe(true);
    expect(component).toMatchSnapshot();

    component.setProps({ size: 'test' });
    expect(component.find('svg').hasClass('size-medium')).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
