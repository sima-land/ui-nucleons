import React from 'react';
import TextField from '../../text-field';
import FieldGrid from '..';

const DisplayWrapper: React.FC = ({ children }) => (
  <div style={{ padding: '32px 0', background: '#fff', maxWidth: 1024, margin: '0 auto' }}>
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
