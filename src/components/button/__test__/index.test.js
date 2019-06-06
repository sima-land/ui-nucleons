import React from 'react';
import Button, { renderButton } from '../';
import * as styleHelper from '../create-button-style';
import * as urlHelper from '../../helpers/build-url';
import { shallow } from 'enzyme';

describe('<Button />', () => {
  let button;
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.spyOn(urlHelper, 'buildURL');
    jest.spyOn(styleHelper, 'createButtonStyle');
  });
  it('renders properly', () => {
    button = shallow(<Button>Кнопка</Button>);
    expect(button).toMatchSnapshot();
  });
  it('calls createButtonStyle and does not call buildURL without url', () => {
    button = shallow(
      <Button
        className='test-class'
        color='white'
        shape='rounded'
      >
        Кнопка
      </Button>
    );
    expect(urlHelper.buildURL).toHaveBeenCalledTimes(0);
    expect(styleHelper.createButtonStyle).toHaveBeenCalledTimes(1);
    expect(styleHelper.createButtonStyle).toHaveBeenCalledWith({
      className: 'test-class',
      color: 'white',
      shape: 'rounded',
      withShadow: false,
      isFocused: false,
    });
  });
  it('calls createButtonStyle and buildURL with url', () => {
    button = shallow(
      <Button
        url='www.test.com'
        urlParams={{
          sort: 'date',
        }}
        anchor='something'
        className='test'
        color='blue'
        shape='circle'
        isFocused
        withShadow
      >
        Кнопка
      </Button>
    );
    expect(urlHelper.buildURL).toHaveBeenCalledTimes(1);
    expect(urlHelper.buildURL).toHaveBeenCalledWith({
      url: 'www.test.com',
      urlParams: { sort: 'date' },
      anchor: 'something',
    });
    expect(styleHelper.createButtonStyle).toHaveBeenCalledTimes(1);
    expect(styleHelper.createButtonStyle).toHaveBeenCalledWith({
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

describe('renderButton', () => {
  const buttonParams = { className: 'test', disabled: true },
    children = 'Кнопка';
  let button;
  it('render properly with type link', () => {
    button = renderButton({ type: 'link', buttonParams, children });
    expect(button).toMatchSnapshot();
  });
  it('render properly with type container', () => {
    button = renderButton({ type: 'container', buttonParams, children });
    expect(button).toMatchSnapshot();
  });
  it('render properly with type button', () => {
    button = renderButton({ type: 'button', buttonParams, children });
    expect(button).toMatchSnapshot();
  });
  it('render properly with wrong params', () => {
    button = renderButton({ buttonParams, children });
    expect(button).toMatchSnapshot();
    button = renderButton({ type: 'wrong', children });
    expect(button).toMatchSnapshot();
    button = renderButton({});
    expect(button).toMatchSnapshot();
  });
});
