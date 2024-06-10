import { Link, LinkProps } from '@sima-land/ui-nucleons/link';
import { CSSProperties } from 'react';

export const meta = {
  category: 'Компоненты/Link',
  title: 'Различные цвета',
  parameters: {
    layout: 'padded',
  },
};

export default function DifferentColors() {
  const colors: Array<Required<LinkProps>['color']> = [
    'basic-blue',
    'basic-gray87',
    'basic-gray38',
    'additional-red',
    'additional-teal',
    'basic-white',
  ];

  const onClick = () => {
    alert('По ссылке даже кликать можно, вау!');
  };

  const styles: Record<'root' | 'item', CSSProperties> = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      fontSize: 16,
    },
    item: {
      display: 'flex',
      gap: 32,
      padding: 20,
    },
  };

  return (
    <div style={styles.root}>
      {colors.map(color => (
        <div
          key={color}
          style={{
            ...styles.item,
            background: color === 'basic-white' ? '#000' : '#fff',
          }}
        >
          <Link color={color} href='https://ya.ru'>
            Ссылка
          </Link>

          <Link color={color} pseudo onClick={onClick}>
            Псевдо-ссылка
          </Link>

          <Link color={color} pseudo disabled onClick={onClick}>
            Псевдо-ссылка (disabled)
          </Link>
        </div>
      ))}
    </div>
  );
}
