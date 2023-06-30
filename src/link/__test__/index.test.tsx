import { mount } from 'enzyme';
import { Link } from '..';

describe('<Link />', () => {
  it('calls helpers with right params and renders correctly without external', () => {
    const wrapper = mount(
      <Link className='testClass' href='/cart/' color='basic-gray38' target='_blank'>
        Test link
      </Link>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('calls helpers and renders correctly with pseudo', () => {
    const wrapper = mount(
      <Link pseudo color='basic-gray38'>
        Test link
      </Link>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('calls helpers and renders correctly with external', () => {
    const wrapper = mount(
      <Link href='/cabinet/' color='basic-blue'>
        Test link
      </Link>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "onClick/onMouseEnter/onMouseLeave..." props', () => {
    const onClickSpy = jest.fn();
    const onMouseEnterSpy = jest.fn();
    const onMouseLeaveSpy = jest.fn();

    const wrapper = mount(
      <Link onClick={onClickSpy} onMouseEnter={onMouseEnterSpy} onMouseLeave={onMouseLeaveSpy}>
        Test link
      </Link>,
    );

    wrapper.simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);

    wrapper.simulate('mouseEnter');
    expect(onMouseEnterSpy).toHaveBeenCalledTimes(1);

    wrapper.simulate('mouseLeave');
    expect(onMouseLeaveSpy).toHaveBeenCalledTimes(1);
  });

  it('should render not indexing content properly', () => {
    const wrapper = mount(
      <Link href='www.test.com' noIndex>
        Test link
      </Link>,
    );

    expect(wrapper.find('a').prop('dangerouslySetInnerHTML')).toBeDefined();
    expect(wrapper.find('a').prop('children')).not.toBeDefined();
  });

  it('should render regular (indexing) content properly', () => {
    const wrapper = mount(<Link href='www.test.com'>Test link</Link>);

    expect(wrapper.text()).toEqual('Test link');
    expect(wrapper.prop('dangerouslySetInnerHTML')).not.toBeDefined();
    expect(wrapper.prop('children')).toBeDefined();
  });

  it('render render pseudo link properly', () => {
    const wrapper = mount(<Link pseudo>Test link</Link>);

    expect(wrapper).toMatchSnapshot();
  });

  it('render render pseudo link disabled properly', () => {
    const wrapper = mount(
      <Link pseudo disabled>
        Test link
      </Link>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
