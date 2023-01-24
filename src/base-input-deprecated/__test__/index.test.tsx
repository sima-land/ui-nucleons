import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { render } from 'react-dom';
import { BaseInput } from '..';
import { fitElementHeight } from '../../helpers/fit-element-height';
import { act } from 'react-dom/test-utils';

jest.mock('../../helpers/fit-element-height', () => {
  const original = jest.requireActual('../../helpers/fit-element-height');

  return {
    ...original,
    __esModule: true,
    fitElementHeight: jest.fn(original.fitElementHeight),
  };
});

describe('<BaseInput />', () => {
  it('should render without props', () => {
    const wrapper = mount(<BaseInput />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should forward ref', () => {
    const testRef = createRef<any>();

    const wrapper = mount(<BaseInput ref={testRef} />);

    expect(testRef.current).toBe(wrapper.find('input').getDOMNode());
  });

  it('should call "fitElementHeight" after mount', () => {
    expect(fitElementHeight).toHaveBeenCalledTimes(0);
    mount(<BaseInput multiline />);
    expect(fitElementHeight).toHaveBeenCalledTimes(1);
  });

  it('should call "fitElementHeight" after each render', () => {
    const container = document.createElement('div');
    document.body.append(container);

    expect(fitElementHeight).toHaveBeenCalledTimes(0);

    act(() => {
      render(<BaseInput multiline />, container);
    });
    expect(fitElementHeight).toHaveBeenCalledTimes(1);

    act(() => {
      render(<BaseInput multiline />, container);
    });
    expect(fitElementHeight).toHaveBeenCalledTimes(2);

    act(() => {
      render(<BaseInput multiline />, container);
    });
    expect(fitElementHeight).toHaveBeenCalledTimes(3);

    container.remove();
  });

  it('should handle "oninput" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(<BaseInput onInput={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('input').simulate('input');
    });

    expect(spy).toHaveBeenCalledTimes(1);

    wrapper.setProps({ onInput: undefined });

    act(() => {
      wrapper.find('input').simulate('input');
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "restPlaceholder" prop', () => {
    const wrapper = mount(
      <BaseInput value='Hello' restPlaceholder=', World!' onChange={jest.fn()} />,
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({
      value: '',
      restPlaceholder: {
        shiftValue: 'Hello',
        value: ', World!',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
