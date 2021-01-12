import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropdownItem } from '..';

storiesOf('DropdownItem', module)
  .add('Usage', () => (
    <div style={{ padding: 48 }}>
      <h3>Размеры</h3>
      <div
        style={{
          float: 'left',
          display: 'flex',
          alignItems: 'center',
          padding: 16,
          border: '1px dashed #ccc',
        }}
      >
        {['s', 'm', 'l'].map(size => (
          <DropdownItem key={size} size={size} style={{ width: 100 }}>
            Hello
          </DropdownItem>
        ))}
      </div>
    </div>
  ));
