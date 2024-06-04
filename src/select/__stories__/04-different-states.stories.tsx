import { Select, SelectProps } from '@sima-land/ui-nucleons/select';
import { useState } from 'react';
import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';
import { FieldBlockSize } from '@sima-land/ui-nucleons/field-block';
import { TextButtonSize } from '@sima-land/ui-nucleons/text-button';
import { Sandbox } from '../../../.storybook/utils';

export default {
  title: 'common/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
};

export function DifferentStates() {
  const [value, setValue] = useState<string>('');
  const [opener, setOpener] = useState<'field-block' | 'text-button'>('field-block');
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
          options: [
            { value: 'field-block', displayName: 'FieldBlock' },
            { value: 'text-button', displayName: 'TextButton' },
          ],
          bind: [opener, setOpener],
        },
        {
          type: 'select',
          hidden: opener !== 'field-block',
          label: 'Размер поля',
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
            { value: 'l', displayName: 'L' },
          ],
          bind: [fieldSize as string, setFieldSize],
        },
        {
          type: 'select',
          hidden: opener !== 'text-button',
          label: 'Размер кнопки',
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
          ],
          bind: [buttonSize, setButtonSize],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: [
            { value: 'default', displayName: 'По умолчанию' },
            { value: 'disabled', displayName: 'Отключено' },
          ],
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
