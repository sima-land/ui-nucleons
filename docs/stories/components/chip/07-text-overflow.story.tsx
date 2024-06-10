import { CSSProperties } from 'react';
import { Chip } from '@sima-land/ui-nucleons/chip';
import InformationSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Information';

export const meta = {
  category: 'Компоненты/Chip',
  title: 'Переполнение',
};

export default function TextOverflow() {
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
