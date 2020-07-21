import React from 'react';
import { mount, shallow } from 'enzyme';
import asField from '../as-field';
import styles from '../as-field.scss';

describe('asField HOC', () => {
  const TestComponent = () => <div>Test</div>;

  it('should return component with correct displayName', () => {
    const TestComponentAsField = asField(TestComponent);
    TestComponent.displayName = 'TestComponent';
    expect(TestComponentAsField.displayName).toBe('asField(TestComponent)');
  });
  it('should return component that handle "container" prop', () => {
    const TestComponentAsField = asField(TestComponent);
    const wrapper = mount(
      <TestComponentAsField container='section' />
    );
    expect(wrapper.find('section')).toHaveLength(1);
    wrapper.setProps({ container: undefined });
    expect(wrapper.find('section')).toHaveLength(0);
  });
  it('should return component that handle "label" prop', () => {
    const TestComponentAsField = asField(TestComponent);
    const wrapper = mount(
      <TestComponentAsField label='Test label' />
    );
    expect(wrapper.find(`.${styles.label}`).text()).toBe('Test label');
    wrapper.setProps({ label: undefined });
    expect(wrapper.find(`.${styles.label}`)).toHaveLength(0);
  });
  it('should handle true in "isImplementsLabel" property of second argument', () => {
    const TestComponentAsField = asField(TestComponent, { isImplementsLabel: true });
    const wrapper = mount(
      <TestComponentAsField label='Test label' />
    );
    expect(wrapper.find(`.${styles.label}`)).toHaveLength(0);
    expect(wrapper.find(TestComponent).prop('label')).toBe('Test label');
  });
  it('should return component that handle "error" prop', () => {
    const TestComponentAsField = asField(TestComponent);
    const wrapper = mount(
      <TestComponentAsField error='Test error' />
    );
    expect(wrapper.find(`.${styles.error}`).text()).toBe('Test error');
    wrapper.setProps({ error: undefined });
    expect(wrapper.find(`.${styles.error}`)).toHaveLength(0);
  });
  it('should handle true in "isImplementsError" property of second argument', () => {
    const TestComponentAsField = asField(TestComponent, { isImplementsError: true });
    const wrapper = mount(
      <TestComponentAsField error='Test error' />
    );
    expect(wrapper.find(`.${styles.error}`)).toHaveLength(0);
    expect(wrapper.find(TestComponent).prop('error')).toBe('Test error');
  });
  it('should return component that handle "info" prop', () => {
    const TestComponentAsField = asField(TestComponent);
    const wrapper = mount(
      <TestComponentAsField info='Test info' />
    );
    expect(wrapper.find(`.${styles.info}`).text()).toBe('Test info');
    wrapper.setProps({ info: undefined });
    expect(wrapper.find(`.${styles.info}`)).toHaveLength(0);
  });
  it('should handle true in "isImplementsInfo" property of second argument', () => {
    const TestComponentAsField = asField(TestComponent, { isImplementsInfo: true });
    const wrapper = mount(
      <TestComponentAsField info='Test info' />
    );
    expect(wrapper.find(`.${styles.info}`)).toHaveLength(0);
    expect(wrapper.find(TestComponent).prop('info')).toBe('Test info');
  });
  it('should match snapshot', () => {
    const TestComponentAsField = asField(TestComponent);
    expect(shallow(
      <TestComponentAsField />
    )).toMatchSnapshot();
  });
});
