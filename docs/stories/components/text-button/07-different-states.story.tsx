import { TextButton, TextButtonSize, TextButtonColor } from '@sima-land/ui-nucleons/text-button';
import { useState } from 'react';
import { COLORS } from '@sima-land/ui-nucleons/colors';
import ShareSVG from '@sima-land/ui-quarks/icons/16x16/Filled/Share';
import ShareAndroidSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ShareAndroid';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'Компоненты/TextButton',
  title: 'Различные состояния',
};

export default function DifferentStates() {
  const [size, setSize] = useState<TextButtonSize>('m');
  const [color, setColor] = useState<TextButtonColor>('basic-blue');
  const [state, setState] = useState<string>('default');
  const [asLink, setAsLink] = useState<boolean>(false);
  const [iconPos, setIconPos] = useState<string>('end');
  const [underline, setUnderline] = useState<boolean>(false);

  const IconSVG = size === 's' ? ShareSVG : ShareAndroidSVG;

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Размер',
          bind: [size, setSize],
          options: [
            { value: 's', displayName: 'S' },
            { value: 'm', displayName: 'M' },
          ],
        },
        {
          type: 'select',
          label: 'Цвет',
          bind: [color, setColor],
          options: [
            'basic-blue',
            'basic-gray87',
            'basic-gray38',
            'additional-red',
            'additional-teal',
            'basic-white',
          ],
        },
        {
          type: 'select',
          label: 'Иконка',
          bind: [iconPos, setIconPos],
          options: [
            { value: 'start', displayName: 'В начале' },
            { value: 'end', displayName: 'В конце' },
            { value: 'none', displayName: 'Нет' },
          ],
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
        Поделиться
      </TextButton>
    </Sandbox>
  );
}
