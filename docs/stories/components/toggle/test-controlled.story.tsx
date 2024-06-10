import { Toggle } from '@sima-land/ui-nucleons/toggle';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Toggle',
  title: 'Тест: Программное управление',
};

export default function TestControlled() {
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
