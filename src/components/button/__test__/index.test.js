import React from 'react';
import Button, { renderButton } from '../';
import * as styleHelper from '../create-button-style';
import { shallow } from 'enzyme';

describe('<Button />', () => {
  let button;
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.spyOn(styleHelper, 'createButtonStyle');
  });
  it('renders properly', () => {
    button = shallow(<Button>Кнопка</Button>);
    expect(button).toMatchSnapshot();
  });
  it('calls createButtonStyle with correct params', () => {
    button = shallow(
      <Button
        className='test-class'
        color='white'
        shape='rounded'
      >
        Кнопка
      </Button>
    );
    expect(styleHelper.createButtonStyle).toHaveBeenCalledTimes(1);
    expect(styleHelper.createButtonStyle).toHaveBeenCalledWith({
      className: 'test-class',
      color: 'white',
      shape: 'rounded',
      withShadow: false,
      isFocused: false,
    });
    button = shallow(
      <Button
        href='www.test.com'
        className='test'
        color='blue'
        shape='circle'
        isFocused
        withShadow
      >
        Кнопка
      </Button>
    );
    expect(styleHelper.createButtonStyle).toHaveBeenCalledTimes(2);
    expect(styleHelper.createButtonStyle.mock.calls[1][0]).toEqual({
      className: 'test',
      color: 'blue',
      shape: 'circle',
      withShadow: true,
      isFocused: true,
    });
  });
  it('calls functions onClick, onMouseEnter, onMouseLeave', () => {
    const onClickFunc = jest.fn(),
      onMouseEnterFunc = jest.fn(),
      onMouseLeaveFunc = jest.fn();
    button = shallow(
      <Button
        className='test-action'
        onClick={onClickFunc}
        onMouseEnter={onMouseEnterFunc}
        onMouseLeave={onMouseLeaveFunc}
      >
        Кнопка
      </Button>
    );
    const element = button.find('.test-action');
    element.simulate('click');
    expect(onClickFunc).toHaveBeenCalledTimes(1);
    element.simulate('mouseEnter');
    expect(onMouseEnterFunc).toHaveBeenCalledTimes(1);
    element.simulate('mouseLeave');
    expect(onMouseLeaveFunc).toHaveBeenCalledTimes(1);
  });
});

describe('renderButton', () => {
  const buttonParams = { className: 'test', disabled: true },
    children = 'Кнопка';
  let button;
  it('returns correct element with appearance link', () => {
    button = renderButton({ appearance: 'link', buttonParams, children });
    expect(button).toMatchSnapshot();
  });
  it('returns correct element with appearance container', () => {
    button = renderButton({ appearance: 'container', buttonParams, children });
    expect(button).toMatchSnapshot();
  });
  it('returns correct element with appearance button', () => {
    button = renderButton({ appearance: 'button', buttonParams, children });
    expect(button).toMatchSnapshot();
  });
  it('returns correct element with wrong params', () => {
    button = renderButton({ buttonParams, children });
    expect(button).toMatchSnapshot();
    button = renderButton({ appearance: 'wrong', children });
    expect(button).toMatchSnapshot();
    button = renderButton({});
    expect(button).toMatchSnapshot();
  });
});
