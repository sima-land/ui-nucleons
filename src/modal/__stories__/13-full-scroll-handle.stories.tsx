import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { CSSProperties, useMemo, useRef, useState } from 'react';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { LoremIpsum } from '../../../.storybook/utils';
import { useIntersection } from '@sima-land/ui-nucleons/hooks';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  body: {
    padding: '32px 16px',
  } satisfies CSSProperties,
};

export function InfiniteScroll() {
  const [open, setOpen] = useState<boolean>(false);
  const [count, setCount] = useState<number>(32);

  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const options = useMemo(() => ({ root: viewport }), [viewport]);

  useIntersection(
    indicatorRef,
    entry => {
      entry.isIntersecting && setCount(n => n + 32);
    },
    options,
  );

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal {...getResponsiveModalProps({ size: 'm' })} onClose={() => setOpen(false)}>
          <TopBar size='unset' divided title='Модальное окно' />

          <ModalBody style={styles.body} viewportRef={setViewport}>
            <LoremIpsum paragraphCount={count} />
            <div ref={indicatorRef} />
          </ModalBody>

          <BottomBar size='unset' divided>
            <CleanGroup>
              <CleanButton onClick={() => setOpen(false)}>Закрыть</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Modal>
      )}
    </>
  );
}

InfiniteScroll.storyName = 'Бесконечная прокрутка';
