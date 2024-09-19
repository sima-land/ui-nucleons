import { SidePage, SidePageBody } from '@sima-land/ui-nucleons/side-page';
import { useState, CSSProperties } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { LoremIpsum, PageScrollLockDemo } from '#docs-utils';
import { navigationButtons, TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';

export const meta = {
  category: 'Компоненты/SidePage',
  title: 'Тест: Блокировка прокрутки страницы',
};

const styles = {
  root: {
    padding: '24px',
  } satisfies CSSProperties,
};

export default function TestPageScrollLock() {
  const [open, setOpen] = useState<boolean>(false);
  const [contentSize, setContentSize] = useState<number>(5);

  const increaseContent = () => {
    setContentSize(n => n + 1);
  };

  const decreaseContent = () => {
    setContentSize(n => Math.max(1, n - 1));
  };

  const show = () => {
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
  };

  return (
    <PageScrollLockDemo>
      <Button size='s' onClick={show}>
        Показать SidePage
      </Button>

      {open && (
        <SidePage size='s' onClose={hide}>
          <TopBar
            divided
            title='Тест: Блокировка прокрутки страницы'
            buttons={navigationButtons({ onClose: hide })}
          />

          <SidePageBody withScrollDisable style={styles.root}>
            <LoremIpsum paragraphCount={contentSize} />
          </SidePageBody>

          <BottomBar divided>
            <CleanGroup>
              <CleanButton onClick={decreaseContent}>Убрать</CleanButton>
              <CleanButton onClick={increaseContent}>Добавить</CleanButton>
            </CleanGroup>
          </BottomBar>
        </SidePage>
      )}
    </PageScrollLockDemo>
  );
}
