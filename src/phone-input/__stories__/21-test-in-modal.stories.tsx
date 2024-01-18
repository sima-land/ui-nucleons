import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';
import { useState } from 'react';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';
import { BSL_IGNORE_ATTR } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';
import { LoremIpsum } from '../../../.storybook/utils';
import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/PhoneInput',
  component: PhoneInput,
  parameters: {
    layout: 'padded',
  },
};
export function TestInModal() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {/* для проверки блокировки прокрутки страницы */}
      <LoremIpsum paragraphCount={30} sentenceCount={30} />

      {open && (
        <Modal {...getResponsiveModalProps({ size: 'm' })} onClose={() => setOpen(false)}>
          <TopBar title='Тест' subtitle='PhoneInput внутри Modal' divided />

          <ModalBody withScrollDisable>
            <div style={{ padding: 16 }}>
              <LoremIpsum paragraphCount={10} />

              <PhoneInput
                label='Номер'
                value={value}
                onChange={event => setValue(event.target.value)}
                dropdownProps={{
                  viewportProps: {
                    [BSL_IGNORE_ATTR as any]: true,
                  },
                }}
              />

              <LoremIpsum paragraphCount={10} />
            </div>
          </ModalBody>

          <BottomBar divided>
            <CleanGroup>
              <CleanButton onClick={() => setOpen(false)}>Ясно</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Modal>
      )}
    </>
  );
}

TestInModal.storyName = 'Тест: В модальном окне';
