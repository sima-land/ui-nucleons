import React from 'react';
import { mount } from 'enzyme';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Textarea, { fitElementHeight } from '../index';
import inputClasses from '../../input/fields.scss';
import textareaClasses from '../textarea.scss';

describe('<Textarea />', () => {
  it('should render without props', () => {
    const wrapper = mount(<Textarea />);
    expect(wrapper.find('textarea')).toHaveLength(1);
  });
  it('should handle "value" and "onChange" properties', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Textarea
        value='Test value'
        onChange={spy}
      />
    );
    expect(wrapper.find('textarea').prop('value')).toBe('Test value');
    expect(wrapper.find('textarea').prop('onChange')).toBe(spy);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('textarea').simulate('change');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should handle "failed" prop', () => {
    const wrapper = mount(
      <Textarea
        failed={false}
      />
    );
    expect(wrapper.find('textarea').prop('className')).not.toContain(inputClasses.failed);
    wrapper.setProps({ failed: true });
    expect(wrapper.find('textarea').prop('className')).toContain(inputClasses.failed);
    wrapper.setProps({ failed: undefined });
    expect(wrapper.find('textarea').prop('className')).not.toContain(inputClasses.failed);
  });
  it('should handle "className" prop', () => {
    const wrapper = mount(
      <Textarea
        className='test-textarea'
      />
    );
    expect(wrapper.find('textarea').prop('className')).toContain('test-textarea');
  });
  it('should handle "resizeable" prop', () => {
    const wrapper = mount(
      <Textarea
        resizeable
      />
    );
    expect(wrapper.find('textarea').prop('className')).toContain(textareaClasses.resizeable);
    wrapper.setProps({ resizeable: false });
    expect(wrapper.find('textarea').prop('className')).not.toContain(textareaClasses.resizeable);
  });
  it('should handle "fullWidth" prop', () => {
    const wrapper = mount(
      <Textarea
        fullWidth
      />
    );
    expect(wrapper.find('textarea').prop('className')).toContain(textareaClasses['full-width']);
    wrapper.setProps({ fullWidth: false });
    expect(wrapper.find('textarea').prop('className')).not.toContain(textareaClasses['full-width']);
  });
  it('should pass ref', () => {
    const container = document.createElement('div');
    let mountedEl = null;
    document.body.append(container);

    act(() => {
      render(
        <Textarea
          ref={target => {
            mountedEl = target;
          }}
        />,
        container
      );
    });
    expect(container.querySelector('textarea')).toBe(mountedEl);
  });
  it('should call fitElementHeight on "input" event', () => {
    const spy = jest.fn();
    const container = document.createElement('div');
    document.body.append(container);

    act(() => {
      render(
        <Textarea autoFitHeight />,
        container
      );
    });

    const textareaEl = container.querySelector('textarea');
    Object.defineProperty(textareaEl, 'style', {
      configurable: true,
      value: {
        /**
         * Тестовый сеттер.
         * @param {*} value Значение.
         */
        set height (value) {
          spy(value);
        },
      },
    });

    act(() => {
      textareaEl.dispatchEvent(new Event('input', { bubbles: true }));
    });
    expect(spy).toHaveBeenCalledTimes(2); // + call after first render
  });
  it('should handle "onFocus" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Textarea
        onFocus={spy}
      />
    );

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('textarea').simulate('focus');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should handle "onBlur" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Textarea
        onBlur={spy}
      />
    );

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('textarea').simulate('focus');
    wrapper.find('textarea').simulate('blur');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should handle "focus" event', () => {
    const spy = jest.fn();
    const container = document.createElement('div');
    document.body.append(container);

    act(() => {
      render(
        <Textarea onFocus={spy} />,
        container
      );
    });

    expect(spy).toHaveBeenCalledTimes(0);
    act(() => {
      container.querySelector('textarea').focus();
    });
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should renders correctly with props', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Textarea
        failed
        value='Test value'
        onChange={spy}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('fitElementHeight()', () => {
  it('should set style.height', () => {
    const spy = jest.fn();
    const fakeTarget = {
      scrollHeight: 234,
      offsetHeight: 12,
      clientHeight: 23,
      style: {
        /**
         * Тестовый сеттер.
         * @param {*} value Значение.
         */
        set height (value) {
          spy(value);
          if (value === 'auto') {
            fakeTarget.scrollHeight = 123;
          }
        },
      },
    };
    const fakeEvent = { target: fakeTarget };

    fitElementHeight(fakeEvent);

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[0][0]).toBe('auto');
    expect(spy.mock.calls[1][0]).toBe('112px'); // 112 = 123 + 12 - 23
  });
});
