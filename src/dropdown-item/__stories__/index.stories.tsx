import React, { Fragment } from 'react';
import { DropdownItem, DropdownItemProps } from '..';

export default {
  title: 'desktop/DropdownItem',
  component: DropdownItem,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

const ITEMS: DropdownItemProps[] = [
  { children: 'One' },
  { children: 'Two' },
  { children: 'Three (No hover)', noHover: true },
  { children: 'Four' },
  { children: 'Five' },
  { children: 'Six (Disabled)', disabled: true },
  { children: 'Seven' },
];

const SIZES: Array<Required<DropdownItemProps>['size']> = ['s', 'm', 'l', 'xl'];

export function Primary() {
  return (
    <>
      {SIZES.map(size => (
        <Fragment key={size}>
          <h4>{size.toUpperCase()}</h4>

          <div style={{ background: '#fff', marginBottom: '20px', width: '480px' }}>
            {ITEMS.map((props, index) => (
              <DropdownItem key={index} size={size} {...props} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
}

Primary.storyName = 'Простой пример';
