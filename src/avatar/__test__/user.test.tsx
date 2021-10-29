import { mount } from 'enzyme';
import React from 'react';
import { UserAvatar, colorKey } from '../user';
import { COLORS } from '../../colors';

jest.mock('lodash', () => {
  const original = jest.requireActual('lodash');

  return {
    ...original,
    sample: jest.fn(arr => (Array.isArray(arr) ? arr[0] : undefined)),
  };
});

describe('UserAvatar', () => {
  beforeEach(() => {
    (window as any)[colorKey] = undefined;
  });

  it('should renders without props', () => {
    const wrapper = mount(<UserAvatar />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper1 = mount(
      <UserAvatar size={40} title='Hello World' style={{ clipPath: 'url(#fake-id)' }} />,
    );

    expect(wrapper1).toMatchSnapshot();
    expect((wrapper1.find('.root').prop('style') as any)['--avatar-color']).toEqual(
      COLORS.get((window as any)[colorKey]),
    );

    const wrapper2 = mount(
      <UserAvatar size={40} title='Hello World' style={{ clipPath: 'url(#fake-id)' }} />,
    );

    expect(wrapper2).toMatchSnapshot();
    expect((wrapper2.find('.root').prop('style') as any)['--avatar-color']).toEqual(
      COLORS.get((window as any)[colorKey]),
    );
  });
});
