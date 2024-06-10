import { SidePage } from '@sima-land/ui-nucleons/side-page';
import { useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';

export const meta = {
  category: 'Компоненты/SidePage',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  const [shown, toggle] = useState(false);

  return (
    <>
      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

      <SidePage shown={shown} size='s' withTransitions onClose={() => toggle(false)}>
        <SidePage.Header divided title='Простой пример' onClose={() => toggle(false)} />

        <SidePage.Body>
          <div style={{ padding: '20px' }}>
            SidePage - это аналог модального окна со своей особой стилизацией.
          </div>
        </SidePage.Body>

        <SidePage.Footer divided>
          <CleanGroup>
            <CleanButton onClick={() => toggle(false)}>Закрыть</CleanButton>
          </CleanGroup>
        </SidePage.Footer>
      </SidePage>
    </>
  );
}
