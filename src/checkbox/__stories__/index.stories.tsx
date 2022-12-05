import React, { useState } from 'react';
import { Checkbox } from '..';
import { TextButton } from '../../text-button';

export default {
  title: 'common/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Checkbox defaultChecked />
    </>
  );
}

Primary.storyName = 'Простой пример';

export function TestInputProps() {
  function noop() {
    return void 0;
  }

  return (
    <>
      <h3>Uncontrolled without props</h3>
      <Checkbox onChange={noop} />

      <h3>Uncontrolled with defaultChecked</h3>
      <Checkbox onChange={noop} defaultChecked />

      <h3>Checked</h3>
      <Checkbox onChange={noop} checked />

      <h3>Unchecked</h3>
      <Checkbox onChange={noop} checked={false} />

      <h3>Disabled</h3>
      <Checkbox onChange={noop} disabled />

      <h3>Disabled + checked</h3>
      <Checkbox onChange={noop} checked disabled />
    </>
  );
}

TestInputProps.storyName = 'Тест: обработка свойств';

export function TestControlled() {
  const [state, setState] = useState(false);

  function toggle() {
    setState(a => !a);
  }

  return (
    <>
      <Checkbox checked={state} onChange={toggle} />

      <div style={{ marginTop: '16px' }}>
        <TextButton size='s' onClick={toggle}>
          {state ? 'Деактивировать' : 'Активировать'}
        </TextButton>
      </div>
    </>
  );
}

TestControlled.storyName = 'Тест: программное управление';
