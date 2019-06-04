import PseudoLink from '../';
import { shallow } from 'enzyme';
import React from 'react';
import * as styleHelpers from '../../create-link-style';

describe('<PseudoLink />', () => {
  it('calls styleHelpers with right params and renders correctly without arrow', () => {
    jest.spyOn(styleHelpers, 'createLinkStyle');
    jest.spyOn(styleHelpers, 'createLinkTextStyle');
    const pseudoLink = shallow(
      <PseudoLink
        className='testClass'
        color='black'
        underlined
        inline
        relative
        disableHoverEffect
      >
        TestPseudoLink
      </PseudoLink>
    );
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledWith({
      className: 'testClass',
      disableHoverEffect: true,
      inline: true,
      relative: true,
    });
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledTimes(1);
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledWith({
      color: 'black',
      underlineType: 'dashed',
    });
    expect(pseudoLink).toMatchSnapshot();
  });
  it('calls styleHelpers and renders correctly with arrow', () => {
    jest.spyOn(styleHelpers, 'createLinkStyle');
    jest.spyOn(styleHelpers, 'createLinkTextStyle');
    const pseudoLink = shallow(
      <PseudoLink
        color='white'
        withArrow
        upArrow
      >
      TestPseudoLink
      </PseudoLink>
    );
    expect(styleHelpers.createLinkStyle).toHaveBeenCalledTimes(2);
    expect(styleHelpers.createLinkTextStyle).toHaveBeenCalledTimes(2);
    expect(pseudoLink).toMatchSnapshot();
  });
  it('calls functions onClick, onMouseEnter, onMouseLeave', () => {
    const onClickFunc = jest.fn(),
      onMouseEnterFunc = jest.fn(),
      onMouseLeaveFunc = jest.fn();
    const pseudoLink = shallow(
      <PseudoLink
        onClick={onClickFunc}
        onMouseEnter={onMouseEnterFunc}
        onMouseLeave={onMouseLeaveFunc}
      >
      Кнопка-блок
      </PseudoLink>
    );
    pseudoLink.simulate('click');
    expect(onClickFunc).toHaveBeenCalledTimes(1);
    pseudoLink.simulate('mouseEnter');
    expect(onMouseEnterFunc).toHaveBeenCalledTimes(1);
    pseudoLink.simulate('mouseLeave');
    expect(onMouseLeaveFunc).toHaveBeenCalledTimes(1);
  });
});
