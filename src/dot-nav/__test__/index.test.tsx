import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { DotNav } from '..';
import { times } from 'lodash';

describe('DotNav', () => {
  it('should renders without props', () => {
    const wrapper = mount(<DotNav />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const spy = jest.fn();

    const wrapper = mount(<DotNav current={2} total={12} onSelect={spy} />);

    expect(wrapper).toMatchSnapshot();

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('.item').at(5).simulate('click');
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(5);
  });

  it('should handle "current" change', () => {
    const wrapper = mount(<DotNav current={0} total={9} />);

    expect(wrapper).toMatchSnapshot();

    times(9).forEach(index => {
      act(() => {
        wrapper.setProps({ current: index });
      });
      wrapper.update();

      expect(wrapper).toMatchSnapshot();
    });

    times(9)
      .reverse()
      .forEach(index => {
        act(() => {
          wrapper.setProps({ current: index });
        });
        wrapper.update();

        expect(wrapper).toMatchSnapshot();
      });
  });

  it('should handle "size" prop', () => {
    const wrapper = mount(<DotNav current={0} total={9} size='l' />);

    expect(wrapper).toMatchSnapshot();

    times(9).forEach(index => {
      act(() => {
        wrapper.setProps({ current: index });
      });
      wrapper.update();

      expect(wrapper).toMatchSnapshot();
    });

    times(9)
      .reverse()
      .forEach(index => {
        act(() => {
          wrapper.setProps({ current: index });
        });
        wrapper.update();

        expect(wrapper).toMatchSnapshot();
      });
  });

  it('should handle "onSelect" prop missing', () => {
    const wrapper = mount(<DotNav current={0} total={9} onSelect={undefined} />);

    expect(() => {
      act(() => {
        wrapper.find('.item').at(2).simulate('click');
      });
      wrapper.update();
    }).not.toThrow();
  });
});
