import React from 'react';
import { shallow } from 'enzyme';
import GridRow from '../';

describe('Компонент GridRow', () => {
  it('should match snapshot with defaults', () => {
    const gridRow = shallow(<GridRow />);
    expect(gridRow).toMatchSnapshot();
  });
  it('should renders correctly without props', () => {
    const gridRow = shallow(<GridRow />);
    expect(gridRow.find('.container').children()).toHaveLength(0);
    expect(gridRow.find('.container')).toHaveLength(1);
    expect(gridRow.find('.container').prop('className')).toEqual('container gutter-l content-undefined');
  });
  it('should match snapshot with custom props', () => {
    const gridRow = shallow(
      <GridRow gutter='s' alignment='center' externalClass='test' tag='section'>
        <div>Колонка 1</div>
      </GridRow>
    );
    expect(gridRow).toMatchSnapshot();
  });
  it('should renders correctly with custom props', () => {
    const gridRow = shallow(
      <GridRow gutter='s' alignment='center' externalClass='test' tag='section'>
        <div>Колонка 1</div>
      </GridRow>
    );
    expect(gridRow.find('section')).toHaveLength(1);
    expect(gridRow.find('section').children()).toHaveLength(1);
    expect(gridRow.find('section').prop('className')).toEqual('container test gutter-s content-center');
  });
});
