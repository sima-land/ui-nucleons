import { Checkbox } from '@sima-land/ui-nucleons/checkbox';
import { TextButton } from '@sima-land/ui-nucleons/text-button';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Checkbox',
  title: 'Тест: Программное управление',
};

export default function () {
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
