import React from 'react';
import { DropdownItem, DropdownItemProps } from '..';

export default {
  title: 'desktop/DropdownItem',
  component: DropdownItem,
  parameters: {
    layout: 'padded',
  },
};

const SIZES: Array<DropdownItemProps['size']> = ['s', 'm', 'l', 'xl'];

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
      {SIZES.map(size => (
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
      {SIZES.map(size => (
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
      {SIZES.map(size => (
        <DropdownItem key={size} size={size} style={{ width: 100 }} disabled>
          Hello
        </DropdownItem>
      ))}
    </div>
  </>
);
