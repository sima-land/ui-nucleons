import React from 'react';
import { shallow } from 'enzyme/build';
import GridCol from '../index';
import { makeColClasses } from '../../class-maker';

describe('Компонент GridCol', () => {
  it('should match snapshot with defaults', () => {
    const gridCol = shallow(<GridCol />);
    expect(gridCol).toMatchSnapshot();
  });
  it('should renders correctly without props', () => {
    const gridCol = shallow(<GridCol />);
    expect(gridCol.find('GridEntity').prop('createClasses')).toEqual(makeColClasses);
  });
  it('should renders correctly with custom props', () => {
    const gridCol = shallow(
      <GridCol
        gutter='s'
        externalClass='test'
        tag='section'
        justify='center'
        width={6}
      >
        Колонка 1
      </GridCol>
    );
    expect(gridCol).toMatchSnapshot();
    expect(gridCol.find('GridEntity')).toHaveLength(1);
    expect(gridCol.find('GridEntity').prop('createClasses')).toEqual(makeColClasses);
  });
});
