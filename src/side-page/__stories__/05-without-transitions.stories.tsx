import { SidePage } from '@sima-land/ui-nucleons/side-page';
import { useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/SidePage',
  component: SidePage,
  parameters: {
    layout: 'padded',
  },
};

export function WithoutTransitions() {
  const [shown, toggle] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

      <SidePage size='s' shown={shown} onClose={() => toggle(false)}>
        <SidePage.Header
          divided
          title='Проверка'
          subtitle='Без анимаций'
          onClose={() => toggle(false)}
        />
      </SidePage>
    </>
  );
}

WithoutTransitions.storyName = 'Без анимаций';
