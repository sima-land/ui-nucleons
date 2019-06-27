import React from 'react';
import { shallow } from 'enzyme/build';
import GridCol from '../index';

describe('Компонент GridCol', () => {
  it('should match snapshot with defaults', () => {
    const gridCol = shallow(<GridCol />);
    expect(gridCol).toMatchSnapshot();
  });
  it('should renders correctly without props', () => {
    const gridCol = shallow(<GridCol />);
    expect(gridCol.find('.col').children()).toHaveLength(0);
    expect(gridCol.find('.col')).toHaveLength(1);
    expect(gridCol.find('.col').prop('className'))
      .toEqual('col items-stretch justify-start col-gutter-l width-auto');
  });
  it('should match snapshot with custom props', () => {
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
  });
  it('should have correct custom props', () => {
    const gridCol = shallow(
      <GridCol
        gutter='s'
        externalClass='test'
        tag='article'
        justify='center'
        width={6}
      >
        Колонка 1
      </GridCol>
    );
    expect(gridCol.find('article')).toHaveLength(1);
    expect(gridCol.find('article').prop('className'))
      .toEqual('col test items-stretch justify-center col-gutter-s width-6');
  });
});
