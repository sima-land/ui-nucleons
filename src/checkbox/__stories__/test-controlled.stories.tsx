import { Checkbox } from '@sima-land/ui-nucleons/checkbox';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { useState } from 'react';

export default {
  title: 'common/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
};

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

TestControlled.storyName = 'Тест: Программное управление';
