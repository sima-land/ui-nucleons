import React from 'react';
import { shallow } from 'enzyme/build';
import GridLayout from '../';

describe('<GridLayout />', () => {
  it('should renders correctly without props', () => {
    const wrapper = shallow(
      <GridLayout>
        <div className='test-content'>123</div>
      </GridLayout>
    );
    expect(wrapper.find('.grid-layout')).toHaveLength(1);
    expect(wrapper.find('.test-content')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should renders correctly with props', () => {
    const wrapper = shallow(
      <GridLayout
        containerTag='section'
        containerProps={{
          className: 'section-class',
          name: 'some-name',
        }}
      >
        <div className='test'>some content</div>
      </GridLayout>
    );
    expect(wrapper.find('section.grid-layout')).toHaveLength(1);
    expect(wrapper.find('section.section-class')).toHaveLength(1);
    expect(wrapper.find('.test')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set correct classes with custom padding and maxWidth props', () => {
    const wrapper = shallow(
      <GridLayout
        xxlPadding='sm'
        xlPadding='sm'
        lgPadding='sm'
        mdPadding='sm'
        smPadding='sm'
        xsPadding='sm'
        xxsPadding='sm'
        xxxsPadding='sm'
        xxlMaxWidth='sm'
        xlMaxWidth='sm'
        lgMaxWidth='sm'
        mdMaxWidth='sm'
        smMaxWidth='sm'
        xsMaxWidth='sm'
        xxsMaxWidth='sm'
        xxxsMaxWidth='sm'
      >
        <div className='test'>some content</div>
      </GridLayout>
    );
    expect(wrapper.find('.grid-layout-wrapper').prop('className')).toEqual(
      [
        'grid-layout-wrapper',
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
    expect(wrapper.find('.grid-layout').prop('className')).toEqual(
      [
        'grid-layout',
        'layout-xxl-width-sm',
        'layout-xl-width-sm',
        'layout-lg-width-sm',
        'layout-md-width-sm',
        'layout-sm-width-sm',
        'layout-xs-width-sm',
        'layout-xxs-width-sm',
        'layout-xxxs-width-sm',
      ].join(' ')
    );
  });
});
