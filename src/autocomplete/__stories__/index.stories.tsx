import { Autocomplete, AutocompleteProps } from '@sima-land/ui-nucleons/autocomplete';
import { ChangeEvent, useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { FieldBlockSize } from '@sima-land/ui-nucleons/field-block';
import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { LoremIpsum, Sandbox } from '../../../.storybook/utils';
import { BSL_IGNORE_ATTR } from '@sima-land/ui-nucleons/_internal/page-scroll-lock';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <>
      <Autocomplete label='Выберете браузер'>
        <DropdownItem>Edge</DropdownItem>
        <DropdownItem>Firefox</DropdownItem>
        <DropdownItem>Chrome</DropdownItem>
        <DropdownItem>Opera</DropdownItem>
        <DropdownItem>Safari</DropdownItem>
        <DropdownItem>Arc</DropdownItem>
        <DropdownItem>Yandex.Browser</DropdownItem>
        <DropdownItem>IE</DropdownItem>
      </Autocomplete>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function FilledOnlyList() {
  const browserNames = ['Edge', 'Firefox', 'Chrome', 'Opera', 'Safari'];
  const [value, setValue] = useState('');

  const props: AutocompleteProps = {
    value,
    adornmentEnd: null,
    placeholder: 'Ваш браузер',
    onChange(e: ChangeEvent<HTMLInputElement>) {
      setValue(e.target.value);
    },
    dropdownProps: { style: { width: 320 } },
  };

  return (
    <Autocomplete {...props}>
      {value.length > 0 &&
        browserNames.map((item, index) => <DropdownItem key={index}>{item}</DropdownItem>)}
    </Autocomplete>
  );
}

FilledOnlyList.storyName = 'Список только после ввода значения';

export function DifferentStates() {
  const [value, setValue] = useState<string>('');
  const [size, setSize] = useState<FieldBlockSize>('l');
  const [state, setState] = useState<'default' | 'failed' | 'disabled'>('default');
  const [loading, setLoading] = useState<boolean>(false);

  const autocompleteProps: AutocompleteProps = {
    value,
    size,
    label: 'Номер',
    loading,
    disabled: state === 'disabled',
    failed: state === 'failed',
    onChange: e => setValue(e.target.value),
    caption: 'Это ни на что не повлияет',
  };

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер поля',
          options: ['s', 'm', 'l'],
          bind: [size as string, setSize],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: ['default', 'failed', 'disabled'],
        },
        {
          type: 'toggle',
          label: 'Загрузка',
          bind: [loading, setLoading],
        },
      ]}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Autocomplete {...autocompleteProps}>
          <DropdownItem disabled>Ноль</DropdownItem>
          <DropdownItem>Один</DropdownItem>
          <DropdownItem>Два</DropdownItem>
          <DropdownItem disabled>Три</DropdownItem>
          <DropdownItem>Четыре</DropdownItem>
          <DropdownItem>Пять</DropdownItem>
          <DropdownItem disabled>Шесть</DropdownItem>
        </Autocomplete>
      </div>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

export function TestNativeComparison() {
  const [value, setValue] = useState('');
  const values = ['Edge', 'Firefox', 'Chrome', 'Opera', 'Safari'];

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>
      <Autocomplete size='s' value={value} onChange={onChange}>
        {values.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </Autocomplete>

      <input list='browsers' value={value} onChange={onChange} />
      <datalist id='browsers'>
        {values.map((item, index) => (
          <option key={index} value={item} />
        ))}
      </datalist>
    </div>
  );
}

TestNativeComparison.storyName = 'Тест: Сравнение с нативной реализацией';

export function TestInModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

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
              <CleanButton onClick={() => setOpen(true)}>Ясно</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Modal>
      )}
    </>
  );
}

TestInModal.storyName = 'Тест: В модальном окне';
