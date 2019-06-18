import React from 'react';
import { shallow } from 'enzyme';
import PopupArrow from '../';

let arrow;

describe('<PopupArrow />', () => {
  it('renders correctly', () => {
    arrow = shallow(<PopupArrow />);
    expect(arrow).toMatchSnapshot();
    arrow = shallow(<PopupArrow shadow color='dark-blue' direction='bottom' />);
    expect(arrow).toMatchSnapshot();
    arrow = shallow(<PopupArrow color='dark-blue' className='test-class' direction='top' />);
    expect(arrow).toMatchSnapshot();
  });

  it('has correct attributes', () => {
    arrow = shallow(<PopupArrow className='test' shadow position={{ top: '10px', left: '100px' }} />);
    expect(arrow.find('span').prop('style')).toEqual({ top: '10px', left: '100px' });
  });
});
