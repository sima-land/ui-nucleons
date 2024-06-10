import { SwitcherRow } from '@sima-land/ui-nucleons/switcher-row';
import { useState } from 'react';
import { Checkbox } from '@sima-land/ui-nucleons/checkbox';
import { RadioButton } from '@sima-land/ui-nucleons/radio-button';
import { Toggle } from '@sima-land/ui-nucleons/toggle';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'Компоненты/SwitcherRow',
  title: 'Различные состояния',
  parameters: {
    layout: 'padded',
  },
};

export default function DifferentStates() {
  const [state, setState] = useState<string>('default');
  const [fieldType, setFieldType] = useState<'Checkbox' | 'Toggle' | 'RadioButton'>('Checkbox');
  const [fieldPosition, setFieldPosition] = useState<'start' | 'end'>('start');
  const [textAlign, setTextAlign] = useState<'left' | 'right'>('left');
  const [fontSize, setFontSize] = useState<'14px' | '16px'>('14px');

  const fieldProps = {
    id: 'example-field',
    failed: state.includes('failed'),
    disabled: state.includes('disabled'),
  };

  return (
    <Sandbox
      controls={[
        {
          label: 'Состояние',
          type: 'select',
          bind: [state, setState],
          options: [
            { value: 'default', displayName: 'По умолчанию' },
            { value: 'failed', displayName: 'Ошибка' },
            { value: 'disabled', displayName: 'Отключено' },
            { value: 'failed+disabled', displayName: 'Ошибка + отключено' },
          ],
        },
        {
          label: 'Поле',
          type: 'select',
          bind: [fieldType, setFieldType],
          options: ['Checkbox', 'Toggle', 'RadioButton'],
        },
        {
          label: 'Позиция поля',
          type: 'select',
          bind: [fieldPosition, setFieldPosition],
          options: [
            { value: 'start', displayName: 'Начало' },
            { value: 'end', displayName: 'Конец' },
          ],
        },
        {
          label: 'Выравнивание текста',
          type: 'select',
          bind: [textAlign, setTextAlign],
          options: [
            { value: 'left', displayName: 'По левому краю' },
            { value: 'right', displayName: 'По правому краю' },
          ],
        },
        {
          label: 'Размер текста',
          hidden: fieldType === 'Toggle',
          type: 'select',
          bind: [fontSize, setFontSize],
          options: ['14px', '16px'],
        },
      ]}
    >
      <SwitcherRow
        fieldPosition={fieldPosition}
        textAlign={textAlign}
        style={{
          maxWidth: '400px',
          margin: 'auto',
          fontSize,
          lineHeight: fontSize === '16px' ? '24px' : '20px',
        }}
      >
        {fieldType === 'Checkbox' && <Checkbox {...fieldProps} />}
        {fieldType === 'Toggle' && <Toggle {...fieldProps} />}
        {fieldType === 'RadioButton' && <RadioButton {...fieldProps} />}
        <SwitcherRow.Label>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet?
        </SwitcherRow.Label>
        <SwitcherRow.Comment>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet?
        </SwitcherRow.Comment>
      </SwitcherRow>
    </Sandbox>
  );
}
