import React from 'react';
import { shallow } from 'enzyme/build';
import GridLayout from '../';

describe('<GridLayout/>', () => {
  it('should renders correctly without props', () => {
    const gridLayout = shallow(<GridLayout>
      <div className='test-content'>123</div>
    </GridLayout>);
    expect(gridLayout.find('.layout')).toHaveLength(1);
    expect(gridLayout.find('.test-content')).toHaveLength(1);
    expect(gridLayout).toMatchSnapshot();
  });
  it('should renders correctly with props', () => {
    const gridLayout = shallow(
      <GridLayout
        tag='section'
        containerProps={{
          className: 'section-class',
          name: 'some-name',
        }}
      >
        <div className='test'>some content</div>
      </GridLayout>
    );
    expect(gridLayout.find('section.layout')).toHaveLength(1);
    expect(gridLayout.find('section.section-class')).toHaveLength(1);
    expect(gridLayout.find('.test')).toHaveLength(1);
    expect(gridLayout).toMatchSnapshot();
  });
});
