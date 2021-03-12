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
              <TextField defaultValue='Field value' classes={{}} />
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

  it('should handle invalid children', () => {
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
          {null as any}
        </FieldGrid.Row>
        {null as any}
      </FieldGrid>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "rootProps" prop', () => {
    const wrapper = mount(
      <FieldGrid rootProps={{ title: 'hello' }}>
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

    wrapper.setProps({ rootProps: { className: 'test-class' } });

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "field" and "renderField" props missing', () => {
    const wrapper = mount(
      <FieldGrid rootProps={{ title: 'hello' }}>
        <FieldGrid.Row>
          <FieldGrid.Cell field={undefined as any} renderField={undefined} />
        </FieldGrid.Row>
      </FieldGrid>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
