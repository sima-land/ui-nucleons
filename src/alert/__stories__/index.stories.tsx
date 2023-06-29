import { CSSProperties, useState } from 'react';
import { Alert, AlertBody } from '..';
import { TopBar } from '../../top-bar';
import { BottomBar } from '../../bottom-bar';
import { Button } from '../../button';
import { CleanGroup, CleanButton } from '../../clean-buttons';
import { PageScrollLockDemo } from '../../../.storybook/utils';

export default {
  title: 'common/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать Alert
      </Button>

      {open && (
        <Alert onClose={() => setOpen(false)}>
          <TopBar title='Ошибка' />

          <AlertBody style={{ padding: '64px 20px', textAlign: 'center' }}>
            Да нет тут никакой ошибки на самом деле
          </AlertBody>

          <BottomBar divided>
            <CleanGroup>
              <CleanButton onClick={() => setOpen(false)}>Ясно</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Alert>
      )}
    </>
  );
}

Primary.storyName = 'Простой пример';

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
        <Alert onClose={() => setOpen(false)} withScrollDisable>
          <TopBar divided title='Тест: Блокировка прокрутки страницы' />

          <AlertBody style={style}>
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

TestPageScrollLock.storyName = 'Тест: блокировка прокрутки страницы';
