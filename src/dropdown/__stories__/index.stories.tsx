import React, { useState } from 'react';
import { Dropdown } from '..';
import { DropdownItem } from '../../dropdown-item';
import { Link } from '../../link';
import { Spinner } from '../../spinner';
import DownSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/down';
import UpSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/up';

export default {
  title: 'desktop/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
};

const Divider = () => <div style={{ height: 64 }} />;

export const Primary = () => (
  <>
    <h3>Вместе с DropdownItem</h3>
    <Dropdown style={{ width: 320 }}>
      {Array(4)
        .fill(0)
        .map((a, i) => (
          <DropdownItem size='s' key={i}>
            Item №{i + 1}
          </DropdownItem>
        ))}
    </Dropdown>

    <Divider />

    <h3>Вместе с DropdownItem и прокруткой</h3>
    <Dropdown style={{ width: 320 }}>
      {Array(25)
        .fill(0)
        .map((a, i) => (
          <DropdownItem size='l' key={i}>
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ flexGrow: 1 }}>Item №{i + 1}</div>
              <div style={{ color: '#aaa' }}>#{i + 1}</div>
            </div>
          </DropdownItem>
        ))}
    </Dropdown>

    <Divider />

    <h3>Вместе со Spinner</h3>
    <Dropdown style={{ width: 320 }}>
      <div style={{ height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Spinner size='small' />
      </div>
    </Dropdown>
  </>
);

export const Example = () => {
  const [shown, toggle] = useState<boolean>(false);
  const Icon = shown ? UpSVG : DownSVG;

  return (
    <div style={{ position: 'relative', fontSize: '16px' }}>
      <Link color='gray87' onClick={() => toggle(!shown)} style={{ display: 'flex' }}>
        <span style={{ lineHeight: '24px' }}>Сначала новые</span>
        <Icon fill='currentColor' style={{ margin: '4px 0 4px 4px', display: 'block' }} />
      </Link>

      {shown && (
        <Dropdown
          style={{ marginTop: 8, position: 'absolute', top: '100%', left: 0, whiteSpace: 'nowrap' }}
        >
          <DropdownItem>Сначала новые</DropdownItem>
          <DropdownItem>Сначала старые</DropdownItem>
          <DropdownItem>Сначала с низкой оценкой</DropdownItem>
        </Dropdown>
      )}
    </div>
  );
};
