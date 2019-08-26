import React from 'react';
import { mount } from 'enzyme/build';
import GridCol from '../';
import GridEntity from '../../grid-entity';
import { makeColClasses } from '../../class-maker';

describe('Компонент GridCol', () => {
  it('should renders correctly without props', () => {
    const gridCol = mount(<GridCol />);
    expect(gridCol.find(GridEntity).prop('createClasses')).toEqual(makeColClasses);
    expect(gridCol).toMatchSnapshot();
  });
  it('should renders correctly with custom props', () => {
    const gridCol = mount(
      <GridCol
        externalClass='test'
        tag='section'
        desktop={5}
        mobile={7}
      >
        Колонка 1
      </GridCol>
    );
    expect(gridCol).toMatchSnapshot();
    expect(gridCol.find(GridEntity)).toHaveLength(1);
    expect(gridCol.find(GridEntity).prop('createClasses')).toEqual(makeColClasses);
  });
});
