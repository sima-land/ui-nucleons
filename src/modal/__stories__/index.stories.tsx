import { Story } from '@storybook/react';
import React, { useState } from 'react';
import Modal, { Props } from '..';
import Box from '../../box';
import Button from '../../button';
import Clean from '../../clean-buttons';
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
          onClose={() => toggleModal(false)}

          children={(
            <div style={{ height: 200, padding: 24 }}>
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
});

export const SizeM = Template.bind(null, {
  title: 'Модальное окно',
  withDivideTopBar: true,
  withCloseButton: true,
});

export const SizeL = Template.bind(null, {
  size: 'l',
  title: 'Модальное окно',
  withDivideTopBar: true,
  withCloseButton: true,
});

export const SizeXL = Template.bind(null, {
  size: 'xl',
  title: 'Модальное окно',
  withDivideTopBar: true,
  withCloseButton: true,
});

export const Fullscreen = Template.bind(null, {
  size: 'fullscreen',
  title: 'Модальное окно',
  withDivideTopBar: true,
  withCloseButton: true,
  children: (
    <DesktopLayout>
      <Box margin={6}>
        Содержимое модального окна
      </Box>
    </DesktopLayout>
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
