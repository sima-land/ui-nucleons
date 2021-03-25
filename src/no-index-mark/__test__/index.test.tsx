import React from 'react';
import { shallow } from 'enzyme';
import NoIndexMark from '../';

describe('<NoIndexMark />', () => {
  it('should renders correctly without prop', () => {
    const elem = shallow(<NoIndexMark />);
    expect(elem.html()).toEqual('<span><!--noindex--></span>');
    expect(elem).toMatchSnapshot();
  });

  it('should renders correctly with prop "closed"', () => {
    const elem = shallow(<NoIndexMark closing />);
    expect(elem.html()).toEqual('<span><!--/noindex--></span>');
    expect(elem).toMatchSnapshot();
  });
});
