import React from 'react';
import { shallow } from 'enzyme/build';
import GridRow from '../';
import GridCol from '../../grid-col';

describe('Компонент GridRow', () => {
  it('should match snapshot with defaults', () => {
    const gridRow = shallow(<GridRow />);
    expect(gridRow).toMatchSnapshot();
  });
  it('should renders correctly without props', () => {
    const gridRow = shallow(<GridRow />);
    expect(gridRow.find('.row').children()).toHaveLength(0);
    expect(gridRow.find('.row')).toHaveLength(1);
    expect(gridRow.find('.row').prop('className')).toEqual('row items-stretch justify-start row-gutter-l');
  });
  it('should match snapshot with custom props', () => {
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
  });
  it('should have correct custom props', () => {
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
    expect(gridRow.find(GridCol)).toHaveLength(2);
    expect(gridRow.find('section')).toHaveLength(1);
    expect(gridRow.find('section').prop('className'))
      .toEqual('row test items-stretch justify-center row-gutter-s');
  });
});
