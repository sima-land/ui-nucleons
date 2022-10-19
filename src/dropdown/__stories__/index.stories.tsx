import React from 'react';
import { Dropdown } from '..';
import { DropdownItem } from '../../dropdown-item';
import { Spinner } from '../../spinner';

export default {
  title: 'desktop/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
};

function Divider() {
  return <div style={{ height: 64 }} />;
}

export function Primary() {
  return (
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
        <div
          style={{ height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Spinner size='s' />
        </div>
      </Dropdown>
    </>
  );
}

Primary.storyName = 'Простой пример';
