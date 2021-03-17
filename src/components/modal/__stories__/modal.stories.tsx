import React, { useState } from 'react';
import Modal, { Props } from '..';
import Button from '../../button';
import Clean from '../../clean-buttons';

const Template = (props: Props) => {
  const [opened, toggleModal] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => toggleModal(true)}>
        Показать окно
      </Button>

      {opened && (
        <Modal onClose={() => toggleModal(false)} {...props}>
          <div style={{ width: 400, height: 200, padding: 20 }}>
            <p>Содержимое модального окна</p>
          </div>
        </Modal>
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

export const Primary = Template.bind(null, {
  title: 'Модальное окно',
  withDivideTopBar: true,
  withCloseButton: true,
  topBarProps: { size: 's' },
  footer: (
    <Clean.Group size='s'>
      <Clean.Button>Button</Clean.Button>
      <Clean.Button>Another button</Clean.Button>
    </Clean.Group>
  ),
});

export const WithoutTopBar = Template.bind(null, {
  title: 'Модальное окно',
  withTopBar: false,
});
