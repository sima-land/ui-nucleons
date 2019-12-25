import Link from '../';
import { shallow } from 'enzyme';
import React from 'react';
import * as styleHelpers from '../create-link-style';

describe('<Link />', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.spyOn(styleHelpers, 'createLinkStyle');
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
      color: 'white',
      underlineType: 'solid',
    });
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
      color: 'black',
      underlineType: 'dashed',
    });
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
      color: 'white',
    });
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
    expect(link.prop('dangerouslySetInnerHTML')).toBeDefined();
    expect(link.prop('children')).not.toBeDefined();
  });

  it('render correctly without noIndexContent props', () => {
    const link = shallow(
      <Link>
        TestLink
      </Link>
    );
    expect(link.text()).toEqual('TestLink');
    expect(link.prop('dangerouslySetInnerHTML')).not.toBeDefined();
    expect(link.prop('children')).toBeDefined();
  });
});
