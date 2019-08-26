import React from 'react';
import { shallow } from 'enzyme/build';
import GridLayout from '../';

describe('<GridLayout/>', () => {
  it('should renders correctly without props', () => {
    const gridLayout = shallow(<GridLayout><div className='test-content'>123</div></GridLayout>);
    expect(gridLayout.find('.layout')).toHaveLength(1);
    expect(gridLayout.find('.test-content')).toHaveLength(1);
    expect(gridLayout).toMatchSnapshot();
  });
});
