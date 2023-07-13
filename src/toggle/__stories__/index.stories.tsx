import { Toggle } from '@sima-land/ui-nucleons/toggle';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { useState } from 'react';

export default {
  title: 'common/Toggle',
  component: Toggle,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Toggle defaultChecked />
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
      <Toggle onChange={noop} />

      <h3>Uncontrolled with defaultChecked</h3>
      <Toggle onChange={noop} defaultChecked />

      <h3>Checked</h3>
      <Toggle onChange={noop} checked />

      <h3>Unchecked</h3>
      <Toggle onChange={noop} checked={false} />

      <h3>Disabled</h3>
      <Toggle onChange={noop} disabled />

      <h3>Disabled + checked</h3>
      <Toggle onChange={noop} checked disabled />
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
      <Toggle checked={state} onChange={toggle} />

      <div style={{ marginTop: '16px' }}>
        <TextButton size='s' onClick={toggle}>
          {state ? 'Деактивировать' : 'Активировать'}
        </TextButton>
      </div>
    </>
  );
}

TestControlled.storyName = 'Тест: программное управление';
