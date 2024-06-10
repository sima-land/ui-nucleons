import { Chip, getDeletableChipProps } from '@sima-land/ui-nucleons/chip';

export const meta = {
  category: 'Компоненты/Chip',
  title: 'С кнопкой в конце',
  parameters: {
    layout: 'padded',
  },
};

export default function WithEndButton() {
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
