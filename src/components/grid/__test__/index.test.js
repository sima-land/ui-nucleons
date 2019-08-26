import React from 'react';
import { Layout, Row, Column } from '../';
import GridEntity from '../grid-entity';
import GridLayout from '../grid-layout';
import GridRow from '../grid-row';
import GridCol from '../grid-col';
import { mount } from 'enzyme/build';

describe('GridLayout, GridRow, GridCol', () => {
  it('renders correctly', () => {
    const grid = mount(
      <Layout>
        <Row>
          <Column desktop={3}>column 1</Column>
          <Column desktop={5}>column 2</Column>
        </Row>
        <Row>
          <Column desktop={5}>column 3</Column>
        </Row>
      </Layout>
    );
    expect(grid.find(GridEntity)).toHaveLength(5);
    expect(grid.find(GridLayout)).toHaveLength(1);
    expect(grid.find(GridRow)).toHaveLength(2);
    expect(grid.find(GridCol)).toHaveLength(3);
    expect(grid).toMatchSnapshot();
  });
});
