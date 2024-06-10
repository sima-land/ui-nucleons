import { Autocomplete } from '@sima-land/ui-nucleons/autocomplete';
import { useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { BSL_IGNORE_ATTR } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { LoremIpsum } from '#docs-utils';

export const meta = {
  title: 'Тест: в модальном окне',
  category: 'Компоненты/Autocomplete',
};

export default function TestInModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {/* для проверки блокировки прокрутки страницы */}
      <LoremIpsum paragraphCount={30} sentenceCount={30} />

      {open && (
        <Modal {...getResponsiveModalProps({ size: 'm' })} onClose={() => setOpen(false)}>
          <TopBar title='Тест' subtitle='Autocomplete внутри Modal' divided />
          <ModalBody withScrollDisable>
            <div style={{ padding: 16 }}>
              <LoremIpsum paragraphCount={10} />

              <Autocomplete
                placeholder='Номер'
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
              </Autocomplete>

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
