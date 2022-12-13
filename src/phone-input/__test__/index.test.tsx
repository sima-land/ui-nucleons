import React from 'react';
import { mount } from 'enzyme';
import { act, Simulate } from 'react-dom/test-utils';
import { PhoneInput } from '..';
import { TextField } from '../../text-field';
import { Dropdown } from '../../dropdown';
import { DropdownItem } from '../../dropdown-item';
import { MaskedField } from '../../masked-field';
import { countries } from '../presets';
import { fireEvent, render } from '@testing-library/react';

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
    const wrapper = mount(<PhoneInput onCountrySelect={onCountrySelect} />);

    expect(onCountrySelect).not.toHaveBeenCalled();
    wrapper.find('[data-testid="phone-input:dropdown-opener"]').simulate('click');
    expect(wrapper.find(Dropdown)).toHaveLength(1);

    act(() => {
      (wrapper.find(DropdownItem).at(0).prop('onClick') as any)();
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

    // outside click
    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('click'));
    });
    wrapper.update();
    expect(wrapper.find(Dropdown)).toHaveLength(0);
  });

  it('should pass mask state to onBlur callback', () => {
    const spy = jest.fn();

    const wrapper = mount(<PhoneInput onBlur={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find(TextField).find('input').simulate('blur');
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].type).toBe('blur');
    expect(spy.mock.calls[0][1].cleanValue).toBe('7');
  });

  it('should define initial mask properly', () => {
    const wrapper = mount(<PhoneInput value='375112223344' />);

    expect(wrapper.find(MaskedField).prop('mask')).toBe(countries.belarus.mask);
  });

  it('should handle "value" prop change', () => {
    const spy = jest.fn();

    const wrapper = mount(<PhoneInput value='375112223344' onBlur={spy} />);

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

  it('Other: should render just text field with able to input only digits', () => {
    const changeSpy = jest.fn();
    const blurSpy = jest.fn();

    const wrapper = mount(<PhoneInput value='0000000' onBlur={blurSpy} onChange={changeSpy} />);

    expect(wrapper).toMatchSnapshot();
    expect(blurSpy).toBeCalledTimes(0);
    expect(changeSpy).toBeCalledTimes(0);

    act(() => {
      Simulate.change(wrapper.find('input').getDOMNode(), {
        target: { value: '000sss111' } as HTMLInputElement,
      });
    });

    expect(blurSpy).toBeCalledTimes(0);
    expect(changeSpy).toBeCalledTimes(1);
    expect(changeSpy.mock.calls[0][0].target.value).toBe('000111');

    act(() => {
      Simulate.blur(wrapper.find('input').getDOMNode(), {
        target: { value: '000111' } as HTMLInputElement,
      });
    });

    expect(blurSpy).toBeCalledTimes(1);
    expect(changeSpy).toBeCalledTimes(1);
    expect(blurSpy.mock.calls[0][1].ready).toBe(true);
    expect(blurSpy.mock.calls[0][1].value).toBe('000111');
    expect(blurSpy.mock.calls[0][1].cleanValue).toBe('000111');
  });

  it('should handle "label"', () => {
    const { getByTestId } = render(<PhoneInput value='0000000' label='My Phone' />);

    expect(getByTestId('text-field:label').textContent).toBe('My Phone');
  });

  it('should handle field block click: opener click case', () => {
    const { getByTestId } = render(<PhoneInput value='' onBlur={jest.fn()} />);

    const event = new MouseEvent('click', { bubbles: true });
    jest.spyOn(event, 'preventDefault');

    expect(event.preventDefault).toBeCalledTimes(0);
    fireEvent(getByTestId('phone-input:dropdown-opener'), event);
    expect(event.preventDefault).toBeCalledTimes(1);
  });

  it('should handle field block click: inside opener click case', () => {
    const { container } = render(<PhoneInput value='' onBlur={jest.fn()} />);

    const event = new MouseEvent('click', { bubbles: true });
    jest.spyOn(event, 'preventDefault');

    expect(event.preventDefault).toBeCalledTimes(0);
    fireEvent(
      container.querySelector('[data-testid="phone-input:dropdown-opener"] > img') as any,
      event,
    );
    expect(event.preventDefault).toBeCalledTimes(1);
  });

  it('should handle field block click: block click case', () => {
    const { getByTestId, queryAllByTestId } = render(<PhoneInput value='' onBlur={jest.fn()} />);

    // show dropdown menu
    expect(queryAllByTestId('phone-input:dropdown')).toHaveLength(0);
    fireEvent.click(getByTestId('phone-input:dropdown-opener'));
    expect(queryAllByTestId('phone-input:dropdown')).toHaveLength(1);

    const event = new MouseEvent('click', { bubbles: true });
    jest.spyOn(event, 'preventDefault');

    expect(queryAllByTestId('phone-input:dropdown')).toHaveLength(1);
    expect(event.preventDefault).toBeCalledTimes(0);
    fireEvent(getByTestId('text-field:block'), event);
    expect(queryAllByTestId('phone-input:dropdown')).toHaveLength(0);
    expect(event.preventDefault).toBeCalledTimes(0);
  });

  it('should open and close dropdown by click on opener', () => {
    const { getByTestId, queryAllByTestId } = render(<PhoneInput value='' onBlur={jest.fn()} />);

    // show dropdown menu
    expect(queryAllByTestId('phone-input:dropdown')).toHaveLength(0);
    fireEvent.click(getByTestId('phone-input:dropdown-opener'));
    expect(queryAllByTestId('phone-input:dropdown')).toHaveLength(1);

    fireEvent.click(getByTestId('phone-input:dropdown-opener'));
    expect(queryAllByTestId('phone-input:dropdown')).toHaveLength(0);
  });

  it('should display value by default when country is unknown', () => {
    const initialValue = '55566667777';

    const { getByTestId } = render(<PhoneInput value={initialValue} onBlur={jest.fn()} />);

    expect((getByTestId('text-field:field') as HTMLInputElement).value).toBe(initialValue);
  });
});
