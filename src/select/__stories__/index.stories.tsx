import React, { useState } from 'react';
import { Select, SelectProps } from '..';
import { Sandbox } from '../../../.storybook/utils';
import { Clean } from '../../clean-buttons';
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
          label: 'Загрузка',
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
      <Select opener={<Select.FieldBlock size='s' />}>
        <DropdownItem>Один</DropdownItem>
        <DropdownItem>Два</DropdownItem>
        <DropdownItem>Три</DropdownItem>
      </Select>

      <select style={{ width: 240 }}>
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

  const LotOfText = () => (
    <div>
      {[...Array(10).keys()].map(index => (
        <p key={index}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit magnam
          recusandae, sed nihil autem odit delectus laborum explicabo deserunt!
        </p>
      ))}
    </div>
  );

  return (
    <Modal>
      <Modal.Header title='Тест' divided />
      <Modal.Body>
        <div style={{ padding: 16 }}>
          <LotOfText />

          <Select value={value} onValueChange={setValue} dropdownProps={{ style: { width: 320 } }}>
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

          <LotOfText />
        </div>
      </Modal.Body>
      <Modal.Footer divided>
        <Clean.Group>
          <Clean.Button>Ясно</Clean.Button>
        </Clean.Group>
      </Modal.Footer>
    </Modal>
  );
}

TestInModal.storyName = 'Тест: в модальном окне';
