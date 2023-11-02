import {
  Modal,
  ModalBody,
  ModalBottomGap,
  getResponsiveModalProps,
} from '@sima-land/ui-nucleons/modal';
import { useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';
import { useKeydown } from '@sima-land/ui-nucleons/hooks/keydown';
import { LoremIpsum, Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentStates() {
  const [open, setOpen] = useState<boolean>(false);

  const [size, setSize] = useState<any>('m');
  const [header, setHeader] = useState<string>('top-bar');
  const [footer, setFooter] = useState<string>('buttons');

  useKeydown('Escape', () => {
    setOpen(false);
  });

  return (
    <Sandbox
      controls={[
        {
          label: 'Размер',
          type: 'select',
          bind: [size, setSize],
          options: [
            {
              value: 's',
              displayName: 'S',
            },
            {
              value: 'm',
              displayName: 'M',
            },
            {
              value: 'l',
              displayName: 'L',
            },
            {
              value: 'xl',
              displayName: 'XL',
            },
            {
              value: 'fullscreen',
              displayName: 'Fullscreen',
            },
          ],
        },
        {
          label: 'Шапка',
          type: 'select',
          bind: [header, setHeader],
          options: [
            {
              value: 'none',
              displayName: 'Нет',
            },
            {
              value: 'top-bar',
              displayName: 'TopBar',
            },
          ],
        },
        {
          label: 'Подвал',
          type: 'select',
          bind: [footer, setFooter],
          options: [
            {
              displayName: 'Нет',
              value: 'none',
            },
            {
              displayName: 'Кнопки',
              value: 'buttons',
            },
            {
              displayName: 'Прозрачные кнопки',
              value: 'clean-buttons',
            },
            {
              displayName: 'Отступ по гайдам',
              value: 'gap',
            },
          ],
        },
      ]}
    >
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal {...getResponsiveModalProps({ size })} onClose={() => setOpen(false)}>
          {header === 'top-bar' && (
            <TopBar
              size='unset'
              title='Тестовое окно'
              divided
              buttons={navigationButtons({ onClose: () => setOpen(false) })}
            />
          )}

          <ModalBody style={{ padding: '24px' }}>
            <LoremIpsum paragraphCount={32} />
          </ModalBody>

          {footer === 'buttons' && (
            <BottomBar size='unset' divided>
              <div style={{ width: '100%', display: 'flex', gap: '12px', padding: '16px' }}>
                <Button style={{ flexGrow: 1 }} viewType='primary'>
                  Кнопка
                </Button>
                <Button style={{ flexGrow: 1 }} viewType='secondary'>
                  Кнопка
                </Button>
              </div>
            </BottomBar>
          )}

          {footer === 'clean-buttons' && (
            <BottomBar size='unset' divided>
              <CleanGroup>
                <CleanButton>Кнопка</CleanButton>
                <CleanButton>Кнопка</CleanButton>
              </CleanGroup>
            </BottomBar>
          )}

          {footer === 'gap' && <ModalBottomGap />}
        </Modal>
      )}
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';
