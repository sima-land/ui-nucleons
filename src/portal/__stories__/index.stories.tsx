import React, { useState } from 'react';
import { Button } from '../../button';
import { Portal } from '..';

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, .2)',
  },
  modal: {
    width: 320,
    background: '#fff',
    padding: '24px 16px',
    borderRadius: 10,
  },
  title: {
    margin: 0,
  },
};

export default {
  title: 'service/Portal',
  component: Portal,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [isModalOpen, toggleModal] = useState<boolean>(false);

  return (
    <>
      <p>
        Окно будет монтировано в отдельный элемент в конце <code>{'<body />'}</code>
      </p>
      <Button size='s' onClick={() => toggleModal(true)}>
        Открыть окно
      </Button>

      {isModalOpen && (
        <Portal>
          <div style={styles.overlay}>
            <div style={styles.modal}>
              <h2 style={styles.title}>Тестовое окно </h2>
              <p>Монтировано в конце body в специальном div</p>
              <Button size='s' onClick={() => toggleModal(false)}>
                Закрыть
              </Button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}

Primary.storyName = 'Простой пример';
