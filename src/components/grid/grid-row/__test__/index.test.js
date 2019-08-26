import React from 'react';
import { mount } from 'enzyme/build';
import GridRow from '../';
import GridCol from '../../grid-col';
import GridEntity from '../../grid-entity';
import { makeRowClasses } from '../../class-maker';

describe('Компонент GridRow', () => {
  it('should renders correctly without props', () => {
    const gridRow = mount(<GridRow />);
    expect(gridRow.find(GridEntity).prop('createClasses')).toEqual(makeRowClasses);
    expect(gridRow).toMatchSnapshot();
  });
  it('should renders correctly with custom props', () => {
    const gridRow = mount(
      <GridRow
        externalClass='test'
        tag='section'
        justify='center'
        alignItems='end'
        wrap
        withoutGutters
      >
        <GridCol tag='section' desktop={9}>Колонка 1</GridCol>
        <GridCol tag='p' desktop={3}>Колонка 2</GridCol>>
      </GridRow>
    );
    expect(gridRow).toMatchSnapshot();
    expect(gridRow.find(GridCol)).toHaveLength(2);
    expect(gridRow.find(GridEntity)).toHaveLength(3);
  });
});
