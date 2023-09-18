import { Chip, ChipIconButton } from '@sima-land/ui-nucleons/chip';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Cross';
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
    <div style={{ display: 'flex', gap: '16px' }}>
      <Chip>Чипс обычный</Chip>
      <Chip checked>Чипс выбранный</Chip>
    </div>
  );
}

Primary.storyName = 'Простой пример';

export function WithEndIcon() {
  const icon = <InformationSVG fill='currentColor' />;

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Chip endAdornment={icon}>Чипс обычный</Chip>

      <Chip endAdornment={icon} checked>
        Чипс выбранный
      </Chip>
    </div>
  );
}

WithEndIcon.storyName = 'С иконкой в конце';

export function WithEndButton() {
  const button = (
    <ChipIconButton onClick={() => alert('Крестик нажат')}>
      <CrossSVG fill='currentColor' />
    </ChipIconButton>
  );

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Chip endAdornment={button}>Чипс обычный</Chip>

      <Chip endAdornment={button} checked>
        Чипс выбранный
      </Chip>
    </div>
  );
}

WithEndButton.storyName = 'С кнопкой в конце';

export function DifferentShapes() {
  return (
    <>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Chip shape='square'>Чипс обычный</Chip>
        <Chip shape='square' checked>
          Чипс выбранный
        </Chip>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
        <Chip shape='pill'>Чипс обычный</Chip>
        <Chip shape='pill' checked>
          Чипс выбранный
        </Chip>
      </div>
    </>
  );
}

DifferentShapes.storyName = 'Варианты формы';

export function TextOverflow() {
  return (
    <>
      <Chip style={{ maxWidth: '320px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, totam!
      </Chip>
    </>
  );
}

TextOverflow.storyName = 'Переполнение';
