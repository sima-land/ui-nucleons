import Link from '../';
import { shallow } from 'enzyme';
import React from 'react';
import * as styleHelpers from '../create-link-style';
import * as urlHelper from '../../helpers/build-url';

describe('<Link />', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.spyOn(urlHelper, 'buildURL');
    jest.spyOn(styleHelpers, 'createLinkStyle');
    jest.spyOn(styleHelpers, 'createLinkTextStyle');
    jest.spyOn(styleHelpers, 'createExternalStyle');
  });
  it('calls helpers with right params and renders correctly without external', () => {
    const params = {
      sort: 'price',
    };
    const link = shallow(
      <Link
        className='testClass'
        url='/cart/'
        urlParams={params}
        anchor='test_anchor'
        color='white'
        underlined
        inline
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
      inline: true,
    });
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledWith({
      color: 'white',
      external: false,
      underlineType: 'solid',
    });
    expect(styleHelpers.createExternalStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createExternalStyle).toHaveBeenCalledWith('white');
    expect(urlHelper.buildURL).toHaveBeenCalledTimes(1);
    expect(urlHelper.buildURL).toHaveBeenCalledWith({
      anchor: 'test_anchor',
      external: false,
      url: '/cart/',
      urlParams: params,
    });
    expect(link).toMatchSnapshot();
  });
  it('calls helpers and renders correctly with pseudo', () => {
    const params = {
      sort: 'price',
    };
    const link = shallow(
      <Link
        url='/auth/'
        urlParams={params}
        color='black'
        pseudo
        underlined
      >
        TestLink
      </Link>
    );
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createExternalStyle).toHaveBeenCalledTimes(1);
    expect(urlHelper.buildURL).toHaveBeenCalledTimes(0);
    expect(link).toMatchSnapshot();
  });
  it('calls helpers and renders correctly with external', () => {
    const params = {
      sort: 'price',
    };
    const link = shallow(
      <Link
        url='/cabinet/'
        urlParams={params}
        color='white'
        external
        disableHoverEffect
      >
        TestLink
      </Link>
    );
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createExternalStyle).toHaveBeenCalledTimes(1);
    expect(urlHelper.buildURL).toHaveBeenCalledTimes(1);
    expect(link).toMatchSnapshot();
  });
  it('calls functions onClick, onMouseEnter, onMouseLeave', () => {
    const onClickFunc = jest.fn(),
      onMouseEnterFunc = jest.fn(),
      onMouseLeaveFunc = jest.fn();
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
});
