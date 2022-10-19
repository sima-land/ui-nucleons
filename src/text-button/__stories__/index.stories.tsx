import React, { useState } from 'react';
import { TextButton, TextButtonSize, TextButtonColor } from '..';
import SettingsSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/settings';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/cross';
import TrashSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/trash';
import { Sandbox } from '../../../.storybook/utils';
import { COLORS } from '../../colors';

export default {
  title: 'common/TextButton',
  component: TextButton,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  function onClick() {
    alert('Да тут и настраивать нечего...');
  }

  return (
    <TextButton size='m' endIcon={SettingsSVG} onClick={onClick}>
      Настроить
    </TextButton>
  );
}

Primary.storyName = 'Простой пример';

export function DifferentStates() {
  const [size, setSize] = useState<TextButtonSize>('m');
  const [color, setColor] = useState<TextButtonColor>('basic-blue');
  const [state, setState] = useState<string>('default');
  const [asLink, setAsLink] = useState<boolean>(false);
  const [iconPos, setIconPos] = useState<string>('end');
  const [underline, setUnderline] = useState<boolean>(false);

  const IconSVG = size === 's' ? CrossSVG : TrashSVG;

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер',
          bind: [size, setSize],
          options: ['s', 'm'],
        },
        {
          type: 'select',
          label: 'Цвет',
          bind: [color, setColor],
          options: ['basic-blue', 'basic-gray87', 'basic-gray38', 'basic-white'],
        },
        {
          type: 'select',
          label: 'Позиция иконки',
          bind: [iconPos, setIconPos],
          options: ['start', 'end', 'none'],
        },
        {
          type: 'select',
          label: 'Состояние',
          bind: [state, setState],
          options: ['default', 'disabled'],
        },
        {
          type: 'toggle',
          label: 'Подчеркивание',
          bind: [underline, setUnderline],
        },
        {
          type: 'toggle',
          label: 'Ссылка',
          bind: [asLink, setAsLink],
        },
      ]}
      areaStyle={{
        background: color === 'basic-white' ? COLORS.get('basic-gray87') : undefined,
      }}
    >
      <TextButton
        size={size}
        color={color}
        underline={underline}
        disabled={state === 'disabled'}
        iconGutter={size === 's' ? 4 : 8}
        startIcon={iconPos === 'start' ? IconSVG : undefined}
        endIcon={iconPos === 'end' ? IconSVG : undefined}
        onClick={() => {
          !asLink && alert('Ничего не изменилось');
        }}
        {...(asLink && {
          as: 'anchor',
          href: 'https://www.sima-land.ru',
          target: '_blank',
        })}
      >
        Удалить
      </TextButton>
    </Sandbox>
  );
}

DifferentStates.storyName = 'Различные состояния';
