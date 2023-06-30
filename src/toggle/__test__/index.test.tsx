import { mount } from 'enzyme';
import { createRef } from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Toggle } from '..';

describe('<Toggle />', () => {
  it('should work without props', () => {
    const wrapper = mount(<Toggle />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "defaultChecked" prop', () => {
    const wrapper = mount(<Toggle defaultChecked />);

    expect(wrapper.find('input').prop('defaultChecked')).toBe(true);
  });

  it('should handle "checked" prop', () => {
    const wrapper = mount(<Toggle checked onChange={jest.fn()} />);

    expect(wrapper.find('input').prop('checked')).toBe(true);

    act(() => {
      wrapper.setProps({ checked: false });
    });
    wrapper.update();

    expect(wrapper.find('input').prop('checked')).toBe(false);
  });

  it('should handle "onChange" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(<Toggle onChange={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      (wrapper.find('input').prop('onChange') as any)({ target: { checked: false } });
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "ref" prop', () => {
    const ref = createRef();
    const container = document.createElement('div');

    const wrapper = <Toggle ref={ref as any} />;

    act(() => {
      render(wrapper, container);
    });

    expect(ref.current).toBe(container.querySelector('input'));
  });
});
