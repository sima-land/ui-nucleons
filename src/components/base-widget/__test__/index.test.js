import React from 'react';
import { shallow } from 'enzyme';
import BaseWidget from '../';
import { act } from 'react-dom/test-utils';
import { render } from 'react-dom';

describe('<BaseWidget />', () => {
  it('should handle "header" prop', () => {
    const testHeaderContent = (
      <span>Test header</span>
    );
    const wrapper = shallow(
      <BaseWidget
        header={testHeaderContent}
      />
    );
    expect(wrapper.find('header').prop('children')).toBe(testHeaderContent);
    wrapper.setProps({ header: undefined });
    expect(wrapper.find('header')).toHaveLength(0);
  });
  it('should handle "children" prop', () => {
    const testContent = (
      <span>Test content</span>
    );
    const wrapper = shallow(
      <BaseWidget>
        {testContent}
      </BaseWidget>
    );
    expect(wrapper.find('div').prop('children')).toBe(testContent);
  });
  it('should handle "footer" prop', () => {
    const testFooterContent = (
      <span>Test footer</span>
    );
    const wrapper = shallow(
      <BaseWidget
        footer={testFooterContent}
      />
    );
    expect(wrapper.find('footer').prop('children')).toBe(testFooterContent);
    wrapper.setProps({ footer: undefined });
    expect(wrapper.find('footer')).toHaveLength(0);
  });
  it('should handle "container" prop', () => {
    const wrapper = shallow(
      <BaseWidget
        container='div'
      />
    );
    expect(wrapper.find('div')).toHaveLength(2);

    wrapper.setProps({ container: undefined });
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('section')).toHaveLength(1);
  });
  it('should handle "containerProps" prop', () => {
    const wrapper = shallow(
      <BaseWidget
        containerProps={{ 'data-test': 123, className: 'test-container' }}
      />
    );
    const section = wrapper.find('section');
    expect(section.prop('data-test')).toBe(123);
    expect(section.prop('className')).toContain('test-container');
  });
  it('should handle "headerContainer" prop', () => {
    const wrapper = shallow(
      <BaseWidget
        header='Test title'
        headerContainer='h1'
      />
    );

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('header')).toHaveLength(0);

    wrapper.setProps({ headerContainer: undefined });
    expect(wrapper.find('h1')).toHaveLength(0);
    expect(wrapper.find('header')).toHaveLength(1);
  });
  it('should handle "headerContainerProps" prop', () => {
    const wrapper = shallow(
      <BaseWidget
        header='Test title'
        headerContainerProps={{ 'data-test-header': 234, className: 'test-header-container' }}
      />
    );
    const header = wrapper.find('header');
    expect(header.prop('data-test-header')).toBe(234);
    expect(header.prop('className')).toContain('test-header-container');
  });
  it('should handle "childrenContainer" prop', () => {
    const wrapper = shallow(
      <BaseWidget
        children='Test content'
        childrenContainer='p'
      />
    );
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(0);

    wrapper.setProps({ childrenContainer: undefined });
    expect(wrapper.find('p')).toHaveLength(0);
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should handle "childrenContainerProps" prop', () => {
    const wrapper = shallow(
      <BaseWidget
        children='Test content'
        childrenContainerProps={{ 'data-test-content': 345, className: 'test-content-container' }}
      />
    );
    const children = wrapper.find('div');
    expect(children.prop('data-test-content')).toBe(345);
    expect(children.prop('className')).toContain('test-content-container');
  });
  it('should handle "footerContainer" prop', () => {
    const wrapper = shallow(
      <BaseWidget
        footer='Test footer'
        footerContainer='span'
      />
    );
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('footer')).toHaveLength(0);

    wrapper.setProps({ footerContainer: undefined });
    expect(wrapper.find('span')).toHaveLength(0);
    expect(wrapper.find('footer')).toHaveLength(1);
  });
  it('should handle "footerContainerProps" prop', () => {
    const wrapper = shallow(
      <BaseWidget
        footer='Test content'
        footerContainerProps={{ 'data-test-footer': 456, className: 'test-footer-container' }}
      />
    );
    const footer = wrapper.find('footer');
    expect(footer.prop('data-test-footer')).toBe(456);
    expect(footer.prop('className')).toContain('test-footer-container');
  });
  it('correctly forwards refs', () => {
    const testRef = React.createRef();
    const container = document.createElement('div');
    const component = <BaseWidget ref={testRef} />;
    act(() => {
      render(component, container);
    });
    const foundEl = container.querySelector('section');
    expect(foundEl).toBe(testRef.current);
  });
  it('should match snapshot', () => {
    const wrapper = shallow(
      <BaseWidget
        header={(<h1>Test header</h1>)}
        children={(<p>Test content</p>)}
        footer={(<div>Test footer</div>)}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
