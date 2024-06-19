import { Tab, Tabs } from '@sima-land/ui-nucleons/tabs';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Tabs',
  title: 'Простой пример',
};

export default function Primary() {
  const [state, setState] = useState(0);

  return (
    <Tabs>
      <Tab selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tab>
      <Tab selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tab>
      <Tab selected={state === 2} onClick={() => setState(2)}>
        Третья
      </Tab>
    </Tabs>
  );
}
