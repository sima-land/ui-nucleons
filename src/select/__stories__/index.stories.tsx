import React, { useState } from 'react';
import { Select, SelectProps } from '..';
import { LargePage, LoremIpsum, Sandbox } from '../../../.storybook/utils';
import { CleanGroup, CleanButton } from '../../clean-buttons';
import { DropdownItem } from '../../dropdown-item';
import { FieldBlockSize } from '../../field-block';
import { Modal } from '../../modal';
import { TextButtonSize } from '../../text-button';

type SelectOpener = 'field-block' | 'text-button';

export default {
  title: 'common/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select label='Номер' value={value} onValueChange={setValue}>
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function AsFieldBlock() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select
        label='Номер'
        value={value}
        onValueChange={setValue}
        opener={<Select.FieldBlock size='s' caption='Это ни на что не повлияет' />}
        dropdownProps={{ style: { width: '320px' } }}
      >
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </>
  );
}

AsFieldBlock.storyName = 'Кастомизация поля';

export function AsTextButton() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select
        label='Номер'
        value={value}
        onValueChange={setValue}
        opener={<Select.TextButton size='m' />}
        dropdownProps={{ style: { width: '200px' } }}
      >
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </>
  );
}

AsTextButton.storyName = 'Кастомизация кнопки';

export function DifferentStates() {
  const [value, setValue] = useState<string>('');
  const [opener, setOpener] = useState<SelectOpener>('field-block');
  const [fieldSize, setFieldSize] = useState<FieldBlockSize>('l');
  const [buttonSize, setButtonSize] = useState<TextButtonSize>('m');
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<'default' | 'disabled'>('default');

  const selectProps: SelectProps = {
    value,
    onValueChange: setValue,
    opener:
      opener === 'field-block' ? (
        <Select.FieldBlock size={fieldSize} caption='Простой пример' />
      ) : (
        <Select.TextButton size={buttonSize} />
      ),
    label: 'Номер',
    loading,
    disabled: state === 'disabled',
    dropdownProps: {
      style: {
        width: '320px',
      },
    },
  };

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Открывающий элемент',
          options: ['field-block', 'text-button'],
          bind: [opener, setOpener],
        },
        {
          type: 'select',
          hidden: opener !== 'field-block',
          label: 'Размер поля',
          options: ['s', 'm', 'l'],
          bind: [fieldSize as string, setFieldSize],
        },
        {
          type: 'select',
          hidden: opener !== 'text-button',
          label: 'Размер кнопки',
          options: ['s', 'm'],
          bind: [buttonSize, setButtonSize],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: ['default', 'disabled'],
        },
        {
          type: 'toggle',
          label: 'Загрузка списка',
          bind: [loading, setLoading],
        },
      ]}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Select {...selectProps}>
          <DropdownItem disabled>Ноль</DropdownItem>
          <DropdownItem>Один</DropdownItem>
          <DropdownItem>Два</DropdownItem>
          <DropdownItem disabled>Три</DropdownItem>
          <DropdownItem>Четыре</DropdownItem>
          <DropdownItem>Пять</DropdownItem>
          <DropdownItem disabled>Шесть</DropdownItem>
        </Select>
      </div>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';

export function TestNativeCompare() {
  return (
    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Select defaultValue='Один' opener={<Select.FieldBlock size='s' />}>
        <DropdownItem size='s'>Один</DropdownItem>
        <DropdownItem size='s'>Два</DropdownItem>
        <DropdownItem size='s'>Три</DropdownItem>
      </Select>

      <select style={{ width: 240 }} defaultValue='Один'>
        <option>Один</option>
        <option>Два</option>
        <option>Три</option>
      </select>
    </div>
  );
}

TestNativeCompare.storyName = 'Тест: сравнение с нативной реализацией';

export function TestAllDisabled() {
  return (
    <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Select opener={<Select.FieldBlock size='s' />}>
        <DropdownItem disabled>Один</DropdownItem>
        <DropdownItem disabled>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
      </Select>

      <select style={{ width: 240 }}>
        <option disabled>Один</option>
        <option disabled>Два</option>
        <option disabled>Три</option>
      </select>
    </div>
  );
}

TestAllDisabled.storyName = 'Тест: Все опции недоступны';

export function TestInModal() {
  const [value, setValue] = useState<string>('');

  return (
    <Modal>
      <Modal.Header title='Тест' subtitle='Select внутри Modal' divided />
      <Modal.Body>
        <div style={{ padding: 16 }}>
          <LoremIpsum paragraphCount={10} />

          <Select
            label='Номер'
            value={value}
            onValueChange={setValue}
            dropdownProps={{ style: { width: 320 } }}
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
      </Modal.Body>
      <Modal.Footer divided>
        <CleanGroup>
          <CleanButton>Ясно</CleanButton>
        </CleanGroup>
      </Modal.Footer>
    </Modal>
  );
}

TestInModal.storyName = 'Тест: в модальном окне';

export function TestFocus() {
  const [value, setValue] = useState<string>('');

  return (
    <LargePage>
      <Select label='Номер' value={value} onValueChange={setValue}>
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </LargePage>
  );
}

TestFocus.storyName = 'Тест: фокусировка';

export function TestBlockOverflow() {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <Select label='Номер' value={`${value} `.repeat(20).trim()} onValueChange={setValue}>
        <DropdownItem>Ноль</DropdownItem>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem disabled>Три</DropdownItem>
        <DropdownItem>Четыре</DropdownItem>
        <DropdownItem>Пять</DropdownItem>
        <DropdownItem>Шесть</DropdownItem>
      </Select>
    </>
  );
}

TestBlockOverflow.storyName = 'Тест: переполнение блока';
