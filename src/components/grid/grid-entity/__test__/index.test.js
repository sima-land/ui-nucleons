import React from 'react';
import { shallow } from 'enzyme/build';
import GridEntity from '../';

describe('<GridEntity/>', () => {
  it('should renders correctly without props', () => {
    const gridEntity = shallow(<GridEntity />);
    expect(gridEntity).toMatchSnapshot();
  });
  it('should renders correctly with props', () => {
    const gridEntity = shallow(
      <GridEntity createClasses={jest.fn(() => 'test classes')} tag='article'>
        <div>children</div>
      </GridEntity>
    );
    expect(gridEntity).toMatchSnapshot();
  });
  it('should renders correctly with different tags', () => {
    let gridEntity = shallow(<GridEntity />);
    expect(gridEntity.find('div')).toHaveLength(1);
    gridEntity = shallow(<GridEntity tag='section' />);
    expect(gridEntity.find('section')).toHaveLength(1);
    gridEntity = shallow(<GridEntity tag='p' />);
    expect(gridEntity.find('p')).toHaveLength(1);
  });
  it('should renders correctly with createClasses function', () => {
    const createClasses = jest.fn();
    shallow(<GridEntity createClasses={createClasses} />);
    expect(createClasses).toHaveBeenCalledTimes(1);
  });
});
