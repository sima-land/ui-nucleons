import Button from '../button';
import React from 'react';
import { mount, shallow } from 'enzyme';

describe('<Button />', () => {
  it('renders button correctly', () => {
    const button = mount(
      <Button
        className='test-class'
        cssParams={{ color: 'white', shape: 'rounded' }}
      >
        Кнопка
      </Button>
    );
    expect(button).toMatchSnapshot();
  });
  it('calls functions onClick, onMouseEnter, onMouseLeave', () => {
    const onClickFunc = jest.fn(),
      onMouseEnterFunc = jest.fn(),
      onMouseLeaveFunc = jest.fn();
    const button = shallow(
      <Button
        onClick={onClickFunc}
        onMouseEnter={onMouseEnterFunc}
        onMouseLeave={onMouseLeaveFunc}
      >
        Кнопка
      </Button>
    );
    button.simulate('click');
    expect(onClickFunc).toHaveBeenCalledTimes(1);
    button.simulate('mouseEnter');
    expect(onMouseEnterFunc).toHaveBeenCalledTimes(1);
    button.simulate('mouseLeave');
    expect(onMouseLeaveFunc).toHaveBeenCalledTimes(1);
  });
});
