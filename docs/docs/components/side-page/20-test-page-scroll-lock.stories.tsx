import { SidePage } from '@sima-land/ui-nucleons/side-page';
import { useState, CSSProperties } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { LoremIpsum, PageScrollLockDemo } from '#docs-utils';

export const meta = {
  category: 'Компоненты/SidePage',
  title: 'Тест: Блокировка прокрутки страницы',
  parameters: {
    layout: 'padded',
  },
};

export default function TestPageScrollLock() {
  const styles: Record<'root', CSSProperties> = {
    root: {
      padding: '24px',
    },
  };

  const [shown, toggle] = useState<boolean>(false);
  const [contentSize, setContentSize] = useState<number>(5);

  const increaseContent = () => {
    setContentSize(n => n + 1);
  };

  const decreaseContent = () => {
    setContentSize(n => Math.max(1, n - 1));
  };

  const show = () => {
    toggle(true);
  };

  const hide = () => {
    toggle(false);
  };

  return (
    <PageScrollLockDemo>
      <Button size='s' onClick={show}>
        Показать SidePage
      </Button>

      <SidePage size='s' shown={shown} onClose={hide} withTransitions withScrollDisable>
        <SidePage.Header divided title='Тест: Блокировка прокрутки страницы' onClose={hide} />

        <SidePage.Body>
          <div style={styles.root}>
            <LoremIpsum paragraphCount={contentSize} />
          </div>
        </SidePage.Body>

        <SidePage.Footer divided>
          <CleanGroup>
            <CleanButton onClick={decreaseContent}>Убрать</CleanButton>
            <CleanButton onClick={increaseContent}>Добавить</CleanButton>
          </CleanGroup>
        </SidePage.Footer>
      </SidePage>
    </PageScrollLockDemo>
  );
}
