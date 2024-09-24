import { Chip } from '@sima-land/ui-nucleons/chip';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Chip',
  title: 'Смена состояния при клике',
};

export default function StateChangeOnClick() {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: 'flex' }}>
      <Chip checked={checked} onClick={() => setChecked(a => !a)}>
        Переключаемый чипс
      </Chip>
    </div>
  );
}
