import React from 'react';
import { shallow } from 'enzyme/build';
import Layout from '../';

describe('<Layout />', () => {
  it('should renders correctly without props', () => {
    const wrapper = shallow(
      <Layout>
        123
      </Layout>
    );
    expect(wrapper.find('.layout')).toHaveLength(1);
    expect(wrapper.text()).toEqual('123');
    expect(wrapper).toMatchSnapshot();
  });
  it('should renders correctly with props', () => {
    const wrapper = shallow(
      <Layout
        containerTag='section'
        containerProps={{
          className: 'section-class',
          name: 'some-name',
        }}
      >
        some content
      </Layout>
    );
    expect(wrapper.find('section.layout')).toHaveLength(1);
    expect(wrapper.find('section.section-class')).toHaveLength(1);
    expect(wrapper.text()).toEqual('some content');
    expect(wrapper).toMatchSnapshot();
  });
  it('should set correct classes with default padding and maxWidth props', () => {
    const wrapper = shallow(
      <Layout>
        some content
      </Layout>
    );
    expect(wrapper.find('.layout-wrapper').prop('className')).toEqual(
      [
        'layout-wrapper',
        'layout-xxl-padding-sm',
        'layout-xl-padding-sm',
        'layout-lg-padding-sm',
        'layout-md-padding-sm',
        'layout-sm-padding-sm',
        'layout-xs-padding-sm',
        'layout-xxs-padding-sm',
        'layout-xxxs-padding-sm',
      ].join(' ')
    );
    expect(wrapper.find('.layout').prop('className')).toEqual(
      [
        'layout',
        'layout-xxl-width-xl',
        'layout-xl-width-xl',
        'layout-lg-width-xl',
        'layout-md-width-xl',
        'layout-sm-width-xl',
        'layout-xs-width-xl',
        'layout-xxs-width-xl',
        'layout-xxxs-width-xl',
      ].join(' ')
    );
  });
  it('should set correct classes with custom padding and maxWidth props', () => {
    const wrapper = shallow(
      <Layout
        lgPadding='lg'
        xxsPadding='md'
        xlMaxWidth='lg'
        mdMaxWidth='md'
        xxxsMaxWidth='xs'
      >
        some content
      </Layout>
    );
    expect(wrapper.find('.layout-wrapper').prop('className')).toEqual(
      [
        'layout-wrapper',
        'layout-xxl-padding-sm',
        'layout-xl-padding-sm',
        'layout-lg-padding-lg',
        'layout-md-padding-lg',
        'layout-sm-padding-lg',
        'layout-xs-padding-lg',
        'layout-xxs-padding-md',
        'layout-xxxs-padding-md',
      ].join(' ')
    );
    expect(wrapper.find('.layout').prop('className')).toEqual(
      [
        'layout',
        'layout-xxl-width-xl',
        'layout-xl-width-lg',
        'layout-lg-width-lg',
        'layout-md-width-md',
        'layout-sm-width-md',
        'layout-xs-width-md',
        'layout-xxs-width-md',
        'layout-xxxs-width-xs',
      ].join(' ')
    );
  });
});
