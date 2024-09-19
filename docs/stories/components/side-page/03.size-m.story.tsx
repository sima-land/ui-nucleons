import {
  getResponsiveSidePageProps,
  SidePage,
  SidePageBody,
} from '@sima-land/ui-nucleons/side-page';
import { useState, CSSProperties } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { Panel } from '@sima-land/ui-nucleons/panel';
import { Textarea } from '@sima-land/ui-nucleons/textarea';
import { UploadArea } from '@sima-land/ui-nucleons/upload-area';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';
import { navigationButtons, TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';

export const meta = {
  category: 'Компоненты/SidePage',
  title: 'Размер M',
};

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

export default function SizeM() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать
      </Button>

      {open && (
        <SidePage {...getResponsiveSidePageProps({ size: 'm' })} onClose={() => setOpen(false)}>
          <TopBar
            size='unset'
            divided
            title='Оставить отзыв'
            buttons={navigationButtons({
              onClose: () => setOpen(false),
            })}
          />

          <SidePageBody>
            <div style={styles.root}>
              <Panel type='info' adornmentStart={<InfoSVG />}>
                Обнаружили брак или не нашли часть товара в заказе? Отзыв не решит проблему.
                Оставьте претензию, и мы поможем.
              </Panel>

              <Textarea label='Комментарий' style={{ width: '100%', marginTop: '40px' }} />

              <UploadArea
                title='Загрузите фото'
                description='20 файлов, формат JPG, PNG, GIF'
                style={{ marginTop: '40px' }}
              />
            </div>
          </SidePageBody>

          <BottomBar size='unset' divided style={styles.footer}>
            <Button style={styles.button} viewType='secondary'>
              Отмена
            </Button>
            <Button style={styles.button} viewType='primary'>
              Отправить
            </Button>
          </BottomBar>
        </SidePage>
      )}
    </>
  );
}
