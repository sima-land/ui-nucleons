import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import InputMask from '../';

describe('<InputMask />', () => {
  let wrapper;

  it('should match snapshot without props', () => {
    wrapper = mount(<InputMask />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with props', () => {
    wrapper = mount(
      <InputMask
        mask='+890 (***) ** ** *'
        maskSign='*'
        value='89058635'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle ref prop', () => {
    const fakeRef = jest.fn();
    mount(
      <InputMask ref={fakeRef} />
    );
    expect(fakeRef).toHaveBeenCalled();
    expect(fakeRef.mock.calls[0][0].nodeName).toBe('INPUT');
  });
  it('should "onChange" correct change value', () => {
    const onChange = jest.fn();
    wrapper = mount(
      <InputMask
        mask='+890 (***) ** ** *'
        maskSign='*'
        value='89058635'
        onChange={onChange}
      />
    );
    expect(wrapper.find('input').prop('value')).toEqual('+890 (586) 35 ** *');
    expect(onChange).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('input').simulate('change', { target: { value: '+890 (5) 35 ** *' } });
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(wrapper.find('input').prop('value')).toEqual('+890 (586) 35 ** *');

    wrapper.update();
    expect(wrapper.find('input').prop('value')).toEqual('+890 (535) ** ** *');
  });
  it('should handle event "onClick" and set correct value', () => {
    const onClick = jest.fn();
    wrapper = mount(
      <InputMask
        mask='+890 (***) ** ** *'
        maskSign='*'
        value='890535'
        onClick={onClick}
      />
    );
    expect(wrapper.find('input').prop('value')).toEqual('+890 (535) ** ** *');
    expect(onClick).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('input').simulate('click');
    });
    expect(wrapper.find('input').prop('value')).toEqual('+890 (535) ** ** *');
    expect(onClick).toHaveBeenCalledTimes(1);

    wrapper.setProps({ value: '' });
    act(() => {
      wrapper.find('input').simulate('click');
    });

    expect(wrapper.find('input').prop('value')).toEqual('');
    expect(onClick).toHaveBeenCalledTimes(2);

    wrapper.update();
    expect(wrapper.find('input').prop('value')).toEqual('+890 (***) ** ** *');
  });
  it('should handle event "onKeyUp"', () => {
    const onKeyUp = jest.fn();
    wrapper = mount(
      <InputMask
        mask='+890 (***) ** ** *'
        maskSign='*'
        value='89058635'
        onKeyUp={onKeyUp}
      />
    );
    expect(onKeyUp).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('input').simulate('keyup');
    });

    expect(onKeyUp).toHaveBeenCalledTimes(1);
  });
  it('should handle event "onFocus" and set correct value', () => {
    const onFocus = jest.fn();
    wrapper = mount(
      <InputMask
        mask='+890 (*) ** **'
        maskSign='*'
        value='89058'
        onFocus={onFocus}
      />
    );
    expect(onFocus).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('input').simulate('focus');
    });

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(wrapper.find('input').prop('value')).toEqual('+890 (5) 8* **');

    wrapper.setProps({ value: '' });
    act(() => {
      wrapper.find('input').simulate('focus');
    });
    expect(onFocus).toHaveBeenCalledTimes(2);
    expect(wrapper.find('input').prop('value')).toEqual('');
    wrapper.update();
    expect(wrapper.find('input').prop('value')).toEqual('+890 (*) ** **');

    wrapper.setProps({ value: '89025569' });
    act(() => {
      wrapper.find('input').simulate('focus');
    });
    expect(onFocus).toHaveBeenCalledTimes(3);
    wrapper.update();
    expect(wrapper.find('input').prop('value')).toEqual('+890 (2) 55 69');
  });
  it('should handle event "onBlur"', () => {
    const onBlur = jest.fn();
    wrapper = mount(
      <InputMask
        mask='+890 (***) ** ** *'
        maskSign='*'
        value='89058635'
        onBlur={onBlur}
      />
    );
    expect(onBlur).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('input').simulate('blur');
    });
    wrapper.update();
    expect(onBlur).toHaveBeenCalledTimes(1);
    expect(wrapper.find('input').prop('value')).toEqual('+890 (586) 35 ** *');

    wrapper.setProps({ value: '' });
    act(() => {
      wrapper.find('input').simulate('focus');
    });
    wrapper.update();
    expect(wrapper.find('input').prop('value')).toEqual('+890 (***) ** ** *');

    act(() => {
      wrapper.find('input').simulate('blur');
    });
    wrapper.update();
    expect(onBlur).toHaveBeenCalledTimes(2);
    expect(wrapper.find('input').prop('value')).toEqual('');
  });
});
