import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { TextField } from '..';
import { BaseInput } from '../../base-input-deprecated';
import { fitElementHeight } from '../../helpers/fit-element-height';
import { render } from '@testing-library/react';

jest.mock('../../helpers/fit-element-height', () => {
  const original = jest.requireActual('../../helpers/fit-element-height');

  return {
    ...original,
    __esModule: true,
    fitElementHeight: jest.fn(original.fitElementHeight),
  };
});

describe('<TextField />', () => {
  it('should render without props', () => {
    const wrapper = mount(<TextField />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "disabled" prop', () => {
    const wrapper = mount(<TextField disabled />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "focused" prop', () => {
    const wrapper = mount(<TextField focused />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "variant" prop', () => {
    const wrapper = mount(<TextField variant='desktop' />);

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ variant: 'mobile' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle adornment props', () => {
    const wrapper = mount(<TextField startAdornment='Name: ' />);

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ startAdornment: null, endAdornment: 'Kg' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "caption" prop', () => {
    const wrapper = mount(
      <TextField
        caption={
          <span>
            Hello <b>World</b>!
          </span>
        }
      />,
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ disabled: true, failed: true, variant: 'mobile' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "label" prop', () => {
    const wrapper = mount(<TextField label='The best label in our world!' />);

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ disabled: true, failed: true, variant: 'mobile' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle event callback props', () => {
    const callbacks = {
      onBlur: jest.fn(),
      onChange: jest.fn(),
      onFocus: jest.fn(),
      onClick: jest.fn(),
    };

    const wrapper = mount(<TextField label='Test label' {...callbacks} />);

    Object.values(callbacks).forEach(callback => {
      expect(callback).toHaveBeenCalledTimes(0);
    });

    act(() => {
      wrapper.find(BaseInput).find('input').simulate('focus');
    });

    expect(callbacks.onClick).toHaveBeenCalledTimes(0);
    expect(callbacks.onBlur).toHaveBeenCalledTimes(0);
    expect(callbacks.onChange).toHaveBeenCalledTimes(0);
    expect(callbacks.onFocus).toHaveBeenCalledTimes(1);

    act(() => {
      wrapper.find(BaseInput).find('input').simulate('blur');
    });

    expect(callbacks.onClick).toHaveBeenCalledTimes(0);
    expect(callbacks.onBlur).toHaveBeenCalledTimes(1);
    expect(callbacks.onChange).toHaveBeenCalledTimes(0);
    expect(callbacks.onFocus).toHaveBeenCalledTimes(1);

    act(() => {
      wrapper.find(BaseInput).find('input').simulate('change');
    });

    expect(callbacks.onClick).toHaveBeenCalledTimes(0);
    expect(callbacks.onBlur).toHaveBeenCalledTimes(1);
    expect(callbacks.onChange).toHaveBeenCalledTimes(1);
    expect(callbacks.onFocus).toHaveBeenCalledTimes(1);

    act(() => {
      jest.spyOn(wrapper.find(BaseInput).find('input').getDOMNode() as any, 'focus');
    });

    expect((wrapper.find(BaseInput).find('input').getDOMNode() as any).focus).toHaveBeenCalledTimes(
      0,
    );

    act(() => {
      wrapper.find('.input-block').simulate('click');
    });

    expect((wrapper.find(BaseInput).find('input').getDOMNode() as any).focus).toHaveBeenCalledTimes(
      1,
    );
    expect(callbacks.onClick).toHaveBeenCalledTimes(1);
    expect(callbacks.onBlur).toHaveBeenCalledTimes(1);
    expect(callbacks.onChange).toHaveBeenCalledTimes(1);
    expect(callbacks.onFocus).toHaveBeenCalledTimes(1);
  });
  it('should handle "onClick" prop missing', () => {
    const spy = jest.fn();

    const wrapper = mount(<TextField label='Test label' onClick={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('.input-block').simulate('click');
    });

    expect(spy).toHaveBeenCalledTimes(1);

    wrapper.setProps({ onClick: undefined });

    act(() => {
      wrapper.find('.input-block').simulate('click');
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should handle "multiline" prop', () => {
    const spy = jest.fn();

    const wrapper = mount(<TextField multiline onInput={spy} baseInputProps={{ rows: 3 }} />);

    expect(wrapper).toMatchSnapshot();

    (fitElementHeight as any).mockClear();

    expect(spy).toHaveBeenCalledTimes(0);
    expect(fitElementHeight).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('textarea').simulate('input');
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(fitElementHeight).toHaveBeenCalledTimes(1);
  });

  it('should handle invalid types of "value" prop', () => {
    const spy = jest.fn();

    ['', undefined].forEach(testValue => {
      const wrapper = mount(<TextField label='Label' value={testValue} onChange={spy} />);

      expect(wrapper.find('label.label').prop('className')).toContain('as-placeholder');
    });

    ['text', 123].forEach(testValue => {
      const wrapper = mount(<TextField label='Label' value={testValue} onChange={spy} />);

      expect(wrapper.find('label.label').prop('className')).not.toContain('as-placeholder');
    });
  });
  it('should handle ref prop', () => {
    const fakeRef = jest.fn();

    mount(<TextField ref={fakeRef} />);

    expect(fakeRef).toHaveBeenCalled();
    expect(fakeRef.mock.calls[0][0].nodeName).toBe('INPUT');
  });
  it('should handle blockProps prop', () => {
    const { getByTestId } = render(
      <TextField
        value='Hello'
        onChange={jest.fn()}
        blockProps={{ className: 'test-block-class', id: 'test-block-id' }}
      />,
    );

    expect(getByTestId('text-field:block').id).toBe('test-block-id');
    expect(getByTestId('text-field:block').className).toContain('test-block-class');
  });
});
