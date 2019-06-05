import Phone from '../phone';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Phone />', () => {
  it('phone should have correct href and text', () => {
    const phone = shallow(<Phone phone='8(343)777-777' />);
    expect(phone.text()).toBe('8(343)777-777');
    expect(phone).toMatchSnapshot();
  });
});
