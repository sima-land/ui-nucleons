import React, { useState } from 'react';
import { Story } from '@storybook/react';
import { Modal, ModalProps } from '..';
import { Button } from '../../button';
import { Clean } from '../../clean-buttons';
import { DesktopLayout } from '../../layout';
import { marginRight } from '../../styling/sizes';
import { Box } from '../../box';
import { action } from '@storybook/addon-actions';
import { ArrowButton } from '../../arrow-button';

const Template: Story<ModalProps> = props => {
  const [opened, toggleModal] = useState<boolean>(true);

  return (
    <>
      <Button onClick={() => toggleModal(true)}>Показать окно</Button>

      {opened && (
        <Modal inPortal onClose={() => toggleModal(false)} {...props} withScrollDisable>
          <Modal.Header divided title='Модальное окно' />
          <Modal.Body>
            <div style={{ padding: 24 }}>Содержимое модального окна</div>
          </Modal.Body>
          <Modal.Footer divided size='s'>
            <Clean.Group>
              <Clean.Button>Кнопка</Clean.Button>
              <Clean.Button>Ещё кнопка</Clean.Button>
            </Clean.Group>
          </Modal.Footer>
        </Modal>
      )}

      {[...Array(100).keys()].map(index => (
        <p key={index}>
          Очень много контента для проверки блокировки прокрутки под окном [{index}]
        </p>
      ))}
    </>
  );
};

export default {
  title: 'desktop/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export const SizeS = Template.bind(null, {
  size: 's',
  height: 300,
});

export const SizeM = Template.bind(null, {
  height: 400,
});

export const SizeL = Template.bind(null, {
  size: 'l',
  height: 500,
});

export const SizeXL = Template.bind(null, {
  size: 'xl',
  height: 600,
});

export const Fullscreen: Story = () => (
  <Modal size='fullscreen' inPortal>
    <Modal.Header divided title='Полноэкранное модальное окно' />
    <Modal.Body>
      <div style={{ height: '100%', background: '#eee' }}>
        <DesktopLayout>
          <Box padding={6}>Содержимое модального окна</Box>
        </DesktopLayout>
      </div>
    </Modal.Body>
    <Modal.Footer divided>
      <DesktopLayout>
        <Box marginY={3} display='flex' justifyContent='end'>
          <Button viewType='secondary' className={marginRight(3)}>
            Кнопка
          </Button>
          <Button>Кнопка</Button>
        </Box>
      </DesktopLayout>
    </Modal.Footer>
  </Modal>
);

export const WithoutBars: Story = () => (
  <Modal size='s' height={320} inPortal>
    <Modal.Body>
      <div style={{ padding: 24 }}>Содержимое модального окна</div>
    </Modal.Body>
  </Modal>
);

export const DynamicHeight: Story<ModalProps> = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <Modal>
      <Modal.Header divided title='Проверка высоты' />
      <Modal.Body onFullScroll={() => action('FULLY SCROLLED')()}>
        <div style={{ padding: '32px' }}>
          {[...Array(count).keys()].map(index => (
            <div
              key={index}
              style={{ padding: 24, marginTop: index ? '16px' : 0, background: '#ddd' }}
              onClick={() => setCount(count + 1)}
            >
              Нажми на меня чтобы добавить немножко контента
            </div>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer divided size='s'>
        <Clean.Group>
          <Clean.Button>Кнопка</Clean.Button>
          <Clean.Button>Ещё кнопка</Clean.Button>
        </Clean.Group>
      </Modal.Footer>
    </Modal>
  );
};

export const WithScroll: Story = () => (
  <Modal size='s' height={360} inPortal>
    <Modal.Header divided title='Проверка прокрутки' />
    <Modal.Body>
      <div style={{ padding: 24 }}>
        {Array(50)
          .fill(0)
          .map((a, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, sed ex odio
              voluptatibus laborum vero.
            </p>
          ))}
      </div>
    </Modal.Body>
  </Modal>
);

export const WithOverlapContent: Story = () => (
  <Modal size='l' inPortal>
    <Modal.Header divided title='Со стрелочками рядом с окном' />
    <Modal.Body>
      <div style={{ padding: 24 }}>
        {Array(50)
          .fill(0)
          .map((a, i) => (
            <p key={i}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, sed ex odio
              voluptatibus laborum vero.
            </p>
          ))}
      </div>
    </Modal.Body>
    <Modal.Overlap>
      <ArrowButton
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: 'calc(100% + 24px)',
        }}
        direction='left'
        onClick={action('Modal arrow click, prev')}
      />
      <ArrowButton
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 'calc(100% + 24px)',
        }}
        direction='right'
        onClick={action('Modal arrow click, next')}
      />
    </Modal.Overlap>
  </Modal>
);
