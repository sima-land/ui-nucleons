import React from 'react';
import { TextField } from '../../text-field';
import { FieldGrid } from '..';

const DisplayWrapper: React.FC = ({ children }) => (
  <div style={{ margin: '0 auto', marginTop: 16, background: '#fff', maxWidth: 1024 }}>
    {children}
  </div>
);

export default {
  title: 'FieldGrid',
  component: FieldGrid,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
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
);
