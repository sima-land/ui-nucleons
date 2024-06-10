import { Chip } from '@sima-land/ui-nucleons/chip';
import InformationSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';

export const meta = {
  category: 'Компоненты/Chip',
  title: 'С иконкой в конце',
  parameters: {
    layout: 'padded',
  },
};

export default function WithEndIcon() {
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
