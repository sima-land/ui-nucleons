import React from 'react';
import { DropdownItem } from '..';

export default {
  title: 'DropdownItem',
  component: DropdownItem,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
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
      {['s', 'm', 'l', 'xl'].map(size => (
        <DropdownItem key={size} size={size} style={{ width: 100 }}>
          Hello
        </DropdownItem>
      ))}
    </div>
  </>
);

export const NoHover = () => (
  <>
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
      {['s', 'm', 'l', 'xl'].map(size => (
        <DropdownItem key={size} size={size} style={{ width: 100 }} noHover>
          Hello
        </DropdownItem>
      ))}
    </div>
  </>
);

export const Disabled = () => (
  <>
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
      {['s', 'm', 'l', 'xl'].map(size => (
        <DropdownItem key={size} size={size} style={{ width: 100 }} disabled>
          Hello
        </DropdownItem>
      ))}
    </div>
  </>
);
