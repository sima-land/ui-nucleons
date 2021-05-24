import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { Modal, Props } from '..';
import { Box } from '../../box';
import Button from '../../button';
import { Clean } from '../../clean-buttons';
import { DesktopLayout } from '../../layout';
import { marginRight } from '../../styling/sizes';

const Template: Story<Props> = props => {
  const [opened, toggleModal] = useState<boolean>(true);

  return (
    <>
      <Button onClick={() => toggleModal(true)}>
        Показать окно
      </Button>

      {opened && (
        <Modal
          withLayer

          onClose={() => toggleModal(false)}

          children={(
            <div style={{ padding: 24 }}>
              Содержимое модального окна
            </div>
          )}

          footer={(
            <Clean.Group size='s'>
              <Clean.Button>Кнопка</Clean.Button>
              <Clean.Button>Ещё кнопка</Clean.Button>
            </Clean.Group>
          )}

          {...props}
        />
      )}

      {[...Array(100).keys()].map(index => (
        <p key={index}>Очень много контента для проверки блокировки прокрутки под окном [{index}]</p>
      ))}
    </>
  );
};

export default {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export const SizeS = Template.bind(null, {
  size: 's',
  title: 'Модальное окно',
  withDivideTopBar: true,
  withCloseButton: true,
  withTopBar: true,
});

export const SizeM = Template.bind(null, {
  title: 'Модальное окно',
  withDivideTopBar: true,
  withCloseButton: true,
  withTopBar: true,
});

export const SizeL = Template.bind(null, {
  size: 'l',
  title: 'Модальное окно',
  withDivideTopBar: true,
  withCloseButton: true,
  withTopBar: true,
});

export const SizeXL = Template.bind(null, {
  size: 'xl',
  title: 'Модальное окно',
  withDivideTopBar: true,
  withCloseButton: true,
  withTopBar: true,
});

export const Fullscreen = Template.bind(null, {
  size: 'fullscreen',
  title: 'Модальное окно',
  withDivideTopBar: true,
  withCloseButton: true,
  withTopBar: true,
  children: (
    <div style={{ height: '100%', background: '#eee' }}>
      <DesktopLayout>
        <Box padding={6}>
          Содержимое модального окна
        </Box>
      </DesktopLayout>
    </div>
  ),
  footer: (
    <DesktopLayout>
      <Box marginY={3} display='flex' justifyContent='end'>
        <Button actionType='secondary' className={marginRight(3)}>
          Кнопка
        </Button>
        <Button>
          Кнопка
        </Button>
      </Box>
    </DesktopLayout>
  ),
});

export const WithoutBars = Template.bind(null, {
  size: 's',
  withDivideTopBar: true,
  withCloseButton: true,
  footer: undefined,
  withTopBar: false,
});

export const WithScroll = Template.bind(null, {
  title: 'Проверка полосы прокрутки',
  size: 's',
  withDivideTopBar: true,
  withCloseButton: true,
  footer: undefined,
  children: (
    <div style={{ padding: 24 }}>
      {Array(50).fill(0).map((a, i) => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, sed ex odio voluptatibus laborum vero.
        </p>
      ))}
    </div>
  ),
});
