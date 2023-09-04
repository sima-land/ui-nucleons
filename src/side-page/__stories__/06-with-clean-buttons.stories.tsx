import { SidePage } from '@sima-land/ui-nucleons/side-page';
import { useState, CSSProperties } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'common/SidePage',
  component: SidePage,
  parameters: {
    layout: 'padded',
  },
};

export function WithCleanButtons() {
  const [shown, toggleSidePage] = useState<boolean>(false);

  const styles: Record<'root', CSSProperties> = {
    root: {
      padding: '40px',
      display: 'flex',
    },
  };

  return (
    <>
      <Button size='s' onClick={() => toggleSidePage(true)}>
        Показать
      </Button>

      <SidePage size='s' shown={shown} withTransitions onClose={() => toggleSidePage(false)}>
        <SidePage.Header divided title='Особый футер' onClose={() => toggleSidePage(false)} />

        <SidePage.Body>
          <div style={styles.root}>Пример использования прозрачных кнопок в футере...</div>
        </SidePage.Body>

        <SidePage.Footer divided>
          <CleanGroup>
            <CleanButton>Эники</CleanButton>
            <CleanButton>Бэники</CleanButton>
          </CleanGroup>
        </SidePage.Footer>
      </SidePage>
    </>
  );
}

WithCleanButtons.storyName = 'Прозрачные кнопки в футере';
