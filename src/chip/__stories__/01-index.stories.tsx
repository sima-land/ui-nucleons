import { CSSProperties } from 'react';
import { Chip, getDeletableChipProps } from '@sima-land/ui-nucleons/chip';
import InformationSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';

export default {
  title: 'common/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <div style={{ display: 'flex' }}>
      <Chip>Чипс обычный</Chip>
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function LightTheme() {
  return (
    <div style={{ display: 'flex', gap: '8px', padding: '24px' }}>
      <Chip checked={false} disabled={false}>
        Чипс обычный
      </Chip>

      <Chip disabled checked={false}>
        Чипс отключенный
      </Chip>

      <Chip checked disabled={false}>
        Чипс выбранный
      </Chip>

      <Chip checked disabled>
        Чипс выбранный отключенный
      </Chip>
    </div>
  );
}

LightTheme.storyName = 'Светлая тема';

export function DarkTheme() {
  return (
    <div style={{ display: 'flex', gap: '8px', padding: '24px', background: '#212121' }}>
      <Chip colors='dark' disabled={false} checked={false}>
        Чипс обычный
      </Chip>
      <Chip colors='dark' disabled>
        Чипс отключенный
      </Chip>
      <Chip colors='dark' checked>
        Чипс выбранный
      </Chip>
      <Chip colors='dark' checked disabled>
        Чипс выбранный отключенный
      </Chip>
    </div>
  );
}

DarkTheme.storyName = 'Темная тема';

export function WithEndIcon() {
  const icon = <InformationSVG fill='currentColor' />;

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip endAdornment={icon} checked={false}>
        Чипс обычный
      </Chip>

      <Chip endAdornment={icon} checked>
        Чипс выбранный
      </Chip>
    </div>
  );
}

WithEndIcon.storyName = 'С иконкой в конце';

export function WithEndButton() {
  const onDelete = () => {
    alert('Крестик нажат!');
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip {...getDeletableChipProps({ onDelete })} checked={false}>
        Чипс обычный
      </Chip>

      <Chip {...getDeletableChipProps({ onDelete })} checked>
        Чипс выбранный
      </Chip>
    </div>
  );
}

WithEndButton.storyName = 'С кнопкой в конце';

export function DifferentShapes() {
  return (
    <>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Chip shape='square' checked={false}>
          Чипс обычный
        </Chip>
        <Chip shape='square' checked>
          Чипс выбранный
        </Chip>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <Chip shape='pill' checked={false}>
          Чипс обычный
        </Chip>
        <Chip shape='pill' checked>
          Чипс выбранный
        </Chip>
      </div>
    </>
  );
}

DifferentShapes.storyName = 'Варианты формы';

export function TextOverflow() {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    maxWidth: '280px',
  };

  return (
    <div style={style}>
      <Chip endAdornment={null}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, totam!
      </Chip>

      <Chip endAdornment={<InformationSVG fill='currentColor' />}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, totam!
      </Chip>
    </div>
  );
}

TextOverflow.storyName = 'Переполнение';
