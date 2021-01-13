import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { PhoneInput } from '..';
import TextField from '../../text-field';
import { Dropdown } from '../../dropdown';
import { DropdownItem } from '../../dropdown-item';
import { MaskedField } from '../../masked-field';
import { countries } from '../presets';

describe('<PhoneInput />', () => {
  it('should render without props', () => {
    const wrapper = mount(<PhoneInput />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct countries in dropdown', () => {
    const wrapper = mount(<PhoneInput />);
    expect(wrapper.find(Dropdown)).toHaveLength(0);

    act(() => {
      wrapper.find('[data-testid="phone-input:dropdown-opener"]').simulate('click');
    });
    wrapper.update();
    expect(wrapper.find(Dropdown)).toHaveLength(1);
  });

  it('should call onCountrySelect on change country', () => {
    const onCountrySelect = jest.fn();
    const wrapper = mount(
      <PhoneInput
        onCountrySelect={onCountrySelect}
      />
    );

    expect(onCountrySelect).not.toHaveBeenCalled();
    wrapper.find('[data-testid="phone-input:dropdown-opener"]').simulate('click');
    expect(wrapper.find(Dropdown)).toHaveLength(1);

    act(() => {
      wrapper.find(DropdownItem).at(0).prop('onClick')();
    });
    wrapper.update();

    expect(wrapper.find(Dropdown)).toHaveLength(0);
    expect(onCountrySelect).toHaveBeenCalledTimes(1);
  });

  it('should open and close countries popup properly', () => {
    const wrapper = mount(<PhoneInput />);

    expect(wrapper.find(Dropdown)).toHaveLength(0);

    act(() => {
      wrapper.find('[data-testid="phone-input:dropdown-opener"]').simulate('click');
    });
    wrapper.update();
    expect(wrapper.find(Dropdown)).toHaveLength(1);

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('click'));
    });
    wrapper.update();
    expect(wrapper.find(Dropdown)).toHaveLength(0);
  });

  it('should pass mask state to onBlur callback', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <PhoneInput onBlur={spy} />
    );

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find(TextField).find('input').simulate('blur');
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].type).toBe('blur');
    expect(spy.mock.calls[0][1].cleanValue).toBe('7');
  });

  it('should define initial mask properly', () => {
    const wrapper = mount(
      <PhoneInput value='375112223344' />
    );

    expect(wrapper.find(MaskedField).prop('mask')).toBe(countries.belarus.mask);
  });

  it('should handle "value" prop change', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <PhoneInput value='375112223344' onBlur={spy} />
    );

    act(() => {
      wrapper.find(TextField).find('input').simulate('blur');
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].type).toBe('blur');
    expect(spy.mock.calls[0][1].cleanValue).toBe('375112223344');

    wrapper.setProps({ value: '375000000000' });

    act(() => {
      wrapper.find(TextField).find('input').simulate('blur');
    });

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[1][0].type).toBe('blur');
    expect(spy.mock.calls[1][1].cleanValue).toBe('375000000000');
  });
});
