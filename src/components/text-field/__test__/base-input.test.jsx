import React, { createRef } from 'react';
import { mount } from 'enzyme';
import { BaseInput } from '../base-input';
import { fitElementHeight } from '../../helpers/fit-element-height';

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
    const wrapper = mount(
      <BaseInput />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should forward ref', () => {
    const testRef = createRef();

    const wrapper = mount(
      <BaseInput ref={testRef} />
    );

    expect(wrapper.getDOMNode().nodeName).toBe('INPUT');
    expect(testRef.current).toBe(wrapper.getDOMNode());
  });
  it('should call "fitElementHeight" after mount', () => {
    expect(fitElementHeight).toHaveBeenCalledTimes(0);
    mount(<BaseInput multiline />);
    expect(fitElementHeight).toHaveBeenCalledTimes(1);
  });
});
