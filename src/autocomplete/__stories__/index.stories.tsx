import { Autocomplete, AutocompleteProps } from '@sima-land/ui-nucleons/autocomplete';
import { ChangeEvent, useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { FieldBlockSize } from '@sima-land/ui-nucleons/field-block';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { ModalFooter } from '@sima-land/ui-nucleons/modal/slots';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { Sandbox } from '../../../.storybook/utils';

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

TestNativeComparison.storyName = 'Тест: сравнение с нативной реализацией';

export function TestInModal() {
  return (
    <Modal>
      <Modal.Header title='Тест' divided />
      <Modal.Body>
        <div
          style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
        >
          {[...Array(10).keys()].map(index => (
            <p key={index}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit
              magnam recusandae, sed nihil autem odit delectus laborum explicabo deserunt!
            </p>
          ))}

          <Autocomplete dropdownProps={{ style: { width: 320 } }}>
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

          {[...Array(10).keys()].map(index => (
            <p key={index}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit
              magnam recusandae, sed nihil autem odit delectus laborum explicabo deserunt!
            </p>
          ))}
        </div>
      </Modal.Body>
      <ModalFooter divided>
        <CleanGroup>
          <CleanButton>Ясно</CleanButton>
        </CleanGroup>
      </ModalFooter>
    </Modal>
  );
}

TestInModal.storyName = 'Тест: в модальном окне';
