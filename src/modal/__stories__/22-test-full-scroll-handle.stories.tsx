import { Modal } from '@sima-land/ui-nucleons/modal';
import { useState } from 'react';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export function TestFullScroll() {
  const [enabled, setEnabled] = useState(true);
  const [count, setCount] = useState(0);

  const onFullScroll = () => {
    setCount(c => c + 1);
  };

  return (
    <Modal footerStub={false}>
      <Modal.Body onFullScroll={enabled ? onFullScroll : undefined}>
        <div style={{ padding: '40px' }}>
          <button onClick={() => setEnabled(a => !a)}>{enabled ? 'Выключить' : 'Включить'}</button>
          <p>({enabled ? 'Должен срабатывать' : 'Не должен срабатывать'})</p>

          <p>
            <b>Кол-во полных прокруток: {count}</b>
          </p>

          {Array(64)
            .fill(0)
            .map((zero, index) => (
              <p key={index}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt similique,
                quibusdam nostrum quis excepturi deserunt expedita. Cum eveniet ullam placeat.
              </p>
            ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}

TestFullScroll.storyName = 'Тест: onFullScroll не должен кэшироваться';
