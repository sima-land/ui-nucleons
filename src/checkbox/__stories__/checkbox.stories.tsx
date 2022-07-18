import React, { useState } from 'react';
import { Checkbox } from '..';
import { Button } from '../../button';

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
      <h3>Uncontrolled without props</h3>
      <Checkbox />

      <h3>Uncontrolled with defaultChecked</h3>
      <Checkbox defaultChecked />

      <h3>Checked</h3>
      <Checkbox checked />

      <h3>Unchecked</h3>
      <Checkbox checked={false} />

      <h3>Disabled</h3>
      <Checkbox disabled />

      <h3>Disabled & checked</h3>
      <Checkbox checked disabled />
    </>
  );
}

Primary.storyName = 'Простой пример';

export function Controlled() {
  const [state, setState] = useState(false);

  return (
    <>
      <div>
        <Checkbox checked={state} onChange={() => setState(a => !a)} />
      </div>

      <div>
        <Button size='s' onClick={() => setState(a => !a)}>
          Переключить программно
        </Button>
      </div>
    </>
  );
}

Controlled.storyName = 'Программное управление';
