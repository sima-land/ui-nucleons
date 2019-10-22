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
        <GridCol tag='p' desktop={3}>Колонка 2</GridCol>
      </GridRow>
    );
    expect(gridRow).toMatchSnapshot();
    expect(gridRow.find('.row').prop('className')).toEqual(
      [
        'row',
        'wrap',
        'items-end',
        'justify-center',
        'row-lg-columns-count-12',
        'row-md-columns-count-8',
        'row-lg-columns-gutters-lg',
        'row-md-columns-gutters-md',
        'row-sm-columns-gutters-sm',
        'test',
      ].join(' ')
    );
    expect(gridRow.find(GridCol)).toHaveLength(2);
    expect(gridRow.find(GridEntity)).toHaveLength(3);
  });
  it('adds correct classes with custom columns count and gutters', () => {
    const gridRow = mount(
      <GridRow
        lgColumns={8}
        mdColumns={12}
        lgGutters='md'
        mdGutters='sm'
        smGutters='lg'
      >
        <GridCol>Колонка 1</GridCol>
      </GridRow>
    );
    expect(gridRow.find('.row').prop('className')).toEqual(
      [
        'row',
        'items-stretch',
        'justify-start',
        'with-gutters',
        'row-lg-columns-count-8',
        'row-md-columns-count-12',
        'row-lg-columns-gutters-md',
        'row-md-columns-gutters-sm',
        'row-sm-columns-gutters-lg',
      ].join(' ')
    );
  });
});
