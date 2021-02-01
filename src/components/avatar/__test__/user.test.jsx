import { mount } from 'enzyme';
import React from 'react';
import { UserAvatar, colorKey } from '../user';
import UpSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/up';
import { COLORS } from '../../constants';

jest.mock('lodash', () => {
  const original = jest.requireActual('lodash');

  return {
    ...original,
    sample: jest.fn(arr => Array.isArray(arr) ? arr[0] : undefined),
  };
});

describe('UserAvatar', () => {
  beforeEach(() => {
    window[colorKey] = undefined;
  });

  it('should renders without props', () => {
    const wrapper = mount(
      <UserAvatar />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper1 = mount(
      <UserAvatar
        size={40}
        title='Hello World'
        icon={UpSVG}
        style={{ clipPath: 'url(#fake-id)' }}
      />
    );

    expect(wrapper1).toMatchSnapshot();
    expect(wrapper1.find('.shape').prop('style').background).toEqual(COLORS.get(window[colorKey]));

    const wrapper2 = mount(
      <UserAvatar
        size={40}
        title='Hello World'
        icon={UpSVG}
        style={{ clipPath: 'url(#fake-id)' }}
      />
    );

    expect(wrapper2).toMatchSnapshot();
    expect(wrapper2.find('.shape').prop('style').background).toEqual(COLORS.get(window[colorKey]));
  });
});
