import { SidePage } from '@sima-land/ui-nucleons/side-page';
import { useState, CSSProperties } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { Panel } from '@sima-land/ui-nucleons/panel';
import { Textarea } from '@sima-land/ui-nucleons/textarea';
import { UploadArea } from '@sima-land/ui-nucleons/upload-area';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';

export const meta = {
  category: 'Компоненты/SidePage',
  title: 'Размер M',
  parameters: {
    layout: 'padded',
  },
};

export default function SizeM() {
  const [shown, toggle] = useState<boolean>(false);

  const styles = {
    root: {
      padding: '32px 40px',
      display: 'flex',
      flexDirection: 'column',
    } satisfies CSSProperties,

    footer: {
      padding: '0 40px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    } satisfies CSSProperties,

    button: {
      width: 'calc(50% - 6px)',
    } satisfies CSSProperties,
  };

  return (
    <>
      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

      <SidePage size='m' shown={shown} withTransitions onClose={() => toggle(false)}>
        <SidePage.Header divided title='Оставить отзыв' onClose={() => toggle(false)} />

        <SidePage.Body>
          <div style={styles.root}>
            <Panel type='info' adornmentStart={<InfoSVG />}>
              Обнаружили брак или не нашли часть товара в заказе? Отзыв не решит проблему. Оставьте
              претензию, и мы поможем.
            </Panel>

            <Textarea label='Комментарий' style={{ width: '100%', marginTop: '40px' }} />

            <UploadArea
              title='Загрузите фото'
              description='20 файлов, формат JPG, PNG, GIF'
              style={{ marginTop: '40px' }}
            />
          </div>
        </SidePage.Body>

        <SidePage.Footer divided style={styles.footer}>
          <Button style={styles.button} viewType='secondary'>
            Отмена
          </Button>
          <Button style={styles.button} viewType='primary'>
            Отправить
          </Button>
        </SidePage.Footer>
      </SidePage>
    </>
  );
}
