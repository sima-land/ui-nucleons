import React from 'react';
import { shallow } from 'enzyme';
import BorderedLayout from '../';
import styles from '../bordered-layout.scss';

describe('<BoBorderedLayoutrder />', () => {
  it('without props', () => {
    const component = shallow(<BorderedLayout />);
    expect(component.find('div').at(0).hasClass(styles['disable-border-top'])).toBeTruthy();
    expect(component.find('div').at(0).hasClass(styles['disable-border-bottom'])).toBeTruthy();
    expect(component.find('div').at(1).hasClass(styles['disable-border-top'])).toBeTruthy();
    expect(component.find('div').at(1).hasClass(styles[['disable-border-bottom']])).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
  it('with props', () => {
    const component = shallow(
      <BorderedLayout
        top
        bottom
      />
    );
    expect(component.find('div')).toHaveLength(2);
    expect(component.find('div').at(0).hasClass(styles.base)).toBeTruthy();
    expect(component.find('div').at(0).hasClass(styles.outer)).toBeTruthy();
    expect(component.find('div').at(1).hasClass(styles.base)).toBeTruthy();
    expect(component.find('div').at(1).hasClass(styles.inner)).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
