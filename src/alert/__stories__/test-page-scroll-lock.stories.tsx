import { Alert, AlertBody } from '@sima-land/ui-nucleons/alert';
import { CSSProperties, useState } from 'react';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { PageScrollLockDemo } from '../../../.storybook/utils';

export default {
  title: 'common/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
};

export function TestPageScrollLock() {
  const [open, setOpen] = useState<boolean>(false);

  const style: CSSProperties = {
    height: '168px',
    padding: '16px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <PageScrollLockDemo>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать Alert
      </Button>

      {open && (
        <Alert onClose={() => setOpen(false)}>
          <TopBar divided title='Тест: Блокировка прокрутки страницы' />

          <AlertBody style={style} withScrollDisable>
            <p>Какой-то текст без особого смысла здесь</p>
          </AlertBody>

          <BottomBar divided>
            <CleanGroup>
              <CleanButton onClick={() => setOpen(false)}>Ну ладно</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Alert>
      )}
    </PageScrollLockDemo>
  );
}

TestPageScrollLock.storyName = 'Тест: Блокировка прокрутки страницы';
