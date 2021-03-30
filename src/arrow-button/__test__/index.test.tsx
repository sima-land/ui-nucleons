import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { ArrowButton } from '..';

describe('<ArrowButton />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <ArrowButton
        aria-label='Вперед'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <ArrowButton
        size='l'
        direction='left'
        aria-label='Назад'
        onClick={spy}
      />
    );

    expect(wrapper).toMatchSnapshot();

    expect(spy).toBeCalledTimes(0);

    act(() => {
      wrapper.find('button').simulate('click');
    });

    expect(spy).toBeCalledTimes(1);
  });
});
