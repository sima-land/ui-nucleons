import { SidePage } from '@sima-land/ui-nucleons/side-page';
import { useState, CSSProperties } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import failSrc from './images/fail.png';

export const meta = {
  category: 'Компоненты/SidePage',
  title: 'Размер S',
};

export default function SizeS() {
  const [shown, toggle] = useState<boolean>(false);

  const styles = {
    root: {
      padding: '0 40px 40px 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    } satisfies CSSProperties,

    image: {
      marginTop: '96px',
    } satisfies CSSProperties,

    title: {
      marginTop: '24px',
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 600,
    } satisfies CSSProperties,

    message: {
      marginTop: '16px',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#9e9e9e',
    } satisfies CSSProperties,
  };

  return (
    <>
      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

      <SidePage size='s' shown={shown} withTransitions onClose={() => toggle(false)}>
        <SidePage.Header divided title='Условия акции' onClose={() => toggle(false)} />

        <SidePage.Body>
          <div style={styles.root}>
            <img src={failSrc} alt='' style={styles.image} />
            <div style={styles.title}>Не удалось открыть условия акции</div>
            <div style={styles.message}>
              Проверьте ваше подключение к сети и попробуйте обновить страницу
            </div>
          </div>
        </SidePage.Body>

        <SidePage.Footer divided style={{ padding: '0 20px' }}>
          <Button style={{ width: '100%' }} onClick={() => toggle(false)}>
            Обновить
          </Button>
        </SidePage.Footer>
      </SidePage>
    </>
  );
}
