import { Modal, ModalProps, ModalBody } from '@sima-land/ui-nucleons/modal';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { navigationButtons, TopBar } from '@sima-land/ui-nucleons/top-bar';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { usePageScrollLock } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';
import styles from './styles/additional-topbar.module.scss';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export function AdditionalTopBar() {
  const [open, setOpen] = useState(false);

  useVisualViewportUnit();

  return (
    <>
      {[...Array(12).keys()].map(index => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Sapiente velit a
          consequuntur deserunt provident eaque veritatis omnis error.
        </p>
      ))}

      <Button onClick={() => setOpen(true)}>Открыть</Button>

      {[...Array(64).keys()].map(index => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquam rerum ut harum
          nam et ad necessitatibus eos quia blanditiis voluptate fuga facilis, molestias repellat
          dolor esse. Neque velit repellat et non?
        </p>
      ))}

      {open && <CustomModal onClose={() => setOpen(false)} />}
    </>
  );
}

AdditionalTopBar.storyName = 'Дополнительная шапка';

function CustomModal(props: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  usePageScrollLock(ref, { lockEnabled: true });

  return (
    <Modal size='fullscreen' {...props}>
      <ModalBody>
        <TopBar title='Пункты самовывоза' buttons={navigationButtons({ onClose: props.onClose })} />
        <Tabs view='clean-underline' stretch>
          <Tabs.Item name='На карте' />
          <Tabs.Item name='Списком' selected />
        </Tabs>
        <div ref={ref} className={styles.body} id='body'>
          {[...Array(64).keys()].map(index => (
            <div key={index}>Item #{index + 1}</div>
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
}

function useVisualViewportUnit() {
  useEffect(() => {
    const define = (value: number) => {
      document.documentElement.style.setProperty('--vh', `${value}px`);
    };

    const update = () => {
      window.visualViewport && define(window.visualViewport.height / 100);
    };

    window.visualViewport?.addEventListener('resize', update);
    window.visualViewport?.addEventListener('scroll', update);

    update();

    return () => {
      window.visualViewport?.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('scroll', update);
    };
  }, []);
}
