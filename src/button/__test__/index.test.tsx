import React from 'react';
import { Button, computeClassName } from '../index';
import { shallow } from 'enzyme';
import SearchSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/search.js';
import PlusSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/plus.js';

describe('<Button />', () => {
  it('should renders without props', () => {
    const wrapper = shallow(<Button>Кнопка</Button>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should render secondary button', () => {
    const wrapper = shallow(<Button actionType='secondary'>Отмена</Button>);

    expect(wrapper).toMatchSnapshot();
  });
  it('should render icon button', () => {
    const wrapper = shallow(<Button icon={PlusSVG} />);

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ iconPosition: 'end' });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "size" prop', () => {
    const wrapper = shallow(<Button size='small'>Отмена</Button>);

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ size: 'medium' });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "icon" and "iconPosition" props', () => {
    const wrapper = shallow(<Button icon={SearchSVG}>Икать</Button>);

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ iconPosition: 'end' });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ iconPosition: 'start' });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('computeClassName()', () => {
  it('should handle all props', () => {
    expect(computeClassName({
      size: 'small',
      actionType: 'secondary',
      iconPosition: 'end',
      withIcon: true,
      withContent: true,
      className: 'custom-button',
    })).toBe('custom-button button-base button-secondary button-small button-small-with-end-icon');
  });
});
