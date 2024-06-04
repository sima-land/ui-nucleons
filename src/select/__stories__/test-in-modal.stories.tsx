import { Select } from '@sima-land/ui-nucleons/select';
import { useState } from 'react';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { BSL_IGNORE_ATTR } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';
import { LoremIpsum } from '../../../.storybook/utils';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/Select',
  component: Select,
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
          <TopBar title='Тест' subtitle='Select внутри Modal' divided />
          <ModalBody withScrollDisable>
            <div style={{ padding: 16 }}>
              <LoremIpsum paragraphCount={10} />

              <Select
                label='Номер'
                value={value}
                onValueChange={setValue}
                dropdownProps={{
                  viewportProps: {
                    [BSL_IGNORE_ATTR as any]: true,
                  },
                }}
              >
                <DropdownItem>Ноль</DropdownItem>
                <DropdownItem>Один</DropdownItem>
                <DropdownItem>Два</DropdownItem>
                <DropdownItem>Три</DropdownItem>
                <DropdownItem>Четыре</DropdownItem>
                <DropdownItem>Пять</DropdownItem>
                <DropdownItem>Шесть</DropdownItem>
                <DropdownItem>Семь</DropdownItem>
                <DropdownItem>Восемь</DropdownItem>
                <DropdownItem>Девять</DropdownItem>
                <DropdownItem>Десять</DropdownItem>
              </Select>

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
