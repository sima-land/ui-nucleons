import { Chip, getDeletableChipProps } from '@sima-land/ui-nucleons/chip';

export default {
  title: 'common/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
  },
};

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
