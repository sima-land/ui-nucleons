import { WithHint, useTempHint } from '@sima-land/ui-nucleons/with-hint';
import { CSSProperties, useEffect, useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  } satisfies CSSProperties,

  modalContent: {
    position: 'relative',
    padding: 20,
  } satisfies CSSProperties,
} as const;

export default {
  title: 'deprecated/WithHint',
  component: WithHint,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <div style={styles.root}>
      {(['right', 'bottom', 'left', 'top'] as const).map(direction => (
        <WithHint
          key={direction}
          direction={direction}
          hint={
            <>
              Первая строчка.
              <br />И вторая строчка.
            </>
          }
        >
          {(ref, toggle) => (
            <Button
              viewType='secondary'
              ref={ref as any}
              onMouseEnter={() => toggle(true)}
              onMouseLeave={() => toggle(false)}
              style={{ marginBottom: '32px' }}
            >
              Наведи на меня
            </Button>
          )}
        </WithHint>
      ))}
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function AutoCloseHook() {
  const [data, setData] = useState<string>();
  const [bind, toggle] = useTempHint();

  useEffect(() => {
    if (data) {
      toggle(true);
    }
  }, [data, toggle]);

  const fakeFetch = () => {
    setData(`Новый хинт! (${Date.now()})`);
  };

  return (
    <div style={styles.root}>
      <WithHint hint={data} {...bind}>
        {ref => (
          <Button ref={ref as any} onClick={fakeFetch} style={{ marginTop: '48px' }}>
            Нажми на меня
          </Button>
        )}
      </WithHint>
    </div>
  );
}

AutoCloseHook.storyName = 'Утилита: useTempHint';

export function InScrolledParent() {
  const [modalOpened, toggleModal] = useState<boolean>(true);
  const [bind, toggle] = useTempHint();

  return (
    <>
      <div
        style={{
          width: '960px',
          display: 'flex',
          alignItems: 'center',
          height: 'calc(100vh - 100px)',
          margin: '0 auto',
        }}
      >
        <WithHint hint='Проверочный хинт!' direction='right' {...bind}>
          {ref => (
            <Button ref={ref as any} onClick={() => toggleModal(true)}>
              Открыть окно
            </Button>
          )}
        </WithHint>
      </div>

      {modalOpened && (
        <Modal size='s' onClose={() => toggleModal(false)}>
          <TopBar divided title='Тестовое окно' />
          <ModalBody>
            <div style={styles.modalContent}>
              {[...Array(32).keys()].map(i => (
                <p key={i}>Прокрути вниз</p>
              ))}

              <WithHint hint='Проверочный хинт!' direction='right' {...bind}>
                {ref => (
                  <Button ref={ref as any} onClick={() => toggle(true)}>
                    Нажми на меня
                  </Button>
                )}
              </WithHint>

              {[...Array(32).keys()].map(i => (
                <p key={i}>Можешь прокрутить еще</p>
              ))}
            </div>
          </ModalBody>
        </Modal>
      )}
    </>
  );
}

InScrolledParent.storyName = 'Тест: родительский элемент имеет прокрутку';

export function InDocumentWithScroll() {
  const [bind, toggle] = useTempHint();

  return (
    <>
      {[...Array(32).keys()].map(i => (
        <p key={i}>Прокрути вниз</p>
      ))}

      <WithHint hint='Проверочный хинт!' direction='right' {...bind}>
        {ref => (
          <Button ref={ref as any} onClick={() => toggle(true)}>
            Нажми на меня
          </Button>
        )}
      </WithHint>

      {[...Array(32).keys()].map(i => (
        <p key={i}>Можешь прокрутить еще</p>
      ))}
    </>
  );
}

InDocumentWithScroll.storyName = 'Тест: страница имеет прокрутку';
