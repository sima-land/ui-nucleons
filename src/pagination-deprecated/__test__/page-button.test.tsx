import { mount } from 'enzyme';
import { PageButton } from '../page-button';

describe('<PageButton />', () => {
  it('should render without props', () => {
    const wrapper = mount(<PageButton />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "selected" prop', () => {
    const wrapper = mount(<PageButton selected />);
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ selected: false });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle regular button props', () => {
    const spy = jest.fn();
    const wrapper = mount(<PageButton disabled onClick={spy} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "rounded" prop', () => {
    const wrapper = mount(<PageButton />);

    expect(wrapper.find('button').hasClass('rounds-all')).toBe(true);
    expect(wrapper.find('button').hasClass('rounds-left')).toBe(false);
    expect(wrapper.find('button').hasClass('rounds-right')).toBe(false);

    wrapper.setProps({ rounded: 'left' });
    expect(wrapper.find('button').hasClass('rounds-all')).toBe(false);
    expect(wrapper.find('button').hasClass('rounds-left')).toBe(true);
    expect(wrapper.find('button').hasClass('rounds-right')).toBe(false);

    wrapper.setProps({ rounded: 'right' });
    expect(wrapper.find('button').hasClass('rounds-all')).toBe(false);
    expect(wrapper.find('button').hasClass('rounds-left')).toBe(false);
    expect(wrapper.find('button').hasClass('rounds-right')).toBe(true);

    wrapper.setProps({ rounded: 'none' });
    expect(wrapper.find('button').hasClass('rounds-all')).toBe(false);
    expect(wrapper.find('button').hasClass('rounds-left')).toBe(false);
    expect(wrapper.find('button').hasClass('rounds-right')).toBe(false);
  });
});
