import React from 'react';
import { shallow } from 'enzyme';
import Popup from '../';

describe('<Popup/>', () => {
  it('renders correctly', () => {
    const popup = shallow(<Popup additionalClass='test-class'><p>какой-то текст</p></Popup>);
    expect(popup).toMatchSnapshot();
  });
});
