import React from 'react';
import { shallow } from 'enzyme/build';
import GridRow from '../';
import GridCol from '../../grid-col';
import { makeRowClasses } from '../../class-maker';

describe('Компонент GridRow', () => {
  it('should match snapshot with defaults', () => {
    const gridRow = shallow(<GridRow />);
    expect(gridRow).toMatchSnapshot();
  });
  it('should renders correctly without props', () => {
    const gridRow = shallow(<GridRow />);
    expect(gridRow.find('GridEntity').prop('createClasses')).toEqual(makeRowClasses);
  });
  it('should renders correctly with custom props', () => {
    const gridRow = shallow(
      <GridRow
        gutter='s'
        externalClass='test'
        tag='section'
        justify='center'
      >
        <GridCol tag='section' width={6}>Колонка 1</GridCol>
        <GridCol tag='p' width={4}>Колонка 2</GridCol>>
      </GridRow>
    );
    expect(gridRow).toMatchSnapshot();
    expect(gridRow.find(GridCol)).toHaveLength(2);
    expect(gridRow.find('GridEntity')).toHaveLength(1);
  });
});
