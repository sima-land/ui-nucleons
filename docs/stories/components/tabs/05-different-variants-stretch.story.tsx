import { Tab, Tabs } from '@sima-land/ui-nucleons/tabs';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Tabs',
  title: 'На всю ширину',
};

export default function DifferentVariantsStretch() {
  const [state, setState] = useState(0);

  const content = (
    <>
      <Tab selected={state === 0} onClick={() => setState(0)}>
        Первая
      </Tab>
      <Tab selected={state === 1} onClick={() => setState(1)}>
        Вторая
      </Tab>
      <Tab selected={state === 2} onClick={() => setState(2)} disabled>
        Третья
      </Tab>
      <Tab selected={state === 3} onClick={() => setState(3)}>
        Четвертая
      </Tab>
    </>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Tabs stretch view='round'>
        {content}
      </Tabs>
      <Tabs stretch view='clean'>
        {content}
      </Tabs>
      <Tabs stretch view='clean-underline'>
        {content}
      </Tabs>
    </div>
  );
}
