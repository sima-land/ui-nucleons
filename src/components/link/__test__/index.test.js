import Link from '../';
import { shallow } from 'enzyme';
import React from 'react';
import * as styleHelpers from '../create-link-style';

describe('<Link />', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.spyOn(styleHelpers, 'createLinkStyle');
    jest.spyOn(styleHelpers, 'createLinkTextStyle');
    jest.spyOn(styleHelpers, 'createExternalStyle');
  });
  it('calls helpers with right params and renders correctly without external', () => {
    const link = shallow(
      <Link
        className='testClass'
        href='/cart/'
        color='white'
        target='_blank'
        underlined
        relative
        disableHoverEffect
      >
        TestLink
      </Link>
    );
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledWith({
      className: 'testClass',
      disableHoverEffect: true,
    });
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledWith({
      color: 'white',
      external: false,
      underlineType: 'solid',
    });
    expect(styleHelpers.createExternalStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createExternalStyle).toHaveBeenCalledWith('white');
    expect(link).toMatchSnapshot();
  });
  it('calls helpers and renders correctly with pseudo', () => {
    const link = shallow(
      <Link
        href='/auth/'
        color='black'
        pseudo
        underlined
      >
        TestLink
      </Link>
    );
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledWith({
      className: undefined,
      disableHoverEffect: undefined,
    });
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledWith({
      color: 'black',
      external: false,
      underlineType: 'dashed',
    });
    expect(styleHelpers.createExternalStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createExternalStyle).toHaveBeenCalledWith('black');
    expect(link).toMatchSnapshot();
  });
  it('calls helpers and renders correctly with external', () => {
    const link = shallow(
      <Link
        href='/cabinet/'
        color='white'
        external
        disableHoverEffect
      >
        TestLink
      </Link>
    );
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledWith({
      className: undefined,
      disableHoverEffect: true,
    });
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledWith({
      color: 'white',
      external: true,
      underlineType: undefined,
    });
    expect(styleHelpers.createExternalStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createExternalStyle).toHaveBeenCalledWith('white');
    expect(link).toMatchSnapshot();
  });
  it('calls functions onClick, onMouseEnter, onMouseLeave', () => {
    const onClickFunc = jest.fn();
    const onMouseEnterFunc = jest.fn();
    const onMouseLeaveFunc = jest.fn();
    const link = shallow(
      <Link
        onClick={onClickFunc}
        onMouseEnter={onMouseEnterFunc}
        onMouseLeave={onMouseLeaveFunc}
      >
        TestLink
      </Link>
    );
    link.simulate('click');
    expect(onClickFunc).toHaveBeenCalledTimes(1);
    link.simulate('mouseEnter');
    expect(onMouseEnterFunc).toHaveBeenCalledTimes(1);
    link.simulate('mouseLeave');
    expect(onMouseLeaveFunc).toHaveBeenCalledTimes(1);
  });

  it('render correctly with children and html props', () => {
    const link = shallow(
      <Link
        disableIndexing
      >
        TestLink
      </Link>
    );
    expect(link.find('span').prop('dangerouslySetInnerHTML')).toBeDefined();
    expect(link.find('span').prop('children')).not.toBeDefined();
  });

  it('render correctly without noIndexContent props', () => {
    const link = shallow(
      <Link>
        TestLink
      </Link>
    );
    expect(link.find('span').text()).toEqual('TestLink');
    expect(link.find('span').prop('dangerouslySetInnerHTML')).not.toBeDefined();
    expect(link.find('span').prop('children')).toBeDefined();
  });
});
