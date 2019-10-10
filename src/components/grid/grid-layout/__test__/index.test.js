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
    expect(wrapper.find('.layout')).toHaveLength(1);
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
    expect(wrapper.find('section.layout')).toHaveLength(1);
    expect(wrapper.find('section.section-class')).toHaveLength(1);
    expect(wrapper.find('.test')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
