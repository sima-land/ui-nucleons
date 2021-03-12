import React from 'react';
import { storiesOf } from '@storybook/react';
import TextField from '../../text-field';
import FieldGrid from '..';

const DisplayWrapper = ({ children }) => (
  <div style={{ padding: 32, background: '#fff' }}>
    {children}
  </div>
);

storiesOf('FieldGrid', module)
  .add('Default', () => (
    <>
      <DisplayWrapper>
        <FieldGrid>
          <FieldGrid.Row>
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
          </FieldGrid.Row>
        </FieldGrid>
      </DisplayWrapper>

      <DisplayWrapper>
        <FieldGrid>
          <FieldGrid.Row>
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
          </FieldGrid.Row>
        </FieldGrid>
      </DisplayWrapper>

      <DisplayWrapper>
        <FieldGrid>
          <FieldGrid.Row>
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
          </FieldGrid.Row>

          <FieldGrid.Row>
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
          </FieldGrid.Row>
        </FieldGrid>
      </DisplayWrapper>

      <DisplayWrapper>
        <FieldGrid>
          <FieldGrid.Row>
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
          </FieldGrid.Row>

          <FieldGrid.Row>
            <FieldGrid.Cell
              field={(
                <TextField disabled defaultValue='Hello, world!' />
              )}
            />
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
          </FieldGrid.Row>

          <FieldGrid.Row>
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
            <FieldGrid.Cell
              field={(
                <TextField defaultValue='Hello, world!' />
              )}
            />
          </FieldGrid.Row>

          <FieldGrid.Row>
            <FieldGrid.Cell
              field={(
                <TextField multiline defaultValue='Hello, world!' />
              )}
            />
          </FieldGrid.Row>
        </FieldGrid>
      </DisplayWrapper>
    </>
  ));
