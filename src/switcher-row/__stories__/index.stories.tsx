import React, { useState } from 'react';
import { SwitcherRow } from '..';
import { Sandbox } from '../../../.storybook/utils';
import { Checkbox } from '../../checkbox';
import { InfoText } from '../../info-text';
import { RadioButton } from '../../radio-button';
import { Toggle } from '../../toggle';

export default {
  title: 'common/SwitcherRow',
  component: SwitcherRow,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <SwitcherRow>
      <Checkbox id='example-checkbox' defaultChecked />
      <SwitcherRow.Label>Простой пример</SwitcherRow.Label>
      <SwitcherRow.Comment>Lorem ipsum dolor, sit amet.</SwitcherRow.Comment>
    </SwitcherRow>
  );
}

Primary.storyName = 'Простой пример';

export function WithInfoText() {
  return (
    <SwitcherRow style={{ maxWidth: '400px' }}>
      <Checkbox id='example-checkbox' defaultChecked />
      <SwitcherRow.Label>
        <InfoText onIconClick={e => e.preventDefault()}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae commodi
          quos!
        </InfoText>
      </SwitcherRow.Label>
      <SwitcherRow.Comment>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam?
      </SwitcherRow.Comment>
    </SwitcherRow>
  );
}

WithInfoText.storyName = 'Вместе с InfoText';

export function WithToggle() {
  return (
    <SwitcherRow style={{ maxWidth: '400px' }}>
      <Toggle id='example-toggle' defaultChecked />
      <SwitcherRow.Label>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae commodi quos!
      </SwitcherRow.Label>
      <SwitcherRow.Comment>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam?
      </SwitcherRow.Comment>
    </SwitcherRow>
  );
}

WithToggle.storyName = 'Вместе с Toggle';

export function WithRadioButtons() {
  return (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <SwitcherRow>
        <RadioButton id='example-one' name='example-number' defaultChecked />
        <SwitcherRow.Label>Пункт первый</SwitcherRow.Label>
        <SwitcherRow.Comment>Вот прям первый</SwitcherRow.Comment>
      </SwitcherRow>

      <SwitcherRow>
        <RadioButton id='example-two' name='example-number' />
        <SwitcherRow.Label>Пункт второй</SwitcherRow.Label>
        <SwitcherRow.Comment>Ровно по середине</SwitcherRow.Comment>
      </SwitcherRow>

      <SwitcherRow>
        <RadioButton id='example-three' name='example-number' />
        <SwitcherRow.Label>И пункт третий</SwitcherRow.Label>
        <SwitcherRow.Comment>Но не менее важный</SwitcherRow.Comment>
      </SwitcherRow>
    </div>
  );
}

WithRadioButtons.storyName = 'Вместе с RadioButton';

export function DifferentStates() {
  const [state, setState] = useState<string>('default');
  const [fieldType, setFieldType] = useState<'checkbox' | 'toggle' | 'radio'>('checkbox');
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
          options: ['default', 'failed', 'disabled', 'failed+disabled'],
        },
        {
          label: 'Тип поля',
          type: 'select',
          bind: [fieldType, setFieldType],
          options: ['checkbox', 'toggle', 'radio'],
        },
        {
          label: 'Позиция поля',
          type: 'select',
          bind: [fieldPosition, setFieldPosition],
          options: ['start', 'end'],
        },
        {
          label: 'Выравнивание текста',
          type: 'select',
          bind: [textAlign, setTextAlign],
          options: ['left', 'right'],
        },
        {
          label: 'Размер текста',
          hidden: fieldType === 'toggle',
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
        {fieldType === 'checkbox' && <Checkbox {...fieldProps} />}
        {fieldType === 'toggle' && <Toggle {...fieldProps} />}
        {fieldType === 'radio' && <RadioButton {...fieldProps} />}
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

DifferentStates.storyName = 'Различные состояния';
