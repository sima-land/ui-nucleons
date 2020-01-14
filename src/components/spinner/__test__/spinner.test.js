import React from 'react';
import classes from '../spinner.scss';
import classnames from 'classnames/bind';
import Icon from '../../icon';
import { mount, shallow } from 'enzyme';
import Spinner, { SIZES } from '../../spinner/spinner';

const cx = classnames.bind(classes);

describe('<Spinner />', () => {
  it('should render component', () => {
    const component = mount(<Spinner />);
    const icon = component.find(Icon);

    expect(Object.keys(icon.props())).toEqual([
      'icon',
      'size',
      'className',
    ]);
    expect(icon.prop('size')).toEqual(SIZES.medium);
    expect(icon.prop('className')).toEqual(cx('icon'));
    expect(component.find('spinnerIcon')).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });

  it('should render component with different sizes', () => {
    const component = shallow(<Spinner />);

    expect(component.find(Icon).prop('size')).toEqual(SIZES.medium);

    component.setProps({ size: 'small' });
    expect(component.find(Icon).prop('size')).toEqual(SIZES.small);

    component.setProps({ size: 'medium' });
    expect(component.find(Icon).prop('size')).toEqual(SIZES.medium);

    component.setProps({ size: 'big' });
    expect(component.find(Icon).prop('size')).toEqual(SIZES.big);

    component.setProps({ size: 'test' });
    expect(component.find(Icon).prop('size')).toEqual(SIZES.medium);
  });
});
