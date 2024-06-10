import { useState } from 'react';
import { Chip, ChipIconButton, ChipAs, ChipShape, ChipColors } from '@sima-land/ui-nucleons/chip';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Cross';
import InformationSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';
import { Sandbox } from '#docs-utils';

export const meta = {
  category: 'Компоненты/Chip',
  title: 'Различные состояния',
};

export default function DifferentStates() {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [chipsAs, setChipsAs] = useState<ChipAs>('span');
  const [shape, setShape] = useState<ChipShape>('square');
  const [colors, setColors] = useState<ChipColors>('light');
  const [adornment, setAdornment] = useState<'Нет' | 'Иконка' | 'Кнопка'>('Нет');
  const [content, setContent] = useState<'Много текста' | 'Мало текста'>('Мало текста');

  let endAdornment;

  switch (adornment) {
    case 'Иконка': {
      endAdornment = <InformationSVG fill='currentColor' />;
      break;
    }
    case 'Кнопка': {
      endAdornment = (
        <ChipIconButton onClick={() => alert('Крестик нажат')}>
          <CrossSVG fill='currentColor' />
        </ChipIconButton>
      );
      break;
    }
  }

  return (
    <Sandbox
      controls={[
        {
          type: 'select',
          label: 'Тип',
          options: ['span', 'anchor', 'button'],
          bind: [chipsAs, setChipsAs],
        },
        {
          type: 'toggle',
          label: 'Checked',
          bind: [checked, setChecked],
        },
        {
          type: 'toggle',
          label: 'Disabled',
          bind: [disabled, setDisabled],
        },
        {
          type: 'select',
          label: 'Форма',
          options: [
            { value: 'square', displayName: 'Square' },
            { value: 'pill', displayName: 'Pill' },
          ],
          bind: [shape, setShape],
        },
        {
          type: 'select',
          label: 'Тема',
          bind: [colors, setColors],
          options: [
            { value: 'light', displayName: 'Светлая' },
            { value: 'dark', displayName: 'Темная' },
          ],
        },
        {
          type: 'select',
          label: 'Контент в конце',
          bind: [adornment, setAdornment],
          options: ['Нет', 'Иконка', 'Кнопка'],
        },
        {
          type: 'select',
          label: 'Содержимое',
          bind: [content, setContent],
          options: ['Мало текста', 'Много текста'],
        },
      ]}
      areaStyle={{
        display: 'flex',
        background: colors === 'dark' ? '#212121' : undefined,
      }}
    >
      <Chip
        checked={checked}
        disabled={disabled}
        as={chipsAs}
        shape={shape}
        colors={colors}
        endAdornment={endAdornment}
        style={{ maxWidth: '240px' }}
        padding={adornment === 'Кнопка' ? 'start' : undefined}
        adornmentGutter={adornment === 'Кнопка' ? 'unset' : undefined}
        {...(chipsAs === 'anchor' ? { href: 'https://sima-land.ru', target: '_blank' } : {})}
      >
        {content === 'Мало текста' && <>Чипс простой</>}

        {content === 'Много текста' && (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perspiciatis labore
            ratione voluptas totam voluptatum, minima maiores ad recusandae doloremque!
          </>
        )}
      </Chip>
    </Sandbox>
  );
}
