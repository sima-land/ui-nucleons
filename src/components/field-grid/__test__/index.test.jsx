import React from 'react';
import { mount } from 'enzyme';
import FieldGrid from '..';
import TextField from '../../text-field';

describe('FieldGrid', () => {
  it('should render single row with one cell', () => {
    const wrapper = mount(
      <FieldGrid>
        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>
      </FieldGrid>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render two rows with one cell', () => {
    const wrapper = mount(
      <FieldGrid>
        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>
        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>
      </FieldGrid>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render single row with two cells', () => {
    const wrapper = mount(
      <FieldGrid>
        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>
      </FieldGrid>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render single row with three cells', () => {
    const wrapper = mount(
      <FieldGrid>
        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>
      </FieldGrid>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render two rows', () => {
    const wrapper = mount(
      <FieldGrid>
        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>

        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>
      </FieldGrid>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render multiple different rows', () => {
    const wrapper = mount(
      <FieldGrid>
        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>

        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>

        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
          <FieldGrid.Cell
            field={(
              <TextField defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>

        <FieldGrid.Row>
          <FieldGrid.Cell
            field={(
              <TextField multiline defaultValue='Field value' />
            )}
          />
        </FieldGrid.Row>
      </FieldGrid>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "renderField" prop', () => {
    const wrapper = mount(
      <FieldGrid>
        <FieldGrid.Row>
          <FieldGrid.Cell
            renderField={fieldProps => (
              <TextField {...fieldProps} defaultValue='Foo' />
            )}
          />
          <FieldGrid.Cell
            renderField={fieldProps => (
              <TextField {...fieldProps} defaultValue='Bar' />
            )}
          />
        </FieldGrid.Row>
      </FieldGrid>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
