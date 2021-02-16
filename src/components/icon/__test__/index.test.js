import Icon from '../';
import React from 'react';
import { mount } from 'enzyme';
import CarSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/car';
import StubSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/search';

describe('<Icon />', () => {
  it('should renders correctly with image-cap', () => {
    const spy = jest.fn();
    const icon = mount(
      <Icon
        color='brand-blue'
        size={20}
        className='test'
        onClick={spy}
      />
    );

    expect(icon.find('svg')).toHaveLength(1);
    expect(icon.find('svg').prop('className')).toBe('icon icon-block color__brand-blue test');
    expect(icon.find('svg').prop('onClick')).toBe(spy);
    expect(icon.find(StubSVG)).toHaveLength(1);
    expect(icon).toMatchSnapshot();
  });
  it('should renders correctly with icon prop', () => {
    const spy = jest.fn();
    const icon = mount(
      <Icon
        icon={CarSVG}
        color='brand-blue'
        className='test'
        inline
        onClick={spy}
      />
    );

    expect(icon.find(CarSVG)).toHaveLength(1);
    expect(icon).toMatchSnapshot();
  });
});
